<template>
    <div>
      <label for="menu">Component Seç:</label>
      <select id="menu" v-model="selectedKey">
        <option v-for="(label, key) in componentLabels" :key="key" :value="key">
          {{ label }}
        </option>
      </select>
  
      <div class="component-container">
        <!-- Seçilen bileşeni göster -->
        <component :is="components[selectedKey]" />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // Tüm bileşenleri içeri aktar
  import ComponentA from '@/components/headerComponent.vue';
  import ComponentB from '@/components/ustmenuComponent.vue';
  import ComponentC from '@/components/carouselComponent.vue';
  import ComponentD from '@/components/ustbannerComponent.vue';
  import ComponentF from '@/components/kayanUrunComponent.vue';
  import ComponentG from '@/components/listtabComponent.vue';
  import ComponentH from '@/components/altbannerComponent.vue';
  import ComponentI from '@/components/alisverisKartComponent.vue';
  import ComponentJ from '@/components/uyeGirisi.vue';
  import ComponentK from '@/components/filterMenu.vue';
  import ComponentL from '@/components/footerComponent.vue';
  
  // Bileşenleri bir nesnede sakla
  const components = {
    ComponentA,
    ComponentB,
    ComponentC,
    ComponentD,
    ComponentF,
    ComponentG,
    ComponentH,
    ComponentI,
    ComponentJ,
    ComponentK,
    ComponentL,
  };
  
  // Bileşen adlarının kullanıcıya gösterilecek versiyonları
  const componentLabels = {
    ComponentA: 'Header Component',
    ComponentB: 'Üst Menü',
    ComponentC: 'Carousel',
    ComponentD: 'Üst Banner',
    ComponentF: 'Kayan Ürünler',
    ComponentG: 'Liste Sekmesi',
    ComponentH: 'Alt Banner',
    ComponentI: 'Alışveriş Kartı',
    ComponentJ: 'Üye Girişi',
    ComponentK: 'Filtre Menüsü',
    ComponentL: 'Footer',
  };
  
  // Varsayılan seçili bileşen
  const selectedKey = ref<keyof typeof components>('ComponentA');
  </script>
  
  <style scoped>
  .component-container {
    margin-top: 20px;
  }
  </style>
  