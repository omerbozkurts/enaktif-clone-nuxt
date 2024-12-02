<template>
    <div class="ana-banner-wrapper">
        <div class="row">
            <div class="col-md-6">
                <div class="ana-banner"></div>
                <div class="ana-banner-resim">
                    <img :src=resim1>
                </div>
            </div>
            <div class="col-md-6">
                <div class="ana-banner-resim">
                    <img :src=resim2>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<style>
.ana-banner-wrapper{
    margin-top: 80px;
    padding-left: 15px;
    padding-right: 15px;

}

.ana-banner-resim{
    margin-bottom: var(--spacer-8);
    overflow: hidden;
    position: relative;
}

</style>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name:'bannerComponent',
        props:{
            resim1:{
                type: String,
                required:true
            },
            resim2:{
                type: String,
                required:true
            }
        }
    })
</script>