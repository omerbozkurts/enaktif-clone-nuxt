<template>
    <div>
      <p>Hoşgeldiniz, {{ userStore.firstName }} {{ userStore.lastName }}!</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useUserStore } from '@/stores/userstore'; // Pinia store'unu import et
  
  // Pinia store'una erişim
  const userStore = useUserStore();
  </script>
  