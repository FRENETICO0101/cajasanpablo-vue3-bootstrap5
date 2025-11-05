<template>
  <CpsCard
    :href="revista.pdfUrl"
    :title="revista.title"
    :image-src="revista.imageSrc"
    :image-alt="revista.imageAlt || `Revista ${revista.title}`"
    variant="revista"
    :size="size"
    :hoverable="hoverable"
    :elevated="elevated"
    :loading="loading"
    :card-class="`revista-card ${cardClass || ''}`"
    :link-target="linkTarget"
    @click="handleCardClick"
  >
    <!-- Custom image with aspect ratio -->
    <template #image>
      <div class="revista-card__image-container">
        <CpsLazyImage
          :src="revista.imageSrc"
          :alt="revista.imageAlt || `Revista ${revista.title}`"
          :placeholder="imagePlaceholder"
          width="100%"
          height="auto"
          object-fit="cover"
          class="revista-card__image"
          @load="$emit('imageLoad', $event)"
          @error="$emit('imageError', $event)"
        />

        <!-- Download overlay on hover -->
        <div v-if="showDownloadOverlay" class="revista-card__overlay">
          <div class="revista-card__download-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
            </svg>
          </div>
          <span class="revista-card__download-text">{{ downloadText }}</span>
        </div>
      </div>
    </template>

    <!-- Revista title and metadata -->
    <template #default>
      <div class="revista-card__content">
        <h3 class="revista-card__title">{{ revista.title }}</h3>

        <!-- Revista metadata -->
        <div v-if="revista.date || revista.edition || revista.pages" class="revista-card__meta">
          <div v-if="revista.date" class="revista-card__date">
            {{ formatDate(revista.date) }}
          </div>

          <div v-if="revista.edition" class="revista-card__edition">
            Edición {{ revista.edition }}
          </div>

          <div v-if="revista.pages" class="revista-card__pages">
            {{ revista.pages }} páginas
          </div>
        </div>

        <!-- Description if provided -->
        <p v-if="revista.description" class="revista-card__description">
          {{ revista.description }}
        </p>

        <!-- File size info -->
        <div v-if="revista.fileSize" class="revista-card__file-info">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
          <span>PDF • {{ revista.fileSize }}</span>
        </div>
      </div>
    </template>

    <!-- Action button -->
    <template #footer>
      <div class="revista-card__actions">
        <a
          :href="revista.pdfUrl"
          :target="linkTarget"
          class="btn btn-primary btn-sm revista-card__btn"
          @click.stop="handleDownload"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"/>
          </svg>
          {{ downloadButtonText }}
        </a>

        <slot name="actions" :revista="revista"></slot>
      </div>
    </template>

    <!-- Featured/New badge -->
    <template #badge>
      <span
        v-if="revista.featured || revista.isNew"
        :class="['revista-badge', {
          'revista-badge--featured': revista.featured,
          'revista-badge--new': revista.isNew
        }]"
      >
        {{ revista.featured ? 'Destacada' : 'Nuevo' }}
      </span>
    </template>
  </CpsCard>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import CpsCard from '@/components/cards/CpsCard.vue'
import CpsLazyImage from '@/components/ui/CpsLazyImage.vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


export interface RevistaData {
  id: string
  title: string
  imageSrc: string
  imageAlt?: string
  pdfUrl: string
  date?: Date | string
  edition?: string | number
  pages?: number
  description?: string
  fileSize?: string
  featured?: boolean
  isNew?: boolean
  category?: string
}

interface Props {
  revista: RevistaData
  size?: 'sm' | 'md' | 'lg' | 'xl'
  hoverable?: boolean
  elevated?: boolean
  loading?: boolean
  cardClass?: string
  imagePlaceholder?: string
  linkTarget?: '_blank' | '_self' | '_parent' | '_top'
  downloadButtonText?: string
  downloadText?: string
  showDownloadOverlay?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  hoverable: true,
  imagePlaceholder: '/assets/img-revistas/placeholder.jpg',
  linkTarget: '_blank',
  downloadButtonText: 'Leer más',
  downloadText: 'Descargar PDF',
  showDownloadOverlay: true
})

const emit = defineEmits<{
  click: [event: MouseEvent, revistaData: RevistaData]
  download: [revistaData: RevistaData]
  imageLoad: [event: Event]
  imageError: [event: Event]
}>()

// Computed properties
const imagePlaceholder = computed(() => `${assetPrefix}${props.imagePlaceholder}`)
const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long'
  })
}

const handleCardClick = (event: MouseEvent) => {
  emit('click', event, props.revista)
}

const handleDownload = () => {
  emit('download', props.revista)

  // Optional: Track download analytics
  if (typeof gtag !== 'undefined') {
    gtag('event', 'download', {
      event_category: 'revista',
      event_label: props.revista.title,
      value: 1
    })
  }
}
</script>

<style scoped>
.revista-card {
  height: 430px;
  width: 260px;
}

.revista-card__image-container {
  position: relative;
  overflow: hidden;
  aspect-ratio: 3/4;
}

.revista-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.revista-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  text-align: center;
}

.revista-card:hover .revista-card__overlay {
  opacity: 1;
}

.revista-card__download-icon {
  margin-bottom: 0.5rem;
}

.revista-card__download-text {
  font-weight: 500;
  font-size: 0.875rem;
}

.revista-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
}

.revista-card__title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;
  margin: 0;
  line-height: 1.3;
}

.revista-card__meta {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: #666;
}

.revista-card__description {
  font-size: 0.875rem;
  color: #666;
  line-height: 1.4;
  margin: 0;
  flex: 1;
}

.revista-card__file-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #888;
  margin-top: auto;
}

.revista-card__actions {
  display: flex;
  justify-content: center;
  padding: 0.75rem 0;
}

.revista-card__btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 25px;
  font-weight: 700;
  min-width: 100px;
  justify-content: center;
  text-decoration: none;
  border: 2px solid var(--color-secundario, #28a745);
  background: transparent;
  color: var(--color-secundario, #28a745);
  transition: all 0.3s ease;
}

.revista-card__btn:hover {
  background-color: var(--color-secundario, #28a745);
  color: #fff;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
}

.revista-badge {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.revista-badge--featured {
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  color: white;
  box-shadow: 0 2px 4px rgba(255, 107, 107, 0.3);
}

.revista-badge--new {
  background: var(--color-secundario, #28a745);
  color: white;
}

/* Hover effect for the card */
.revista-card:hover {
  transform: scale(1.05);
}

.revista-card:hover .revista-card__image {
  transform: scale(1.1);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .revista-card {
    height: auto;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
  }

  .revista-card__image-container {
    aspect-ratio: 3/4;
    max-height: 250px;
  }

  .revista-card__title {
    font-size: 1rem;
  }

  .revista-card__meta {
    font-size: 0.75rem;
  }

  .revista-card__btn {
    font-size: 0.875rem;
    min-width: 90px;
  }
}

@media (max-width: 480px) {
  .revista-card {
    max-width: 240px;
  }

  .revista-card__image-container {
    max-height: 200px;
  }
}
</style>
