<template>
  <div id="bme-app">
    <NavBar />

    <main class="page-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Indicador de Scroll -->
    <div 
      class="scroll-square" 
      :style="{ transform: `translateY(-50%) rotate(${rotation}deg)` }"
      aria-hidden="true"
    ></div>

    <FooterSection />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

const rotation = ref(0)
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      // Ajustamos la velocidad de giro multiplicando por un factor (cadencia)
      rotation.value = window.scrollY * 0.4
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style>
#bme-app {
  min-height: 100vh;
}

.scroll-square {
  position: fixed;
  right: 25px; /* Separado del borde derecho para coexistir con un scrollbar visible */
  bottom: 25px; /* Lo bajamos a la esquina inferior en lugar de la superior */
  width: 20px;
  height: 20px;
  background-color: var(--primary);
  z-index: 1001; /* Flotar sobre otros elementos */
  pointer-events: none; /* Evita que estorbe el cursor del usuario */
  border-radius: 4px; /* Un ligero redondeado que combina con la web */
  /* Un transition enfocado únicamente en un remate (settle) suave de su movimiento */
  transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
</style>
