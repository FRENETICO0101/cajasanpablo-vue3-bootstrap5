<template>
  <div
    ref="modalRef"
    class="modal fade"
    :id="`creditModal${credit.id}`"
    tabindex="-1"
    role="dialog"
    aria-modal="true"
    :aria-labelledby="`creditModalLabel${credit.id}`"
    :aria-hidden="isModalHidden"
  >
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`creditModalLabel${credit.id}`">
            {{ credit.name }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            :aria-label="`Cerrar modal de ${credit.name}`"
          ></button>
        </div>
        <div class="modal-body">
          <p class="credit-modal-description">
            {{ credit.detailedDescription || credit.description }}
          </p>

          <!-- Simulator Link (if available) -->
          <div v-if="credit.simulatorUrl" class="text-center mb-4">
            <a
              class="btn btn-primary credit-simulator-btn"
              :href="credit.simulatorUrl"
              target="_blank"
            >
              SIMULADOR DE PAGOS
              <i class="fi fi-sr-credit-card ms-2"></i>
            </a>
          </div>

          <!-- Accordion for Credit Details -->
          <div class="accordion accordion-flush" :id="`accordionFlush${credit.id}`">
            <div
              v-for="(section, index) in credit.sections"
              :key="index"
              class="accordion-item"
            >
              <h2 class="accordion-header" :id="`flush-heading${section.id}`">
                <button
                  type="button"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  class="accordion-button collapsed"
                  :data-bs-target="`#flush-collapse${section.id}`"
                  :aria-controls="`flush-collapse${section.id}`"
                >
                  <b>{{ section.title }}</b>
                </button>
              </h2>
              <div
                class="accordion-collapse collapse"
                :id="`flush-collapse${section.id}`"
                :aria-labelledby="`flush-heading${section.id}`"
                :data-bs-parent="`#accordionFlush${credit.id}`"
              >
                <div class="accordion-body">
                  <ul v-if="Array.isArray(section.content)">
                    <li v-for="(item, itemIndex) in section.content" :key="itemIndex">
                      {{ item }}
                    </li>
                  </ul>
                  <div v-else v-html="section.content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button 
            type="button" 
            class="btn btn-secondary" 
            data-bs-dismiss="modal"
            :aria-label="`Cerrar modal de ${credit.name}`"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface CreditSection {
  id: string
  title: string
  content: string[] | string
}

interface CreditData {
  id: string
  name: string
  icon: string
  description: string
  detailedDescription?: string
  simulatorUrl?: string
  sections: CreditSection[]
}

interface Props {
  credit: CreditData
}

const props = defineProps<Props>()

// Modal state management
const modalRef = ref<HTMLElement>()
const isModalHidden = ref(true)

// Handle modal visibility for accessibility
onMounted(() => {
  if (modalRef.value) {
    // Listen for Bootstrap modal events
    modalRef.value.addEventListener('show.bs.modal', () => {
      isModalHidden.value = false
    })
    
    modalRef.value.addEventListener('hidden.bs.modal', () => {
      isModalHidden.value = true
    })
  }
})

onUnmounted(() => {
  // Clean up event listeners
  if (modalRef.value) {
    modalRef.value.removeEventListener('show.bs.modal', () => {})
    modalRef.value.removeEventListener('hidden.bs.modal', () => {})
  }
})
</script>

<style lang="css" scoped>
/* ===== MODAL OVERRIDES ===== */
.modal-dialog {
  max-width: 900px;
}

.modal-content {
  border: none;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.modal-header {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: var(--color-blanco);
  border-bottom: none;
  padding: 20px 30px;
  position: relative;
}

.modal-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.btn-close {
  background: none;
  border: none;
  color: var(--color-blanco);
  opacity: 0.8;
  font-size: 1.2rem;
  padding: 0;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.btn-close:hover {
  opacity: 1;
  background-color: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-body {
  padding: 30px;
  background-color: #fafafa;
  min-height: 300px;
}

.modal-footer {
  background-color: #f8f9fa;
  border-top: 1px solid #e9ecef;
  padding: 20px 30px;
  justify-content: center;
}

.modal-footer .btn {
  border-radius: 25px;
  padding: 10px 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
}

.modal-footer .btn-secondary {
  background-color: var(--color-gris);
  border-color: var(--color-gris);
  color: #333;
}

.modal-footer .btn-secondary:hover {
  background-color: #ccc;
  border-color: #ccc;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* ===== MODAL CONTENT STYLES ===== */
.credit-modal-description {
  margin-bottom: 30px;
  color: #555;
  font-size: 1.1rem;
  line-height: 1.7;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  border-radius: 15px;
  border-left: 4px solid var(--color-primario);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

/* ===== SIMULATOR BUTTON ===== */
.credit-simulator-btn {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  border: none;
  color: var(--color-blanco);
  font-weight: 700;
  border-radius: 25px;
  padding: 15px 35px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(48, 102, 190, 0.3);
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 10px;
}

.credit-simulator-btn:hover {
  background: linear-gradient(135deg, var(--color-naranja) 0%, #e6a852 100%);
  color: var(--color-blanco);
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(220, 156, 72, 0.4);
  text-decoration: none;
}

.credit-simulator-btn:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(220, 156, 72, 0.3);
}

.credit-simulator-btn i {
  font-size: 1.1rem;
  transition: transform 0.3s ease;
}

.credit-simulator-btn:hover i {
  transform: scale(1.1);
}

/* ===== ACCORDION STYLES ===== */
.accordion {
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
}

.accordion-item {
  border: none;
  background: var(--color-blanco);
}

.accordion-item:not(:last-child) {
  border-bottom: 1px solid #e9ecef;
}

.accordion-button {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  border: none;
  color: #333;
  font-weight: 600;
  padding: 20px 25px;
  font-size: 1.05rem;
  transition: all 0.3s ease;
  position: relative;
}

.accordion-button:not(.collapsed) {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: var(--color-blanco);
  box-shadow: inset 0 0 0 1px var(--color-primario);
}

.accordion-button:focus {
  box-shadow: 0 0 0 3px rgba(48, 102, 190, 0.2);
  border: none;
}

.accordion-button::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23333'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: scale(1.2);
  transition: all 0.3s ease;
}

.accordion-button:not(.collapsed)::after {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23ffffff'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  transform: scale(1.2) rotate(180deg);
}

.accordion-button:hover {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  transform: translateX(5px);
}

.accordion-button:not(.collapsed):hover {
  background: linear-gradient(135deg, var(--color-secundario) 0%, var(--color-primario) 100%);
  transform: translateX(5px);
}

.accordion-body {
  padding: 25px 30px;
  background: linear-gradient(135deg, #fff 0%, #fafafa 100%);
  border-top: 1px solid rgba(48, 102, 190, 0.1);
}

.accordion-body ul {
  margin: 0;
  padding-left: 25px;
  list-style-type: none;
}

.accordion-body li {
  margin-bottom: 12px;
  line-height: 1.6;
  padding-left: 20px;
  position: relative;
  color: #555;
}

.accordion-body li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: var(--color-primario);
  font-weight: bold;
  font-size: 1.1rem;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .modal-dialog {
    margin: 10px;
    max-width: calc(100% - 20px);
  }

  .modal-header,
  .modal-body,
  .modal-footer {
    padding: 20px;
  }

  .modal-title {
    font-size: 1.3rem;
  }

  .credit-modal-description {
    font-size: 1rem;
    padding: 15px;
  }

  .credit-simulator-btn {
    padding: 12px 25px;
    font-size: 0.9rem;
  }

  .accordion-button {
    padding: 15px 20px;
    font-size: 1rem;
  }

  .accordion-body {
    padding: 20px;
  }
}

/* ===== ANIMATION ENHANCEMENTS ===== */
.modal.fade .modal-dialog {
  transition: transform 0.4s ease-out;
  transform: scale(0.8);
}

.modal.show .modal-dialog {
  transform: scale(1);
}

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
.accordion-button:focus-visible {
  outline: 2px solid var(--color-primario);
  outline-offset: 2px;
}

.credit-simulator-btn:focus-visible {
  outline: 2px solid var(--color-naranja);
  outline-offset: 2px;
}
</style>
