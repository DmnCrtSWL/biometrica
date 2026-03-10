<template>
  <footer class="footer">
    <div class="footer-bg"></div>
    <div class="container">
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo">
            <img src="/logo.png" alt="BME Biomédica Especializada" class="footer-logo-img" />
          </div>
          <p class="brand-desc">
            Soluciones biomédicas de alta precisión para profesionales de la salud.
            Tecnología, calidad y respaldo técnico en cada equipo.
          </p>
          <div class="footer-socials">
            <a v-for="s in socials" :key="s.label" :href="s.href" class="social-link" :aria-label="s.label">
              <span v-html="s.icon"></span>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div v-for="col in columns" :key="col.title" class="footer-col">
          <h4 class="col-title">{{ col.title }}</h4>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <router-link :to="link.to">{{ link.label }}</router-link>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h4 class="col-title">Boletín BME</h4>
          <p>Recibe novedades de productos, webinars y actualizaciones técnicas.</p>
          <div class="newsletter-input">
            <input type="email" placeholder="tucorreo@ejemplo.com" />
            <button type="button" aria-label="Suscribirse">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ year }} BME - Biomédica Especializada. Todos los derechos reservados.</p>
        <div class="footer-bottom-links">
          <a href="#">Aviso de Privacidad</a>
          <a href="#">Términos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  },
  {
    label: 'Facebook',
    href: '#',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  },
  {
    label: 'YouTube',
    href: '#',
    icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>',
  },
]

const columns = [
  {
    title: 'Productos',
    links: [
      { label: 'Electrocardiógrafos', to: '/servicios' },
      { label: 'Monitores de Signos', to: '/servicios' },
      { label: 'Analizadores de Lab.', to: '/servicios' },
      { label: 'Ecógrafos', to: '/servicios' },
      { label: 'Imagenología', to: '/servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre Nosotros', to: '/nosotros' },
      { label: 'Ventajas', to: '/servicios' },
      { label: 'Tienda', to: '/tienda' },
      { label: 'Blog Médico', to: '#' },
      { label: 'Contacto', to: '/contacto' },
    ],
  },
]
</script>

<style scoped>
.footer {
  position: relative;
  overflow: hidden;
  background: var(--off-white);
}

.footer-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 80%, rgba(239,136,7,0.05) 0%, transparent 40%),
    radial-gradient(circle at 80% 20%, rgba(239,136,7,0.03) 0%, transparent 30%);
}

.container { position: relative; z-index: 1; }

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding: 64px 0 40px;
  border-bottom: 1px solid var(--gray-200);
}

/* Brand */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.footer-logo-img {
  height: 48px;
  width: auto;
  object-fit: contain;
  filter: brightness(0) invert(36%) sepia(50%) saturate(5460%) hue-rotate(351deg) brightness(97%) contrast(92%);
}

.brand-desc {
  font-size: 0.85rem;
  color: var(--gray-600);
  line-height: 1.7;
  margin-bottom: 24px;
  max-width: 280px;
}

.footer-socials { display: flex; gap: 10px; }

.social-link {
  width: 38px;
  height: 38px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-500);
  transition: var(--transition);
}

.social-link:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--gray-800);
  transform: translateY(-2px);
}

/* Columns */
.col-title {
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--gray-800);
  margin-bottom: 20px;
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col a {
  font-size: 0.85rem;
  color: var(--gray-600);
  transition: color 0.2s;
}

.footer-col a:hover { color: var(--accent); }

/* Newsletter */
.footer-newsletter p {
  font-size: 0.83rem;
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 16px;
}

.newsletter-input {
  display: flex;
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  overflow: hidden;
}

.newsletter-input input {
  flex: 1;
  background: var(--white);
  border: none;
  outline: none;
  padding: 10px 14px;
  font-family: var(--font);
  font-size: 0.83rem;
  color: var(--gray-800);
}

.newsletter-input input::placeholder { color: var(--gray-500); }

.newsletter-input button {
  background: var(--accent);
  border: none;
  padding: 10px 14px;
  color: var(--gray-800);
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
}

.newsletter-input button:hover { background: var(--accent-dark); }

/* Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-bottom p {
  font-size: 0.8rem;
  color: var(--gray-500);
}

.footer-bottom-links {
  display: flex;
  gap: 24px;
}

.footer-bottom-links a {
  font-size: 0.8rem;
  color: var(--gray-500);
  transition: color 0.2s;
}

.footer-bottom-links a:hover { color: var(--accent); }

@media (max-width: 1000px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
}

@media (max-width: 600px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-bottom { flex-direction: column; text-align: center; }
}
</style>
