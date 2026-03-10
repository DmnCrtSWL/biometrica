<template>
  <section id="nosotros" class="about">
    <div class="container">
      <div class="about-grid">
        <!-- Visual side: Hexagon Cluster -->
        <div class="about-visual animate-fade-up">
          <div class="hex-cluster">
            <div class="hex-wrapper pos-1">
              <div class="hex hex-white">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>Base en<br>Morelia</span>
              </div>
            </div>
            
            <div class="hex-wrapper pos-2">
              <div class="hex hex-white">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>Asistencia<br>24/7</span>
              </div>
            </div>
            
            <div class="hex-wrapper pos-3">
              <div class="hex hex-white">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                <span>Ingeniería<br>Biomédica</span>
              </div>
            </div>
            
            <div class="hex-wrapper pos-4">
              <div class="hex hex-filled">
                <div class="hex-content-highlight">
                  <span class="huge">12</span>
                  <span class="small">Años de Exp.</span>
                </div>
              </div>
            </div>
          </div>
          <div class="about-accent-bg"></div>
        </div>

        <!-- Text side -->
        <div class="about-text animate-fade-up delay-2">
          <span class="section-label">Quiénes Somos</span>
          <h2 class="section-title">
            ¿Quiénes Somos?
          </h2>
          <p class="section-desc">
            Somos una empresa Mexicana con base en Morelia Michoacán, conformada por ingenieros con especialidad en Ingeniería Biomédica, contamos con experiencia de 12 años en el ramo así como asistencia 24/7.
          </p>
          <p class="section-desc" style="margin-top:24px">
            Nuestra intención es brindar atención rápida y adecuada para cada problema que usted como profesional de la salud pueda tener, con ello garantizamos que usted pueda brindar la mejor atención a sus pacientes.
          </p>

          <router-link to="/nosotros" class="btn-primary" style="margin-top:32px">
            Leer más
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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

/* Visual: Hexagon Cluster */
.about-visual { 
  position: relative; 
}

.hex-cluster {
  position: relative;
  width: 100%;
  height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hex-wrapper {
  position: absolute;
  width: 170px;
  height: 196px; /* Width * 1.1547 (Ratio perfecto del hexágono vertical) */
  filter: drop-shadow(0 15px 25px rgba(236, 77, 17, 0.15));
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  cursor: default;
}

.hex-wrapper:hover {
  transform: translateY(-8px) scale(1.05); /* Efecto de levitación al pasar encima */
  z-index: 10 !important; /* Trae al frente */
}

.hex {
  position: relative;
  width: 100%;
  height: 100%;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 12px;
}

/* White hexes fake borders */
.hex-white {
  background: var(--white);
}

.hex-white::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(239, 136, 7, 0.6), rgba(236, 77, 17, 0.9));
  z-index: -2;
}

.hex-white::after {
  content: '';
  position: absolute;
  inset: 2px; /* Margen interno para simular el borde */
  background: var(--white);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  z-index: -1;
}

.hex-white span {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--gray-800);
  line-height: 1.3;
}

.hex-white svg {
  color: var(--primary);
  opacity: 0.9;
}

/* Filled highlight hex */
.hex-filled {
  background: linear-gradient(135deg, var(--accent), var(--primary));
  color: var(--white);
}

.hex-content-highlight {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--white);
}

.hex-filled .huge {
  font-size: 3.8rem;
  font-weight: 900;
  line-height: 1;
}

.hex-filled .small {
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-top: 4px;
}

/* Hexagon positioning math logic 
   Distancia vertical: altura * 0.75 (147px aprox) 
   Distancia horizontal: mitad (85px) 
*/
.pos-1 { top: 10px; left: 50%; margin-left: -85px; z-index: 2; }
.pos-2 { top: 162px; left: 50%; margin-left: -176px; z-index: 3; }
.pos-3 { top: 162px; left: 50%; margin-left: 6px; z-index: 2; }
.pos-4 { top: 314px; left: 50%; margin-left: -85px; z-index: 4; }

.about-accent-bg {
  position: absolute;
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 500px; height: 500px;
  background: radial-gradient(circle, rgba(239,136,7,0.12) 0%, transparent 65%);
  z-index: 0;
}

/* Text Side */
.section-desc {
  font-size: 1.05rem;
  color: var(--gray-600);
  line-height: 1.7;
}

@media (max-width: 900px) {
  .about-grid { grid-template-columns: 1fr; gap: 48px; }
  .hex-cluster { height: 420px; transform: scale(0.8); }
}
</style>
