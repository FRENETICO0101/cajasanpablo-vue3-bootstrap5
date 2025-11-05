<template>
  <div class="lazy-image-container" :class="containerClass">
    <img
      ref="imageRef"
      :src="currentSrc"
      :alt="alt"
      :class="[
        'lazy-image',
        imageClass,
        {
          'is-loading': isLoading,
          'is-loaded': isLoaded,
          'has-error': hasError
        }
      ]"
      :style="imageStyle"
      @load="onImageLoad"
      @error="onImageError"
    />

    <!-- Loading spinner -->
    <div
      v-if="showLoadingSpinner && isLoading"
      class="loading-spinner"
      :class="spinnerClass"
    >
      <div class="spinner"></div>
    </div>

    <!-- Error fallback -->
    <div
      v-if="hasError && !errorImage"
      class="error-fallback"
      :class="errorClass"
    >
      <span>{{ errorText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

import { useLazyImage } from '@/composables/usePerformance'


interface Props {
  src: string
  alt: string
  placeholder?: string
  errorImage?: string
  errorText?: string
  width?: string | number
  height?: string | number
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  borderRadius?: string
  containerClass?: string
  imageClass?: string
  spinnerClass?: string
  errorClass?: string
  showLoadingSpinner?: boolean
  eager?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: `${assetPrefix}/assets/img-carousel/placeholder.jpg`,
  errorText: 'Image failed to load',
  objectFit: 'cover',
  showLoadingSpinner: true,
  eager: false
})

const emit = defineEmits<{
  load: [event: Event]
  error: [event: Event]
  intersecting: [isIntersecting: boolean]
}>()

const imageRef = ref<HTMLImageElement | null>(null)

// Use lazy loading composable
const {
  currentSrc,
  isLoaded,
  isLoading,
  hasError,
  isIntersecting,
  loadImage
} = useLazyImage(imageRef, props.src, {
  placeholder: props.placeholder,
  errorImage: props.errorImage,
  loadingClass: 'loading',
  loadedClass: 'loaded',
  errorClass: 'error'
})

// Computed styles for the image
const imageStyle = computed(() => ({
  width: typeof props.width === 'number' ? `${props.width}px` : props.width,
  height: typeof props.height === 'number' ? `${props.height}px` : props.height,
  objectFit: props.objectFit,
  borderRadius: props.borderRadius
}))

// Event handlers
const onImageLoad = (event: Event) => {
  emit('load', event)
}

const onImageError = (event: Event) => {
  emit('error', event)
}

// Handle eager loading
onMounted(() => {
  if (props.eager) {
    loadImage()
  }
})

// Watch intersection changes and emit to parent
watchEffect(() => {
  emit('intersecting', isIntersecting.value)
})

// Expose methods for parent components
defineExpose({
  loadImage,
  reload: () => {
    isLoaded.value = false
    hasError.value = false
    loadImage()
  }
})
</script>

<script lang="ts">
import { watchEffect } from 'vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''

</script>

<style scoped>
.lazy-image-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.lazy-image {
  display: block;
  width: 100%;
  height: auto;
  transition: opacity 0.3s ease-in-out;
}

.lazy-image.loading {
  opacity: 0.6;
}

.lazy-image.loaded {
  opacity: 1;
}

.lazy-image.error {
  opacity: 0.5;
}

.loading-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #f3f3f3;
  border-top: 3px solid #007bff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.error-fallback {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 0.875rem;
  text-align: center;
  z-index: 1;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive behavior */
@media (max-width: 768px) {
  .spinner {
    width: 24px;
    height: 24px;
    border-width: 2px;
  }

  .error-fallback {
    font-size: 0.75rem;
    padding: 6px 12px;
  }
}
</style>
