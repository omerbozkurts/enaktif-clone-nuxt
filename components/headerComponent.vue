<template>
    <div>
      <header>
        <div style="background-color: rgb(255,0,0); text-align: center;">
          <span style="font-size: 12pt; font-weight: bold; color: rgb(255, 255, 255); text-align: ">300 TL ÜZERİ KARGO BEDAVA + 4 TAKSİT</span>
        </div>
        <div style="padding: 16px;">
          
        </div>
        <div class="header-middle">
       
          <div class="row align-items-center justify-content-between">
            <div class="col col-lg-3 col-xl-2" style="padding-left: 30px;">
              <NuxtLink to="/">
                <img
                  class="headerLogo"
                  src="public\icons\logo.png"
                  alt="Enaktif Logo"
                  style="height: 90px; width: 202px;"
                />
              </NuxtLink>
            </div>
            <div class="col-lg-9 col-xl-10 mt-2 mt-lg-0">
              <HeaderMiddleRight></HeaderMiddleRight>
            </div>         
        </div>
        </div>
      </header>
    </div>
    
  </template>
  
  <script>
import HeaderMiddleRight from './headerMiddleRight.vue';

</script>
  
<style>
.header-middle {
    background-color: #FFF;
    padding: 5px 0;
    border: 1px solid #E5E5E5;
    
}


.header-middle-right{
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
}

.header-middle-right-actions {
    display: flex;
    align-items: center;
    padding-left: 30px;
    padding-left: 30px;
}


.user-menu {
    margin-left: var(--spacer-6);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 48px;
    height: 48px;
    border: 1px solid #E5E5E5;
    transition: all 0.2s linear;
}

.cart-menu {
    position: relative;
    display: flex;
    align-items: center;
    padding: var(--spacer-3);
    height: 48px;
    border: 1px solid #E5E5E5;
    transition: all 0.2s linear;
}

</style>
  