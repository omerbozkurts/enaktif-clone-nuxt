<template>
    <div style="font-size: 24px; margin-top: 50px; margin-left: 20px; font-weight: bold;">KAMPANYALI ÜRÜNLER</div>
    <div class="kampanya-container">
      
        <AlisverisKartComponent
          v-for="urun in urunler.filter((urun) => urun.kitapId>35 && urun.kitapId<60)"
          :urunId="urun.kitapId"
          :resim="urun.kitapResim"
          :urun-ismi="urun.kitapIsim"
          :ilk-fiyat="urun.normalFiyat"
          :indirim-orani="urun.indirimMiktari"
          :indirimli-fiyat="urun.indirimliFiyat"
        />
      
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from "vue";
  import { useNuxtApp } from "#app";
  import { collection, getDocs, Firestore } from "firebase/firestore";

  
  const status = ref<string | null>(null);
  const urunler = ref<any[]>([]);
  
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
  

<style>
.kampanya-container{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 50px;
    
}
</style>