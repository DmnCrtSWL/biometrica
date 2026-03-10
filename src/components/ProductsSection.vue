<template>
  <section id="productos" class="products">
    <div class="container">
      <!-- Header -->
      <div class="section-header animate-fade-up">
        <span class="section-label">Catálogo de Productos</span>
        <h2 class="section-title">Nuestros <span>Productos</span></h2>
        <p class="section-desc">
          Contamos con una amplia variedad de productos de diferentes gamas para satisfacer las necesidades de cada uno de nuestros clientes generando ahorros considerables.
        </p>
      </div>

      <!-- Buscador -->
      <div class="search-bar animate-fade-up delay-1">
        <div class="search-input-wrapper">
          <svg class="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Buscar productos por nombre o marca..." 
            class="search-input"
          />
        </div>
      </div>

      <!-- Categorías (Pills) -->
      <div class="filter-tabs animate-fade-up delay-2">
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
          :key="product.id"
          class="product-card animate-fade-up"
          :class="`delay-${(i % 4) + 1}`"
        >
          <div class="product-hex-wrapper">
            <!-- Fondo hexagonal -->
            <div class="hex-bg"></div>
            <!-- Imagen del producto (placeholder) -->
            <img :src="product.image" :alt="product.name" class="product-img" />
          </div>
          
          <div class="product-info">
            <div class="product-meta">
              <span class="product-tag">{{ product.category }}</span>
              <span class="brand-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
                {{ product.brand }}
              </span>
            </div>
            
            <h3 class="product-name">{{ product.name }}</h3>
            
            <!-- Brand CTA -->
            <a :href="getWhatsappLink(product.name)" target="_blank" rel="noopener noreferrer" class="btn-brand">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
              Me interesa
            </a>
          </div>
        </div>
      </div>

      <!-- No results state -->
      <div v-if="filteredProducts.length === 0" class="no-results animate-fade-up">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        <h3>No se encontraron productos</h3>
        <p>Intenta con otra búsqueda o categoría.</p>
        <button class="btn-primary" @click="resetFilters" style="margin-top:16px">Ver todos los productos</button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const categories = [
  'Todos', 
  'Detectores Flat Panel', 
  'Digitalizadores', 
  'Impresoras', 
  'Consumibles',
  'Pantallas y Cassettes',
  'Equipos de Rayos X'
]

const activeCategory = ref('Todos')
const searchQuery = ref('')

const productsData = [
  // Detectores Flat Panel
  { id: 1, name: 'Flat Panel CareRay 750M', category: 'Detectores Flat Panel', brand: 'CareRay', image: '/canis.png' },
  { id: 2, name: 'Flat Panel CareView 1800CW', category: 'Detectores Flat Panel', brand: 'CareView', image: '/canis.png' },
  { id: 3, name: 'Flat Panel Mammo T1012', category: 'Detectores Flat Panel', brand: 'Mammo', image: '/canis.png' },
  { id: 4, name: 'Flat Panel Focus 35C', category: 'Detectores Flat Panel', brand: 'Focus', image: '/canis.png' },
  
  // Digitalizadores
  { id: 5, name: 'Vita Flex CR', category: 'Digitalizadores', brand: 'Vita', image: '/canis.png' },
  { id: 6, name: 'Classic & Elite CR', category: 'Digitalizadores', brand: 'Carestream', image: '/canis.png' },
  { id: 7, name: 'CR Carbon XL', category: 'Digitalizadores', brand: 'Carestream', image: '/canis.png' },
  { id: 8, name: 'CR3', category: 'Digitalizadores', brand: 'No especificada', image: '/canis.png' },
  
  // Impresoras
  { id: 9, name: 'Impresora Térmica EMDY003', category: 'Impresoras', brand: 'No especificada', image: '/canis.png' },
  { id: 10, name: 'Impresora Drypix Lite', category: 'Impresoras', brand: 'Fujifilm', image: '/canis.png' },
  { id: 11, name: 'Impresora Láser DV5700', category: 'Impresoras', brand: 'No especificada', image: '/canis.png' },
  
  // Consumibles
  { id: 12, name: 'Película Térmica EMDF', category: 'Consumibles', brand: 'No especificada', image: '/canis.png' },
  { id: 13, name: 'Película Fujifilm DI-HT', category: 'Consumibles', brand: 'Fujifilm', image: '/canis.png' },
  { id: 14, name: 'Película DryView DVE', category: 'Consumibles', brand: 'Carestream', image: '/canis.png' },
  { id: 15, name: 'Guante de Nitrilo FOREAL', category: 'Consumibles', brand: 'FOREAL', image: '/canis.png' },
  
  // Pantallas y Cassettes
  { id: 16, name: 'Cassettes CR Vita-Flex', category: 'Pantallas y Cassettes', brand: 'Vita', image: '/canis.png' },
  { id: 17, name: 'Cassettes CR Classic / Elite / 975', category: 'Pantallas y Cassettes', brand: 'Carestream', image: '/canis.png' },
  
  // Equipos de Rayos X
  { id: 18, name: 'Portátil JOB HF100', category: 'Equipos de Rayos X', brand: 'JOB', image: '/canis.png' },
  { id: 19, name: 'Sala GXR-S 500mA', category: 'Equipos de Rayos X', brand: 'No especificada', image: '/canis.png' },
  { id: 20, name: 'Portátil EMGX53 (5.3 kW)', category: 'Equipos de Rayos X', brand: 'EMG', image: '/canis.png' },
  { id: 21, name: 'Portátil EMGX100 (10 kW)', category: 'Equipos de Rayos X', brand: 'EMG', image: '/canis.png' },
]

const filteredProducts = computed(() => {
  let filtered = productsData

  if (activeCategory.value !== 'Todos') {
    filtered = filtered.filter(p => p.category === activeCategory.value)
  }

  if (searchQuery.value.trim() !== '') {
    const q = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(q) || 
      p.brand.toLowerCase().includes(q)
    )
  }

  return filtered
})

const resetFilters = () => {
  activeCategory.value = 'Todos'
  searchQuery.value = ''
}

const getWhatsappLink = (productName) => {
  const phone = '521234567890' // Teléfono de contingencia genérico
  const message = `Hola, me interesa obtener más información sobre el producto de su catálogo web: *${productName}*.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
</script>

<style scoped>
.products {
  padding: var(--section-pad);
  background: var(--off-white);
  min-height: 100vh;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-header .section-desc {
  margin: 0 auto;
  max-width: 650px;
  font-size: 1.1rem;
}

/* Search Bar */
.search-bar {
  max-width: 600px;
  margin: 0 auto 32px;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: 18px;
  color: var(--gray-400);
}

.search-input {
  width: 100%;
  padding: 16px 20px 16px 50px;
  font-family: var(--font);
  font-size: 1rem;
  color: var(--gray-800);
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: 100px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  transition: all 0.3s ease;
  outline: none;
}

.search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 4px rgba(239, 136, 7, 0.1);
}

.search-input::placeholder {
  color: var(--gray-400);
}

/* Filter tabs (Pills) */
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

.tab-btn:hover { border-color: var(--accent); color: var(--accent); }
.tab-btn.active { background: var(--primary); border-color: var(--primary); color: var(--white); }

/* Grid */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 32px;
}

.product-card {
  background: var(--white);
  border-radius: var(--radius-lg);
  border: 1px solid var(--gray-200);
  padding: 24px;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(239, 136, 7, 0.4);
}

/* Hexagon Image Wrapper */
.product-hex-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}

.hex-bg {
  position: absolute;
  width: 80%;
  height: 80%;
  background: rgba(239, 136, 7, 0.08); /* Fondo Naranja Brand super clarito */
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  transition: transform 0.4s ease;
  z-index: 1;
}

.product-card:hover .hex-bg {
  transform: scale(1.05) rotate(5deg);
  background: rgba(239, 136, 7, 0.15);
}

.product-img {
  position: relative;
  z-index: 2;
  width: 65%;
  height: 65%;
  object-fit: contain;
  transition: transform 0.4s ease;
  filter: drop-shadow(0 10px 15px rgba(0,0,0,0.05));
}

.product-card:hover .product-img {
  transform: scale(1.1);
}

/* Info */
.product-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.product-tag {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--accent);
}

.brand-tag {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  color: var(--gray-500);
  background: var(--gray-100);
  padding: 2px 8px;
  border-radius: 4px;
}

.product-name {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 24px;
  line-height: 1.3;
  flex-grow: 1;
}

/* Brand CTA Button */
.btn-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--primary); /* Color Naranja Brand */
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 12px 0;
  border-radius: var(--radius);
  text-decoration: none;
  transition: background 0.2s, transform 0.2s;
}

.btn-brand:hover {
  background: var(--accent); /* Naranja más brillante al pasar el ratón */
  transform: translateY(-2px);
}

/* Zero state */
.no-results {
  text-align: center;
  padding: 60px 0;
  color: var(--gray-500);
}

.no-results svg {
  margin-bottom: 16px;
  color: var(--gray-400);
}

.no-results h3 {
  font-size: 1.25rem;
  color: var(--gray-800);
  margin-bottom: 8px;
}

@media (max-width: 600px) {
  .products-grid { grid-template-columns: 1fr; }
}
</style>
