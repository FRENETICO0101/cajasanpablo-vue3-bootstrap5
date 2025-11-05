import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { useErrorHandler, useErrorBoundary, useApiErrorHandler, ErrorType, ErrorSeverity } from '../useErrorHandler'

describe('useErrorHandler Composables', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.clearAllTimers()
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  describe('useErrorHandler', () => {
    it('should handle basic errors', async () => {
      const { handleError, errors } = useErrorHandler()

      const testError = new Error('Test error')
      await handleError(testError)

      expect(errors.value).toHaveLength(1)
      expect(errors.value[0].message).toBe('Test error')
      expect(errors.value[0].severity).toBe(ErrorSeverity.MEDIUM)
    })

    it('should handle errors with custom options', async () => {
      const { handleError, errors } = useErrorHandler()

      const testError = new Error('Critical error')
      await handleError(testError, {
        severity: ErrorSeverity.CRITICAL,
        type: ErrorType.SERVER
      })

      expect(errors.value[0].severity).toBe(ErrorSeverity.CRITICAL)
      expect(errors.value[0].type).toBe(ErrorType.SERVER)
    })

    it('should clear individual errors', async () => {
      const { handleError, errors, clearError } = useErrorHandler()

      await handleError(new Error('Error 1'))
      await handleError(new Error('Error 2'))

      expect(errors.value).toHaveLength(2)

      const firstErrorId = errors.value[0].id
      clearError(firstErrorId)

      expect(errors.value).toHaveLength(1)
      expect(errors.value[0].message).toBe('Error 2')
    })

    it('should clear all errors', async () => {
      const { handleError, errors, clearAllErrors } = useErrorHandler()

      await handleError(new Error('Error 1'))
      await handleError(new Error('Error 2'))

      expect(errors.value).toHaveLength(2)

      clearAllErrors()

      expect(errors.value).toHaveLength(0)
    })

    it('should retry errors when retry function is provided', async () => {
      const retryFn = vi.fn().mockResolvedValue(undefined)
      const { handleError, retryError, errors } = useErrorHandler()

      await handleError(new Error('Retryable error'), { retry: retryFn })

      expect(errors.value).toHaveLength(1)
      const errorId = errors.value[0].id

      await retryError(errorId)

      expect(retryFn).toHaveBeenCalledTimes(1)
      expect(errors.value).toHaveLength(0)
    })

    it('should recover from errors when recover function is provided', () => {
      const recoverFn = vi.fn()
      const { handleError, recoverFromError, errors } = useErrorHandler()

      handleError(new Error('Recoverable error'), { recover: recoverFn })

      expect(errors.value).toHaveLength(1)
      const errorId = errors.value[0].id

      recoverFromError(errorId)

      expect(recoverFn).toHaveBeenCalledTimes(1)
      expect(errors.value).toHaveLength(0)
    })

    it('should compute error states correctly', async () => {
      const { handleError, hasErrors, hasCriticalErrors } = useErrorHandler()

      expect(hasErrors.value).toBe(false)
      expect(hasCriticalErrors.value).toBe(false)

      await handleError(new Error('Regular error'))
      expect(hasErrors.value).toBe(true)
      expect(hasCriticalErrors.value).toBe(false)

      await handleError(new Error('Critical error'), { severity: ErrorSeverity.CRITICAL })
      expect(hasCriticalErrors.value).toBe(true)
    })

    it('should create structured errors from strings', async () => {
      const { handleError, errors } = useErrorHandler()

      await handleError('String error message')

      expect(errors.value[0].message).toBe('String error message')
      expect(errors.value[0].type).toBe(ErrorType.UNKNOWN)
    })
  })

  describe('useErrorBoundary', () => {
    it('should provide error handling interface', () => {
      const { hasErrors, errors, clearAllErrors, handleError } = useErrorBoundary()

      expect(hasErrors.value).toBe(false)
      expect(errors.value).toEqual([])
      expect(typeof clearAllErrors).toBe('function')
      expect(typeof handleError).toBe('function')
    })

    it('should handle errors through boundary', async () => {
      const { handleError, hasErrors, errors } = useErrorBoundary()

      await handleError(new Error('Boundary error'))

      expect(hasErrors.value).toBe(true)
      expect(errors.value).toHaveLength(1)
      expect(errors.value[0].message).toBe('Boundary error')
    })
  })

  describe('useApiErrorHandler', () => {
    it('should handle API errors', () => {
      const { handleApiError } = useApiErrorHandler()

      const apiError = new Error('API request failed')
      expect(() => handleApiError(apiError)).not.toThrow()
    })

    it('should handle API errors with endpoint information', () => {
      const { handleApiError } = useApiErrorHandler()

      const apiError = new Error('404 Not Found')
      const retryFn = vi.fn().mockResolvedValue(undefined)

      expect(() => handleApiError(apiError, '/api/users', retryFn)).not.toThrow()
    })

    it('should determine error types from messages', () => {
      const { handleApiError } = useApiErrorHandler()

      const networkError = new Error('Failed to fetch')
      const authError = new Error('401 Unauthorized')
      const notFoundError = new Error('404 Not Found')

      expect(() => handleApiError(networkError)).not.toThrow()
      expect(() => handleApiError(authError)).not.toThrow()
      expect(() => handleApiError(notFoundError)).not.toThrow()
    })
  })
})
