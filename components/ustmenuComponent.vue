<template>
    <div class="ust-menu">
        <div class="ust-menu-container">
            <ul>
                <li>oge 1</li>
                <li>oge 2</li>
                <li>oge 3</li>
                <li> <NuxtLink to="markalar">Markalar</NuxtLink> </li>
                <li> <NuxtLink to="kampanyalar">KAMPANYALAR</NuxtLink></li>
            </ul>
        </div>
    </div>
</template>

<style>
.ust-menu{
    background-color: #ffffff;
    border: 1px solid #E5E5E5;
    position: relative;
    padding-top: 20px;
    padding-bottom: 20px;
}

.ust-menu-container{
    justify-content: center;
    display: flex;
}

.ust-menu-container>ul{
    display: flex;
    flex-wrap: wrap;
    font-size: 16px;
}

.ust-menu-container>ul>li{
    margin-left: 10px;
    margin-right: 10px;
}
</style>


<script></script>