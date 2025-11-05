<template>
  <div
    v-if="loading || error"
    :class="[
      'loading-state',
      `loading-state--${variant}`,
      {
        'loading-state--error': !!error,
        'loading-state--fullscreen': fullscreen
      }
    ]"
  >
    <!-- Loading Content -->
    <div v-if="loading && !error" class="loading-state__content">
      <!-- Custom loading slot -->
      <slot name="loading" :loading="loading">
        <div class="loading-state__spinner-container">
          <div :class="['loading-state__spinner', `loading-state__spinner--${spinnerType}`]">
            <div v-if="spinnerType === 'dots'" class="dots">
              <div class="dot"></div>
              <div class="dot"></div>
              <div class="dot"></div>
            </div>
            <div v-else-if="spinnerType === 'pulse'" class="pulse"></div>
            <div v-else-if="spinnerType === 'bars'" class="bars">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
            <div v-else class="circle">
              <svg width="40" height="40" viewBox="0 0 50 50">
                <circle
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-dasharray="31.416"
                  stroke-dashoffset="31.416"
                >
                  <animate
                    attributeName="stroke-dasharray"
                    dur="2s"
                    values="0 31.416;15.708 15.708;0 31.416;0 31.416"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="stroke-dashoffset"
                    dur="2s"
                    values="0;-15.708;-31.416;-31.416"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>

          <div v-if="message" class="loading-state__message">
            {{ message }}
          </div>

          <div v-if="submessage" class="loading-state__submessage">
            {{ submessage }}
          </div>
        </div>
      </slot>
    </div>

    <!-- Error Content -->
    <div v-else-if="error" class="loading-state__error">
      <slot name="error" :error="error" :retry="handleRetry">
        <CpsErrorDisplay
          :error="error"
          variant="inline"
          :show-retry="!!retryFn"
          :show-recover="!!recoverFn"
          @retry="handleRetry"
          @recover="handleRecover"
          @dismiss="handleDismiss"
        />
      </slot>
    </div>

    <!-- Progress Bar -->
    <div
      v-if="showProgress && progress !== null"
      class="loading-state__progress"
    >
      <div class="progress-bar">
        <div
          class="progress-bar__fill"
          :style="{ width: `${Math.min(100, Math.max(0, progress))}%` }"
        ></div>
      </div>
      <div v-if="progressText" class="progress-text">
        {{ progressText }}
      </div>
    </div>

    <!-- Cancel Button -->
    <button
      v-if="showCancel && loading"
      type="button"
      class="loading-state__cancel btn btn-outline-secondary btn-sm"
      @click="handleCancel"
    >
      {{ cancelText }}
    </button>
  </div>
</template>

<script setup lang="ts">
import CpsErrorDisplay from '@/components/ui/CpsErrorDisplay.vue'
import type { AppError } from '@/composables/useErrorHandler'

interface Props {
  loading?: boolean
  error?: AppError | null
  message?: string
  submessage?: string
  variant?: 'overlay' | 'inline' | 'card' | 'page'
  spinnerType?: 'circle' | 'dots' | 'pulse' | 'bars'
  fullscreen?: boolean
  showProgress?: boolean
  progress?: number | null
  progressText?: string
  showCancel?: boolean
  cancelText?: string
  retryFn?: () => Promise<void> | void
  recoverFn?: () => void
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  error: null,
  message: 'Loading...',
  variant: 'overlay',
  spinnerType: 'circle',
  fullscreen: false,
  showProgress: false,
  progress: null,
  showCancel: false,
  cancelText: 'Cancel'
})

const emit = defineEmits<{
  retry: []
  recover: []
  cancel: []
  dismiss: []
}>()

const handleRetry = () => {
  if (props.retryFn) {
    props.retryFn()
  }
  emit('retry')
}

const handleRecover = () => {
  if (props.recoverFn) {
    props.recoverFn()
  }
  emit('recover')
}

const handleCancel = () => {
  emit('cancel')
}

const handleDismiss = () => {
  emit('dismiss')
}
</script>

<style scoped>
.loading-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding: 2rem;
  color: var(--text-color, #333);
}

/* Variant styles */
.loading-state--overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  z-index: 10;
  backdrop-filter: blur(1px);
}

.loading-state--fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(2px);
}

.loading-state--inline {
  position: relative;
  background: transparent;
  min-height: 80px;
  padding: 1rem;
}

.loading-state--card {
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-height: 120px;
}

.loading-state--page {
  min-height: 50vh;
  padding: 4rem 2rem;
}

/* Content styles */
.loading-state__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.loading-state__spinner-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loading-state__spinner {
  color: var(--color-primario, #007bff);
}

/* Spinner types */
.loading-state__spinner--circle {
  width: 40px;
  height: 40px;
}

.loading-state__spinner--dots .dots {
  display: flex;
  gap: 0.5rem;
}

.loading-state__spinner--dots .dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  animation: dot-bounce 1.4s ease-in-out infinite both;
}

.loading-state__spinner--dots .dot:nth-child(1) { animation-delay: -0.32s; }
.loading-state__spinner--dots .dot:nth-child(2) { animation-delay: -0.16s; }

.loading-state__spinner--pulse .pulse {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse-scale 1s ease-in-out infinite;
}

.loading-state__spinner--bars .bars {
  display: flex;
  gap: 0.25rem;
  align-items: end;
}

.loading-state__spinner--bars .bar {
  width: 4px;
  height: 20px;
  background: currentColor;
  animation: bar-bounce 1.2s ease-in-out infinite;
}

.loading-state__spinner--bars .bar:nth-child(1) { animation-delay: -0.24s; }
.loading-state__spinner--bars .bar:nth-child(2) { animation-delay: -0.12s; }
.loading-state__spinner--bars .bar:nth-child(3) { animation-delay: 0s; }
.loading-state__spinner--bars .bar:nth-child(4) { animation-delay: 0.12s; }

/* Message styles */
.loading-state__message {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color, #333);
}

.loading-state__submessage {
  font-size: 0.875rem;
  color: var(--text-color-muted, #666);
  max-width: 300px;
  line-height: 1.4;
}

/* Progress styles */
.loading-state__progress {
  width: 100%;
  max-width: 300px;
  margin-top: 1.5rem;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background: #e9ecef;
  border-radius: 2px;
  overflow: hidden;
}

.progress-bar__fill {
  height: 100%;
  background: var(--color-primario, #007bff);
  border-radius: 2px;
  transition: width 0.3s ease;
}

.progress-text {
  text-align: center;
  font-size: 0.8rem;
  color: var(--text-color-muted, #666);
  margin-top: 0.5rem;
}

/* Cancel button */
.loading-state__cancel {
  margin-top: 1.5rem;
}

/* Error state */
.loading-state--error {
  background: #fff;
}

.loading-state__error {
  width: 100%;
  max-width: 500px;
}

/* Button styles */
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

/* Animations */
@keyframes dot-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

@keyframes pulse-scale {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}

@keyframes bar-bounce {
  0%, 40%, 100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .loading-state {
    padding: 1rem;
  }

  .loading-state--page {
    padding: 2rem 1rem;
  }

  .loading-state__message {
    font-size: 0.9rem;
  }

  .loading-state__submessage {
    font-size: 0.8rem;
  }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
  .loading-state--overlay {
    background: rgba(0, 0, 0, 0.9);
    color: #fff;
  }

  .loading-state--fullscreen {
    background: rgba(0, 0, 0, 0.95);
    color: #fff;
  }

  .loading-state--card {
    background: #2d3748;
    color: #fff;
  }

  .progress-bar {
    background: #4a5568;
  }
}
</style>
