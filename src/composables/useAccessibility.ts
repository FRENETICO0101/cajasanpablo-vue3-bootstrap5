import { ref } from 'vue'

/**
 * Composable for accessibility features
 * Provides keyboard navigation and ARIA support
 */
export function useAccessibility() {
  const currentFocusIndex = ref(-1)
  const focusableElements = ref<HTMLElement[]>([])

  /**
   * Get all focusable elements within a container
   */
  const getFocusableElements = (container: HTMLElement): HTMLElement[] => {
    const selectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ].join(',')

    return Array.from(container.querySelectorAll(selectors)) as HTMLElement[]
  }

  /**
   * Handle keyboard navigation for menu items
   */
  const handleKeyNavigation = (event: KeyboardEvent, container: HTMLElement) => {
    const elements = getFocusableElements(container)
    focusableElements.value = elements

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault()
        currentFocusIndex.value = Math.min(currentFocusIndex.value + 1, elements.length - 1)
        elements[currentFocusIndex.value]?.focus()
        break

      case 'ArrowUp':
        event.preventDefault()
        currentFocusIndex.value = Math.max(currentFocusIndex.value - 1, 0)
        elements[currentFocusIndex.value]?.focus()
        break

      case 'Home':
        event.preventDefault()
        currentFocusIndex.value = 0
        elements[0]?.focus()
        break

      case 'End':
        event.preventDefault()
        currentFocusIndex.value = elements.length - 1
        elements[elements.length - 1]?.focus()
        break

      case 'Tab':
        // Allow normal tab behavior but update our index
        const activeElement = document.activeElement as HTMLElement
        const activeIndex = elements.indexOf(activeElement)
        if (activeIndex !== -1) {
          currentFocusIndex.value = activeIndex
        }
        break
    }
  }

  /**
   * Set up keyboard event listeners for a container
   */
  const setupKeyboardNavigation = (container: HTMLElement) => {
    const keyHandler = (event: KeyboardEvent) => handleKeyNavigation(event, container)
    container.addEventListener('keydown', keyHandler)

    return () => {
      container.removeEventListener('keydown', keyHandler)
    }
  }

  /**
   * Announce to screen readers
   */
  const announceToScreenReader = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    const announcement = document.createElement('div')
    announcement.setAttribute('aria-live', priority)
    announcement.setAttribute('aria-atomic', 'true')
    announcement.className = 'sr-only'
    announcement.style.cssText = `
      position: absolute !important;
      width: 1px !important;
      height: 1px !important;
      padding: 0 !important;
      margin: -1px !important;
      overflow: hidden !important;
      clip: rect(0, 0, 0, 0) !important;
      white-space: nowrap !important;
      border: 0 !important;
    `

    document.body.appendChild(announcement)
    announcement.textContent = message

    setTimeout(() => {
      document.body.removeChild(announcement)
    }, 1000)
  }

  /**
   * Set ARIA attributes for better accessibility
   */
  const setAriaAttributes = (element: HTMLElement, attributes: Record<string, string>) => {
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
  }

  /**
   * Focus trap for modal/dropdown behavior
   */
  const createFocusTrap = (container: HTMLElement) => {
    const focusableElements = getFocusableElements(container)
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    container.addEventListener('keydown', handleTabKey)

    // Focus first element
    firstElement?.focus()

    return () => {
      container.removeEventListener('keydown', handleTabKey)
    }
  }

  return {
    currentFocusIndex,
    focusableElements,
    handleKeyNavigation,
    setupKeyboardNavigation,
    announceToScreenReader,
    setAriaAttributes,
    createFocusTrap,
    getFocusableElements
  }
}
