<template>
    <div class="sepet-container">
      <h1 class="text-2xl font-bold mb-4">Sepetiniz</h1>
      <div v-if="cartItems.length > 0">
        <div class="row">
            <ul class="col-8">
            <li v-for="item in cartItems" :key="item.id" class="sepet-item">
                
                <div class="row" style="font-size: 15px;font-style: inherit;font-family: inherit; align-items: center;">
                    <div class="col-2" style="max-width: 100px; min-width: 100px;"><img :src=item.resim></div>
                    <div class="col-4"><div class="urun-baslik">{{ item.title }}</div></div>
                    <div class="col-2"><div class="urun-fiyat">{{ (item.price/100).toFixed(2) }} TL</div></div>
                    <div class="col-2"><div class="urun-adet">Adet: {{ item.quantity }}</div></div>
                    <div class="col-2"><button @click="removeItem(item.id)" class="urun-sil">Sil</button></div>
                </div> 
                <!-- <div class="sepet-urun">
                <img :src=item.resim>
                <div class="urun-baslik">{{ item.title }}</div>
                <div class="urun-fiyat">{{ (item.price/100).toFixed(2) }} TL</div>
                <div class="urun-adet">Adet: {{ item.quantity }}</div>
                <button @click="removeItem(item.id)" class="urun-sil">Sil</button>
                </div> -->

            </li>
            </ul>
            <div class="col-4">
                <div class="sepet-toplam">
                    <strong>Toplam Fiyat: {{ totalPrice }} TL</strong>
                </div>
            </div>
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
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  

  .urun-baslik, .urun-fiyat, .urun-adet {
  
  white-space: nowrap; /* Yazının tek satırda olmasını sağla */
  text-overflow: ellipsis; /* Taşan yazıyı "..." ile göster */
  }

  .urun-sil {
    color: red;
    background: none;
    border: none;
    cursor: pointer;
    margin-left: auto;
  }
  
  .sepet-toplam {
    margin-top: 20px;
    font-size: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
  }
  </style>
  

