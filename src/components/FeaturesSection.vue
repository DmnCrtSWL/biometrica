<template>
  <section id="ventajas" class="features">
    <div class="features-bg"></div>
    <div class="container">
      <div class="section-header animate-fade-up">
        <span class="section-label">¿Por qué elegirnos?</span>
        <h2 class="section-title" style="color:var(--primary)">
          La diferencia <span style="color:var(--accent)">BME</span>
        </h2>
        <p class="section-desc" style="color:var(--gray-600); margin:0 auto">
          Más que equipos médicos, ofrecemos una solución integral que acompaña a tu institución antes, durante y después de la instalación.
        </p>
      </div>

      <div class="features-grid">
        <div
          v-for="(feat, i) in features"
          :key="feat.title"
          class="feat-card animate-fade-up"
          :class="`delay-${i + 1}`">
          <div class="feat-num">{{ String(i+1).padStart(2,'0') }}</div>
          <div class="feat-icon-wrap">
            <span v-html="feat.icon"></span>
          </div>
          <h3>{{ feat.title }}</h3>
          <p>{{ feat.desc }}</p>
        </div>
      </div>

      <!-- CTA Banner -->
      <div class="cta-banner animate-fade-up">
        <div class="cta-text">
          <h3>¿Listo para modernizar tu clínica?</h3>
          <p>Solicita una demostración sin compromiso y descubre cómo BME puede transformar tu práctica médica.</p>
        </div>
        <a href="#contacto" class="btn-primary">
          Solicitar Demo Gratis
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    title: 'Certificación Internacional',
    desc: 'Todos nuestros equipos cuentan con certificaciones FDA, CE e ISO 13485 que garantizan seguridad y precisión clínica.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'Soporte 24/7',
    desc: 'Nuestro equipo técnico está disponible las 24 horas del día, los 7 días de la semana para atender cualquier urgencia.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    title: 'Capacitación Incluida',
    desc: 'Ofrecemos capacitación completa al personal médico y técnico. Certificamos en el uso correcto de cada equipo instalado.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    title: 'Monitoreo Remoto',
    desc: 'Sistema de telemetría que permite el monitoreo preventivo de tus equipos para anticipar fallas antes de que ocurran.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>',
    title: 'Financiamiento Flexible',
    desc: 'Planes de pago adaptables a las necesidades de tu institución. Arrendamiento, crédito directo y leasing disponibles.',
  },
  {
    icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    title: 'Cobertura Nacional',
    desc: 'Presencia en todo el país con centros de servicio regional. Atención en sitio garantizada en menos de 24 horas.',
  },
]
</script>

<style scoped>
.features {
  position: relative;
  padding: var(--section-pad);
  overflow: hidden;
}

.features-bg {
  position: absolute;
  inset: 0;
  background: var(--off-white);
  z-index: 0;
}

.features-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 50%, rgba(239,136,7,0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(239,136,7,0.05) 0%, transparent 40%);
}

.container { position: relative; z-index: 1; }

.section-header {
  text-align: center;
  margin-bottom: 60px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 60px;
}

.feat-card {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.feat-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent), transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}

.feat-card:hover {
  background: var(--gray-100);
  border-color: rgba(239,136,7,0.25);
  transform: translateY(-4px);
}

.feat-card:hover::before { transform: scaleX(1); }

.feat-num {
  font-size: 2.5rem;
  font-weight: 900;
  color: rgba(239,136,7,0.12);
  line-height: 1;
  margin-bottom: 16px;
  font-variant-numeric: tabular-nums;
}

.feat-icon-wrap {
  width: 52px;
  height: 52px;
  background: rgba(239,136,7,0.1);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.feat-card h3 {
  font-size: 1rem;
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: 10px;
}

.feat-card p {
  font-size: 0.85rem;
  color: var(--gray-600);
  line-height: 1.7;
}

/* CTA Banner */
.cta-banner {
  background: linear-gradient(135deg, rgba(239,136,7,0.15), rgba(239,136,7,0.05));
  border: 1px solid rgba(239,136,7,0.25);
  border-radius: var(--radius-xl);
  padding: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.cta-text h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--gray-800);
  margin-bottom: 8px;
}

.cta-text p {
  font-size: 0.9rem;
  color: var(--gray-600);
  max-width: 500px;
}

@media (max-width: 900px) {
  .features-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 600px) {
  .features-grid { grid-template-columns: 1fr; }
  .cta-banner { flex-direction: column; text-align: center; }
}
</style>
