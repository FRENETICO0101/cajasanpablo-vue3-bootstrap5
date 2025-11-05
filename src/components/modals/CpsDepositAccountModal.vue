<template>
  <div 
    class="modal fade" 
    :id="modalId" 
    tabindex="-1" 
    :aria-labelledby="`${modalId}Label`" 
    :aria-hidden="ariaHidden"
    :inert="ariaHidden || undefined"
    role="dialog"
    aria-modal="true"
  >
    <div class="modal-dialog modal-lg modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" :id="`${modalId}Label`">{{ title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="card-ahorro-desc mb-4">
            {{ description }}
          </div>
          <div :id="accordionId" class="accordion accordion-flush">
            <div 
              v-for="(section, index) in accordionSections" 
              :key="index"
              class="accordion-item border-0"
            >
              <h2 :id="`${accordionId}-heading-${index}`" class="accordion-header">
                <button 
                  type="button" 
                  class="accordion-button collapsed card-ahorro-info-btn"
                  data-bs-toggle="collapse" 
                  :data-bs-target="`#${accordionId}-collapse-${index}`"
                  aria-expanded="false" 
                  :aria-controls="`${accordionId}-collapse-${index}`"
                >
                  <b>{{ section.title }}</b>
                </button>
              </h2>
              <div 
                :id="`${accordionId}-collapse-${index}`" 
                class="accordion-collapse collapse"
                :aria-labelledby="`${accordionId}-heading-${index}`" 
                :data-bs-parent="`#${accordionId}`"
              >
                <div class="accordion-body">
                  <div v-if="section.type === 'list'">
                    <ul>
                      <li v-for="(item, itemIndex) in section.content as string[]" :key="itemIndex">
                        {{ item }}
                      </li>
                    </ul>
                    <div v-if="section.notes" class="mt-3">
                      <div v-for="(note, noteIndex) in section.notes" :key="noteIndex" class="mb-2">
                        <span v-if="note.bold" class="fw-bold">{{ note.text }}</span>
                        <span v-else>{{ note.text }}</span>
                        <br v-if="note.break" />
                      </div>
                    </div>
                  </div>
                  <div v-else-if="section.type === 'text'">
                    <template v-for="(text, textIndex) in section.content as AccordionText[]" :key="textIndex">
                      <div class="mb-2">
                        <span v-if="text.bold" class="fw-bold">{{ text.text }}</span>
                        <span v-else>{{ text.text }}</span>
                        <br v-if="text.break" />
                      </div>
                    </template>
                  </div>
                  <div v-else-if="section.type === 'table'" class="table-wrapper">
                    <div class="container scroll">
                      <table cellspacing="0" class="table">
                        <thead>
                          <tr class="table-heads">
                            <th v-for="(header, headerIndex) in section.headers" :key="headerIndex" class="head-item mbr-fonts-style fs-2 display-5">
                              {{ header }}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(row, rowIndex) in section.rows" :key="rowIndex">
                            <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="body-item mbr-fonts-style display-7">
                              <strong v-if="cell.bold">{{ cell.text }}</strong>
                              <span v-else>{{ cell.text }}</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div v-else>
                    {{ section.content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

interface AccordionNote {
  text: string;
  bold?: boolean;
  break?: boolean;
}

interface AccordionText {
  text: string;
  bold?: boolean;
  break?: boolean;
}

interface TableCell {
  text: string;
  bold?: boolean;
}

interface AccordionSection {
  title: string;
  type: 'list' | 'text' | 'table' | 'simple';
  content: string[] | AccordionText[] | string;
  notes?: AccordionNote[];
  headers?: string[];
  rows?: TableCell[][];
}

interface Props {
  modalId: string;
  title: string;
  description: string;
  accordionSections: AccordionSection[];
}

const props = defineProps<Props>();

// Generate unique accordion ID based on modal ID
const accordionId = computed(() => `accordion-${props.modalId}`);

// Reactive property for modal visibility
const isModalVisible = ref(false)

// Computed property for aria-hidden that returns correct type
const ariaHidden = computed(() => !isModalVisible.value)

// Handle Bootstrap modal events to update visibility with proper focus management
const handleModalShow = () => {
  isModalVisible.value = true
}

const handleModalHiding = () => {
  // Modal is starting to hide - ensure no focused elements will cause issues
  const modalElement = document.getElementById(props.modalId)
  if (modalElement) {
    // Find any focused element within the modal and blur it
    const focusedElement = modalElement.querySelector(':focus') as HTMLElement
    if (focusedElement) {
      focusedElement.blur()
    }
  }
}

const handleModalHidden = () => {
  // Modal is completely hidden now, safe to set aria-hidden and inert
  isModalVisible.value = false
}

const handleModalShown = () => {
  // Modal is fully shown, ensure accessibility attributes are correct
  isModalVisible.value = true
}

onMounted(() => {
  // Get the modal element and add Bootstrap event listeners
  const modalElement = document.getElementById(props.modalId)
  if (modalElement) {
    // Use more precise Bootstrap modal events for better accessibility
    modalElement.addEventListener('show.bs.modal', handleModalShow)
    modalElement.addEventListener('shown.bs.modal', handleModalShown)
    modalElement.addEventListener('hide.bs.modal', handleModalHiding)
    modalElement.addEventListener('hidden.bs.modal', handleModalHidden)
  }
})

onUnmounted(() => {
  // Clean up event listeners
  const modalElement = document.getElementById(props.modalId)
  if (modalElement) {
    modalElement.removeEventListener('show.bs.modal', handleModalShow)
    modalElement.removeEventListener('shown.bs.modal', handleModalShown)
    modalElement.removeEventListener('hide.bs.modal', handleModalHiding)
    modalElement.removeEventListener('hidden.bs.modal', handleModalHidden)
  }
})
</script>

<style lang="css" scoped>
/* ===== MODAL ENHANCEMENTS ===== */
.modal-content {
  border: none;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(48, 102, 190, 0.15);
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  overflow: hidden;
  position: relative;
}

.modal-content::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primario) 0%, var(--color-secundario) 50%, var(--color-naranja) 100%);
  z-index: 1;
}

.modal-header {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: white;
  border-bottom: none;
  padding: 1.5rem 2rem;
  border-radius: 20px 20px 0 0;
  position: relative;
  z-index: 2;
}

.modal-title {
  font-weight: 700;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 0;
}

.btn-close {
  filter: invert(1) brightness(2);
  opacity: 0.8;
  transition: all 0.3s ease;
  transform: scale(1.1);
}

.btn-close:hover {
  opacity: 1;
  transform: scale(1.2) rotate(90deg);
}

.modal-body {
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;
}

.modal-footer {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border-top: 1px solid rgba(48, 102, 190, 0.1);
  padding: 1.25rem 2rem;
  border-radius: 0 0 20px 20px;
}

/* ===== DESCRIPTION STYLES ===== */
.card-ahorro-desc {
  font-size: 1.15rem;
  line-height: 1.7;
  color: #495057;
  background: linear-gradient(135deg, rgba(48, 102, 190, 0.05) 0%, rgba(109, 157, 197, 0.05) 100%);
  padding: 1.5rem;
  border-radius: 15px;
  border-left: 4px solid var(--color-primario);
  font-weight: 400;
  letter-spacing: 0.3px;
  position: relative;
  overflow: hidden;
}

.card-ahorro-desc::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%);
  pointer-events: none;
}

/* ===== ACCORDION ENHANCEMENTS ===== */
.accordion {
  --bs-accordion-border-width: 0;
  --bs-accordion-border-radius: 15px;
}

.accordion-item {
  background: transparent;
  margin-bottom: 1rem;
  border-radius: 15px !important;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(48, 102, 190, 0.08);
  transition: all 0.3s ease;
}

.accordion-item:hover {
  box-shadow: 0 8px 25px rgba(48, 102, 190, 0.15);
  transform: translateY(-2px);
}

.card-ahorro-info-btn {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  font-size: 1.05rem;
  font-weight: 700;
  padding: 1.25rem 1.5rem;
  border-radius: 15px;
  color: var(--color-primario);
  margin-bottom: 0;
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-align: left;
  width: 100%;
}

.card-ahorro-info-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.card-ahorro-info-btn:hover::before {
  left: 100%;
}

.card-ahorro-info-btn:hover,
.card-ahorro-info-btn:focus {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: white;
  border-color: var(--color-primario);
  box-shadow: 0 8px 25px rgba(48, 102, 190, 0.3);
  transform: translateY(-2px) scale(1.02);
}

.card-ahorro-info-btn:not(.collapsed) {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(48, 102, 190, 0.3);
}

.accordion-body {
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  color: #495057;
  line-height: 1.6;
  font-size: 1rem;
  border-radius: 0 0 15px 15px;
}

/* ===== LIST STYLES ===== */
.accordion-body ul {
  padding-left: 0;
  list-style: none;
  margin: 0;
}

.accordion-body li {
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(48, 102, 190, 0.1);
  position: relative;
  padding-left: 2rem;
  transition: all 0.3s ease;
}

.accordion-body li:last-child {
  border-bottom: none;
}

.accordion-body li::before {
  content: '✓';
  position: absolute;
  left: 0;
  top: 0.75rem;
  width: 1.5rem;
  height: 1.5rem;
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(48, 102, 190, 0.3);
}

.accordion-body li:hover {
  background: rgba(48, 102, 190, 0.03);
  padding-left: 2.5rem;
}

/* ===== TABLE ENHANCEMENTS ===== */
.table-wrapper {
  overflow-x: auto;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(48, 102, 190, 0.1);
  background: white;
  margin: 1rem 0;
}

.table {
  min-width: 600px;
  margin: 0;
  border-radius: 15px;
  overflow: hidden;
}

.head-item {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: white;
  padding: 1rem;
  text-align: center;
  font-weight: 700;
  font-size: 1rem;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border: none;
  position: relative;
}

.head-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-naranja);
}

.body-item {
  padding: 1rem;
  text-align: center;
  border-bottom: 1px solid #f8f9fa;
  background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
  transition: all 0.3s ease;
  font-weight: 500;
}

.body-item:hover {
  background: linear-gradient(135deg, rgba(48, 102, 190, 0.05) 0%, rgba(109, 157, 197, 0.05) 100%);
  transform: scale(1.02);
}

/* ===== NOTES ENHANCEMENT ===== */
.accordion-body .mt-3 .mb-2 {
  padding: 0.5rem 0;
  border-left: 3px solid var(--color-naranja);
  padding-left: 1rem;
  background: rgba(220, 156, 72, 0.05);
  border-radius: 0 8px 8px 0;
  margin: 0.5rem 0;
  transition: all 0.3s ease;
}

.accordion-body .mt-3 .mb-2:hover {
  background: rgba(220, 156, 72, 0.1);
  padding-left: 1.5rem;
}

/* ===== FOOTER BUTTON ENHANCEMENT ===== */
.modal-footer .btn-secondary {
  background: linear-gradient(135deg, #6c757d 0%, #5a6268 100%);
  border: none;
  border-radius: 25px;
  padding: 0.75rem 2rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  color: white;
}

.modal-footer .btn-secondary::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.modal-footer .btn-secondary:hover::before {
  left: 100%;
}

.modal-footer .btn-secondary:hover {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 8px 25px rgba(48, 102, 190, 0.3);
  color: white;
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .modal-dialog {
    margin: 1rem;
    max-width: calc(100vw - 2rem);
  }
  
  .modal-body {
    padding: 1.5rem;
  }
  
  .modal-header,
  .modal-footer {
    padding: 1.25rem 1.5rem;
  }
  
  .modal-title {
    font-size: 1.25rem;
  }
  
  .card-ahorro-desc {
    font-size: 1rem;
    padding: 1.25rem;
  }
  
  .card-ahorro-info-btn {
    font-size: 1rem;
    padding: 1rem;
  }
  
  .table-wrapper {
    margin: 0.5rem 0;
  }
  
  .head-item,
  .body-item {
    padding: 0.75rem 0.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .modal-title {
    font-size: 1.1rem;
  }
  
  .card-ahorro-desc {
    font-size: 0.95rem;
    line-height: 1.6;
  }
  
  .card-ahorro-info-btn {
    font-size: 0.95rem;
    padding: 0.875rem;
  }
  
  .accordion-body {
    font-size: 0.9rem;
    padding: 1.25rem;
  }
  
  .head-item,
  .body-item {
    padding: 0.5rem 0.25rem;
    font-size: 0.8rem;
  }
}

/* ===== ACCESSIBILITY ENHANCEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(48, 102, 190, 0.25);
  border-color: var(--color-primario);
}

.btn-close:focus {
  box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.5);
}

/* ===== ANIMATION KEYFRAMES ===== */
@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: scale(0.9) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.modal.show .modal-content {
  animation: modalSlideIn 0.3s ease-out;
}

/* ===== UTILITY CLASSES ===== */
.display-5 {
  font-size: 1rem;
  font-weight: 600;
}

.display-6 {
  font-size: 0.9rem;
  font-weight: 500;
}

.display-7 {
  font-size: 0.8rem;
  font-weight: 500;
}
</style>