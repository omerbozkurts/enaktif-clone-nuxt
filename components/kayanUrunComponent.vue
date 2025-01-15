<template>
   <div class="kayan-urun-container">
        <div class="kayan-urun-yazi">
            <span>Haftanın En Çok Satan Ürünlerini Sizin İçin Seçtik</span>
            <div class="slider-controls">
                <button @click="previousSlide" class="slider-arrow left-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_47_1181)">
                                <path d="M8.99998 12.0001L13.243 7.75708L14.657 9.17208L11.828 12.0001L14.657 14.8281L13.243 16.2431L8.99998 12.0001Z" fill="black"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_47_1181">
                                    <rect width="24" height="24" fill="white" transform="translate(24) rotate(90)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                </button>
                <button @click="nextSlide" class="slider-arrow right-arrow"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_47_1177)">
                                <path d="M15 11.9999L10.757 16.2429L9.34302 14.8279L12.172 11.9999L9.34302 9.17192L10.757 7.75692L15 11.9999Z" fill="black"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_47_1177">
                                    <rect width="24" height="24" fill="white" transform="translate(0 24) rotate(-90)"></rect>
                                </clipPath>
                            </defs>
                        </svg></button>
            </div>
        </div>
        <div class="slider-container">
            <div class="slider" ref="sliderRef">
                
                    <AlisverisKartComponent
                    v-for="urun in urunler.filter((urun) => urun.kitapId<9)"
                    :urunId="urun.kitapId"
                    :resim="urun.kitapResim"
                    :urun-ismi="urun.kitapIsim"
                    :ilk-fiyat="urun.normalFiyat"
                    :indirim-orani="urun.indirimMiktari"
                    :indirimli-fiyat="urun.indirimliFiyat"
                    />
            </div>
        </div>
            
    
        
   </div>
</template>

<style>
.kayan-urun-container{
    margin-top: 80px;
    padding-left: 15px;
    padding-right: 15px;
}

.kayan-urun-yazi{
    display: flex;
    justify-content: space-between; /* Yazı ve oklar arasında boşluk bırak */
    align-items: center;
    color: #000;
    font-weight: 400;
    line-height: calc(var(--font-size-36) + 8px);
    font-size: var(--font-size-36);
    margin-bottom: var(--spacer-15);
}

.slider-container{
    position: relative;
    max-width: 100%;
    height: auto;
    overflow: hidden;
}

.slider{
    display: flex;
    transition: transform 0.8s ease-in-out;
}

.slider-controls {
    display: flex;
    background: transparent;
}

.slider-arrow{
    width: 48px;
    height: 40px;
    border: none;
    z-index: 2;
    cursor: pointer;
    font-size: 12px; 
    background-color: #F9F9F9;
    display:flex;
    align-items: center;
    justify-content: center;
}

.left-arrow{
    border-radius: 50px 0 0 50px;
}

.right-arrow{
    border-radius: 0 50px 50px 0;
}

.slider-arrow:hover {
    background-color: #e0e0e0;
}
</style>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useNuxtApp } from "#app";
import { collection, getDocs, Firestore } from "firebase/firestore";

const sliderRef = ref<HTMLDivElement | null>(null);
const slideWidth = 380; // Kart genişliği (px)
const visibleSlides = 4; // Ekranda görünecek kart sayısı
const slideStep = 4; // Her kaydırmada geçilecek kart sayısı
const slideCount = 8; // Toplam kart sayısı
const autoScrollInterval = 3000; // Otomatik kaydırma süresi (ms)
const status = ref<string | null>(null);
const urunler = ref<any[]>([]);

let currentIndex = 0;
let intervalId: ReturnType<typeof setInterval> | null = null;

const updateSlider = (index: number) => {
    if (sliderRef.value) {
        sliderRef.value.style.transform = `translateX(-${index * slideWidth}px)`;
    }
};

const startAutoScroll = () => {
    intervalId = setInterval(() => {
        nextSlide();
    }, autoScrollInterval);
};

const stopAutoScroll = () => {
    if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
    }
};

const nextSlide = () => {
    currentIndex += slideStep;
    if (currentIndex >= slideCount) {
        currentIndex = 0; // Döngüsel kaydırma
    }
    updateSlider(currentIndex);
};

const previousSlide = () => {
    currentIndex -= slideStep;
    if (currentIndex < 0) {
        currentIndex = Math.max(0, slideCount - visibleSlides); // En başa döner
    }
    updateSlider(currentIndex);
};

onMounted(async() => {
    startAutoScroll();
    const nuxtApp = useNuxtApp();
    const db = nuxtApp.$firestore as Firestore;

    try {
      const colRef = collection(db, "urunlerVeri"); // Firebase koleksiyon adı
      const querySnapshot = await getDocs(colRef);
  
      // Verileri formatlıyoruz
      urunler.value = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Firebase tarafından atanmış benzersiz ID
        ...doc.data(),
      }));
  
      status.value = "Veri Başarıyla Çekildi";
    } catch (error) {
      console.error("Veri Çekilirken Hata Oluştu:", error);
      status.value = "Veri çekilirken hata oluştu. Daha fazla bilgi için console'u kontrol edin.";
    }
});

onUnmounted(() => {
    stopAutoScroll();
});
</script>
