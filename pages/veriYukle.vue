<template>
    <div class="p-4">
      <h1 class="text-2xl font-bold mb-4">Firebase Veri Yükle</h1>
      <button
        @click="uploadData"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Veriyi Eşle Ve Yükle
      </button>
      <p v-if="status" class="mt-4">{{ status }}</p>
    </div>
  </template>
  
<script lang="ts" setup>
import { ref } from "vue";
import { useNuxtApp } from "#app";
import jsonData from "~/data/data.json"; // JSON dosyasının yolunu belirtin
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
  button {
    transition: background-color 0.3s;
    background-color:red;
  }
  </style>
  