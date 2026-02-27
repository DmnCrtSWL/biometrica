<template>
  <section id="nosotros" class="about">
    <div class="container">
      <div class="about-grid">
        <!-- Visual side -->
        <div class="about-visual animate-fade-up">
          <div class="image-stack">
            <div class="img-card img-main">
              <div class="icon-display">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect width="64" height="64" rx="16" fill="#EC4D11"/>
                  <path d="M32 14v36M14 32h36" stroke="#EF8807" stroke-width="4" stroke-linecap="round"/>
                  <circle cx="32" cy="32" r="10" stroke="#EF8807" stroke-width="3" fill="none" opacity="0.4"/>
                  <circle cx="32" cy="32" r="4" fill="#EF8807"/>
                </svg>
                <span>Precisión Biomédica</span>
              </div>
            </div>

            <div class="experience-badge">
              <span class="exp-number">15+</span>
              <span class="exp-text">Años de<br>Experiencia</span>
            </div>

            <div class="cert-card">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
              <div>
                <div class="cert-title">Certificación ISO 13485</div>
                <div class="cert-sub">Gestión de Calidad Médica</div>
              </div>
            </div>
          </div>

          <div class="about-accent-circle"></div>
        </div>

        <!-- Text side -->
        <div class="about-text animate-fade-up delay-2">
          <span class="section-label">Sobre Nosotros</span>
          <h2 class="section-title">
            Impulsando la salud con<br>
            <span>tecnología de precisión</span>
          </h2>
          <p class="section-desc" style="margin-bottom:24px">
            BME - Biométrica Especializada nació con la misión de democratizar el acceso a equipos de
            diagnóstico clínico de alta calidad en toda la región. Somos distribuidores autorizados de
            las marcas más reconocidas del sector médico a nivel mundial.
          </p>
          <p class="section-desc">
            Nuestro equipo de ingenieros biomédicos y especialistas en salud garantiza que cada equipo
            instalado cuente con soporte técnico certificado, capacitación al personal y mantenimiento preventivo.
          </p>

          <div class="values-grid">
            <div v-for="val in values" :key="val.title" class="value-item">
              <div class="value-icon">
                <span v-html="val.icon"></span>
              </div>
              <div>
                <h4>{{ val.title }}</h4>
                <p>{{ val.desc }}</p>
              </div>
            </div>
          </div>

          <a href="#contacto" class="btn-primary" style="margin-top:8px">
            Habla con un experto
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const values = [
  {
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
    title: 'Calidad Certificada',
    desc: 'Equipos con certificaciones internacionales FDA e ISO 13485.'
  },
  {
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'Soporte 24/7',
    desc: 'Asistencia técnica especializada disponible en todo momento.'
  },
  {
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    title: 'Equipo Experto',
    desc: 'Ingenieros biomédicos y técnicos certificados a tu disposición.'
  },
  {
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    title: 'Garantía Total',
    desc: 'Garantía extendida y planes de mantenimiento preventivo.'
  },
]
</script>

<style scoped>
.about {
  padding: var(--section-pad);
  background: var(--white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

/* Visual */
.about-visual { position: relative; }

.image-stack {
  position: relative;
  height: 400px;
}

.img-card {
  position: absolute;
  border-radius: var(--radius-lg);
  overflow: hidden;
}

.img-main {
  top: 0; left: 0;
  right: 0;
  height: 280px;
  background: linear-gradient(135deg, #EC4D11, #f56d3b);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
}

.icon-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--white);
  font-size: 1.1rem;
  font-weight: 600;
  opacity: 0.9;
}

.experience-badge {
  position: absolute;
  bottom: 80px;
  right: -20px;
  background: var(--accent);
  color: var(--white);
  border-radius: var(--radius);
  padding: 16px 20px;
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.exp-number {
  display: block;
  font-size: 2rem;
  font-weight: 900;
  line-height: 1;
}

.exp-text {
  font-size: 0.72rem;
  font-weight: 500;
  opacity: 0.9;
  line-height: 1.3;
}

.cert-card {
  position: absolute;
  bottom: 0;
  left: 0;
  background: var(--white);
  border-radius: var(--radius);
  padding: 14px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: var(--shadow-md);
  border: 1px solid var(--gray-200);
}

.cert-title { font-size: 0.8rem; font-weight: 700; color: var(--primary); }
.cert-sub   { font-size: 0.68rem; color: var(--gray-400); }

.about-accent-circle {
  position: absolute;
  top: -30px;
  left: -30px;
  width: 180px;
  height: 180px;
  background: var(--accent);
  border-radius: 50%;
  opacity: 0.05;
  z-index: -1;
}

/* Text */
.values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin: 32px 0 32px;
}

.value-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.value-icon {
  width: 40px;
  height: 40px;
  background: rgba(239,136,7,0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.value-item h4 {
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 2px;
}

.value-item p {
  font-size: 0.78rem;
  color: var(--gray-600);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
  .image-stack { height: 320px; }
  .values-grid { grid-template-columns: 1fr; }
}
</style>
