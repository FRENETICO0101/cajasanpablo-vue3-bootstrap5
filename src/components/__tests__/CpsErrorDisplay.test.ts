import { describe, it, expect, vi } from 'vitest'
import { createWrapper } from '../../test/test-utils'
import CpsErrorDisplay from '../CpsErrorDisplay.vue'

describe('CpsErrorDisplay', () => {
  const defaultError = {
    id: 'test-error',
    type: 'network',
    severity: 'medium',
    message: 'Test error message',
    timestamp: new Date()
  }

  it('should render error message', () => {
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: defaultError
      }
    })

    expect(wrapper.text()).toContain('Test error message')
  })

  it('should show appropriate icon for error type', () => {
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: { ...defaultError, type: 'network' }
      }
    })

    expect(wrapper.find('.error-icon').exists()).toBe(true)
  })

  it('should apply severity-based styling', () => {
    const criticalWrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: { ...defaultError, severity: 'critical' }
      }
    })

    const lowWrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: { ...defaultError, severity: 'low' }
      }
    })

    expect(criticalWrapper.find('.alert').classes()).toContain('alert-danger')
    expect(lowWrapper.find('.alert').classes()).toContain('alert-warning')
  })

  it('should show retry button when retry function is available', () => {
    const retryFn = vi.fn()
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: { ...defaultError, retry: retryFn }
      }
    })

    const retryButton = wrapper.find('[data-testid="retry-button"]')
    expect(retryButton.exists()).toBe(true)
  })

  it('should emit retry event when retry button is clicked', async () => {
    const retryFn = vi.fn()
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: { ...defaultError, retry: retryFn }
      }
    })

    const retryButton = wrapper.find('[data-testid="retry-button"]')
    await retryButton.trigger('click')

    expect(wrapper.emitted('retry')).toBeTruthy()
  })

  it('should show dismiss button when dismissible', () => {
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: defaultError,
        dismissible: true
      }
    })

    const dismissButton = wrapper.find('[data-testid="dismiss-button"]')
    expect(dismissButton.exists()).toBe(true)
  })

  it('should emit dismiss event when dismiss button is clicked', async () => {
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: defaultError,
        dismissible: true
      }
    })

    const dismissButton = wrapper.find('[data-testid="dismiss-button"]')
    await dismissButton.trigger('click')

    expect(wrapper.emitted('dismiss')).toBeTruthy()
  })

  it('should show details when showDetails is true', () => {
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: { ...defaultError, details: 'Error stack trace' },
        showDetails: true
      }
    })

    expect(wrapper.text()).toContain('Error stack trace')
  })

  it('should apply compact styling', () => {
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: defaultError,
        compact: true
      }
    })

    expect(wrapper.find('.alert').classes()).toContain('alert-compact')
  })

  it('should have proper accessibility attributes', () => {
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: defaultError
      }
    })

    const alert = wrapper.find('.alert')
    expect(alert.attributes('role')).toBe('alert')
    expect(alert.attributes('aria-live')).toBe('polite')
  })

  it('should format timestamp correctly', () => {
    const timestamp = new Date('2023-01-01T12:00:00Z')
    const wrapper = createWrapper(CpsErrorDisplay, {
      props: {
        error: { ...defaultError, timestamp },
        showTimestamp: true
      }
    })

    expect(wrapper.text()).toContain('2023')
  })
})
