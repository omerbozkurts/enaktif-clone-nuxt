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
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.filter-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 260px;
  height: 100vh;
  background-color: #ffffff;
  border-right: 1px solid #e0e0e0;
  padding: 16px 20px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

.filter-menu h2 {
  font-size: 1.4rem;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
}

.filter-menu h3 {
  font-size: 1.2rem;
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
  font-size: 1rem;
  margin: 8px 0;
  color: #555;
}

.filter-menu li:hover {
  color: #007bff;
  cursor: pointer;
}

.back-button {
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 12px;
  padding: 0;
  text-decoration: underline;
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
