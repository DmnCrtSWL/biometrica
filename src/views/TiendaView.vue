<template>
  <div class="tienda-view">
    <div style="height: 80px; background: var(--off-white);"></div>
    <div class="tienda-content">
      <div class="container animate-fade-up">
        <div class="icon-wrap">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        </div>
        <span class="section-label">Próximamente</span>
        <h2 class="section-title">Tienda <span style="color:var(--accent)">en Desarrollo</span></h2>
        <p class="section-desc">
          Estamos preparando nuestra nueva tienda en línea para que puedas adquirir repuestos, accesorios e insumos médicos directamente.
        </p>
        <router-link to="/" class="btn-primary mt-4">
          Volver al Inicio
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tienda-view {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
}
.tienda-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--section-pad);
  background: var(--off-white);
}
.icon-wrap {
  width: 90px;
  height: 90px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  box-shadow: var(--shadow-sm);
}
.section-desc {
  margin: 0 auto 32px;
}
.mt-4 { margin-top: 24px; }
</style>
