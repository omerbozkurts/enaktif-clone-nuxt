<template>
    <div>
      <!-- Popup -->
      <div v-if="isVisible" class="popup">
        <div class="popup-content">
          <p>Hoşgeldiniz, {{ user.firstName }} {{ user.lastName }} !</p>
          <button @click="closePopup">Tamam</button>
        </div>
      </div>
  
      <div class="user-login-page-wrapper">
        <div class="user-login-page-container">
          <div class="user-login-page-logo">
            <NuxtLink to="/"><img src="public/icons/logo.png" /></NuxtLink>
          </div>
          <div class="user-login-page-content">
            <div class="user-login-page-title">
              <span>Giriş Yapın</span>
            </div>
            <form @submit.prevent="loginUser" name="login-form" method="POST" data-selector="login-form">
              <div class="user-login-page-row">
                <input class="form-control" type="email" v-model="email" id="user-login-email" placeholder="Email" />
              </div>
              <div class="user-login-page-row">
                <input class="form-control" type="password" v-model="password" id="user-login-pass" placeholder="Şifre" autocomplete="current-password" />
              </div>
              <div class="user-login-page-row mb-0 d-flex align-items-center justify-content-between">
                <div class="checkbox-custom">
                  <input type="checkbox" name="remember" id="remember-me" value="1" />
                  <label for="remember-me">Beni Hatırla</label>
                </div>
                <div class="">
                  <NuxtLink to="/">Şifremi Unuttum</NuxtLink>
                </div>
              </div>
              <div class="user-login-page-row mb-0">
                <button type="submit" class="btn btn-primary btn-block" data-selector="login-form-button">
                  Giriş Yap
                </button>
              </div>
            </form>
          </div>
          <NuxtLink to="kayitol">
            <KayitOlButon />
          </NuxtLink>
        </div>
      </div>
    </div>
  </template>
  
  
  

<style>
.user-login-page-wrapper{
    position: relative;
    display: flex;
    justify-content: center;
}

.user-login-page-container{
    position: relative;
    z-index: 2;
    width: 460px;
}

.user-login-page-logo{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
    padding: var(--spacer-5);
}

.user-login-page-content{
    padding: var(--spacer-10);
    margin-bottom: var(--spacer-8);
    background-color: #fff;
    border: 1px solid #E5E5E5;
    border-radius: 0
}

.user-login-page-title {
    text-align: center;
    margin-bottom: var(--spacer-7);
}

.user-login-page-row {
    margin-bottom: var(--spacer-5);
}

input.form-control {
    height: 52px;
    color: #000;
    font-size: var(--font-size-14);
    padding: var(--spacer-2) var(--spacer-4);
}

.form-control {
    color: #000;
    font-size: var(--font-size-13);
    border-radius: 0;
    border: 1px solid #E5E5E5;
}
.form-control {
    color: #4b4b4b;
    font-size: 1.2rem;
    padding: .9rem 1rem;
    border: 1px solid #eee;
    height: calc(3.6rem + 2px);
    background-color: #fff;
    border-radius: .4rem;
    transition: all .15s ease-in-out;
}
.form-control {
    display: block;
    width: 100%;
    height: calc(3.15rem + 2px);
    padding: .375rem .75rem;
    font-size: 1.6rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

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
  font-size: 18px;
  font-weight: bold;
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

<script lang="ts" setup>
import { ref } from 'vue';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';
import { useNuxtApp } from '#app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';
import { useUserStore } from '@/stores/userstore'; 

const email = ref('');
const password = ref('');
const isVisible = ref(false);
const message = ref('');
const user = ref({ firstName: '', lastName: '', email: '',username: '' });

const userStore = useUserStore();

async function loginUser() {
  try {
    const auth = useNuxtApp().$firestoreAuth as Auth;
    const firestore = useNuxtApp().$firestore as Firestore;

    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);

    // Kullanıcı bilgilerini Firestore'dan çekiyoruz
    const userDoc = await getDoc(doc(firestore, 'users', userCredential.user.uid));

    if (userDoc.exists()) {
      const userData = userDoc.data();
      user.value = {
        firstName: userData.name || '',
        lastName: userData.surname || '',
        email: userData.email || '',
        username: userData.username || ''
      };
      userStore.setUser({
        firstName: userData.firstName ,
        lastName: userData.lastName ,
        email: userData.email ,
        username: userData.username 
      });
      message.value = `Hoşgeldiniz, ${userStore.firstName} ${userStore.lastName}!`;
      isVisible.value = true;
    } else {
      message.value = 'Kullanıcı bulunamadı.';
      isVisible.value = true;
    }
  } catch (error: any) {
    message.value = `Hata: ${error.message}`;
    isVisible.value = true;
  }
}

function closePopup() {
  isVisible.value = false;
}
</script>
