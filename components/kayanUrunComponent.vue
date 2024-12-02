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
                
                <AlisverisKartComponent resim="/urunler/scrikss-proxi-1-2-mm-yesil-tukenmez-kalem-22_min.webp" 
                    urun-ismi="Scrikss Proxi 1.2 mm Yeşil Tükenmez Kalem" ilk-fiyat="45.00" indirim-orani="30" indirimli-fiyat="31.50"
                ></AlisverisKartComponent>
                <AlisverisKartComponent resim="/urunler/writech-w-0171-pembe-mavi-govde-0-7-mm-mavi-jel-kalem-11_min.webp" 
                    urun-ismi="Writech W-0171 Mor Mavi Gövde 0.7 mm Mavi Jel Kalem" ilk-fiyat="64.00" indirim-orani="15" indirimli-fiyat="54.40"
                ></AlisverisKartComponent>
                <AlisverisKartComponent resim="/urunler/pelikan-490-pastel-pembe-fosforlu-kalem-111_min.webp" 
                    urun-ismi="Pelikan 490 Pastel Pembe Fosforlu Kalem" ilk-fiyat="50.00" indirim-orani="25" indirimli-fiyat="37.50"
                ></AlisverisKartComponent>
                <AlisverisKartComponent resim="/urunler/pin-12-mmx33-m-ofis-bandi-11_min.webp" 
                    urun-ismi="Pin 12 mm*33 m Ofis Bandı" ilk-fiyat="14.00" indirim-orani="35" indirimli-fiyat="9.10"
                ></AlisverisKartComponent>
                <AlisverisKartComponent resim="/urunler/vinson-fashion-a26-papatya-0-7-mm-mavi-jel-kalem-11_min.webp" 
                    urun-ismi="Vinson Fashion A26 Papatya 0.7 mm Mavi Jel Kalem" ilk-fiyat="52.00" indirim-orani="25" indirimli-fiyat="39.00"
                ></AlisverisKartComponent>
                <AlisverisKartComponent resim="/urunler/rubenis-okul-etiket-1_min.webp" 
                    urun-ismi="Rubenis 3'lü Kırmızı Okul Etiketi" ilk-fiyat="25.00" indirim-orani="40" indirimli-fiyat="15.00"
                ></AlisverisKartComponent>
                <AlisverisKartComponent resim="/urunler/pelikan-490-pastel-mor-fosforlu-kalem-11_min.webp" 
                    urun-ismi="Pelikan 490 Pastel Mor Fosforlu Kalem" ilk-fiyat="50.00" indirim-orani="25" indirimli-fiyat="37.50"
                ></AlisverisKartComponent>
                <AlisverisKartComponent resim="/urunler/kr-akademi-tyt-vip-fizik-soru-bankasi_min.webp" 
                    urun-ismi="KR Akademi TYT Vip Fizik Soru Bankası" ilk-fiyat="249.00" indirim-orani="20" indirimli-fiyat="199.20"
                ></AlisverisKartComponent>
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

const sliderRef = ref<HTMLDivElement | null>(null);
const slideWidth = 380; // Kart genişliği (px)
const visibleSlides = 4; // Ekranda görünecek kart sayısı
const slideStep = 4; // Her kaydırmada geçilecek kart sayısı
const slideCount = 8; // Toplam kart sayısı
const autoScrollInterval = 3000; // Otomatik kaydırma süresi (ms)

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

onMounted(() => {
    startAutoScroll();
});

onUnmounted(() => {
    stopAutoScroll();
});
</script>
