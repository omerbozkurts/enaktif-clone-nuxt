<template>
    <div class="carousel">
      <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="carousel-slide" v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" />
        </div>
      </div>
      <button class="carousel-button prev" @click="prevSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 11.5199C7 11.2014 7.123 10.8829 7.3689 10.6838L14.9098 3.35831C15.4016 2.88056 16.1803 2.88056 16.6311 3.35831C17.1229 3.83607 17.1229 4.59251 16.6311 5.03044L9.9918 11.4801L16.6311 17.9696C17.1229 18.4473 17.1229 19.2037 16.6311 19.6417C16.1393 20.1194 15.3607 20.1194 14.9098 19.6417L7.3689 12.356C7.1639 12.1171 7 11.7986 7 11.5199Z" fill="black"></path> </svg>
      </button>
      <button class="carousel-button next" @click="nextSlide">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M17 12.4801C17 12.7986 16.877 13.1171 16.6311 13.3162L9.09016 20.6417C8.59836 21.1194 7.81967 21.1194 7.36885 20.6417C6.87705 20.1639 6.87705 19.4075 7.36885 18.9696L14.0082 12.5199L7.36885 6.0304C6.87705 5.5527 6.87705 4.7963 7.36885 4.3583C7.86066 3.8806 8.63934 3.8806 9.09016 4.3583L16.6311 11.644C16.8361 11.8829 17 12.2014 17 12.4801Z" fill="black"></path> </svg>
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, computed, onMounted, onUnmounted } from "vue";
  
  // Resimlerinizi local olarak tanımlayın (örneğin: `src/assets` altında)
  const images = [
    { src: "/carousel/slider_1.webp", alt: "Slider 1" },
    { src: "/carousel/slider_2.webp", alt: "Slider 2" },
  ];
  
  const currentSlide = ref(0);
  const slideCount = computed(() => images.length);
  const interval = 5000; 
  
  function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % slideCount.value;
  }
  
  function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + slideCount.value) % slideCount.value;
  }
  
  // Auto-slide
  let autoSlide: ReturnType<typeof setInterval> | null = null;
  
  onMounted(() => {
    autoSlide = setInterval(nextSlide, interval);
  });
  
  onUnmounted(() => {
    if (autoSlide) {
      clearInterval(autoSlide);
    }
  });
  </script>
  
  <style scoped>
  .carousel {
    position: relative;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    height: 100%;
    margin: auto;
    
    
    background-color: #f9f9f9;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-slide {
    min-width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .carousel-slide img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  
  .carousel-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
  }
  
  .carousel-button.prev {
    left: 10px;
  }
  
  .carousel-button.next {
    right: 10px;
  }
  </style>
  