<template>
  <CpsCard
    :title="event.title"
    :description="event.description"
    :image-src="event.imageSrc"
    :image-alt="event.imageAlt"
    variant="event"
    :size="size"
    :hoverable="hoverable"
    :elevated="elevated"
    :loading="loading"
    :card-class="cardClass"
    @click="handleCardClick"
  >
    <!-- Custom image slot with loading states -->
    <template #image>
      <CpsLazyImage
        :src="event.imageSrc"
        :alt="event.imageAlt || event.title"
        :placeholder="imagePlaceholder"
        width="100%"
        height="200px"
        object-fit="cover"
        class="event-card__image"
        @load="$emit('imageLoad', $event)"
        @error="$emit('imageError', $event)"
      />
    </template>

    <!-- Event-specific content -->
    <template #default>
      <div class="event-card__content">
        <p v-if="event.description" class="event-card__description">
          {{ event.description }}
        </p>

        <!-- Event metadata -->
        <div v-if="event.date || event.location" class="event-card__meta">
          <div v-if="event.date" class="event-card__date">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
            </svg>
            <span>{{ formatDate(event.date) }}</span>
          </div>

          <div v-if="event.location" class="event-card__location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>{{ event.location }}</span>
          </div>
        </div>

        <!-- Event status/category -->
        <div v-if="event.status || event.category" class="event-card__tags">
          <span v-if="event.status" :class="['event-tag', `event-tag--${event.status}`]">
            {{ formatStatus(event.status) }}
          </span>
          <span v-if="event.category" class="event-tag event-tag--category">
            {{ event.category }}
          </span>
        </div>
      </div>
    </template>

    <!-- Event actions -->
    <template #footer>
      <div class="event-card__actions">
        <button
          v-if="showDetailsButton"
          type="button"
          class="btn btn-primary btn-sm"
          @click="$emit('showDetails', event)"
        >
          {{ detailsButtonText }}
        </button>

        <button
          v-if="showRegisterButton && canRegister"
          type="button"
          class="btn btn-success btn-sm"
          :disabled="!canRegister"
          @click="$emit('register', event)"
        >
          {{ registerButtonText }}
        </button>

        <slot name="actions" :event="event"></slot>
      </div>
    </template>

    <!-- Event status badge -->
    <template #badge>
      <span
        v-if="event.featured || event.status === 'upcoming'"
        :class="['event-badge', {
          'event-badge--featured': event.featured,
          'event-badge--upcoming': event.status === 'upcoming'
        }]"
      >
        {{ event.featured ? 'Destacado' : 'Próximo' }}
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


export interface EventData {
  id: string
  title: string
  description?: string
  imageSrc: string
  imageAlt?: string
  date?: Date | string
  location?: string
  status?: 'upcoming' | 'ongoing' | 'completed' | 'cancelled'
  category?: string
  featured?: boolean
  registrationRequired?: boolean
  registrationOpen?: boolean
  maxAttendees?: number
  currentAttendees?: number
}

interface Props {
  event: EventData
  size?: 'sm' | 'md' | 'lg' | 'xl'
  hoverable?: boolean
  elevated?: boolean
  loading?: boolean
  cardClass?: string
  imagePlaceholder?: string
  showDetailsButton?: boolean
  detailsButtonText?: string
  showRegisterButton?: boolean
  registerButtonText?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  hoverable: true,
  imagePlaceholder: `${assetPrefix}/assets/img-carousel/placeholder.jpg`,
  showDetailsButton: true,
  detailsButtonText: 'Ver más',
  showRegisterButton: false,
  registerButtonText: 'Registrarse'
})

const emit = defineEmits<{
  click: [event: MouseEvent, eventData: EventData]
  showDetails: [eventData: EventData]
  register: [eventData: EventData]
  imageLoad: [event: Event]
  imageError: [event: Event]
}>()

// Computed properties
const canRegister = computed(() => {
  if (!props.event.registrationRequired) return false
  if (!props.event.registrationOpen) return false
  if (props.event.status === 'completed' || props.event.status === 'cancelled') return false

  if (props.event.maxAttendees && props.event.currentAttendees) {
    return props.event.currentAttendees < props.event.maxAttendees
  }

  return true
})

// Helper functions
const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return dateObj.toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatStatus = (status: string): string => {
  const statusMap = {
    upcoming: 'Próximo',
    ongoing: 'En curso',
    completed: 'Finalizado',
    cancelled: 'Cancelado'
  }
  return statusMap[status as keyof typeof statusMap] || status
}

const handleCardClick = (event: MouseEvent) => {
  emit('click', event, props.event)
}
</script>

<style scoped>
.event-card__image {
  transition: transform 0.3s ease;
}

.event-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.event-card__description {
  color: #6c757d;
  line-height: 1.5;
  margin: 0;
}

.event-card__meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #6c757d;
}

.event-card__date,
.event-card__location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.event-card__date svg,
.event-card__location svg {
  flex-shrink: 0;
  opacity: 0.7;
}

.event-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.event-tag {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.event-tag--upcoming {
  background: #e3f2fd;
  color: #1976d2;
}

.event-tag--ongoing {
  background: #e8f5e8;
  color: #388e3c;
}

.event-tag--completed {
  background: #f3e5f5;
  color: #7b1fa2;
}

.event-tag--cancelled {
  background: #ffebee;
  color: #d32f2f;
}

.event-tag--category {
  background: #f5f5f5;
  color: #424242;
}

.event-card__actions {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.event-badge {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.event-badge--featured {
  background: linear-gradient(135deg, #ff6b6b, #feca57);
  color: white;
  box-shadow: 0 2px 4px rgba(255, 107, 107, 0.3);
}

.event-badge--upcoming {
  background: var(--color-primario, #007bff);
  color: white;
}

/* Hover effects */
:deep(.cps-card--event:hover) .event-card__image {
  transform: scale(1.05);
}

/* Dark mode hover effect inherited from parent card */
:deep(.cps-card--event:hover) .event-card__description,
:deep(.cps-card--event:hover) .event-card__meta {
  color: rgba(255, 255, 255, 0.9);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .event-card__actions {
    flex-direction: column;
  }

  .event-card__meta {
    font-size: 0.8rem;
  }

  .event-card__date svg,
  .event-card__location svg {
    width: 14px;
    height: 14px;
  }
}
</style>
