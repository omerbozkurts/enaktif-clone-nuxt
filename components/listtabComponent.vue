<template>
  <div class="list-tab">
      <div class="list-tab-container">
          <div class="tab-buttons">
              <button 
                  v-for="(tab, index) in tabs" 
                  :key="index" 
                  :class="['tab-button', { active: currentTab === index }]" 
                  @click="switchTab(index)"
                  >
                  {{ tab.name }}
              </button>
          </div>   
          <div class="sekme-icerik">
            <div v-if="currentTab === 0" class="sekme-urun">
              <AlisverisKartComponent
                    v-for="urun in urunler.filter((urun) => urun.kitapId>8 && urun.kitapId<17)"
                    :urunId="urun.kitapId"
                    :resim="urun.kitapResim"
                    :urun-ismi="urun.kitapIsim"
                    :ilk-fiyat="urun.normalFiyat"
                    :indirim-orani="urun.indirimMiktari"
                    :indirimli-fiyat="urun.indirimliFiyat"
                    />
            </div>
            <div v-if="currentTab === 1" class="sekme-urun">
              <AlisverisKartComponent
                    v-for="urun in urunler.filter((urun) => urun.kitapId>16 && urun.kitapId<25)"
                    :urunId="urun.kitapId"
                    :resim="urun.kitapResim"
                    :urun-ismi="urun.kitapIsim"
                    :ilk-fiyat="urun.normalFiyat"
                    :indirim-orani="urun.indirimMiktari"
                    :indirimli-fiyat="urun.indirimliFiyat"
                    /> 
            </div>
            <div v-if="currentTab === 2" class="sekme-urun">
              <AlisverisKartComponent
                    v-for="urun in urunler.filter((urun) => urun.kitapId>24 && urun.kitapId<33)"
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
  </div>
</template>

<style>
.list-tab{
  background-color: #F9F9F9;
  padding: var(--spacer-20) 0 var(--spacer-12);
  margin-bottom: var(--spacer-20);
}

.list-tab-container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  
}


.tab-buttons{
  display: flex;
  justify-content: center;
  gap: 20px; 
  margin-bottom: 50px;
  align-items: center;
}

.tab-button {
  position: relative;
  display: block;
  color: #000;
  font-weight: 600;
  background-color: #FFF;
  border: 1px solid #E5E5E5;
  line-height: calc(var(--font-size-16) + 4px);
  font-size: var(--font-size-16);
  text-align: center;
  padding: var(--spacer-4) var(--spacer-8);
}

.tab-button.active {
  background-color: #ff6000; 
  color: white;
  font-weight: bold;
  border-color: #ff6000;
}

.tab-buttons::before,
.tab-buttons::after {
  content: "";
  width: 100px;
  height: 2px;
  background-color: #000;
  margin-right: var(--spacer-8);
  margin-left: var(--spacer-8);
}

.sekme-icerik{
 max-width: 100%;
 height: auto;
}

.sekme-urun{
  display: grid;
  grid-template-columns: repeat(4, 1fr); 
  width: 100%; 
  margin: 0 auto; 
}

</style>

<script lang="ts" setup>
import { ref,onMounted } from 'vue';
import { useNuxtApp } from "#app";
import { collection, getDocs, Firestore } from "firebase/firestore";

const status = ref<string | null>(null);
const urunler = ref<any[]>([]);

const tabs = [
{ name: "ÖNE ÇIKAN MARKA" },
{ name: "EN YENİ" },
{ name: "EN UCUZ" }
];

const currentTab = ref<number>(0);

const switchTab = (index: number) => {
currentTab.value = index;
};


onMounted(async () => {
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

</script>
