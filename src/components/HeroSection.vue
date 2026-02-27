<template>
  <section id="inicio" class="hero">
    <!-- Background layers -->
    <div class="hero-bg">
      <div class="hero-gradient"></div>
      <div class="hero-grid"></div>
      <div class="hero-particles">
        <span v-for="n in 20" :key="n" class="particle" :style="particleStyle(n)"></span>
      </div>
    </div>

    <div class="container hero-content">
      <div class="hero-text animate-fade-up">
        <div class="hero-badge">
          <span class="badge-dot"></span>
          Tecnología de Diagnóstico de Vanguardia
        </div>

        <h1 class="hero-title">
          Equipos Clínicos<br>
          <span class="title-accent">de Alta Precisión</span><br>
          para Profesionales
        </h1>

        <p class="hero-subtitle">
          En BME desarrollamos y distribuimos tecnología biomédica especializada
          para clínicas, hospitales y laboratorios. Precisión, calidad y respaldo técnico en cada equipo.
        </p>

        <div class="hero-actions delay-3 animate-fade-up">
          <a href="#productos" class="btn-primary">
            Ver Catálogo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </a>
          <a href="#contacto" class="btn-outline">
            Solicitar Demo
          </a>
        </div>

        <div class="hero-stats delay-4 animate-fade-up">
          <div v-for="stat in stats" :key="stat.label" class="stat-item">
            <span class="stat-value">{{ stat.value }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero-visual delay-2 animate-fade-up">
        <div class="visual-card main-card">
          <div class="card-header">
            <div class="header-dots">
              <span></span><span></span><span></span>
            </div>
            <span class="card-title-text">Monitor de Signos Vitales</span>
          </div>
          <div class="monitor-display">
            <div class="vital-row">
              <div class="vital-item">
                <svg class="vital-icon heart" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                <span class="vital-value">76</span>
                <span class="vital-unit">bpm</span>
              </div>
              <div class="vital-item">
                <svg class="vital-icon bp" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                <span class="vital-value">120/80</span>
                <span class="vital-unit">mmHg</span>
              </div>
              <div class="vital-item">
                <svg class="vital-icon spo2" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>
                <span class="vital-value">98%</span>
                <span class="vital-unit">SpO₂</span>
              </div>
            </div>
            <div class="ecg-line">
              <svg viewBox="0 0 300 60" preserveAspectRatio="none">
                <polyline points="0,30 30,30 45,30 55,5 65,55 75,30 120,30 150,30 165,30 175,5 185,55 195,30 240,30 270,30 285,30 295,5 300,30"
                  fill="none" stroke="#EF8807" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <!-- Floating badges -->
        <div class="floating-badge badge-left">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
          <span>Certificado ISO 13485</span>
        </div>
        <div class="floating-badge badge-right">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          <span>Top Certificación FDA</span>
        </div>
      </div>
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
const stats = [
  { value: '+500', label: 'Equipos Instalados' },
  { value: '15+',  label: 'Años de Experiencia' },
  { value: '98%',  label: 'Satisfacción' },
  { value: '24/7', label: 'Soporte Técnico' },
]

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
  background-image:
    linear-gradient(rgba(239,136,7,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(239,136,7,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
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
  background: linear-gradient(90deg, var(--accent), #7FFFD4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
}

.main-card {
  background: var(--white);
  backdrop-filter: blur(20px);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-xl);
  overflow: hidden;
  animation: float 6s ease-in-out infinite;
  box-shadow: 0 20px 60px rgba(0,0,0,0.4), var(--shadow-glow);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--gray-100);
  border-bottom: 1px solid var(--gray-200);
}

.header-dots { display: flex; gap: 6px; }
.header-dots span {
  width: 10px; height: 10px; border-radius: 50%;
}
.header-dots span:nth-child(1) { background: #ff5f57; }
.header-dots span:nth-child(2) { background: #febc2e; }
.header-dots span:nth-child(3) { background: #28c840; }

.card-title-text { font-size: 0.82rem; font-weight: 600; color: var(--gray-600); }

.monitor-display { padding: 24px 20px; }

.vital-row {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}

.vital-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.vital-icon { margin-bottom: 2px; }
.vital-icon.heart { color: #ff6b6b; }
.vital-icon.bp { color: var(--accent); }
.vital-icon.spo2 { color: #7FFFD4; }

.vital-value { font-size: 1.4rem; font-weight: 800; color: var(--gray-800); }
.vital-unit { font-size: 0.7rem; color: var(--gray-500); }

.ecg-line {
  width: 100%;
  height: 60px;
  background: rgba(239,136,7,0.04);
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(239,136,7,0.1);
}

.ecg-line svg { width: 100%; height: 100%; }

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
}

.badge-left  { bottom: -16px; left: -20px; animation: float 5s ease-in-out infinite; }
.badge-right { top: -16px; right: -20px; animation: float 7s ease-in-out infinite 1s; }

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
