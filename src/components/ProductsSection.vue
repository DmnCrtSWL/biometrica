<template>
  <section id="productos" class="products">
    <div class="container">
      <!-- Header -->
      <div class="section-header animate-fade-up">
        <span class="section-label">Catálogo de Productos</span>
        <h2 class="section-title">Equipos <span>Clínicos Certificados</span></h2>
        <p class="section-desc">
          Soluciones de diagnóstico de alta precisión para todas las especialidades médicas.
          Cada equipo respaldado con garantía y soporte técnico certificado.
        </p>
      </div>

      <!-- Filter tabs -->
      <div class="filter-tabs animate-fade-up delay-1">
        <button
          v-for="cat in categories"
          :key="cat"
          :class="['tab-btn', { active: activeCategory === cat }]"
          @click="activeCategory = cat">
          {{ cat }}
        </button>
      </div>

      <!-- Products grid -->
      <div class="products-grid">
        <div
          v-for="(product, i) in filteredProducts"
          :key="product.name"
          class="product-card animate-fade-up"
          :class="`delay-${(i % 4) + 1}`">
          <div class="card-badge" v-if="product.badge">{{ product.badge }}</div>
          <div class="product-icon" :style="{ background: product.gradient }">
            <span v-html="product.icon"></span>
          </div>
          <div class="product-tag">{{ product.category }}</div>
          <h3 class="product-name">{{ product.name }}</h3>
          <p class="product-desc">{{ product.desc }}</p>
          <div class="product-features">
            <span v-for="feat in product.features" :key="feat" class="feat-tag">{{ feat }}</span>
          </div>
          <div class="product-footer">
            <a href="#contacto" class="product-cta">Solicitar cotización →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = ['Todos', 'Diagnóstico', 'Monitoreo', 'Laboratorio', 'Imagenología']
const activeCategory = ref('Todos')

const products = [
  {
    name: 'Electrocardiografo Digital ECG-12',
    category: 'Diagnóstico',
    gradient: 'linear-gradient(135deg,#ff6b6b22,#ff6b6b11)',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    desc: 'Electrocardiografo de 12 derivaciones con pantalla táctil y conectividad Wi-Fi. Análisis automático de ritmo cardíaco e interpretación de arritmias.',
    features: ['12 derivaciones', 'Wi-Fi/Bluetooth', 'Batería 8h'],
    badge: 'Más Vendido',
  },
  {
    name: 'Monitor de Signos Vitales MSV-Pro',
    category: 'Monitoreo',
    gradient: 'linear-gradient(135deg,#EF880722,#EF880711)',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#EF8807" stroke-width="1.5" stroke-linecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    desc: 'Monitor multiparamétrico portátil. Registra FC, SpO₂, NIBP, temperatura y respiración en tiempo real con alarmas configurables.',
    features: ['SpO₂', 'NIBP', 'Temperatura'],
    badge: null,
  },
  {
    name: 'Analizador Hematológico AH-5000',
    category: 'Laboratorio',
    gradient: 'linear-gradient(135deg,#7c3aed22,#7c3aed11)',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" stroke-width="1.5"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/><path d="M15.5 9H10v5"/></svg>',
    desc: 'Contador hematológico de 5 partes con reactivos avanzados. Procesa hasta 60 muestras por hora con precisión de clase A.',
    features: ['60 muestras/h', '5 partes', 'Reactivos integrados'],
    badge: 'Nuevo',
  },
  {
    name: 'Ecógrafo Portátil EcoScan-UHD',
    category: 'Imagenología',
    gradient: 'linear-gradient(135deg,#0891b222,#0891b211)',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    desc: 'Ecógrafo de mano con transductor de alta frecuencia. Imagen UHD en tiempo real con modos B, M, Doppler color y doppler espectral.',
    features: ['Doppler color', 'Portátil', '8h batería'],
    badge: null,
  },
  {
    name: 'Tensiómetro Digital TD-PRO',
    category: 'Diagnóstico',
    gradient: 'linear-gradient(135deg,#16a34a22,#16a34a11)',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
    desc: 'Monitor de presión arterial de brazo con pantalla LCD grande. Detección de arritmias, indicador de posición y memoria para 2 usuarios.',
    features: ['Detección arritmias', '60 memorias', 'Bluetooth'],
    badge: null,
  },
  {
    name: 'Oxímetro de Pulso OX-Smart',
    category: 'Monitoreo',
    gradient: 'linear-gradient(135deg,#f59e0b22,#f59e0b11)',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
    desc: 'Oxímetro de pulso con pantalla OLED y alarmas audibles. Medición continua de SpO₂ y frecuencia cardíaca con carga USB-C.',
    features: ['OLED', 'Alarmas', 'USB-C'],
    badge: null,
  },
  {
    name: 'Glucómetro Profesional GL-PRO',
    category: 'Laboratorio',
    gradient: 'linear-gradient(135deg,#dc262622,#dc262611)',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#dc2626" stroke-width="1.5"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>',
    desc: 'Sistema de monitoreo glucémico profesional con tiras reactivas de alta precisión. Calibración automática y conectividad con EMR.',
    features: ['Calibración auto', 'Integración EMR', '500 memorias'],
    badge: null,
  },
  {
    name: 'Rayos X Digital RX-Vision',
    category: 'Imagenología',
    gradient: 'linear-gradient(135deg,#64748b22,#64748b11)',
    icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="3"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',
    desc: 'Sistema de radiografía digital con detector de panel plano. Imagen de alta resolución con dosis reducida al paciente hasta un 80%.',
    features: ['Alta resolución', '-80% radiación', 'DICOM'],
    badge: 'Premium',
  },
]

const filteredProducts = computed(() => {
  if (activeCategory.value === 'Todos') return products
  return products.filter(p => p.category === activeCategory.value)
})
</script>

<style scoped>
.products {
  padding: var(--section-pad);
  background: var(--off-white);
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header .section-desc {
  margin: 0 auto;
}

/* Filter tabs */
.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 48px;
}

.tab-btn {
  font-family: var(--font);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 9px 22px;
  border-radius: 100px;
  border: 2px solid var(--gray-200);
  background: var(--white);
  color: var(--gray-600);
  cursor: pointer;
  transition: var(--transition);
}

.tab-btn:hover    { border-color: var(--accent); color: var(--accent); }
.tab-btn.active   { background: var(--primary); border-color: var(--primary); color: var(--white); }

/* Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}

.product-card {
  position: relative;
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-200);
  padding: 28px;
  transition: var(--transition);
  overflow: hidden;
}

.product-card::before {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--accent), #7FFFD4);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.product-card:hover::before { transform: scaleX(1); }

.card-badge {
  position: absolute;
  top: 20px; right: 20px;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  color: var(--white);
  background: var(--accent);
  padding: 4px 10px;
  border-radius: 100px;
}

.product-icon {
  width: 72px;
  height: 72px;
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.product-tag {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 8px;
}

.product-name {
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 10px;
  line-height: 1.3;
}

.product-desc {
  font-size: 0.83rem;
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: 16px;
}

.product-features {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
}

.feat-tag {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--primary);
  background: var(--gray-100);
  padding: 4px 10px;
  border-radius: 100px;
}

.product-footer { border-top: 1px solid var(--gray-100); padding-top: 16px; }

.product-cta {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--accent);
  transition: gap 0.2s;
}

.product-cta:hover { color: var(--accent-dark); }

@media (max-width: 600px) {
  .products-grid { grid-template-columns: 1fr; }
}
</style>
