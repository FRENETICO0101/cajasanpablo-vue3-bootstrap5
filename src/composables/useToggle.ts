import { ref } from 'vue'
import type { Ref } from 'vue'

/**
 * Composable for managing toggle functionality and DOM manipulation
 * Replaces direct DOM manipulation with Vue 3 reactive patterns
 */

export interface ToggleState {
  isVisible: boolean
  buttonText: string
}

export interface ToggleOptions {
  showText?: string
  hideText?: string
  initialState?: boolean
}

export interface ToggleGroupOptions {
  className: string
  exclusiveMode?: boolean // Only one item can be shown at a time
}

/**
 * Basic toggle functionality for show/hide elements
 */
export function useToggle(options: ToggleOptions = {}) {
  const {
    showText = 'Ver más',
    hideText = 'Ocultar',
    initialState = false
  } = options

  const isVisible = ref(initialState)
  const buttonText = ref(isVisible.value ? hideText : showText)

  const toggle = () => {
    isVisible.value = !isVisible.value
    buttonText.value = isVisible.value ? hideText : showText
  }

  const show = () => {
    isVisible.value = true
    buttonText.value = hideText
  }

  const hide = () => {
    isVisible.value = false
    buttonText.value = showText
  }

  return {
    isVisible,
    buttonText,
    toggle,
    show,
    hide
  }
}

/**
 * Advanced toggle functionality for multiple elements with exclusive mode
 */
export function useToggleGroup(options: ToggleGroupOptions) {
  const { exclusiveMode = false } = options
  const activeItems: Ref<Set<string>> = ref(new Set())

  const toggleItem = (itemId: string, toggleOptions: ToggleOptions = {}) => {
    const {
      showText = 'Ver más',
      hideText = 'Ocultar'
    } = toggleOptions

    if (exclusiveMode && !activeItems.value.has(itemId)) {
      // Hide all other items in exclusive mode
      activeItems.value.clear()
    }

    if (activeItems.value.has(itemId)) {
      activeItems.value.delete(itemId)
    } else {
      activeItems.value.add(itemId)
    }

    return {
      isVisible: activeItems.value.has(itemId),
      buttonText: activeItems.value.has(itemId) ? hideText : showText
    }
  }

  const showItem = (itemId: string) => {
    if (exclusiveMode) {
      activeItems.value.clear()
    }
    activeItems.value.add(itemId)
  }

  const hideItem = (itemId: string) => {
    activeItems.value.delete(itemId)
  }

  const hideAll = () => {
    activeItems.value.clear()
  }

  const showAll = (itemIds: string[]) => {
    if (!exclusiveMode) {
      itemIds.forEach(id => activeItems.value.add(id))
    }
  }

  const isItemVisible = (itemId: string) => {
    return activeItems.value.has(itemId)
  }

  const getItemButtonText = (itemId: string, showText = 'Ver más', hideText = 'Ocultar') => {
    return activeItems.value.has(itemId) ? hideText : showText
  }

  return {
    activeItems: activeItems as Ref<ReadonlySet<string>>,
    toggleItem,
    showItem,
    hideItem,
    hideAll,
    showAll,
    isItemVisible,
    getItemButtonText
  }
}

/**
 * Legacy DOM manipulation functions for gradual migration
 * @deprecated Use useToggle or useToggleGroup instead
 */
export function useLegacyDomUtils() {
  const showDetails = (elementId: string, buttonElementId?: string) => {
    const element = document.getElementById(elementId)
    const buttonElement = buttonElementId ? document.getElementById(buttonElementId) : null

    if (element) {
      const isCurrentlyVisible = element.style.display === 'block'
      element.style.display = isCurrentlyVisible ? 'none' : 'block'

      if (buttonElement) {
        buttonElement.innerHTML = element.style.display === 'block' ? 'Ocultar' : 'Ver más'
      }
    }
  }

  const hideAllExceptOne = (className: string, elementToKeepId: string) => {
    const elements = document.querySelectorAll(`.${className}`)
    const elementToKeep = document.getElementById(elementToKeepId)?.parentElement

    elements.forEach(element => {
      if (element !== elementToKeep) {
        (element as HTMLElement).style.display = 'none'
      }
    })
  }

  const showAllExcept = (className: string) => {
    const elements = document.querySelectorAll(`.${className}`)
    elements.forEach(element => {
      (element as HTMLElement).style.display = 'block'
    })
  }

  const showDetailsWithGroup = (elementId: string, buttonElementId: string, groupClassName: string) => {
    const element = document.getElementById(elementId)
    const buttonElement = document.getElementById(buttonElementId)

    if (element && buttonElement) {
      if (element.style.display === 'none') {
        hideAllExceptOne(groupClassName, buttonElementId)
        element.style.display = 'block'
        buttonElement.innerHTML = 'Ocultar'
      } else {
        showAllExcept(groupClassName)
        element.style.display = 'none'
        buttonElement.innerHTML = 'Ver más'
      }
    }
  }

  return {
    showDetails,
    hideAllExceptOne,
    showAllExcept,
    showDetailsWithGroup
  }
}
