<template>
  <section class="testimonials">
    <div class="container">
      <div class="section-header animate-fade-up">
        <span class="section-label">Testimonios</span>
        <h2 class="section-title">Lo que dicen nuestros <span>clientes</span></h2>
        <p class="section-desc" style="margin: 0 auto">
          Más de 500 instituciones de salud confían en BME para sus equipos de diagnóstico clínico.
        </p>
      </div>

      <div class="testimonials-grid">
        <div
          v-for="(t, i) in testimonials"
          :key="t.name"
          class="testi-card animate-fade-up"
          :class="`delay-${i + 1}`">
          <div class="stars">
            <svg v-for="s in 5" :key="s" width="16" height="16" viewBox="0 0 24 24" fill="#fbbf24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l8.91-1.01L12 2z"/></svg>
          </div>
          <blockquote>{{ t.quote }}</blockquote>
          <div class="testi-author">
            <div class="avatar">{{ t.initial }}</div>
            <div>
              <div class="author-name">{{ t.name }}</div>
              <div class="author-role">{{ t.role }}</div>
            </div>
          </div>
          <div class="testi-logo">{{ t.institution }}</div>
        </div>
      </div>

      <!-- Logos bar -->
      <div class="logos-bar animate-fade-up">
        <p class="logos-label">Con la confianza de</p>
        <div class="logos-row">
          <div v-for="logo in institutions" :key="logo" class="logo-chip">{{ logo }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    quote: '"La calidad de los equipos de BME ha elevado enormemente nuestra capacidad de diagnóstico. El soporte post-venta es excepcional; cualquier incidencia se resuelve en horas."',
    name: 'Dr. Alejandro Moreno',
    role: 'Director Médico',
    initial: 'AM',
    institution: 'Clínica Santa Elena',
  },
  {
    quote: '"Llevamos 5 años trabajando con BME y año a año renuevan nuestro equipo de laboratorio. La relación calidad-precio es insuperable y la capacitación al personal marcó la diferencia."',
    name: 'Lic. Valeria Gutiérrez',
    role: 'Jefa de Laboratorio Clínico',
    initial: 'VG',
    institution: 'Hospital Regional del Norte',
  },
  {
    quote: '"Equipamos toda nuestra área de cardiología con BME. Los electrocardiógrafos digitales son precisos, fáciles de usar, y el sistema de monitoreo remoto nos da mucha tranquilidad."',
    name: 'Dr. Carlos Peña',
    role: 'Cardiólogo Interventor',
    initial: 'CP',
    institution: 'Centro Cardíaco Vitalia',
  },
]

const institutions = [
  'Hospital IMSS', 'Clínica Médica Sur', 'ISSSTE', 'Hospital Ángeles',
  'Cruz Roja', 'Salud Digna', 'Médica Sur'
]
</script>

<style scoped>
.testimonials {
  padding: var(--section-pad);
  background: var(--white);
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 60px;
}

.testi-card {
  background: var(--off-white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: 32px;
  transition: var(--transition);
  position: relative;
}

.testi-card::before {
  content: '"';
  position: absolute;
  top: 16px; right: 24px;
  font-size: 5rem;
  font-weight: 900;
  color: var(--accent);
  opacity: 0.12;
  line-height: 1;
  font-family: Georgia, serif;
}

.testi-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.stars {
  display: flex;
  gap: 2px;
  margin-bottom: 16px;
}

blockquote {
  font-size: 0.9rem;
  color: var(--gray-600);
  line-height: 1.75;
  font-style: italic;
  margin-bottom: 24px;
  border: none;
  padding: 0;
}

.testi-author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.avatar {
  width: 44px;
  height: 48px; /* Ajuste ligeramente la altura para que el hexágono luzca proporcionado */
  background: linear-gradient(135deg, var(--primary), var(--accent));
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 800;
  color: var(--white);
  flex-shrink: 0;
}

.author-name { font-size: 0.9rem; font-weight: 700; color: var(--primary); }
.author-role { font-size: 0.75rem; color: var(--gray-400); }

.testi-logo {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--accent);
  border-top: 1px solid var(--gray-200);
  padding-top: 16px;
}

/* Logos bar */
.logos-bar {
  text-align: center;
}

.logos-label {
  font-size: 0.8rem;
  color: var(--gray-400);
  font-weight: 500;
  margin-bottom: 20px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.logos-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}

.logo-chip {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--gray-600);
  background: var(--gray-100);
  padding: 8px 20px;
  border-radius: 100px;
  border: 1px solid var(--gray-200);
  transition: var(--transition);
}

.logo-chip:hover {
  color: var(--primary);
  border-color: var(--accent);
  background: rgba(239,136,7,0.06);
}

@media (max-width: 900px) {
  .testimonials-grid { grid-template-columns: 1fr; }
}
</style>
