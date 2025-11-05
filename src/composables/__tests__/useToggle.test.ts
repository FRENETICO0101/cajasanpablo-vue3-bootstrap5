import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useToggle, useToggleGroup, useLegacyDomUtils } from '../useToggle'

describe('useToggle Composables', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('useToggle composable', () => {
    it('should initialize with default false value', () => {
      const { isVisible, buttonText } = useToggle()
      expect(isVisible.value).toBe(false)
      expect(buttonText.value).toBe('Ver más')
    })

    it('should initialize with provided initial value', () => {
      const { isVisible, buttonText } = useToggle({ initialState: true })
      expect(isVisible.value).toBe(true)
      expect(buttonText.value).toBe('Ocultar')
    })

    it('should toggle value when toggle function is called', () => {
      const { isVisible, buttonText, toggle } = useToggle()

      expect(isVisible.value).toBe(false)
      expect(buttonText.value).toBe('Ver más')

      toggle()
      expect(isVisible.value).toBe(true)
      expect(buttonText.value).toBe('Ocultar')

      toggle()
      expect(isVisible.value).toBe(false)
      expect(buttonText.value).toBe('Ver más')
    })

    it('should set value to true when show is called', () => {
      const { isVisible, buttonText, show } = useToggle()

      expect(isVisible.value).toBe(false)
      show()
      expect(isVisible.value).toBe(true)
      expect(buttonText.value).toBe('Ocultar')
    })

    it('should set value to false when hide is called', () => {
      const { isVisible, buttonText, hide } = useToggle({ initialState: true })

      expect(isVisible.value).toBe(true)
      hide()
      expect(isVisible.value).toBe(false)
      expect(buttonText.value).toBe('Ver más')
    })

    it('should use custom text options', () => {
      const { buttonText } = useToggle({
        showText: 'Show Details',
        hideText: 'Hide Details',
        initialState: false
      })

      expect(buttonText.value).toBe('Show Details')
    })
  })

  describe('useToggleGroup composable', () => {
    it('should manage multiple toggle items', () => {
      const { toggleItem, isItemVisible } = useToggleGroup({ className: 'test-group' })

      expect(isItemVisible('item1')).toBe(false)

      toggleItem('item1')
      expect(isItemVisible('item1')).toBe(true)

      toggleItem('item2')
      expect(isItemVisible('item1')).toBe(true)
      expect(isItemVisible('item2')).toBe(true)
    })

    it('should work in exclusive mode', () => {
      const { toggleItem, isItemVisible } = useToggleGroup({
        className: 'test-group',
        exclusiveMode: true
      })

      toggleItem('item1')
      expect(isItemVisible('item1')).toBe(true)

      toggleItem('item2')
      expect(isItemVisible('item1')).toBe(false)
      expect(isItemVisible('item2')).toBe(true)
    })

    it('should show and hide items individually', () => {
      const { showItem, hideItem, isItemVisible } = useToggleGroup({ className: 'test-group' })

      showItem('item1')
      expect(isItemVisible('item1')).toBe(true)

      hideItem('item1')
      expect(isItemVisible('item1')).toBe(false)
    })

    it('should hide all items', () => {
      const { showItem, hideAll, isItemVisible } = useToggleGroup({ className: 'test-group' })

      showItem('item1')
      showItem('item2')
      expect(isItemVisible('item1')).toBe(true)
      expect(isItemVisible('item2')).toBe(true)

      hideAll()
      expect(isItemVisible('item1')).toBe(false)
      expect(isItemVisible('item2')).toBe(false)
    })

    it('should get correct button text for items', () => {
      const { toggleItem, getItemButtonText } = useToggleGroup({ className: 'test-group' })

      expect(getItemButtonText('item1')).toBe('Ver más')

      toggleItem('item1')
      expect(getItemButtonText('item1')).toBe('Ocultar')
    })
  })

  describe('useLegacyDomUtils', () => {
    beforeEach(() => {
      document.body.innerHTML = ''
    })

    it('should show and hide details using DOM manipulation', () => {
      const { showDetails } = useLegacyDomUtils()

      const element = document.createElement('div')
      element.id = 'test-element'
      element.style.display = 'none'
      document.body.appendChild(element)

      const button = document.createElement('button')
      button.id = 'test-button'
      button.innerHTML = 'Ver más'
      document.body.appendChild(button)

      showDetails('test-element', 'test-button')
      expect(element.style.display).toBe('block')
      expect(button.innerHTML).toBe('Ocultar')

      showDetails('test-element', 'test-button')
      expect(element.style.display).toBe('none')
      expect(button.innerHTML).toBe('Ver más')
    })

    it('should handle missing elements gracefully', () => {
      const { showDetails } = useLegacyDomUtils()

      expect(() => showDetails('non-existent')).not.toThrow()
    })
  })
})
