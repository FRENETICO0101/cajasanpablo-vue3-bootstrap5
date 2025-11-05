<template>
  <div class="credit-card-wrapper">
    <!-- Credit Card using CpsCard -->
    <CpsCard
      variant="service"
      size="md"
      :hoverable="true"
      :elevated="false"
      :clickable="false"
      :card-class="'col-12 col-sm-6 col-lg-3 card-credito'"
      :image-src="credit.icon"
      :image-alt="`icono ${credit.name}`"
      :image-object-fit="'contain'"
      :image-eager="true"
      :image-width="200"
      :image-height="120"
      :image-placeholder="'/placeholder-icon.svg'"
      :error-text="'Icono no disponible'"
      :description="credit.description"
      @image-error="handleImageError"
    >
      <template #actions>
        <button
          type="button"
          class="card-credito-btn"
          data-bs-toggle="modal"
          :data-bs-target="`#creditModal${credit.id}`"
          :id="`${credit.id}Btn`"
          @click="handleModalClick"
        >
          {{ buttonText }}
        </button>
      </template>
    </CpsCard>
  </div>

  <!-- Credit Info Modal Component -->
  <CpsCreditModal :credit="credit" />
</template>

<script setup lang="ts">
import CpsCard from '@/components/cards/CpsCard.vue'
import CpsCreditModal from '@/components/modals/CpsCreditModal.vue'

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
  buttonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  buttonText: 'Ver detalles'
})

// Ensure Bootstrap modal works by handling click events
const handleModalClick = () => {
  // Let Bootstrap handle it first via data attributes
  // If that fails, we'll use programmatic approach
  setTimeout(() => {
    const modalElement = document.getElementById(`creditModal${props.credit.id}`)
    if (modalElement && !modalElement.classList.contains('show')) {
      // Bootstrap data attributes didn't work, try programmatic approach
      if (typeof window !== 'undefined' && (window as Window & { bootstrap?: { Modal: new (element: HTMLElement) => { show(): void } } }).bootstrap?.Modal) {
        const modal = new (window as Window & { bootstrap: { Modal: new (element: HTMLElement) => { show(): void } } }).bootstrap.Modal(modalElement)
        modal.show()
      }
    }
  }, 50)
}

// Handle image loading errors
const handleImageError = (event: Event) => {
  console.warn(`Failed to load image for credit: ${props.credit.name}`, event)
  // Could emit an event to parent component or show fallback
}
</script>

<style lang="css" scoped>
/* ===== COMPONENT WRAPPER ===== */
.credit-card-wrapper {
  display: contents;
}

/* ===== CREDIT CARD OVERRIDES FOR CpsCard ===== */
.credit-card-wrapper :deep(.cps-card.card-credito) {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 400px;
  padding: 40px 20px 20px 20px;
  margin-bottom: 50px;
  background-color: #e9ecef;
  border-radius: 25px;
  text-align: center;
  transition: all 0.3s ease;
  border: none;
}

.credit-card-wrapper :deep(.cps-card__image) {
  margin: 15px 0 25px 0;
  position: relative;
  overflow: visible;
  min-height: 140px;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 15px 10px;
}

.credit-card-wrapper :deep(.cps-card__img) {
  width: auto !important;
  height: auto !important;
  max-height: 120px;
  max-width: 100% !important;
  object-fit: contain !important;
  object-position: center !important;
  transition: opacity 0.3s ease;
  margin: 0 auto;
  display: block;
}

.credit-card-wrapper :deep(.cps-card__body) {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: 20px 0;
  text-align: center;
}

.credit-card-wrapper :deep(.cps-card__description) {
  color: #333;
  line-height: 1.5;
  margin: 0;
}

.credit-card-wrapper :deep(.cps-card__footer) {
  margin-top: auto;
  padding: 0;
  background: none;
  border: none;
}

.card-credito-btn {
  width: 100%;
  padding: 12px 24px;
  background-color: var(--color-primario);
  color: white;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
}

.card-credito-btn:hover {
  background-color: var(--color-naranja);
  color: white;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .credit-card-wrapper :deep(.cps-card.card-credito) {
    margin-bottom: 30px;
    min-height: 380px;
    padding: 30px 15px 15px 15px;
  }

  .credit-card-wrapper :deep(.cps-card__image) {
    margin: 20px 0 20px 0;
    min-height: 130px;
    background-color: #f8f9fa;
    padding: 15px 10px;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    overflow: visible;
  }

  .credit-card-wrapper :deep(.cps-card__img) {
    height: auto !important;
    max-height: 100px;
    width: auto !important;
    max-width: 100% !important;
    object-fit: contain !important;
    object-position: center !important;
    margin: 0 auto;
    display: block;
  }

  .credit-card-wrapper :deep(.cps-card__body) {
    margin: 15px 0;
    padding: 0 10px;
  }

  .credit-card-wrapper :deep(.cps-card__description) {
    font-size: 0.95rem;
    line-height: 1.4;
  }

  .card-credito-btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
}

/* ===== EXTRA SMALL DEVICES ===== */
@media (max-width: 480px) {
  .credit-card-wrapper :deep(.cps-card.card-credito) {
    min-height: 350px;
    padding: 25px 10px 10px 10px;
    margin-bottom: 20px;
  }

  .credit-card-wrapper :deep(.cps-card__image) {
    margin: 15px 0 15px 0;
    min-height: 110px;
    padding: 12px 8px;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    overflow: visible;
  }

  .credit-card-wrapper :deep(.cps-card__img) {
    height: auto !important;
    max-height: 80px;
    width: auto !important;
    max-width: 100% !important;
    object-fit: contain !important;
    object-position: center !important;
    margin: 0 auto;
    display: block;
  }

  .credit-card-wrapper :deep(.cps-card__body) {
    margin: 10px 0;
    padding: 0 5px;
  }

  .credit-card-wrapper :deep(.cps-card__description) {
    font-size: 0.9rem;
    line-height: 1.3;
  }

  .card-credito-btn {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
}

/* ===== IMAGE LOADING STATES ===== */
.credit-card-wrapper :deep(.lazy-image-container) {
  position: relative;
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  overflow: visible;
}

.credit-card-wrapper :deep(.lazy-image.is-loading) {
  opacity: 0.5;
}

.credit-card-wrapper :deep(.lazy-image.is-loaded) {
  opacity: 1;
}

.credit-card-wrapper :deep(.lazy-image.has-error) {
  opacity: 0.3;
}

.credit-card-wrapper :deep(.loading-spinner) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.credit-card-wrapper :deep(.error-fallback) {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #666;
  font-size: 0.8rem;
}

/* ===== MOBILE IMAGE CENTERING FIX ===== */
@media (max-width: 768px) {
  .credit-card-wrapper :deep(.cps-card__image .lazy-image-container) {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center;
  }

  .credit-card-wrapper :deep(.cps-card__image .lazy-image) {
    width: auto !important;
    height: auto !important;
    max-width: 100% !important;
    max-height: 100% !important;
    margin: 0 auto !important;
    display: block !important;
  }
}

@media (max-width: 480px) {
  .credit-card-wrapper :deep(.cps-card__image .lazy-image-container) {
    width: 100% !important;
    height: 100% !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    text-align: center;
  }
}

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
  .credit-card-wrapper :deep(.cps-card__img) {
    transition: none;
  }
}
</style>
