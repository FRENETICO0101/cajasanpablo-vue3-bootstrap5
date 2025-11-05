<template>
  <main>
    <!-- Error Boundary for this component -->
    <CpsErrorBoundary @error="onError" @critical-error="onCriticalError">
      <!-- Loading State -->
      <CpsLoadingState
        :loading="isLoading"
        :error="loadError"
        message="Cargando revistas..."
        submessage="Obteniendo las últimas publicaciones disponibles"
        variant="page"
        spinner-type="dots"
        :retry-fn="loadRevistas"
        @retry="loadRevistas"
      />

      <!-- Content -->
      <section v-if="!isLoading && !loadError" class="container">
        <div class="row gap-5 justify-content-around mb-5">
          <!-- Virtual scrolling container for better performance -->
          <CpsRevistaCard
            v-for="revista in revistas"
            :key="revista.id"
            :revista="revista"
            size="md"
            :hoverable="true"
            class="col-12 col-md-6 col-lg-4 col-xl-3"
            @click="onRevistaClick"
            @download="onRevistaDownload"
            @image-load="onImageLoad(revista.id)"
            @image-error="onImageError(revista.id)"
          />
        </div>
      </section>
    </CpsErrorBoundary>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import CpsRevistaCard, { type RevistaData } from '@/components/cards/CpsRevistaCard.vue'

import CpsErrorBoundary from '@/components/ui/CpsErrorBoundary.vue'

import CpsLoadingState from '@/components/ui/CpsLoadingState.vue'

import { useResourcePreloader } from '@/composables/usePerformance'

import { useErrorHandler, ErrorType, ErrorSeverity, type AppError } from '@/composables/useErrorHandler'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


const revistas = ref<RevistaData[]>([
  {
    id: 'oct-2025',
    title: 'Octubre 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/revista_oct_2025.webp`,
    pdfUrl: '/assets/pdf/REV_Octubre_2025.pdf',
    date: new Date(2025, 9, 1), // October 1, 2025
    isNew: true
  },
  {
    id: 'sep-2025',
    title: 'Septiembre 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/revista_septiembre_2025.webp`,
    pdfUrl: '/assets/pdf/REV_Septiembre_2025.pdf',
    date: new Date(2025, 8, 1)
  },
  {
    id: 'ago-2025',
    title: 'Agosto 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/revista_agosto_2025.webp`,
    pdfUrl: '/assets/pdf/REV_Agosto_2025.pdf',
    date: new Date(2025, 7, 1)
  },
  {
    id: 'jul-2025',
    title: 'Julio 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/revista_julio_2025.webp`,
    pdfUrl: '/assets/pdf/REV_Julio_2025.pdf',
    date: new Date(2025, 6, 1)
  },
  {
    id: 'jun-2025',
    title: 'Junio 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/revista_dia_padre_2025.webp`,
    pdfUrl: '/assets/pdf/REV_Junio_2025.pdf',
    date: new Date(2025, 5, 1),
    featured: true
  },
  {
    id: 'may-2025',
    title: 'Mayo 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV_Mayo_2025.webp`,
    pdfUrl: '/assets/pdf/REV_Mayo_2025.pdf',
    date: new Date(2025, 4, 1)
  },
  {
    id: 'abr-2025',
    title: 'Abril 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Abril 2025.webp`,
    pdfUrl: '/assets/pdf/REV_Abril_2025.pdf',
    date: new Date(2025, 3, 1)
  },
  {
    id: 'mar-2025',
    title: 'Marzo 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Marzo 2025.webp`,
    pdfUrl: '/assets/pdf/REV-Marzo-2025 (1).pdf',
    date: new Date(2025, 2, 1)
  },
  {
    id: 'feb-2025',
    title: 'Febrero 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Febrero 2025.webp`,
    pdfUrl: '/assets/pdf/REV-Febrero-2025.pdf',
    date: new Date(2025, 1, 1)
  },
  {
    id: 'ene-2025',
    title: 'Enero 2025',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Enero 2025.webp`,
    pdfUrl: '/assets/pdf/REV Enero 2025.pdf',
    date: new Date(2025, 0, 1)
  }
])

// Performance optimizations
const { preloadImages } = useResourcePreloader()
const loadedImages = ref(new Set<string>())
const errorImages = ref(new Set<string>())

// Loading and error states
const isLoading = ref(true)
const loadError = ref<AppError | null>(null)

// Simulate loading revistas (replace with actual API call)
const loadRevistas = async () => {
  try {
    isLoading.value = true
    loadError.value = null

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Simulate potential error (uncomment to test error handling)
    // if (Math.random() > 0.7) {
    //   throw new Error('Failed to load revistas from server')
    // }

    isLoading.value = false
  } catch (error) {
    isLoading.value = false
    loadError.value = {
      id: `load_error_${Date.now()}`,
      type: ErrorType.NETWORK,
      severity: ErrorSeverity.HIGH,
      message: 'Error al cargar las revistas',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date(),
      source: 'CpsRevistas2025.loadRevistas',
      retry: loadRevistas
    }
  }
}

// Preload critical images (first 3 magazines)
onMounted(async () => {
  await loadRevistas()

  if (!loadError.value) {
    const criticalImages = revistas.value
      .slice(0, 3)
      .map(revista => revista.imageSrc)

    try {
      await preloadImages(criticalImages)
    } catch (error) {
      console.warn('Some critical images failed to preload:', error)
    }
  }
})

// Error handling event handlers
const onError = (error: AppError) => {
  console.log('Component error:', error)
  // Could send to analytics here
}

const onCriticalError = (error: AppError) => {
  console.error('Critical error in revistas component:', error)
  // Could send to error reporting service here
}// Image event handlers
const onImageLoad = (revistaId: string) => {
  loadedImages.value.add(revistaId)
}

const onImageError = (revistaId: string) => {
  errorImages.value.add(revistaId)
  console.warn(`Failed to load image for revista: ${revistaId}`)
}

// Event handlers for revista card
const onRevistaClick = (event: MouseEvent, revista: RevistaData) => {
  console.log('Revista clicked:', revista.title)
}

const onRevistaDownload = (revista: RevistaData) => {
  console.log('Revista download:', revista.title)
  // Optional: Track analytics or show download feedback
}
</script>
<style lang="css" scoped>
.boxed {
  transition: all 0.3s;
}

.boxed:hover {
  transform: scale(1.15);
}

a {
  text-decoration: none;
}

.revistas-subtitle {
  font-size: 2rem;
}

.card-revista {
  height: 430px;
  width: 260px;
  background-color: #f9f9f9;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
}

.revista-link {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.card-revista :deep(.card-img) {
  width: 100%;
  height: auto;
}

.card-revista .card-title {
  font-size: 1.5rem;
  color: #777;
}

.btn-leer-mas {
  border: 2px solid var(--color-secundario);
  height: 40px;
  width: 100px;
  margin: 0 auto;
  padding: 7px 0;
  font-size: 1rem;
  border-radius: 25px;
  font-weight: 700;
  color: var(--color-secundario);
}

.card-revista .btn-leer-mas:hover {
  background-color: var(--color-secundario);
  color: #fff;
  transition: 0.55s;
}

.tiulo-a\f1o {
  color: var(--color-blanco);
  background-color: var(--color-azul-oscuro);
  font-size: 3rem;
}

header {
  position: relative;
  width: 100%;
  height: 70vh;
}

header img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

header .title-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

header .title-block h1 {
  font-size: 3rem;
  text-shadow: 0 0 10px white;
  animation: zoomIn 1s ease-in-out;
}

.redes-sociales {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
}

.redes-sociales a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 1.4rem;
  fill: #fff;
  border-radius: 50%;
  border: 2px solid white;
  animation: flip;
  animation-duration: 1.5s;
  transition: 0.55s;
}

.redes-sociales a:hover {
  background-color: #fff;
  fill: #000;
}

.redes-sociales a svg {
  width: 30px;
}

.contactanos {
  font-size: 2rem;
  color: #fff;
  text-shadow: 1px 1px 20px black;
  text-align: center;
  padding: 15px 0 0;
  overflow: hidden;
}

.contactanos p {
  animation: fadeInRight;
  animation-duration: 1.5s;
}
</style>
