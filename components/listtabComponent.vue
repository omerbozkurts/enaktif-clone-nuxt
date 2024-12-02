<template>
  <div class="list-tab">
      <div class="list-tab-container">
          <div class="tab-buttons">
              <button 
                  v-for="(tab, index) in tabs" 
                  :key="index" 
                  :class="['tab-button', { active: currentTab === index }]" 
                  @click="switchTab(index)"
                  >
                  {{ tab.name }}
              </button>
          </div>
          
              
          
      </div>
  </div>
</template>

<style>
.list-tab{
  background-color: #F9F9F9;
  padding: var(--spacer-20) 0 var(--spacer-12);
  margin-bottom: var(--spacer-20);
}

.list-tab-container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  
}


.tab-buttons{
  display: flex;
  justify-content: center;
  gap: 20px; 
  margin-bottom: 20px;
  align-items: center;
}

.tab-button {
  position: relative;
  display: block;
  color: #000;
  font-weight: 600;
  background-color: #FFF;
  border: 1px solid #E5E5E5;
  line-height: calc(var(--font-size-16) + 4px);
  font-size: var(--font-size-16);
  text-align: center;
  padding: var(--spacer-4) var(--spacer-8);
}

.tab-button.active {
  background-color: #ff6f00; 
  color: white;
  font-weight: bold;
  border-color: #ff6f00;
}

.tab-buttons::before,
.tab-buttons::after {
  content: "";
  width: 100px;
  height: 2px;
  background-color: #000;
  margin-right: var(--spacer-8);
  margin-left: var(--spacer-8);
}


</style>

<script lang="ts" setup>
import { ref } from 'vue';

const tabs = [
{ name: "ÖNE ÇIKAN MARKA" },
{ name: "EN YENİ" },
{ name: "EN UCUZ" }
];

const currentTab = ref<number>(0);

const switchTab = (index: number) => {
currentTab.value = index;
};
</script>
