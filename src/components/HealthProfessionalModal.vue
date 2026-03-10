<template>
  <transition name="modal-fade">
    <div v-if="isVisible" class="modal-overlay">
      <div class="modal-content">
        <div class="modal-header">
          <div class="icon-hexagon">
            <svg
              class="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h2 class="modal-title">Aviso Importante</h2>
        </div>

        <div class="modal-body">
          <p>
            Esta página está orientada a brindar información a personal
            capacitado del sector salud.
          </p>
          <p class="question">¿Pertenece usted al Sector Salud?</p>
        </div>

        <div class="modal-actions">
          <button @click="handleYes" class="btn-primary">
            Sí, continuar
          </button>
          <button @click="handleNo" class="btn-outline">
            No
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isVisible = ref(false);

onMounted(() => {
  const hasAgreed = localStorage.getItem("health_professional_agreed");
  if (!hasAgreed) {
    // Prevent scrolling while modal is open
    document.body.style.overflow = "hidden";
    isVisible.value = true;
  }
});

const handleYes = () => {
  localStorage.setItem("health_professional_agreed", "true");
  document.body.style.overflow = "";
  isVisible.value = false;
};

const handleNo = () => {
  window.location.href = "https://www.facebook.com/Biomedicae/";
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(30, 41, 59, 0.85); /* Darker backdrop using gray-800 based hue */
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-xl);
  width: 90%;
  max-width: 480px;
  padding: 2.5rem 2rem;
  box-shadow: var(--shadow-lg);
  text-align: center;
  position: relative;
  overflow: hidden;
  color: var(--gray-800);
}

.modal-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
}

.modal-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
}

.icon-hexagon {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  width: 64px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
  box-shadow: var(--shadow-glow);
}

.icon-hexagon svg {
  width: 32px;
  height: 32px;
  color: var(--white);
}

.modal-title {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0;
  color: var(--primary);
}

.modal-body p {
  font-size: 1.05rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: var(--gray-600);
}

.modal-body .question {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--gray-800);
  margin-top: 1.5rem;
}

.modal-actions {
  display: flex;
  flex-direction: column; /* Better for mobile */
  gap: 1rem;
  margin-top: 2rem;
}

@media (min-width: 480px) {
  .modal-actions {
    flex-direction: row;
  }
}

.modal-actions > button {
  flex: 1;
  justify-content: center;
}

/* Transitions */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.4s ease;
}

.modal-fade-enter-active .modal-content,
.modal-fade-leave-active .modal-content {
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-content,
.modal-fade-leave-to .modal-content {
  transform: scale(0.9) translateY(20px);
}
</style>
