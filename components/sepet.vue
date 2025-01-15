<template>
    <div class="sepet-container">
      <h1 class="text-2xl font-bold mb-4">Sepetiniz</h1>
      <div v-if="cartItems.length > 0">
        <ul>
          <li v-for="item in cartItems" :key="item.id" class="sepet-item">
            <div class="sepet-urun">
              <img :src=item.resim>
              <span class="urun-baslik">{{ item.title }}</span>
              <span class="urun-fiyat">{{ (item.price/100).toFixed(2) }} TL</span>
              <span class="urun-adet">Adet: {{ item.quantity }}</span>
              <button @click="removeItem(item.id)" class="urun-sil">Sil</button>
            </div>
          </li>
        </ul>
        <div class="sepet-toplam">
          <strong>Toplam Fiyat: {{ totalPrice }} TL</strong>
        </div>
      </div>
      <div v-else>
        <p>Sepetiniz boş.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import { useCartStore } from '@/stores/sepet';
  
  const cartStore = useCartStore();
  
  // Store'daki veriyi alıyoruz
  const cartItems = computed(() => cartStore.items); 
  const totalPrice = computed(() => cartStore.totalPrice);
  // Bir ürünü sepetten kaldırma işlemi
  function removeItem(itemId: string) {
    cartStore.removeFromCart(itemId);
  }
  </script>
  
  <style scoped>
  .sepet-container {
    margin: 20px;
  }
  
  .sepet-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  .sepet-urun{
    max-width: 100px;
  }

  .urun-sil {
    color: red;
    background: none;
    border: none;
    cursor: pointer;
  }
  
  .sepet-toplam {
    margin-top: 20px;
    font-size: 18px;
  }
  </style>
  

