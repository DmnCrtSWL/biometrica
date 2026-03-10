<template>
  <div class="tienda-view">
    <div style="height: 80px; background: var(--off-white);"></div>
    <ProductsSection />
  </div>
</template>

<script setup>
import ProductsSection from '../components/ProductsSection.vue'
</script>

<style scoped>
.tienda-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
