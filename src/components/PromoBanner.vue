<template>
  <div class="promo-banner">
    <div class="banner-bg-pattern"></div>
    <div class="container banner-content">
      <div class="banner-text-area">
        <h3 class="banner-title">Conoce todos nuestros equipos</h3>
        <p class="banner-copy">
          Descubre nuestra línea completa de soluciones con calidad certificada. 
          Respaldamos cada uno de tus diagnósticos con la última tecnología biomédica y garantía extendida.
        </p>
      </div>
      <router-link to="/tienda" class="btn-primary banner-btn">
        Ir al Catálogo
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.promo-banner {
  width: 100%;
  /* Gradient combining the brand orange and a lighter orange */
  background: linear-gradient(135deg, var(--primary) 0%, #ff8c42 100%);
  padding: 80px 0; /* Mayor altura para más presencia */
  position: relative;
  overflow: hidden;
  box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
}

/* Optional subtle hexagon pattern overlay for consistency */
.banner-bg-pattern {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='51.96' height='90' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15L25.98 30L51.96 15M25.98 30v30M0 75l25.98-15 25.98 15M0 75v15M0 0v15M51.96 75v15M51.96 0v15' fill='none' stroke='%23ffffff' stroke-width='2' stroke-opacity='0.12'/%3E%3C/svg%3E");
  background-size: 77.94px 135px; /* Panal más grande y vistoso */
  pointer-events: none;
}

.banner-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  text-align: center;
}

.banner-text-area {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 650px; /* Evita que el texto sea una línea infinita delgada */
}

.banner-title {
  font-size: clamp(2.2rem, 5vw, 3rem); /* Título mucho más llamativo */
  font-weight: 800;
  color: var(--white);
  line-height: 1.1;
  margin: 0;
}

.banner-copy {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.6;
  margin: 0;
}

.banner-btn {
  background: var(--white) !important;
  color: var(--primary) !important;
  font-size: 1.15rem;
  font-weight: 800;
  padding: 16px 42px; /* Botón imponente */
  border: none;
  box-shadow: 0 10px 25px rgba(236, 77, 17, 0.4);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.banner-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 35px rgba(236, 77, 17, 0.6);
  background: var(--gray-50) !important;
}

@media (min-width: 900px) {
  .banner-content {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    align-items: center; /* Centrar verticalmente respecto al botón extra alto */
  }
}
</style>
