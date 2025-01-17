<template>
  <div v-if="isVisible" class="popup">
    <div class="popup-content">
      <p>{{ message }}</p>
      <button @click="closePopup">Tamam</button>
    </div>
  </div>
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
                    <div class="col-2"><div class="urun-adet">
                      <button @click="decrementQuantity(item.id)" :disabled="item.quantity <= 1" class="sepet-miktar-buton">-</button>
                      Adet: {{ item.quantity }}
                      <button @click="incrementQuantity(item.id)" class="sepet-miktar-buton">+</button>
                      </div>
                    </div>
                    <div class="col-2"><button @click="removeItem(item.id)" class="urun-sil">Sil</button></div>
                </div> 
            </li>
            </ul>
            <div class="col-4">
              <div class="sepet-sag-kapsayici">
                  <strong>Merhaba, {{ userStore.firstName }} </strong>
                  <div class="sepet-toplam">
                    <strong>Toplam Fiyat: {{ totalPrice }} TL</strong>
                  </div>
                  <button class="satin-al-buton" @click="satinAl">Satın Al</button>
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
  import { useUserStore } from '@/stores/userstore';
  
  const cartStore = useCartStore();
  const userStore = useUserStore();
  
  const isVisible = ref(false); // Popup görünürlüğü
  const message = ref(''); // Gösterilecek mesaj

  // Store'daki veriyi alıyoruz
  const cartItems = computed(() => cartStore.items); 
  const totalPrice = computed(() => cartStore.totalPrice);
  // Bir ürünü sepetten kaldırma işlemi
  function removeItem(itemId: string) {
    cartStore.removeFromCart(itemId);
  }

    function incrementQuantity(itemId: string) {
    cartStore.updateItemQuantity(itemId, 1); // +1 miktar artırır
  }

  // Ürün miktarını azaltma
  function decrementQuantity(itemId: string) {
    cartStore.updateItemQuantity(itemId, -1); // -1 miktar azaltır
  }

  function clearCart() {
    cartStore.clearCart();
  }

  function showPopup(newMessage: string) {
    message.value = newMessage;
    isVisible.value = true;
  }

  function closePopup() {
    isVisible.value = false;
  }

  function satinAl() {
    if (cartItems.value.length === 0) {
      showPopup('Sepetiniz boş. Lütfen önce ürün ekleyin.');
      return;
    }
    showPopup(`Satın alma işlemi tamamlandı. Toplam tutar: ${totalPrice.value} TL`);
    clearCart();
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
    color:#ff6000;
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

  .sepet-miktar-buton{
    width: 25px;
    height: 25px;
    padding: 0%;
    font-weight: bolder;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #F9F9F9;
    color:#ff6000;
    border-radius: 50%;
    border-color: #ff6000;
    border: 0px;
  }

  .sepet-miktar-buton:hover{
    background-color: #e0e0e0;
  }

  .satin-al-buton{
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    line-height: calc(var(--font-size-16) + 4px);
    font-size: var(--font-size-16);
    border: 1px solid #000;
    height: 56px;
    background-color: #FFF;
    transition: all 0.2s linear;
    color: #000;
    width: 60%;
  }

  .satin-al-buton:hover{
    border: 1px solid #ff6000;
    background-color: #ff6000;
    color: #FFF;
  }

  .sepet-sag-kapsayici {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  gap: 20px; 
  text-align: center;
  background-color:  #F9F9F9;;
  }

  .popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.popup-content p {
  margin-bottom: 15px;
}

.popup-content button {
  background-color: #ff6000;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.popup-content button:hover {
  background-color: #e55600;
}
  </style>
  

