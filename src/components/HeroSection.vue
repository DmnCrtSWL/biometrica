<template>
  <section id="inicio" class="hero" @mousemove="handleMouseMove">
    <!-- Background layers -->
    <div class="hero-bg">
      <div class="hero-gradient"></div>
      <div class="hero-grid" :style="{ '--mouse-x': mouseX + '%', '--mouse-y': mouseY + '%' }"></div>
      <div class="hero-particles">
        <span v-for="n in 20" :key="n" class="particle" :style="particleStyle(n)"></span>
      </div>
    </div>

    <div class="container hero-content">
      <Transition name="swap" mode="out-in" appear>
        <div class="hero-text" :key="currentProduct.id">
          <div class="hero-badge">
            <span class="badge-dot"></span>
            {{ currentProduct.badge }}
          </div>

          <h1 class="hero-title">
            {{ currentProduct.name }}<br>
            <span class="title-accent">{{ currentProduct.accent }}</span>
          </h1>

          <p class="hero-subtitle">
            {{ currentProduct.desc }}
          </p>

          <div class="hero-actions">
            <a href="#tienda" class="btn-primary">
              COMPRAR
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </a>
          </div>

          <div class="hero-stats">
            <div v-for="stat in currentProduct.stats" :key="stat.label" class="stat-item">
              <span class="stat-value">{{ stat.value }}</span>
              <span class="stat-label">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </Transition>

      <Transition name="swap" mode="out-in" appear>
        <div class="hero-visual" :key="currentProduct.id">
          <div class="product-showcase">
            <!-- Fondo hexagonal de marca -->
            <div 
              class="product-hexagon" 
              :style="{ transform: `translate(${(mouseX - 50) * -0.6}px, ${(mouseY - 50) * -0.6}px)` }"
            >
              <svg viewBox="0 0 100 100" fill="var(--primary)" xmlns="http://www.w3.org/2000/svg">
                <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" />
              </svg>
            </div>
            <img :src="currentProduct.image" :alt="currentProduct.name" class="product-hero-img" :style="currentProduct.imageStyle" />
          </div>

          <!-- Floating badges -->
          <div class="floating-badge badge-left">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>{{ currentProduct.badgeLeft }}</span>
          </div>
          <div class="floating-badge badge-right">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            <span>{{ currentProduct.badgeRight }}</span>
          </div>
        </div>
      </Transition>
    </div>

    <!-- Scroll indicator -->
    <div class="scroll-hint">
      <div class="scroll-wheel">
        <span class="scroll-dot"></span>
      </div>
      <span>Desplaza para explorar</span>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const mouseX = ref(50)
const mouseY = ref(50)

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width) * 100
  mouseY.value = ((e.clientY - rect.top) / rect.height) * 100
}

const products = [
  {
    id: 'canis',
    badge: 'Producto Estrella',
    name: 'Canis 5c',
    accent: '5KW de Potencia',
    desc: 'Sistema de diagnóstico avanzado con arquitectura de procesamiento de señales en tiempo real y componentes de alta frecuencia. Diseñado para ofrecer un rendimiento ininterrumpido y resultados de máxima fidelidad en entornos clínicos exigentes.',
    image: '/canis.png',
    imageStyle: { transform: 'scale(1)' },
    badgeLeft: 'Alta Precisión',
    badgeRight: 'Garantía de 12 Meses',
    stats: [
      { value: '+99%', label: 'Precisión Clínica' },
      { value: 'Última',  label: 'Generación' }
    ]
  },
  {
    id: 'carestream',
    badge: 'Nuevo Ingreso',
    name: 'Carestream CS',
    accent: 'Escáner Intraoral Ultraligero',
    desc: 'El escáner de impresiones digitales con tecnología de sensores avanzada. Disfruta de captura de alta velocidad, detección automática de color y conectividad inalámbrica para elevar tu clínica dental al siguiente nivel.',
    image: '/carestream.png',
    imageStyle: { transform: 'scale(0.6)' },
    badgeLeft: 'Flujo Inalámbrico',
    badgeRight: 'Escaneo Veloz',
    stats: [
      { value: '240g', label: 'Ultraligero' },
      { value: '30s',  label: 'Jaw Scan' }
    ]
  }
]

const currentIndex = ref(0)
const currentProduct = computed(() => products[currentIndex.value])

let intervalTimer = null
onMounted(() => {
  intervalTimer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % products.length
  }, 7000) // Animación ciclada cada 7 segundos para permitir lectura
})

onUnmounted(() => {
  if (intervalTimer) clearInterval(intervalTimer)
})

const particleStyle = (n) => {
  const x = (n * 37 + 11) % 100
  const y = (n * 53 + 7)  % 100
  const size = ((n * 17) % 4) + 2
  const delay = (n * 0.3) % 5
  const dur = 3 + ((n * 0.7) % 4)
  return {
    left: `${x}%`,
    top:  `${y}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${dur}s`,
  }
}
</script>

<style scoped>
/* Transition effects */
.swap-enter-active,
.swap-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.swap-enter-from {
  opacity: 0;
  transform: translateY(15px);
}
.swap-leave-to {
  opacity: 0;
  transform: translateY(-15px);
}

.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding: 120px 0 60px;
}

/* Background */
.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f8fafc 0%, #ffffff 100%);
  background-size: 200% 200%;
  animation: gradientShift 10s ease infinite;
}

.hero-grid {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='51.96' height='90' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15L25.98 30L51.96 15M25.98 30v30M0 75l25.98-15 25.98 15M0 75v15M0 0v15M51.96 75v15M51.96 0v15' fill='none' stroke='%23EC4D11' stroke-width='2' stroke-opacity='0.4'/%3E%3C/svg%3E");
  background-size: 51.96px 90px;
  -webkit-mask-image: radial-gradient(circle 100vw at var(--mouse-x) var(--mouse-y), transparent 50%, rgba(0, 0, 0, 0.5) 90%);
  mask-image: radial-gradient(circle 100vw at var(--mouse-x) var(--mouse-y), transparent 50%, rgba(0, 0, 0, 0.5) 90%);
  transition: --mouse-x 0.1s, --mouse-y 0.1s;
  pointer-events: none; /* Asegura que el entramado no interfiera con otros clics/hovers */
}

.particle {
  position: absolute;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0.15;
  animation: float linear infinite;
}

/* Layout */
.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

/* Text side */
.hero-text { color: var(--gray-800); }

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--accent);
  background: rgba(239,136,7,0.1);
  border: 1px solid rgba(239,136,7,0.25);
  padding: 8px 18px;
  border-radius: 100px;
  margin-bottom: 28px;
}

.badge-dot {
  width: 7px;
  height: 7px;
  background: var(--accent);
  border-radius: 50%;
  animation: pulse-glow 2s infinite;
}

.hero-title {
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 24px;
  color: var(--gray-800);
}

.title-accent {
  color: #ec4d11;
}

.hero-subtitle {
  font-size: 1.05rem;
  color: var(--gray-600);
  max-width: 500px;
  line-height: 1.8;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.hero-stats {
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.stat-value {
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--accent);
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Visual Side */
.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-showcase {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-hexagon {
  position: absolute;
  width: 85%;
  height: auto;
  z-index: -1;
  opacity: 0.15; /* Un tono suave para que no compita agresivamente con la fotografía */
  transition: transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94); /* Suavizado en el seguimiento del cursor */
}

.product-hexagon svg {
  width: 100%;
  height: auto;
  display: block;
}

.product-hero-img {
  width: 100%;
  height: auto;
  object-fit: contain;
  /* Glow o sombra eliminada según petición */
  animation: float 6s ease-in-out infinite;
  z-index: 2;
}

/* Floating badges */
.floating-badge {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.95);
  color: var(--primary);
  font-size: 0.78rem;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 100px;
  box-shadow: var(--shadow-lg);
  z-index: 3;
}

.badge-left  { bottom: 10%; left: -5%; animation: float 5s ease-in-out infinite; }
.badge-right { top: 15%; right: -5%; animation: float 7s ease-in-out infinite 1s; }

/* Scroll hint */
.scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: rgba(255,255,255,0.4);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  z-index: 1;
}

.scroll-wheel {
  width: 22px;
  height: 36px;
  border: 2px solid rgba(255,255,255,0.25);
  border-radius: 100px;
  display: flex;
  justify-content: center;
  padding-top: 6px;
}

.scroll-dot {
  width: 4px;
  height: 8px;
  background: var(--accent);
  border-radius: 2px;
  animation: float 1.5s ease-in-out infinite;
}

@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-subtitle { margin: 0 auto 36px; }
  .hero-actions { justify-content: center; }
  .hero-stats { justify-content: center; }
  .hero-visual { max-width: 380px; margin: 0 auto; }
  .badge-left, .badge-right { display: none; }
}
</style>
