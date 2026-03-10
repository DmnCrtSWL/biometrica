<template>
  <section class="services">
    <div class="container">
      <div class="section-header animate-fade-up">
        <span class="section-label">Lo que hacemos</span>
        <h2 class="section-title">Soluciones Biomédicas<br><span>Integrales</span></h2>
        <p class="section-desc" style="margin: 0 auto">
          Te acompañamos desde la selección del equipo ideal hasta el óptimo funcionamiento diario de tu entorno clínico.
        </p>
      </div>

      <div class="services-grid">
        <div v-for="(srv, i) in services" :key="srv.title" class="service-card animate-fade-up" :class="`delay-${(i % 3) + 1}`">
          <div class="service-hex-icon">
            <svg viewBox="0 0 100 100" fill="currentColor" class="hex-shape" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25" />
            </svg>
            <span class="service-actual-icon" v-html="srv.icon"></span>
          </div>
          <h3 class="service-title">{{ srv.title }}</h3>
          <p class="service-desc">{{ srv.desc }}</p>
          <ul class="service-bullets">
            <li v-for="bullet in srv.bullets" :key="bullet">
              <span class="bullet-hex"></span>
              {{ bullet }}
            </li>
          </ul>
        </div>
      </div>

      <div class="services-action animate-fade-up delay-4">
        <router-link to="/servicios" class="btn-primary">
          Ver todos los servicios
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
    title: 'Venta de Equipos Médicos',
    desc: 'Comercializamos tecnología médica de última generación para clínicas, hospitales y consultorios particulares.',
    bullets: ['Distribuidores autorizados', 'Catálogo multimarca', 'Asesoría en adquisición']
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    title: 'Mantenimiento Preventivo',
    desc: 'Programa de revisiones periódicas para prevenir fallas y alargar la vida útil de todo tu inventario médico.',
    bullets: ['Pólizas de servicio', 'Calibración de software', 'Limpieza de sensores']
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>',
    title: 'Mantenimiento Correctivo',
    desc: 'Reparación inmediata en campo con reemplazo de refacciones originales certificadas para equipos dañados.',
    bullets: ['Diagnóstico exacto', 'Refacciones originales', 'Rápida respuesta']
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
    title: 'Dictamen y Aseguramiento',
    desc: 'Realizamos las pruebas necesarias avaladas por las normas vigentes (ISO/CE) para certificar el estado del aparato.',
    bullets: ['Cumplimiento COFEPRIS', 'Bitácoras de salud', 'Certificados oficiales']
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>',
    title: 'Capacitación Personal',
    desc: 'Adiestramos al personal médico o técnico para la manipulación adecuada de las máquinas salvaguardando su inversión.',
    bullets: ['Instrucción In-situ', 'Webinars técnicos', 'Buenas prácticas']
  },
  {
    icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>',
    title: 'Planificación de Espacios',
    desc: 'Diseño e integración de mobiliario en base a consumos eléctricos y áreas requeridas por equipos de alta dimensión.',
    bullets: ['Requisitos eléctricos', 'Acondicionamiento', 'Proyectos llave en mano']
  }
]
</script>

<style scoped>
.services {
  padding: var(--section-pad);
  /* Fondo gris sutil para diferir del blanco absoluto de AboutSection */
  background: var(--gray-50);
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-bottom: 56px;
}

.service-card {
  background: var(--white);
  padding: 36px 32px;
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-200);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: rgba(239, 136, 7, 0.4);
}

.service-hex-icon {
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
}

/* Efecto de hexágono sólido al fondo del ícono */
.hex-shape {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  color: rgba(239, 136, 7, 0.12); /* Color pastel acento hexágonal */
  transition: color 0.3s ease;
}

.service-card:hover .hex-shape {
  color: rgba(239, 136, 7, 0.2);
}

.service-actual-icon {
  position: relative;
  z-index: 2;
  display: flex;
}

.service-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--gray-800);
  margin-bottom: 14px;
  line-height: 1.3;
}

.service-desc {
  font-size: 0.9rem;
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 24px;
  flex-grow: 1; /* Empuja los bullets al fondo si hay descripciones cortas */
}

.service-bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.service-bullets li {
  font-size: 0.82rem;
  color: var(--gray-500);
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Bullet hexagonal pequeñito */
.bullet-hex {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: var(--accent);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.services-action {
  display: flex;
  justify-content: center;
}

@media (max-width: 1000px) {
  .services-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 700px) {
  .services-grid { grid-template-columns: 1fr; }
}
</style>
