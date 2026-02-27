<template>
  <section id="contacto" class="contact">
    <div class="contact-bg"></div>
    <div class="container">
      <div class="contact-grid">
        <!-- Info side -->
        <div class="contact-info animate-fade-up">
          <span class="section-label">Contáctanos</span>
          <h2 class="section-title" style="color:var(--primary)">
            ¿Tienes <span style="color:var(--accent)">preguntas?</span><br>
            Estamos aquí.
          </h2>
          <p class="section-desc" style="color:var(--gray-600); margin-bottom:40px">
            Nuestro equipo de asesores especializados está listo para ayudarte a encontrar el equipo ideal para tu institución.
          </p>

          <div class="contact-details">
            <div v-for="detail in details" :key="detail.label" class="detail-item">
              <div class="detail-icon">
                <span v-html="detail.icon"></span>
              </div>
              <div>
                <div class="detail-label">{{ detail.label }}</div>
                <div class="detail-value">{{ detail.value }}</div>
              </div>
            </div>
          </div>

          <div class="social-row">
            <a v-for="s in socials" :key="s.label" :href="s.href" class="social-btn" :aria-label="s.label">
              <span v-html="s.icon"></span>
            </a>
          </div>
        </div>

        <!-- Form side -->
        <div class="contact-form-wrap animate-fade-up delay-2">
          <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
            <div v-if="submitted" class="form-success">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="9 12 12 15 16 9"/></svg>
              <h3>¡Mensaje Enviado!</h3>
              <p>{{ successMsg }}</p>
              <button type="button" class="btn-primary" @click="resetForm">Enviar otro mensaje</button>
            </div>

            <template v-else>
              <h3 class="form-title">Envíanos un mensaje</h3>

              <div class="form-row">
                <div class="form-group">
                  <label for="contact-name">Nombre completo *</label>
                  <input
                    id="contact-name"
                    v-model="form.name"
                    type="text"
                    placeholder="Dr. Juan García"
                    :class="{ error: errors.name }"
                    @blur="validateField('name')"
                  />
                  <span class="err-msg" v-if="errors.name">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                  <label for="contact-email">Correo electrónico *</label>
                  <input
                    id="contact-email"
                    v-model="form.email"
                    type="email"
                    placeholder="juan@clinica.com"
                    :class="{ error: errors.email }"
                    @blur="validateField('email')"
                  />
                  <span class="err-msg" v-if="errors.email">{{ errors.email }}</span>
                </div>
              </div>

              <div class="form-group">
                <label for="contact-phone">Teléfono</label>
                <input
                  id="contact-phone"
                  v-model="form.phone"
                  type="tel"
                  placeholder="+52 55 1234 5678"
                />
              </div>

              <div class="form-group">
                <label for="contact-message">Mensaje *</label>
                <textarea
                  id="contact-message"
                  v-model="form.message"
                  rows="5"
                  placeholder="Cuéntanos sobre tu institución y los equipos que necesitas..."
                  :class="{ error: errors.message }"
                  @blur="validateField('message')"
                ></textarea>
                <span class="err-msg" v-if="errors.message">{{ errors.message }}</span>
              </div>

              <div v-if="errorMsg" class="form-error-banner">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                {{ errorMsg }}
              </div>

              <button
                type="submit"
                class="btn-primary submit-btn"
                :disabled="loading">
                <span v-if="loading" class="spinner"></span>
                <span v-else>Enviar Mensaje</span>
                <svg v-if="!loading" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </template>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

const form = reactive({ name: '', email: '', phone: '', message: '' })
const errors = reactive({ name: '', email: '', message: '' })
const loading = ref(false)
const submitted = ref(false)
const errorMsg = ref('')
const successMsg = ref('')

const details = [
  {
    label: 'Teléfono',
    value: '+52 55 8000 1234',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.16 6.16l1.27-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  },
  {
    label: 'Correo',
    value: 'contacto@bme-mx.com',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  },
  {
    label: 'Dirección',
    value: 'Av. Insurgentes Sur 1602, CDMX',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  },
  {
    label: 'Horario',
    value: 'Lun – Vie: 8:00 AM – 6:00 PM',
    icon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  },
]

const socials = [
  {
    label: 'LinkedIn',
    href: '#',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  },
  {
    label: 'Facebook',
    href: '#',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  },
  {
    label: 'WhatsApp',
    href: '#',
    icon: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  },
]

const validateField = (field) => {
  if (field === 'name') {
    errors.name = form.name.trim() ? '' : 'El nombre es requerido.'
  }
  if (field === 'email') {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    errors.email = re.test(form.email) ? '' : 'Ingresa un correo válido.'
  }
  if (field === 'message') {
    errors.message = form.message.trim().length > 10 ? '' : 'El mensaje es muy corto.'
  }
}

const validateAll = () => {
  validateField('name')
  validateField('email')
  validateField('message')
  return !errors.name && !errors.email && !errors.message
}

const handleSubmit = async () => {
  errorMsg.value = ''
  if (!validateAll()) return

  loading.value = true
  try {
    const res = await axios.post('http://localhost:3001/api/contact', { ...form })
    successMsg.value = res.data.message
    submitted.value = true
  } catch (err) {
    errorMsg.value = err.response?.data?.error || 'Error al enviar. Intenta de nuevo.'
  } finally {
    loading.value = false
  }
}

const resetForm = () => {
  Object.assign(form, { name: '', email: '', phone: '', message: '' })
  Object.assign(errors, { name: '', email: '', message: '' })
  submitted.value = false
  errorMsg.value = ''
}
</script>

<style scoped>
.contact {
  position: relative;
  padding: var(--section-pad);
  overflow: hidden;
}

.contact-bg {
  position: absolute;
  inset: 0;
  background: var(--off-white);
  z-index: 0;
}

.contact-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 70% 50%, rgba(239,136,7,0.07) 0%, transparent 60%);
}

.container { position: relative; z-index: 1; }

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

/* Info */
.contact-info { padding-top: 20px; }

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 32px;
}

.detail-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
}

.detail-icon {
  width: 44px;
  height: 44px;
  background: rgba(239,136,7,0.1);
  border: 1px solid rgba(239,136,7,0.2);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent);
  flex-shrink: 0;
}

.detail-label {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--gray-500);
  margin-bottom: 2px;
}

.detail-value {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--gray-800);
}

.social-row { display: flex; gap: 12px; }

.social-btn {
  width: 44px;
  height: 44px;
  background: var(--gray-100);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-600);
  transition: var(--transition);
}

.social-btn:hover {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--white);
  transform: translateY(-2px);
}

/* Form */
.contact-form-wrap {
  background: var(--white);
  border-radius: var(--radius-xl);
  padding: 40px;
  box-shadow: var(--shadow-lg);
}

.form-title {
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;
}

.form-group label {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--gray-600);
}

.form-group input,
.form-group textarea {
  font-family: var(--font);
  font-size: 0.9rem;
  color: var(--gray-800);
  background: var(--off-white);
  border: 1.5px solid var(--gray-200);
  border-radius: var(--radius);
  padding: 12px 14px;
  transition: border-color 0.2s, box-shadow 0.2s;
  outline: none;
  resize: vertical;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(239,136,7,0.12);
  background: var(--white);
}

.form-group input.error,
.form-group textarea.error {
  border-color: var(--error);
}

.err-msg {
  font-size: 0.75rem;
  color: var(--error);
  font-weight: 500;
}

.form-error-banner {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--error);
  background: rgba(239,68,68,0.06);
  border: 1px solid rgba(239,68,68,0.2);
  border-radius: var(--radius);
  padding: 10px 14px;
  margin-bottom: 16px;
}

.submit-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 4px;
  font-size: 1rem;
}

.spinner {
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255,255,255,0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
  display: inline-block;
}

@keyframes spin { to { transform: rotate(360deg); } }

/* Success */
.form-success {
  text-align: center;
  padding: 32px 0;
}

.form-success svg { margin: 0 auto 16px; }
.form-success h3 {
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 8px;
}
.form-success p {
  color: var(--gray-600);
  font-size: 0.9rem;
  margin-bottom: 24px;
}

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
