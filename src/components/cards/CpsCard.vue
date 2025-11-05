<template>
  <component
    :is="href ? 'a' : 'div'"
    :href="href"
    :target="href ? linkTarget : undefined"
    :class="[
      'cps-card',
      `cps-card--${variant}`,
      `cps-card--size-${size}`,
      {
        'cps-card--hoverable': hoverable,
        'cps-card--clickable': clickable || href,
        'cps-card--loading': loading,
        'cps-card--elevated': elevated
      },
      cardClass
    ]"
    @click="handleClick"
  >
    <!-- Loading overlay -->
    <div v-if="loading" class="cps-card__loading">
      <div class="spinner"></div>
    </div>

    <!-- Header section -->
    <header v-if="$slots.header || title" class="cps-card__header">
      <slot name="header">
        <h3 v-if="title" class="cps-card__title">{{ title }}</h3>
      </slot>
    </header>

    <!-- Image section -->
    <div v-if="imageSrc || $slots.image" class="cps-card__image">
      <slot name="image">
        <CpsLazyImage
          v-if="imageSrc"
          :src="imageSrc"
          :alt="imageAlt || title || 'Card image'"
          :placeholder="imagePlaceholder"
          :width="imageWidth"
          :height="imageHeight"
          :object-fit="imageObjectFit"
          :eager="imageEager"
          class="cps-card__img"
        />
      </slot>
    </div>

    <!-- Body section -->
    <div v-if="$slots.default || description" class="cps-card__body">
      <slot name="default">
        <p v-if="description" class="cps-card__description">{{ description }}</p>
      </slot>
    </div>

    <!-- Footer/Actions section -->
    <footer v-if="$slots.footer || $slots.actions" class="cps-card__footer">
      <slot name="footer">
        <slot name="actions"></slot>
      </slot>
    </footer>

    <!-- Badge/Tag overlay -->
    <div v-if="badge || $slots.badge" class="cps-card__badge">
      <slot name="badge">
        <span v-if="badge" :class="['badge', `badge-${badgeVariant}`]">{{ badge }}</span>
      </slot>
    </div>
  </component>
</template>

<script setup lang="ts">
import CpsLazyImage from '@/components/ui/CpsLazyImage.vue'

export interface CardProps {
  title?: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  imagePlaceholder?: string
  imageWidth?: string | number
  imageHeight?: string | number
  imageObjectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  imageEager?: boolean
  href?: string
  linkTarget?: '_blank' | '_self' | '_parent' | '_top'
  variant?: 'default' | 'event' | 'revista' | 'service' | 'benefit'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  hoverable?: boolean
  clickable?: boolean
  elevated?: boolean
  loading?: boolean
  badge?: string
  badgeVariant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  cardClass?: string
}

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'default',
  size: 'md',
  linkTarget: '_self',
  hoverable: true,
  badgeVariant: 'primary',
  imageObjectFit: 'cover'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  imageLoad: [event: Event]
  imageError: [event: Event]
}>()

const handleClick = (event: MouseEvent) => {
  if (!props.href) {
    emit('click', event)
  }
}
</script>

<style scoped>
.cps-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: var(--border-radius, 0.5rem);
  overflow: hidden;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
}

/* Card variants */
.cps-card--default {
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cps-card--event {
  border: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
}

.cps-card--revista {
  background: #f9f9f9;
  border-radius: 10px;
  overflow: hidden;
}

.cps-card--service {
  border: 2px solid var(--color-primario, #007bff);
  background: #fff;
}

.cps-card--benefit {
  background: linear-gradient(135deg, var(--color-secundario, #28a745) 0%, var(--color-primario, #007bff) 100%);
  color: white;
}

/* Card sizes */
.cps-card--size-sm {
  max-width: 200px;
}

.cps-card--size-md {
  max-width: 260px;
}

.cps-card--size-lg {
  max-width: 320px;
}

.cps-card--size-xl {
  max-width: 400px;
}

/* Interactive states */
.cps-card--hoverable:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.cps-card--clickable {
  cursor: pointer;
}

.cps-card--elevated {
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

/* Revista specific hover */
.cps-card--revista.cps-card--hoverable:hover {
  transform: scale(1.05);
}

/* Event specific hover */
.cps-card--event.cps-card--hoverable:hover {
  background: #333;
  color: #fff;
}

/* Loading state */
.cps-card--loading {
  pointer-events: none;
}

.cps-card__loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--color-primario, #007bff);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

/* Card sections */
.cps-card__header {
  padding: 1rem 1rem 0.5rem;
}

.cps-card__title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.4;
}

.cps-card__image {
  position: relative;
  overflow: hidden;
}

.cps-card__img {
  width: 100%;
  height: auto;
  display: block;
}

/* Specific image heights for variants */
.cps-card--event .cps-card__img {
  max-height: 200px;
  object-fit: cover;
}

.cps-card--revista .cps-card__img {
  height: auto;
  aspect-ratio: 3/4;
}

.cps-card__body {
  padding: 1rem;
  flex: 1;
}

.cps-card__description {
  margin: 0;
  color: #6c757d;
  line-height: 1.5;
}

.cps-card--benefit .cps-card__description {
  color: rgba(255, 255, 255, 0.9);
}

.cps-card__footer {
  padding: 0.75rem 1rem 1rem;
  margin-top: auto;
}

/* Badge */
.cps-card__badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  z-index: 5;
}

.badge {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.badge-primary {
  background: var(--color-primario, #007bff);
  color: white;
}

.badge-secondary {
  background: var(--color-secundario, #6c757d);
  color: white;
}

.badge-success {
  background: #28a745;
  color: white;
}

.badge-warning {
  background: #ffc107;
  color: #212529;
}

.badge-danger {
  background: #dc3545;
  color: white;
}

.badge-info {
  background: #17a2b8;
  color: white;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .cps-card--size-md,
  .cps-card--size-lg,
  .cps-card--size-xl {
    max-width: 100%;
    width: 100%;
  }

  .cps-card__header,
  .cps-card__body {
    padding: 0.75rem;
  }

  .cps-card__footer {
    padding: 0.5rem 0.75rem 0.75rem;
  }

  .cps-card__title {
    font-size: 1.1rem;
  }

  .spinner {
    width: 24px;
    height: 24px;
    border-width: 2px;
  }
}
</style>
