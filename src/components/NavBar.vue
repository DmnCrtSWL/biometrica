<template>
  <header :class="['navbar', { scrolled: isScrolled }]">
    <div class="nav-inner">
      <!-- Logo -->
      <router-link to="/" class="nav-logo">
        <img
          src="/logo.png"
          alt="BME Biomédica Especializada"
          class="nav-logo-img"
        />
      </router-link>

      <!-- Desktop Nav -->
      <nav class="nav-links">
        <router-link
          v-for="(item, i) in navItems"
          :key="i"
          :to="item.to"
          class="nav-link"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <!-- CTA -->
      <router-link to="/contacto" class="btn-cta"> Contáctanos </router-link>

      <!-- Mobile Toggle -->
      <button
        class="menu-toggle"
        @click="menuOpen = !menuOpen"
        aria-label="Menú"
      >
        <span :class="['bar', { open: menuOpen }]"></span>
        <span :class="['bar', { open: menuOpen }]"></span>
        <span :class="['bar', { open: menuOpen }]"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div :class="['mobile-menu', { open: menuOpen }]">
      <router-link
        v-for="(item, i) in navItems"
        :key="i"
        :to="item.to"
        class="mobile-link"
        @click="menuOpen = false"
      >
        {{ item.label }}
      </router-link>
      <router-link
        to="/contacto"
        class="btn-primary"
        @click="menuOpen = false"
        style="margin-top: 8px"
      >
        Contáctanos
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);
const menuOpen = ref(false);

const navItems = [
  { label: "Inicio", to: "/" },
  { label: "Nosotros", to: "/nosotros" },
  { label: "Tienda", to: "/tienda" },
  { label: "Servicios", to: "/servicios" },
];

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.35s ease;
}

.navbar.scrolled {
  background: white;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding-right: 5%;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--gray-800);
  flex-shrink: 0;
  background-color: transparent;
  background-image: url("/logo-bg.png");
  background-size: contain;
  background-position: left center;
  background-repeat: no-repeat;
  padding: 10px 80px 10px 40px;
  min-width: 380px;
}

.nav-logo-img {
  height: 48px;
  width: auto;
  object-fit: contain;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: auto;
}

.nav-link {
  color: var(--gray-800);
  font-size: 0.9rem;
  font-weight: 600;
  transition: color 0.2s;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--primary);
  transform: scaleX(0);
  transition: transform 0.2s;
  border-radius: 2px;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: var(--primary);
}
.nav-link:hover::after,
.nav-link.router-link-exact-active::after {
  transform: scaleX(1);
}

.btn-cta {
  background: var(--primary);
  color: var(--white);
  font-size: 0.85rem;
  font-weight: 600;
  padding: 10px 24px;
  border-radius: 100px;
  transition: all 0.25s;
  white-space: nowrap;
  flex-shrink: 0;
}

.btn-cta:hover {
  background: var(--accent);
  transform: translateY(-1px);
  box-shadow: 0 4px 20px rgba(239, 136, 7, 0.5);
}

/* Hamburger */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding: 4px;
}

.bar {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--gray-800);
  border-radius: 2px;
  transition: all 0.3s;
}

.bar:nth-child(1).open {
  transform: translateY(7px) rotate(45deg);
}
.bar:nth-child(2).open {
  opacity: 0;
}
.bar:nth-child(3).open {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 20px 24px;
  background: var(--white);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}

.mobile-menu.open {
  max-height: 400px;
}

.mobile-link {
  color: var(--gray-600);
  font-size: 1rem;
  font-weight: 500;
  padding: 10px 0;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid var(--gray-200);
  transition: color 0.2s;
}

.mobile-link:hover,
.mobile-link.router-link-exact-active {
  color: var(--primary);
}

@media (max-width: 860px) {
  .nav-links,
  .btn-cta {
    display: none;
  }
  .menu-toggle {
    display: flex;
  }
  .mobile-menu {
    display: flex;
  }
}
</style>
