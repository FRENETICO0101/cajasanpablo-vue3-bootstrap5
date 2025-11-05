import { ref, computed, onErrorCaptured } from 'vue'

/**
 * Error types for better categorization
 */
export enum ErrorType {
  NETWORK = 'network',
  VALIDATION = 'validation',
  AUTHENTICATION = 'authentication',
  AUTHORIZATION = 'authorization',
  NOT_FOUND = 'not_found',
  SERVER = 'server',
  CLIENT = 'client',
  UNKNOWN = 'unknown'
}

/**
 * Error severity levels
 */
export enum ErrorSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

/**
 * Structured error interface
 */
export interface AppError {
  id: string
  type: ErrorType
  severity: ErrorSeverity
  message: string
  details?: string
  timestamp: Date
  source?: string
  stack?: string
  retry?: () => Promise<void>
  recover?: () => void
}

/**
 * Error handling configuration
 */
export interface ErrorConfig {
  showToast?: boolean
  logToConsole?: boolean
  reportToService?: boolean
  autoRetry?: boolean
  maxRetries?: number
  retryDelay?: number
}

/**
 * Main error handling composable
 */
export function useErrorHandler(config: ErrorConfig = {}) {
  const errors = ref<AppError[]>([])
  const isErroring = ref(false)
  const retryCount = ref(0)

  const defaultConfig: Required<ErrorConfig> = {
    showToast: true,
    logToConsole: true,
    reportToService: false,
    autoRetry: false,
    maxRetries: 3,
    retryDelay: 1000,
    ...config
  }

  /**
   * Create a structured error from various inputs
   */
  const createError = (
    error: Error | string | AppError,
    type: ErrorType = ErrorType.UNKNOWN,
    severity: ErrorSeverity = ErrorSeverity.MEDIUM,
    source?: string
  ): AppError => {
    if (typeof error === 'string') {
      return {
        id: generateErrorId(),
        type,
        severity,
        message: error,
        timestamp: new Date(),
        source
      }
    }

    if ('id' in error && 'type' in error) {
      return error as AppError
    }

    const jsError = error as Error
    return {
      id: generateErrorId(),
      type: determineErrorType(jsError),
      severity,
      message: jsError.message || 'An unknown error occurred',
      details: jsError.stack,
      timestamp: new Date(),
      source,
      stack: jsError.stack
    }
  }

  /**
   * Handle an error with proper logging and user feedback
   */
  const handleError = async (
    error: Error | string | AppError,
    options: {
      type?: ErrorType
      severity?: ErrorSeverity
      source?: string
      showUser?: boolean
      retry?: () => Promise<void>
      recover?: () => void
    } = {}
  ): Promise<void> => {
    const {
      type = ErrorType.UNKNOWN,
      severity = ErrorSeverity.MEDIUM,
      source,
      showUser = true,
      retry,
      recover
    } = options

    const structuredError = createError(error, type, severity, source)

    if (retry) {
      structuredError.retry = retry
    }

    if (recover) {
      structuredError.recover = recover
    }

    errors.value.push(structuredError)
    isErroring.value = true

    // Log to console if configured
    if (defaultConfig.logToConsole) {
      console.error(`[${structuredError.severity.toUpperCase()}] ${structuredError.message}`, {
        type: structuredError.type,
        source: structuredError.source,
        details: structuredError.details,
        timestamp: structuredError.timestamp
      })
    }

    // Show user feedback if configured and requested
    if (defaultConfig.showToast && showUser) {
      showErrorToast(structuredError)
    }

    // Report to external service if configured
    if (defaultConfig.reportToService) {
      await reportError(structuredError)
    }

    // Auto retry if configured and available
    if (defaultConfig.autoRetry && structuredError.retry && retryCount.value < defaultConfig.maxRetries) {
      setTimeout(async () => {
        try {
          retryCount.value++
          await structuredError.retry!()
          clearError(structuredError.id)
          retryCount.value = 0
        } catch (retryError) {
          handleError(retryError as Error, {
            ...options,
            showUser: retryCount.value >= defaultConfig.maxRetries
          })
        }
      }, defaultConfig.retryDelay * retryCount.value)
    }
  }

  /**
   * Clear a specific error
   */
  const clearError = (errorId: string) => {
    const index = errors.value.findIndex(error => error.id === errorId)
    if (index > -1) {
      errors.value.splice(index, 1)
    }

    if (errors.value.length === 0) {
      isErroring.value = false
      retryCount.value = 0
    }
  }

  /**
   * Clear all errors
   */
  const clearAllErrors = () => {
    errors.value = []
    isErroring.value = false
    retryCount.value = 0
  }

  /**
   * Retry a specific error
   */
  const retryError = async (errorId: string) => {
    const error = errors.value.find(err => err.id === errorId)
    if (error?.retry) {
      try {
        await error.retry()
        clearError(errorId)
      } catch (retryError) {
        handleError(retryError as Error, {
          source: error.source,
          showUser: true
        })
      }
    }
  }

  /**
   * Recover from a specific error
   */
  const recoverFromError = (errorId: string) => {
    const error = errors.value.find(err => err.id === errorId)
    if (error?.recover) {
      error.recover()
      clearError(errorId)
    }
  }

  // Computed properties
  const hasErrors = computed(() => errors.value.length > 0)
  const criticalErrors = computed(() =>
    errors.value.filter(error => error.severity === ErrorSeverity.CRITICAL)
  )
  const hasCriticalErrors = computed(() => criticalErrors.value.length > 0)
  const latestError = computed(() => errors.value[errors.value.length - 1])

  return {
    errors,
    isErroring,
    hasErrors,
    criticalErrors,
    hasCriticalErrors,
    latestError,
    retryCount,
    handleError,
    clearError,
    clearAllErrors,
    retryError,
    recoverFromError,
    createError
  }
}

/**
 * Error boundary composable for Vue components
 */
export function useErrorBoundary() {
  const { handleError, hasErrors, errors, clearAllErrors } = useErrorHandler()

  onErrorCaptured((error: Error, instance, info) => {
    handleError(error, {
      type: ErrorType.CLIENT,
      severity: ErrorSeverity.HIGH,
      source: `${instance?.$options.name || 'Component'}: ${info}`,
      showUser: true
    })

    // Return false to prevent the error from propagating
    return false
  })

  return {
    hasErrors,
    errors,
    clearAllErrors,
    handleError
  }
}

/**
 * API error handling composable
 */
export function useApiErrorHandler() {
  const { handleError } = useErrorHandler({
    showToast: true,
    logToConsole: true,
    reportToService: true,
    autoRetry: true,
    maxRetries: 2,
    retryDelay: 2000
  })

  const handleApiError = (
    error: Error,
    endpoint?: string,
    retryFn?: () => Promise<void>
  ) => {
    const errorType = determineApiErrorType(error)
    const severity = determineApiErrorSeverity(error)

    handleError(error, {
      type: errorType,
      severity,
      source: endpoint ? `API: ${endpoint}` : 'API',
      retry: retryFn
    })
  }

  return {
    handleApiError
  }
}

/**
 * Helper functions
 */
function generateErrorId(): string {
  return `error_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
}

function determineErrorType(error: Error): ErrorType {
  const message = error.message.toLowerCase()

  if (message.includes('network') || message.includes('fetch')) {
    return ErrorType.NETWORK
  }

  if (message.includes('unauthorized') || message.includes('401')) {
    return ErrorType.AUTHENTICATION
  }

  if (message.includes('forbidden') || message.includes('403')) {
    return ErrorType.AUTHORIZATION
  }

  if (message.includes('not found') || message.includes('404')) {
    return ErrorType.NOT_FOUND
  }

  if (message.includes('validation') || message.includes('invalid')) {
    return ErrorType.VALIDATION
  }

  return ErrorType.UNKNOWN
}

function determineApiErrorType(error: Error): ErrorType {
  if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
    return ErrorType.NETWORK
  }

  // Check for HTTP status codes if available
  const status = extractStatusCode(error)

  switch (status) {
    case 400:
      return ErrorType.VALIDATION
    case 401:
      return ErrorType.AUTHENTICATION
    case 403:
      return ErrorType.AUTHORIZATION
    case 404:
      return ErrorType.NOT_FOUND
    case 500:
    case 502:
    case 503:
    case 504:
      return ErrorType.SERVER
    default:
      return ErrorType.UNKNOWN
  }
}

function determineApiErrorSeverity(error: Error): ErrorSeverity {
  const status = extractStatusCode(error)

  if (status && status >= 500) {
    return ErrorSeverity.HIGH
  }

  if (status === 401 || status === 403) {
    return ErrorSeverity.HIGH
  }

  if (status && status >= 400) {
    return ErrorSeverity.MEDIUM
  }

  return ErrorSeverity.LOW
}function extractStatusCode(error: Error): number | null {
  const match = error.message.match(/(\d{3})/)
  return match ? parseInt(match[1], 10) : null
}

async function showErrorToast(error: AppError): Promise<void> {
  // Implementation would depend on your toast library
  // For now, we'll use a simple console log
  console.warn(`🚨 ${error.message}`)

  // If you're using a toast library like vue-toastification:
  // toast.error(error.message, { timeout: 5000 })
}

async function reportError(error: AppError): Promise<void> {
  // Implementation for error reporting service
  // This could be Sentry, LogRocket, or custom analytics
  try {
    // Example implementation:
    // await fetch('/api/errors', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(error)
    // })

    console.info('Error reported:', error.id)
  } catch (reportingError) {
    console.warn('Failed to report error:', reportingError)
  }
}
