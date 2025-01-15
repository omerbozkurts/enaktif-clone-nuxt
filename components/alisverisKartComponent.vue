<template>
    <div class="alisveris-karti-container"> 
        <div class="alisveris-karti-indirim-container">
                <div class="aliveris-karti-indirim-orani">{{ indirimOrani }}</div>
            </div>
        <div class="alisveris-karti-resim-container">
            
            <img :src=resim>
        </div>
        <div class="alisveris-karti-icerik-container">
            <div class="icerik-baslik-container">
                <div class="icerik-baslik">{{ urunIsmi }}</div>
            </div>
            <div class="icerik-fiyat-indirim">
                <div class="icerik-eski-fiyat">{{ ilkFiyat }} TL</div>
                <div class="icerik-yeni-fiyat">{{ indirimliFiyat }} TL</div>
            </div>
            <div class="icerik-buton">
                <button class="sepete-ekle-buton" @click="sepeteEkle">SEPETE EKLE</button>
            </div>
        </div>
    </div>
</template>

<style>
.alisveris-karti-container{
    width: 348px;
    height: 579px;
    position: relative;
    margin-bottom: var(--spacer-8);
    background-color: #FFF;
    border: 1px solid #E5E5E5;
    transition: all 0.2s linear;
    margin-right: 30px;
}

.alisveris-karti-container:hover{
    border: 1px solid #ff6000;
}

.alisveris-karti-resim-container{
    width: 346px;
    height: 346px;
    position: relative;
    display: flex;
    justify-content: center;
    
}

.alisveris-karti-resim-container>img{
    max-width:min-content;
    max-height: 346px;
   
    
    
}

.alisveris-karti-indirim-container{
    z-index: 999;
    position: absolute;
    display: flex;
    justify-content: center;
    background-color: #007aff;
    color: #FFF;
    width: 49px;
    height: 31px;
    align-items: center;
    margin-top: 30px;
    margin-left: 20px;
}

.alisveris-karti-indirim-orani{
    color: #FFF;
    background-color: #007aff;
    align-items: center;
    text-align: center;
}

.alisveris-karti-indirim-orani>div{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacer-2) var(--spacer-3);
    line-height: calc(var(--font-size-12) + 3px);
    font-size: var(--font-size-12);
    margin-bottom: 10px;
    color: #FFF;
    font-weight: 400;
    background-color: #FFF;
}

.alisveris-karti-icerik-container{
    width: 346px;
    height: 230px;
    padding: var(--spacer-6) 0;
}

.icerik-baslik-container{
    margin-bottom: var(--spacer-6);
    padding: 0 var(--spacer-6);
    text-align: center;
}

.icerik-baslik{
    overflow: hidden;
    display: block;
    height: calc((var(--font-size-18) + 6px)* 2);
    color: #000;
    font-weight: 400;
    font-size: var(--font-size-18);
    line-height: calc(var(--font-size-18) + 6px);
}

.icerik-fiyat-indirim{
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin-bottom: var(--spacer-6);
    padding: 0 var(--spacer-6);
}

.icerik-eski-fiyat{
    font-weight: 400;
    font-size: var(--font-size-16);
    line-height: calc(var(--font-size-16) + 8px);
    color: #ABABAB;
    text-decoration: line-through;
    margin-right: var(--spacer-3);
}

.icerik-yeni-fiyat{
    font-weight: 400;
    font-size: var(--font-size-24);
    line-height: calc(var(--font-size-24) + 5px);
    color: #000;
}

.icerik-buton{
    padding: 0 var(--spacer-10);
    
}

.sepete-ekle-buton{
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
    width: 100%;
}

.sepete-ekle-buton:hover{
    border: 1px solid #ff6000;
    background-color: #ff6000;
    color: #FFF;
}

</style>



<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '~/stores/sepet';

export default defineComponent({
  name: 'alisverisKartComponent',
  props: {
    urunId: {
      type: String,
      required: true, // Firebase'den gelen koleksiyon id'si
    },
    resim: {
      type: String,
      required: true,
    },
    urunIsmi: {
      type: String,
      required: true,
    },
    ilkFiyat: {
      type: String,
      required: true,
    },
    indirimliFiyat: {
      type: String,
      required: true,
    },
    indirimOrani: {
        type: String,
        required: true,
    }
  },
  setup(props) {
    const cartStore = useCartStore();

    const sepeteEkle = () => {

    const fiyat = props.indirimliFiyat
    ? parseFloat(props.indirimliFiyat.replace(',', '.')) // İndirimli fiyat varsa dönüştür
    : parseFloat(props.ilkFiyat.replace(',', '.')); // Yoksa normal fiyatı kullan

      cartStore.addToCart({
        id: props.urunId,
        resim: props.resim,
        title: props.urunIsmi,
        price: Math.round(fiyat * 100), // Kuruşa çevir
      });
    };

    return { sepeteEkle };
  },
});
</script>