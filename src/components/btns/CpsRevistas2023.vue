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

import { ErrorType, ErrorSeverity, type AppError } from '@/composables/useErrorHandler'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


const revistas = ref<RevistaData[]>([
  {
    id: 'dic-2023',
    title: 'Diciembre 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Diciembre 2023.webp`,
    pdfUrl: '/assets/pdf/REV Diciembre 2023.pdf',
    date: new Date(2023, 11, 1),
    isNew: true
  },
  {
    id: 'nov-2023',
    title: 'Noviembre 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Noviembre 2023.webp`,
    pdfUrl: '/assets/pdf/REV Noviembre 2023.pdf',
    date: new Date(2023, 10, 1)
  },
  {
    id: 'oct-2023',
    title: 'Octubre 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Octubre 2023.webp`,
    pdfUrl: '/assets/pdf/REV Octubre 2023.pdf',
    date: new Date(2023, 9, 1)
  },
  {
    id: 'sep-2023',
    title: 'Septiembre 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Septiembre 2023.webp`,
    pdfUrl: '/assets/pdf/REV Septiembre 2023.pdf',
    date: new Date(2023, 8, 1)
  },
  {
    id: 'ago-2023',
    title: 'Agosto 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Agosto 2023.webp`,
    pdfUrl: '/assets/pdf/REV Agosto 2023.pdf',
    date: new Date(2023, 7, 1)
  },
  {
    id: 'jul-2023',
    title: 'Julio 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Julio 2023.webp`,
    pdfUrl: '/assets/pdf/REV Julio 2023.pdf',
    date: new Date(2023, 6, 1)
  },
  {
    id: 'jun-2023',
    title: 'Junio 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Junio 2023.webp`,
    pdfUrl: '/assets/pdf/REV Junio 2023.pdf',
    date: new Date(2023, 5, 1),
    featured: true
  },
  {
    id: 'may-2023',
    title: 'Mayo 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Mayo 2023.webp`,
    pdfUrl: '/assets/pdf/REV Mayo 2023.pdf',
    date: new Date(2023, 4, 1)
  },
  {
    id: 'abr-2023',
    title: 'Abril 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Abril 2023.webp`,
    pdfUrl: '/assets/pdf/REV Abril 2023.pdf',
    date: new Date(2023, 3, 1)
  },
  {
    id: 'mar-2023',
    title: 'Marzo 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Marzo 2023.webp`,
    pdfUrl: '/assets/pdf/REV Marzo 2023.pdf',
    date: new Date(2023, 2, 1)
  },
  {
    id: 'feb-2023',
    title: 'Febrero 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Febrero 2023.webp`,
    pdfUrl: '/assets/pdf/REV Febrero 2023.pdf',
    date: new Date(2023, 1, 1)
  },
  {
    id: 'ene-2023',
    title: 'Enero 2023',
    imageSrc: `${assetPrefix}/assets/img-revistas/REV Enero 2023.webp`,
    pdfUrl: '/assets/pdf/REV Enero 2023.pdf',
    date: new Date(2023, 0, 1)
  }
])

// State management
const isLoading = ref(false)
const loadError = ref<AppError | null>(null)

// Performance optimizations
const { preloadImages } = useResourcePreloader()

// Component lifecycle
onMounted(async () => {
  try {
    await loadRevistas()
  } catch (error) {
    await handleError(error as Error)
  }
})

// Methods
const loadRevistas = async () => {
  isLoading.value = true
  loadError.value = null

  try {
    // Simulate loading time for realistic UX
    await new Promise(resolve => setTimeout(resolve, 300))

    // Preload images for better performance
    const imageSrcs = revistas.value.map(r => r.imageSrc)
    await preloadImages(imageSrcs)

  } catch (error) {
    throw error
  } finally {
    isLoading.value = false
  }
}

const handleError = async (error: Error) => {
  const appError: AppError = {
    id: Date.now().toString(),
    type: ErrorType.NETWORK,
    severity: ErrorSeverity.LOW,
    message: error.message,
    timestamp: new Date()
  }

  loadError.value = appError
}

// Event handlers
const onError = (error: AppError) => {
  console.error('Component error:', error)
  handleError(new Error(error.message))
}

const onCriticalError = (error: AppError) => {
  console.error('Critical component error:', error)
  // Could implement fallback UI or redirect
}

const onImageLoad = (revistaId: string) => {
  console.log('Image loaded:', revistaId)
  // Optional: Track successful image loads
}

const onImageError = (revistaId: string) => {
  console.error('Image failed to load:', revistaId)
  // Optional: Handle individual image failures
}

const onRevistaClick = (event: MouseEvent, revista: RevistaData) => {
  console.log('Revista clicked:', revista.title)
  // Optional: Track analytics or handle click events
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
