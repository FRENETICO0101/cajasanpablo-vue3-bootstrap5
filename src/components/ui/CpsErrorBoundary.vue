<template>
  <div class="error-boundary">
    <!-- Global Error Display -->
    <div v-if="hasCriticalErrors" class="error-boundary__critical">
      <CpsErrorDisplay
        :error="criticalErrors[0]"
        variant="banner"
        title="Critical Error"
        :show-details="true"
        :show-metadata="true"
        @retry="retryError"
        @recover="recoverFromError"
        @dismiss="clearError"
      />
    </div>

    <!-- Toast Notifications for Errors -->
    <Teleport to="body">
      <div v-if="toastErrors.length > 0" class="error-boundary__toasts">
        <TransitionGroup name="toast" tag="div">
          <CpsErrorDisplay
            v-for="error in toastErrors"
            :key="error.id"
            :error="error"
            variant="toast"
            :dismissible="true"
            :show-actions="false"
            @dismiss="clearError"
          />
        </TransitionGroup>
      </div>
    </Teleport>

    <!-- Main Content -->
    <div
      v-if="!hasCriticalErrors || allowPartialRender"
      class="error-boundary__content"
    >
      <slot></slot>
    </div>

    <!-- Fallback UI for Critical Errors -->
    <div v-else class="error-boundary__fallback">
      <div class="error-boundary__fallback-content">
        <div class="error-boundary__fallback-icon">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>

        <h2 class="error-boundary__fallback-title">
          Oops! Something went wrong
        </h2>

        <p class="error-boundary__fallback-message">
          We're sorry, but something unexpected happened. Please try refreshing the page or contact support if the problem persists.
        </p>

        <div class="error-boundary__fallback-actions">
          <button
            type="button"
            class="btn btn-primary"
            @click="handleRefresh"
          >
            Refresh Page
          </button>

          <button
            type="button"
            class="btn btn-secondary"
            @click="handleReportIssue"
          >
            Report Issue
          </button>

          <button
            type="button"
            class="btn btn-outline-secondary"
            @click="clearAllErrors"
          >
            Continue Anyway
          </button>
        </div>

        <!-- Debug Information (development only) -->
        <details v-if="isDevelopment" class="error-boundary__debug">
          <summary>Debug Information</summary>
          <pre>{{ JSON.stringify(criticalErrors, null, 2) }}</pre>
        </details>
      </div>
    </div>

    <!-- Error Analytics -->
    <div v-if="showAnalytics && hasErrors" class="error-boundary__analytics">
      <div class="error-stats">
        <span class="error-stats__item">
          Total Errors: {{ errors.length }}
        </span>
        <span class="error-stats__item">
          Critical: {{ criticalErrors.length }}
        </span>
        <span class="error-stats__item">
          Success Rate: {{ successRate }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import CpsErrorDisplay from '@/components/ui/CpsErrorDisplay.vue'
import { useErrorHandler, ErrorSeverity, type AppError } from '@/composables/useErrorHandler'

interface Props {
  allowPartialRender?: boolean
  showAnalytics?: boolean
  maxToastErrors?: number
  toastDuration?: number
}

const props = withDefaults(defineProps<Props>(), {
  allowPartialRender: false,
  showAnalytics: false,
  maxToastErrors: 3,
  toastDuration: 5000
})

const emit = defineEmits<{
  error: [error: AppError]
  criticalError: [error: AppError]
  recovered: []
}>()

// Error handling composable
const {
  hasErrors,
  errors,
  criticalErrors,
  hasCriticalErrors,
  clearError,
  clearAllErrors,
  retryError,
  recoverFromError,
  handleError
} = useErrorHandler()

// Local state
const totalOperations = ref(0)
const successfulOperations = ref(0)
const isDevelopment = ref(import.meta.env.DEV)

// Computed properties
const toastErrors = computed(() =>
  errors.value
    .filter((error: AppError) =>
      error.severity !== ErrorSeverity.CRITICAL &&
      error.severity !== ErrorSeverity.HIGH
    )
    .slice(-props.maxToastErrors)
)

const successRate = computed(() => {
  if (totalOperations.value === 0) return 100
  return Math.round((successfulOperations.value / totalOperations.value) * 100)
})

// Auto-dismiss toast errors
const toastTimers = new Map<string, number>()

watch(toastErrors, (newToasts, oldToasts) => {
  // Clear old timers
  if (oldToasts) {
    oldToasts.forEach((error: AppError) => {
      const timer = toastTimers.get(error.id)
      if (timer) {
        clearTimeout(timer)
        toastTimers.delete(error.id)
      }
    })
  }

  // Set new timers
  newToasts.forEach((error: AppError) => {
    const timer = window.setTimeout(() => {
      clearError(error.id)
      toastTimers.delete(error.id)
    }, props.toastDuration)

    toastTimers.set(error.id, timer)
  })
}, { immediate: true })// Watch for critical errors
watch(hasCriticalErrors, (hasCritical) => {
  if (hasCritical) {
    emit('criticalError', criticalErrors.value[0])
  }
}, { immediate: true })

// Watch for any errors
watch(hasErrors, (hasErr) => {
  if (hasErr && errors.value.length > 0) {
    emit('error', errors.value[errors.value.length - 1])
  }
})

// Lifecycle
onMounted(() => {
  // Track successful page load
  successfulOperations.value++
  totalOperations.value++

  // Listen for unhandled promise rejections
  window.addEventListener('unhandledrejection', handleUnhandledRejection)

  // Listen for global errors
  window.addEventListener('error', handleGlobalError)
})

// Event handlers
const handleRefresh = () => {
  window.location.reload()
}

const handleReportIssue = () => {
  // Implementation for reporting issues
  const errorData = {
    errors: criticalErrors.value,
    userAgent: navigator.userAgent,
    url: window.location.href,
    timestamp: new Date().toISOString()
  }

  console.log('Error report data:', errorData)

  // You could integrate with your support system here
  // For example, opening a support ticket or sending to analytics

  // Simple implementation: copy to clipboard
  navigator.clipboard?.writeText(JSON.stringify(errorData, null, 2))
    .then(() => {
      alert('Error details copied to clipboard. Please paste this information when contacting support.')
    })
    .catch(() => {
      alert('Please contact support with the following error ID: ' + criticalErrors.value[0]?.id)
    })
}

const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
  console.error('Unhandled promise rejection:', event.reason)

  const error = new Error(event.reason?.message || 'Unhandled promise rejection')
  error.stack = event.reason?.stack

  // Handle through our error system
  handleError(error, {
    source: 'Unhandled Promise',
    showUser: true
  })

  // Prevent default browser error handling
  event.preventDefault()
}

const handleGlobalError = (event: ErrorEvent) => {
  console.error('Global error:', event.error)

  // Handle through our error system
  handleError(event.error, {
    source: `${event.filename}:${event.lineno}:${event.colno}`,
    showUser: true
  })
}

// Track operations for analytics
const trackOperation = (success: boolean) => {
  totalOperations.value++
  if (success) {
    successfulOperations.value++
  }
}

// Expose methods for parent components
defineExpose({
  trackOperation,
  clearAllErrors,
  hasErrors,
  criticalErrors
})
</script>

<style scoped>
.error-boundary {
  position: relative;
  min-height: 100vh;
}

.error-boundary__critical {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.error-boundary__content {
  position: relative;
  z-index: 1;
}

.error-boundary__toasts {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1050;
  pointer-events: none;
}

.error-boundary__toasts > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  pointer-events: auto;
}

.error-boundary__fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: #f8f9fa;
}

.error-boundary__fallback-content {
  max-width: 500px;
  text-align: center;
  background: white;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.error-boundary__fallback-icon {
  color: #dc3545;
  margin-bottom: 1.5rem;
}

.error-boundary__fallback-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
}

.error-boundary__fallback-message {
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 2rem;
}

.error-boundary__fallback-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.error-boundary__debug {
  margin-top: 2rem;
  text-align: left;
}

.error-boundary__debug summary {
  cursor: pointer;
  font-weight: 500;
  margin-bottom: 1rem;
}

.error-boundary__debug pre {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  max-height: 300px;
  overflow: auto;
  white-space: pre-wrap;
  word-break: break-word;
}

.error-boundary__analytics {
  position: fixed;
  bottom: 1rem;
  left: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  z-index: 1000;
}

.error-stats {
  display: flex;
  gap: 1rem;
}

.error-stats__item {
  white-space: nowrap;
}

/* Button styles */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 1px solid transparent;
  font-size: 0.875rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background: var(--color-primario, #007bff);
  color: white;
  border-color: var(--color-primario, #007bff);
}

.btn-primary:hover {
  background: #0056b3;
  border-color: #0056b3;
}

.btn-secondary {
  background: #6c757d;
  color: white;
  border-color: #6c757d;
}

.btn-secondary:hover {
  background: #545b62;
  border-color: #545b62;
}

.btn-outline-secondary {
  background: transparent;
  color: #6c757d;
  border-color: #6c757d;
}

.btn-outline-secondary:hover {
  background: #6c757d;
  color: white;
}

/* Toast transitions */
.toast-enter-active,
.toast-leave-active {
  transition: all 0.3s ease;
}

.toast-enter-from,
.toast-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.toast-move {
  transition: transform 0.3s ease;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .error-boundary__fallback {
    padding: 1rem;
  }

  .error-boundary__fallback-content {
    padding: 2rem 1.5rem;
  }

  .error-boundary__fallback-actions {
    flex-direction: column;
    align-items: center;
  }

  .error-boundary__analytics {
    bottom: 0.5rem;
    left: 0.5rem;
    right: 0.5rem;
  }

  .error-stats {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
