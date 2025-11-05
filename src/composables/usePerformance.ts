import { ref, onMounted, onUnmounted, type Ref } from 'vue'

/**
 * Intersection Observer options for different use cases
 */
export interface IntersectionOptions {
  rootMargin?: string
  threshold?: number | number[]
  root?: Element | null
}

/**
 * Image lazy loading configuration
 */
export interface LazyImageOptions {
  placeholder?: string
  errorImage?: string
  loadingClass?: string
  loadedClass?: string
  errorClass?: string
}

/**
 * Composable for handling intersection observer
 * Useful for lazy loading, animations, and infinite scroll
 */
export function useIntersectionObserver(
  target: Ref<Element | null>,
  callback: IntersectionObserverCallback,
  options: IntersectionOptions = {}
) {
  const isIntersecting = ref(false)
  const isSupported = ref(false)
  let observer: IntersectionObserver | null = null

  const defaultOptions: IntersectionOptions = {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  }

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  }

  const observe = () => {
    if (!target.value || !isSupported.value) return

    observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      isIntersecting.value = entry.isIntersecting
      callback(entries, observer!)
    }, defaultOptions)

    observer.observe(target.value)
  }

  onMounted(() => {
    isSupported.value = typeof IntersectionObserver !== 'undefined'
    if (isSupported.value && target.value) {
      observe()
    }
  })

  onUnmounted(cleanup)

  return {
    isIntersecting,
    isSupported,
    observe,
    cleanup
  }
}

/**
 * Composable for lazy loading images with intersection observer
 */
export function useLazyImage(
  imageRef: Ref<HTMLImageElement | null>,
  src: string,
  options: LazyImageOptions = {}
) {
  const isLoaded = ref(false)
  const isLoading = ref(false)
  const hasError = ref(false)
  const currentSrc = ref(options.placeholder || '')

  const {
    placeholder = '',
    errorImage = '',
    loadingClass = 'loading',
    loadedClass = 'loaded',
    errorClass = 'error'
  } = options

  const loadImage = () => {
    if (isLoaded.value || isLoading.value) return

    isLoading.value = true
    const img = new Image()

    img.onload = () => {
      currentSrc.value = src
      isLoaded.value = true
      isLoading.value = false

      if (imageRef.value) {
        imageRef.value.classList.remove(loadingClass)
        imageRef.value.classList.add(loadedClass)
      }
    }

    img.onerror = () => {
      hasError.value = true
      isLoading.value = false

      if (errorImage) {
        currentSrc.value = errorImage
      }

      if (imageRef.value) {
        imageRef.value.classList.remove(loadingClass)
        imageRef.value.classList.add(errorClass)
      }
    }

    img.src = src
  }

  // Set up intersection observer to load image when it comes into view
  const { isIntersecting } = useIntersectionObserver(
    imageRef,
    (entries) => {
      const [entry] = entries
      if (entry.isIntersecting && !isLoaded.value) {
        loadImage()
      }
    },
    { rootMargin: '100px' }
  )

  // Set initial placeholder
  onMounted(() => {
    if (imageRef.value && placeholder) {
      currentSrc.value = placeholder
      imageRef.value.classList.add(loadingClass)
    }
  })

  return {
    currentSrc,
    isLoaded,
    isLoading,
    hasError,
    isIntersecting,
    loadImage
  }
}

/**
 * Composable for virtual scrolling large lists
 * Useful for magazine grids or large data sets
 */
export interface VirtualScrollOptions {
  itemHeight: number
  containerHeight: number
  overscan?: number
}

export function useVirtualScroll<T>(
  items: Ref<T[]>,
  options: VirtualScrollOptions
) {
  const scrollTop = ref(0)
  const containerRef = ref<HTMLElement | null>(null)

  const {
    itemHeight,
    containerHeight,
    overscan = 5
  } = options

  const visibleItemsCount = Math.ceil(containerHeight / itemHeight)

  const startIndex = ref(0)
  const endIndex = ref(visibleItemsCount)

  const totalHeight = ref(0)
  const offsetY = ref(0)

  const updateVisibleRange = () => {
    const start = Math.floor(scrollTop.value / itemHeight)
    const visibleStart = Math.max(0, start - overscan)
    const visibleEnd = Math.min(
      items.value.length,
      start + visibleItemsCount + overscan
    )

    startIndex.value = visibleStart
    endIndex.value = visibleEnd
    offsetY.value = visibleStart * itemHeight
    totalHeight.value = items.value.length * itemHeight
  }

  const onScroll = (event: Event) => {
    const target = event.target as HTMLElement
    scrollTop.value = target.scrollTop
    updateVisibleRange()
  }

  const visibleItems = ref<Array<{ item: T; index: number }>>([])

  const updateVisibleItems = () => {
    visibleItems.value = items.value
      .slice(startIndex.value, endIndex.value)
      .map((item, i) => ({
        item,
        index: startIndex.value + i
      }))
  }

  // Watch for changes and update
  onMounted(() => {
    updateVisibleRange()
    updateVisibleItems()
  })

  return {
    containerRef,
    visibleItems,
    totalHeight,
    offsetY,
    startIndex,
    endIndex,
    onScroll,
    updateVisibleRange,
    updateVisibleItems
  }
}

/**
 * Composable for preloading critical resources
 */
export function useResourcePreloader() {
  const preloadedResources = ref(new Set<string>())
  const loadingResources = ref(new Set<string>())

  const preloadImage = (src: string): Promise<void> => {
    if (preloadedResources.value.has(src)) {
      return Promise.resolve()
    }

    if (loadingResources.value.has(src)) {
      return Promise.resolve()
    }

    loadingResources.value.add(src)

    return new Promise((resolve, reject) => {
      const img = new Image()

      img.onload = () => {
        preloadedResources.value.add(src)
        loadingResources.value.delete(src)
        resolve()
      }

      img.onerror = () => {
        loadingResources.value.delete(src)
        reject(new Error(`Failed to preload image: ${src}`))
      }

      img.src = src
    })
  }

  const preloadImages = async (urls: string[]): Promise<void> => {
    try {
      await Promise.all(urls.map(url => preloadImage(url)))
    } catch (error) {
      console.warn('Some images failed to preload:', error)
    }
  }

  const preloadFont = (fontUrl: string): Promise<void> => {
    if (preloadedResources.value.has(fontUrl)) {
      return Promise.resolve()
    }

    return new Promise((resolve, reject) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'font'
      link.type = 'font/woff2'
      link.crossOrigin = 'anonymous'
      link.href = fontUrl

      link.onload = () => {
        preloadedResources.value.add(fontUrl)
        resolve()
      }

      link.onerror = () => {
        reject(new Error(`Failed to preload font: ${fontUrl}`))
      }

      document.head.appendChild(link)
    })
  }

  return {
    preloadedResources,
    loadingResources,
    preloadImage,
    preloadImages,
    preloadFont
  }
}
