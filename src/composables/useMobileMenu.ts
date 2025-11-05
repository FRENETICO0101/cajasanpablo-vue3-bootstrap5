import { ref, nextTick } from 'vue'

/**
 * Composable for mobile menu functionality
 * Provides state management and accessibility features for mobile navigation
 */
export function useMobileMenu() {
  const isMenuOpen = ref(false)
  const menuElementId = ref('menuNavBar')

  /**
   * Toggle mobile menu visibility with accessibility support
   * @param elementId - ID of the menu element to toggle
   */
  const toggleMenu = async (elementId?: string) => {
    const targetId = elementId || menuElementId.value
    const element = document.getElementById(targetId)

    if (!element) {
      console.warn(`Menu element with ID "${targetId}" not found`)
      return
    }

    isMenuOpen.value = !isMenuOpen.value

    // Update display style
    element.style.display = isMenuOpen.value ? 'block' : 'none'

    // Wait for DOM update
    await nextTick()

    // Focus management for accessibility
    if (isMenuOpen.value) {
      // Focus first menu item when opening
      const firstMenuItem = element.querySelector('a')
      firstMenuItem?.focus()

      // Add escape key listener
      document.addEventListener('keydown', handleEscapeKey)

      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden'
    } else {
      // Remove escape key listener
      document.removeEventListener('keydown', handleEscapeKey)

      // Restore body scroll
      document.body.style.overflow = ''

      // Return focus to menu button
      const menuButton = document.querySelector('.menu-icon')
      if (menuButton instanceof HTMLElement) {
        menuButton.focus()
      }
    }

    // Update ARIA attributes for screen readers
    element.setAttribute('aria-hidden', (!isMenuOpen.value).toString())

    // Update menu button aria-expanded attribute
    const menuButton = document.querySelector('.menu-icon')
    if (menuButton) {
      menuButton.setAttribute('aria-expanded', isMenuOpen.value.toString())
    }
  }

  /**
   * Close menu when escape key is pressed
   */
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isMenuOpen.value) {
      toggleMenu()
    }
  }

  /**
   * Close menu programmatically
   */
  const closeMenu = () => {
    if (isMenuOpen.value) {
      toggleMenu()
    }
  }

  /**
   * Handle click outside menu to close it
   */
  const handleClickOutside = (event: Event) => {
    const target = event.target as HTMLElement
    const menu = document.getElementById(menuElementId.value)
    const menuButton = document.querySelector('.menu-icon')

    if (
      isMenuOpen.value &&
      menu &&
      !menu.contains(target) &&
      !menuButton?.contains(target)
    ) {
      closeMenu()
    }
  }

  /**
   * Setup click outside listener
   */
  const setupClickOutside = () => {
    document.addEventListener('click', handleClickOutside)
  }

  /**
   * Cleanup event listeners
   */
  const cleanup = () => {
    document.removeEventListener('keydown', handleEscapeKey)
    document.removeEventListener('click', handleClickOutside)
    document.body.style.overflow = '' // Restore scroll
  }

  return {
    isMenuOpen,
    menuElementId,
    toggleMenu,
    closeMenu,
    setupClickOutside,
    cleanup
  }
}
