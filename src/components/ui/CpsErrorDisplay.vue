<template>
  <div v-if="error" :class="[
    'error-display',
    `error-display--${error.severity}`,
    `error-display--${variant}`,
    { 'error-display--dismissible': dismissible }
  ]">
    <!-- Error Icon -->
    <div class="error-display__icon">
      <svg
        v-if="error.severity === 'critical'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
      <svg
        v-else-if="error.severity === 'high'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg>
      <svg
        v-else-if="error.severity === 'medium'"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
      </svg>
      <svg
        v-else
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
      </svg>
    </div>

    <!-- Error Content -->
    <div class="error-display__content">
      <h4 v-if="title" class="error-display__title">{{ title }}</h4>
      <p class="error-display__message">{{ error.message }}</p>

      <!-- Error Details (collapsible) -->
      <div v-if="error.details && showDetails" class="error-display__details">
        <button
          type="button"
          class="error-display__details-toggle"
          @click="toggleDetails"
        >
          {{ detailsExpanded ? 'Hide Details' : 'Show Details' }}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="currentColor"
            :class="{ 'rotated': detailsExpanded }"
          >
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </button>

        <div v-if="detailsExpanded" class="error-display__details-content">
          <pre>{{ error.details }}</pre>
        </div>
      </div>

      <!-- Error Metadata -->
      <div v-if="showMetadata" class="error-display__metadata">
        <span class="error-display__timestamp">
          {{ formatTimestamp(error.timestamp) }}
        </span>
        <span v-if="error.source" class="error-display__source">
          Source: {{ error.source }}
        </span>
        <span class="error-display__type">
          Type: {{ error.type }}
        </span>
      </div>
    </div>

    <!-- Error Actions -->
    <div v-if="showActions" class="error-display__actions">
      <button
        v-if="error.retry && showRetry"
        type="button"
        class="btn btn-primary btn-sm"
        :disabled="isRetrying"
        @click="handleRetry"
      >
        <svg v-if="isRetrying" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="spinning">
          <path d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"/>
        </svg>
        {{ isRetrying ? 'Retrying...' : 'Retry' }}
      </button>

      <button
        v-if="error.recover && showRecover"
        type="button"
        class="btn btn-secondary btn-sm"
        @click="handleRecover"
      >
        Recover
      </button>

      <button
        v-if="dismissible"
        type="button"
        class="btn btn-outline-secondary btn-sm"
        @click="handleDismiss"
      >
        Dismiss
      </button>
    </div>

    <!-- Close Button -->
    <button
      v-if="dismissible"
      type="button"
      class="error-display__close"
      @click="handleDismiss"
      aria-label="Close error"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { AppError } from '@/composables/useErrorHandler'

interface Props {
  error: AppError | null
  variant?: 'banner' | 'toast' | 'inline' | 'modal'
  title?: string
  dismissible?: boolean
  showActions?: boolean
  showRetry?: boolean
  showRecover?: boolean
  showDetails?: boolean
  showMetadata?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'inline',
  dismissible: true,
  showActions: true,
  showRetry: true,
  showRecover: true,
  showDetails: false,
  showMetadata: false
})

const emit = defineEmits<{
  retry: [errorId: string]
  recover: [errorId: string]
  dismiss: [errorId: string]
}>()

const isRetrying = ref(false)
const detailsExpanded = ref(false)

const toggleDetails = () => {
  detailsExpanded.value = !detailsExpanded.value
}

const handleRetry = async () => {
  if (!props.error) return

  isRetrying.value = true
  emit('retry', props.error.id)

  // Reset after a delay to prevent immediate re-clicking
  setTimeout(() => {
    isRetrying.value = false
  }, 2000)
}

const handleRecover = () => {
  if (!props.error) return
  emit('recover', props.error.id)
}

const handleDismiss = () => {
  if (!props.error) return
  emit('dismiss', props.error.id)
}

const formatTimestamp = (timestamp: Date): string => {
  return timestamp.toLocaleString()
}
</script>

<style scoped>
.error-display {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  position: relative;
  font-family: var(--font-family, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif);
}

/* Severity variants */
.error-display--low {
  background: #e3f2fd;
  border: 1px solid #2196f3;
  color: #1565c0;
}

.error-display--medium {
  background: #fff3e0;
  border: 1px solid #ff9800;
  color: #e65100;
}

.error-display--high {
  background: #ffebee;
  border: 1px solid #f44336;
  color: #c62828;
}

.error-display--critical {
  background: #fce4ec;
  border: 1px solid #e91e63;
  color: #ad1457;
}

/* Display variants */
.error-display--banner {
  border-radius: 0;
  border-left: none;
  border-right: none;
  margin: 0 -1rem;
}

.error-display--toast {
  position: fixed;
  top: 1rem;
  right: 1rem;
  max-width: 400px;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.error-display--modal {
  max-width: 500px;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.error-display__icon {
  flex-shrink: 0;
  margin-top: 0.125rem;
}

.error-display__content {
  flex: 1;
  min-width: 0;
}

.error-display__title {
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.4;
}

.error-display__message {
  margin: 0 0 0.75rem 0;
  line-height: 1.5;
}

.error-display__details {
  margin-top: 0.75rem;
}

.error-display__details-toggle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  font-size: 0.875rem;
  padding: 0;
  text-decoration: underline;
}

.error-display__details-toggle:hover {
  opacity: 0.8;
}

.error-display__details-toggle svg {
  transition: transform 0.2s ease;
}

.error-display__details-toggle svg.rotated {
  transform: rotate(180deg);
}

.error-display__details-content {
  margin-top: 0.5rem;
  padding: 0.75rem;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  font-size: 0.8rem;
  max-height: 200px;
  overflow-y: auto;
}

.error-display__details-content pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}

.error-display__metadata {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 0.75rem;
  font-size: 0.75rem;
  opacity: 0.8;
}

.error-display__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;
}

.error-display__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 0.25rem;
  opacity: 0.7;
  transition: opacity 0.2s ease;
}

.error-display__close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}

.btn {
  padding: 0.375rem 0.75rem;
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

.btn-primary:hover:not(:disabled) {
  background: #0056b3;
  border-color: #0056b3;
}

.btn-primary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
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

.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
}

.spinning {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .error-display--toast {
    top: 0.5rem;
    right: 0.5rem;
    left: 0.5rem;
    max-width: none;
  }

  .error-display {
    padding: 0.75rem;
    gap: 0.75rem;
  }

  .error-display__actions {
    flex-direction: column;
  }

  .error-display__metadata {
    flex-direction: column;
    gap: 0.25rem;
  }
}
</style>
