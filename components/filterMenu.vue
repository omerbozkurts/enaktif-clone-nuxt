<template>
  <div class="filter-menu">
    <h2>Ürün Grupları</h2>
    <div class="category">
      <h3>YKS</h3>
      <ul>
        <li>TYT Kitapları</li>
        <li>AYT Kitapları</li>
        <li>MSÜ Kitapları</li>
        <li>TYT ve AYT Planlayıcı</li>
      </ul>
      <button class="back-button">&lt; Kitap</button>
    </div>
    <hr />
    <div class="brands">
      <h3>Tüm Markalar</h3>
      <ul>
        <li><input type="checkbox" /> 3D Yayınları (40)</li>
        <li><input type="checkbox" /> Acil Yayınları (3)</li>
        <li><input type="checkbox" /> Akademi Denizi Yayınları (2)</li>
      </ul>
    </div>
    <div class="brands">
      <h3>Ders</h3>
      <ul>
        <li><input type="checkbox" />Biyoloji(90)</li>
        <li><input type="checkbox" />Coğrafya(61)</li>
        <li><input type="checkbox" />Dil Bilgisi(8)</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.filter-menu {
  top: 0;
  left: 0;
  width: 348px;
  height: auto;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  padding: 16px 20px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.filter-menu h2 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.filter-menu h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #444;
}

.filter-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.filter-menu li {
  font-weight: 400;
    font-size: var(--font-size-16);
    line-height: calc(var(--font-size-16) + 8px);
    color: #000;
    padding: 0;
    padding-bottom: var(--spacer-4);
    transition: all 0.2s linear;
}

.filter-menu li:hover {
  color: #ff6000;
  cursor: pointer;
}

.back-button {
  background: none;
  border: none;
  color: #000000;
  cursor: pointer;
  font-size: 16px;
  margin-top: 12px;
  padding: 0;
}

.back-button:hover{
  color: #ff6000;
}

hr {
  border: none;
  border-top: 1px solid #e0e0e0;
  margin: 20px 0;
}

input[type="checkbox"] {
  margin-right: 8px;
}

input[type="checkbox"] + span {
  font-size: 0.9rem;
}
</style>
