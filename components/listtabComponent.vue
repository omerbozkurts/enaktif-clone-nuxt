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
            <div v-if="currentTab === 1" class="sekme-urun"></div>
            <div v-if="currentTab === 2" class="sekme-urun"></div>
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
import { ref } from 'vue';

const tabs = [
{ name: "ÖNE ÇIKAN MARKA" },
{ name: "EN YENİ" },
{ name: "EN UCUZ" }
];

const currentTab = ref<number>(0);

const switchTab = (index: number) => {
currentTab.value = index;
};
</script>
