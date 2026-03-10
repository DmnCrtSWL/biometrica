<template>
  <section class="philosophy-section">
    <div class="philosophy-bg"></div>
    <div class="container relative-z">
      <div class="section-header animate-fade-up">
        <span class="section-label">Nuestra Esencia</span>
        <h2 class="section-title">Nuestra Filosofía<br><span>Corporativa</span></h2>
      </div>

      <div class="philosophy-grid">
        <!-- Misión -->
        <div class="philosophy-card animate-fade-up delay-1">
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          </div>
          <h3 class="card-title">Misión</h3>
          <p class="card-text">
            Proporcionar un servicio de primera clase, así como distribuir tecnología de alta calidad e innovadora a la medida de las necesidades de nuestros clientes con el objetivo de mejorar el diagnóstico y asistencia al paciente.
          </p>
          <p class="card-text">
            Con ello incrementamos la competitividad y productividad de nuestros clientes, impulsando así el crecimiento de sus proyectos.
          </p>
        </div>

        <!-- Visión -->
        <div class="philosophy-card animate-fade-up delay-2">
          <div class="card-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
          </div>
          <h3 class="card-title">Visión</h3>
          <p class="card-text">
            Ser la empresa de servicio y venta de equipo médico más reconocida a nivel nacional destacada por su alta competitividad y desempeño de sus colaboradores.
          </p>
          <p class="card-text">
            Quienes se caracterizan por trabajar con calidad y valores encaminados al objetivo fundamental de servir a los demás.
          </p>
        </div>

        <!-- Valores (Ocupa dos columnas) -->
        <div class="philosophy-card card-wide animate-fade-up delay-3">
          <div class="card-wide-header">
            <div class="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </div>
            <h3 class="card-title">Nuestros Valores</h3>
          </div>
          
          <div class="values-flex">
            <div class="value-block">
              <h4 class="value-subtitle">Nuestros Colaboradores</h4>
              <p class="card-text">
                Son nuestro principal valor, ya que son la base de nuestra empresa, todos ellos practican la <strong>Honestidad</strong>, el <strong>Respeto</strong> y la <strong>Integridad</strong>.
              </p>
            </div>
            <div class="value-divider"></div>
            <div class="value-block">
              <h4 class="value-subtitle">Nuestros Clientes</h4>
              <p class="card-text">
                Son considerados como un valor, ya que sin ellos la labor médica no sería posible, por ello les reconocemos y guardamos gratitud haciendo lo posible para asistirles día con día.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.philosophy-section {
  padding: var(--section-pad);
  position: relative;
  background: var(--white);
  overflow: hidden;
}

.philosophy-bg {
  position: absolute;
  top: -100px;
  right: -100px;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(239, 136, 7, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.relative-z {
  position: relative;
  z-index: 1;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.philosophy-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.philosophy-card {
  background: var(--off-white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: 40px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  position: relative;
  overflow: hidden;
}

.philosophy-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  opacity: 0;
  transition: opacity 0.3s ease;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-color: rgba(239, 136, 7, 0.4);
}

.philosophy-card:hover::before {
  opacity: 1;
}

.card-wide {
  grid-column: 1 / -1; /* Ocupa todo el ancho disponible de la grid */
}

.card-icon {
  width: 64px;
  height: 64px;
  background: rgba(239, 136, 7, 0.1);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  margin-bottom: 24px;
}

.card-wide-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.card-wide-header .card-icon {
  margin-bottom: 0; /* Override para alinear con el título */
}

.card-wide-header .card-title {
  margin-bottom: 0;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--gray-800);
  margin-bottom: 16px;
}

.card-text {
  font-size: 1rem;
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: 16px;
}

.card-text:last-child {
  margin-bottom: 0;
}

.values-flex {
  display: flex;
  gap: 32px;
  align-items: stretch;
}

.value-block {
  flex: 1;
}

.value-subtitle {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 12px;
}

.value-divider {
  width: 1px;
  background: var(--gray-200);
  margin: 0 10px;
}

strong {
  color: var(--primary);
  font-weight: 700;
}

@media (max-width: 900px) {
  .philosophy-grid { grid-template-columns: 1fr; }
  .card-wide { grid-column: auto; }
  .values-flex { flex-direction: column; gap: 24px; }
  .value-divider { width: 100%; height: 1px; margin: 10px 0; }
}
</style>
