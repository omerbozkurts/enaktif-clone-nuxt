<template>
    <div v-if="isVisible" class="popup">
      <div class="popup-content">
        <p>{{ message }}</p>
        <button @click="closePopup">Tamam</button>
      </div>
    </div>
  
    <div class="user-login-page-wrapper">
      <div class="user-login-page-container">
        <div class="user-login-page-logo">
          <NuxtLink to="/"><img src="public/icons/logo.png"></NuxtLink>
        </div>
        <div class="user-login-page-content">
          <div class="user-login-page-title">
            <span>Kayıt Olun</span>
          </div>
          <form @submit.prevent="registerUser">
            <div class="user-login-page-row">
              <input class="form-control" type="text" id="user-login-name" placeholder="Ad" v-model="name">
            </div>
            <div class="user-login-page-row">
              <input class="form-control" type="text" id="user-login-surname" placeholder="Soyad" v-model="surname">
            </div>
            <div class="user-login-page-row">
              <input class="form-control" type="text" id="user-login-username" placeholder="Kullanıcı Adı" v-model="username">
            </div>
            <div class="user-login-page-row">
              <input class="form-control" type="email" id="user-login-email" placeholder="Email" v-model="email">
            </div>
            <div class="user-login-page-row">
              <input class="form-control" type="password" id="user-login-pass" placeholder="Şifre" v-model="password">
            </div>
            <div class="user-login-page-row mb-0">
              <button type="submit" class="btn btn-primary btn-block">Kayıt Ol</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  
  <script lang="ts" setup>
import { ref } from 'vue';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNuxtApp } from "#app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import type { Auth } from "firebase/auth";

// Yeni form alanları için reaktif veriler
const name = ref('');
const surname = ref('');
const username = ref('');
const email = ref('');
const password = ref('');

// Popup için reaktif değişkenler ve fonksiyonlar
const isVisible = ref(false); // Popup görünürlüğü
const message = ref(''); // Gösterilecek mesaj

// Popup'ı göstermek için fonksiyon
function showPopup(newMessage: string) {
  message.value = newMessage;
  isVisible.value = true;
}

// Popup'ı kapatmak için fonksiyon
function closePopup() {
  isVisible.value = false;
  window.location.reload(); // Sayfayı yenilemek için
}

// Kullanıcı kaydını gerçekleştiren fonksiyon
async function registerUser() {
  if (!name.value || !surname.value || !username.value || !email.value || !password.value) {
    console.error("Tüm alanlar zorunludur.");
    return;
  }

  try {
    // `useNuxtApp()` ile alınan auth nesnesini `Auth` türüne dönüştürüyoruz
    const auth = useNuxtApp().$firestoreAuth as Auth;
    
    // Firebase Authentication ile kullanıcı kaydı
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log("User registered:", userCredential.user);

    // Firestore'a kullanıcı verilerini ekliyoruz
    const db = getFirestore();
    const userRef = doc(db, "users", userCredential.user.uid);
    await setDoc(userRef, {
      name: name.value,
      surname: surname.value,
      username: username.value,
      email: email.value,
    });

    showPopup("Kayıt başarıyla tamamlandı!");  // Popup'ı gösteriyoruz
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Kayıt sırasında hata:", error.message);
      showPopup("Kayıt başarısız: " + error.message);  // Popup'ı gösteriyoruz
    } else {
      console.error("Bilinmeyen bir hata oluştu.");
    }
  }
}
</script>

  
  <style scoped>
  /* Popup stilizasyonu */
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  
  .popup-content {
    background-color: #fff;
    padding: 30px 40px;
    border-radius: 12px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 500px;
    width: 100%;
  }
  
  .popup-content p {
    margin-bottom: 20px;
    font-size: 16px;
    color: #333;
  }
  
  .popup-content button {
    background-color: #ff6000;
    color: white;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
  }
  
  .popup-content button:hover {
    background-color: #e55600;
  }
  </style>
  