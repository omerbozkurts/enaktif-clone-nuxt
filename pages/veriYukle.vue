<template>
    <div class="veri-yukle-container">
      <h1 class="text-2xl font-bold mb-4" style="align-items: center; text-align: center;">Firebase Veri Yükle</h1>
      <button
        @click="uploadData"
      >
        Veriyi Eşle Ve Yükle
      </button>
      <p v-if="status" class="mt-4">{{ status }}</p>
    </div>
  </template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { useNuxtApp } from "#app";
import jsonData from "~/data/data.json"; // JSON dosyasının yolu
import { collection, addDoc, Firestore } from "firebase/firestore";

const status = ref<string | null>(null);

async function uploadData() {
  const nuxtApp = useNuxtApp();
  

  const db = nuxtApp.$firestore as Firestore;

  try {
    const colRef = collection(db, "urunlerVeri");
    for (const item of jsonData) {
      await addDoc(colRef, item);
    }
    status.value = "Veri Başarılı Bir Şekilde Yüklendi";
  } catch (error) {
    console.error("Veri Yüklenirken Hata ile karşılaşıldı:", error);
    status.value = "Veri yüklenirken hata oluştu. Hatalar için console kontrol edin.";
  }
}
</script>

  
<style scoped>
.veri-yukle-container{
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

button{
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
    width: 10%;
    

}

button:hover{
    border: 1px solid #ff6000;
    background-color: #ff6000;
    color: #FFF;
}

</style>
  