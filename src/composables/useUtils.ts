import { ref, unref, watch, onUnmounted, nextTick, type Ref } from 'vue'

/**
 * Debounced function signature
 */
export type DebouncedFunction<T extends (...args: unknown[]) => unknown> = {
  (...args: Parameters<T>): void
  cancel: () => void
  flush: () => void
}

/**
 * Throttled function signature
 */
export type ThrottledFunction<T extends (...args: unknown[]) => unknown> = {
  (...args: Parameters<T>): void
  cancel: () => void
}

/**
 * Debounce a function call with configurable delay
 * Useful for search inputs, resize handlers, etc.
 */
export function useDebounce<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number = 300
): DebouncedFunction<T> {
  let timeoutId: number | undefined

  const cancel = () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
      timeoutId = undefined
    }
  }

  const flush = () => {
    cancel()
    fn()
  }

  const debounced = (...args: Parameters<T>) => {
    cancel()
    timeoutId = window.setTimeout(() => fn(...args), delay)
  }

  debounced.cancel = cancel
  debounced.flush = flush

  onUnmounted(cancel)

  return debounced
}

/**
 * Throttle a function call to limit execution frequency
 * Useful for scroll handlers, button clicks, etc.
 */
export function useThrottle<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay: number = 300
): ThrottledFunction<T> {
  let lastExecution = 0
  let timeoutId: number | undefined

  const cancel = () => {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId)
      timeoutId = undefined
    }
  }

  const throttled = (...args: Parameters<T>) => {
    const now = Date.now()

    if (now - lastExecution >= delay) {
      lastExecution = now
      fn(...args)
    } else {
      cancel()
      timeoutId = window.setTimeout(() => {
        lastExecution = Date.now()
        fn(...args)
      }, delay - (now - lastExecution))
    }
  }

  throttled.cancel = cancel

  onUnmounted(cancel)

  return throttled
}

/**
 * Reactive localStorage with type safety and serialization
 */
export function useLocalStorage<T>(
  key: string,
  defaultValue: T,
  options: {
    serializer?: {
      read: (value: string) => T
      write: (value: T) => string
    }
  } = {}
) {
  const {
    serializer = {
      read: JSON.parse,
      write: JSON.stringify
    }
  } = options

  const storedValue = ref<T>(defaultValue)

  // Read from localStorage
  const read = (): T => {
    try {
      const item = localStorage.getItem(key)
      if (item === null) return defaultValue
      return serializer.read(item)
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return defaultValue
    }
  }

  // Write to localStorage
  const write = (value: T) => {
    try {
      localStorage.setItem(key, serializer.write(value))
    } catch (error) {
      console.warn(`Error writing to localStorage key "${key}":`, error)
    }
  }

  // Initialize
  storedValue.value = read()

  // Watch for changes and sync to localStorage
  watch(
    storedValue,
    (newValue) => {
      write(newValue)
    },
    { deep: true }
  )

  // Listen for external changes
  const handleStorageChange = (e: StorageEvent) => {
    if (e.key === key && e.newValue !== null) {
      try {
        storedValue.value = serializer.read(e.newValue)
      } catch (error) {
        console.warn(`Error parsing localStorage change for key "${key}":`, error)
      }
    }
  }

  window.addEventListener('storage', handleStorageChange)
  onUnmounted(() => {
    window.removeEventListener('storage', handleStorageChange)
  })

  return storedValue
}

/**
 * Async operation state management
 * Handles loading, error, and success states
 */
export function useAsync<T, Args extends unknown[]>(
  asyncFn: (...args: Args) => Promise<T>
) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const isError = ref(false)

  const execute = async (...args: Args): Promise<T | null> => {
    try {
      isLoading.value = true
      isError.value = false
      error.value = null

      const result = await asyncFn(...args)

      data.value = result
      isSuccess.value = true
      return result
    } catch (err) {
      error.value = err as Error
      isError.value = true
      isSuccess.value = false
      return null
    } finally {
      isLoading.value = false
    }
  }

  const reset = () => {
    data.value = null
    error.value = null
    isLoading.value = false
    isSuccess.value = false
    isError.value = false
  }

  return {
    data,
    error,
    isLoading,
    isSuccess,
    isError,
    execute,
    reset
  }
}

/**
 * Responsive breakpoint detection
 */
export function useBreakpoints() {
  const width = ref(window.innerWidth)
  const height = ref(window.innerHeight)

  const breakpoints = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  }

  const updateSize = useThrottle(() => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }, 100)

  window.addEventListener('resize', updateSize)
  onUnmounted(() => {
    window.removeEventListener('resize', updateSize)
    updateSize.cancel()
  })

  // Computed breakpoint checks
  const isXs = ref(false)
  const isSm = ref(false)
  const isMd = ref(false)
  const isLg = ref(false)
  const isXl = ref(false)
  const isXxl = ref(false)

  const updateBreakpoints = () => {
    const w = width.value
    isXs.value = w >= breakpoints.xs && w < breakpoints.sm
    isSm.value = w >= breakpoints.sm && w < breakpoints.md
    isMd.value = w >= breakpoints.md && w < breakpoints.lg
    isLg.value = w >= breakpoints.lg && w < breakpoints.xl
    isXl.value = w >= breakpoints.xl && w < breakpoints.xxl
    isXxl.value = w >= breakpoints.xxl
  }

  watch(width, updateBreakpoints, { immediate: true })

  // Helper functions
  const isGreaterThan = (breakpoint: keyof typeof breakpoints) => {
    return width.value >= breakpoints[breakpoint]
  }

  const isLessThan = (breakpoint: keyof typeof breakpoints) => {
    return width.value < breakpoints[breakpoint]
  }

  const isMobile = ref(false)
  const isTablet = ref(false)
  const isDesktop = ref(false)

  watch(width, (w) => {
    isMobile.value = w < breakpoints.md
    isTablet.value = w >= breakpoints.md && w < breakpoints.lg
    isDesktop.value = w >= breakpoints.lg
  }, { immediate: true })

  return {
    width,
    height,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isXxl,
    isMobile,
    isTablet,
    isDesktop,
    isGreaterThan,
    isLessThan,
    breakpoints
  }
}

/**
 * Clipboard operations with user feedback
 */
export function useClipboard() {
  const isSupported = ref(!!navigator.clipboard)
  const text = ref('')
  const isSuccess = ref(false)
  const error = ref<Error | null>(null)

  const copy = async (value: string): Promise<boolean> => {
    if (!isSupported.value) {
      error.value = new Error('Clipboard API is not supported')
      return false
    }

    try {
      await navigator.clipboard.writeText(value)
      text.value = value
      isSuccess.value = true
      error.value = null

      // Reset success state after 2 seconds
      setTimeout(() => {
        isSuccess.value = false
      }, 2000)

      return true
    } catch (err) {
      error.value = err as Error
      isSuccess.value = false
      return false
    }
  }

  const read = async (): Promise<string> => {
    if (!isSupported.value) {
      throw new Error('Clipboard API is not supported')
    }

    try {
      const value = await navigator.clipboard.readText()
      text.value = value
      return value
    } catch (err) {
      error.value = err as Error
      throw err
    }
  }

  return {
    isSupported,
    text,
    isSuccess,
    error,
    copy,
    read
  }
}

/**
 * Click outside detector for dropdowns and modals
 */
export function useClickOutside(
  target: Ref<HTMLElement | null>,
  handler: (event: Event) => void
) {
  const listener = (event: Event) => {
    const el = unref(target)
    if (!el || el === event.target || el.contains(event.target as Node)) {
      return
    }
    handler(event)
  }

  const cleanup = () => {
    document.removeEventListener('click', listener, true)
  }

  const start = () => {
    document.addEventListener('click', listener, true)
  }

  onUnmounted(cleanup)

  return {
    start,
    stop: cleanup
  }
}

/**
 * Focus trap for modals and accessible components
 */
export function useFocusTrap(container: Ref<HTMLElement | null>) {
  const isActive = ref(false)

  const focusableSelector = [
    'button',
    '[href]',
    'input',
    'select',
    'textarea',
    '[tabindex]:not([tabindex="-1"])'
  ].join(', ')

  const getFocusableElements = (): HTMLElement[] => {
    const el = unref(container)
    if (!el) return []

    return Array.from(el.querySelectorAll(focusableSelector)).filter(
      (el) => !el.hasAttribute('disabled')
    ) as HTMLElement[]
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (!isActive.value || event.key !== 'Tab') return

    const focusableElements = getFocusableElements()
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus()
        event.preventDefault()
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus()
        event.preventDefault()
      }
    }
  }

  const activate = async () => {
    isActive.value = true
    await nextTick()

    const focusableElements = getFocusableElements()
    focusableElements[0]?.focus()

    document.addEventListener('keydown', handleKeydown)
  }

  const deactivate = () => {
    isActive.value = false
    document.removeEventListener('keydown', handleKeydown)
  }

  onUnmounted(deactivate)

  return {
    isActive,
    activate,
    deactivate
  }
}

/**
 * Simple counter with increment/decrement and bounds
 */
export function useCounter(
  initialValue: number = 0,
  options: {
    min?: number
    max?: number
    step?: number
  } = {}
) {
  const { min, max, step = 1 } = options
  const count = ref(initialValue)

  const increment = () => {
    const newValue = count.value + step
    if (max === undefined || newValue <= max) {
      count.value = newValue
    }
  }

  const decrement = () => {
    const newValue = count.value - step
    if (min === undefined || newValue >= min) {
      count.value = newValue
    }
  }

  const reset = () => {
    count.value = initialValue
  }

  const set = (value: number) => {
    if ((min === undefined || value >= min) && (max === undefined || value <= max)) {
      count.value = value
    }
  }

  return {
    count,
    increment,
    decrement,
    reset,
    set
  }
}
