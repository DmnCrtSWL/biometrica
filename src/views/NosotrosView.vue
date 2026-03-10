<template>
  <div class="nosotros-view">
    <!-- Spacer for navbar since Hero isn't here -->
    <div style="height: 80px; background: var(--off-white);"></div>
    <AboutSection />
    <CompanyPhilosophy />
  </div>
</template>

<script setup>
import AboutSection from '../components/AboutSection.vue'
import CompanyPhilosophy from '../components/CompanyPhilosophy.vue'
</script>
