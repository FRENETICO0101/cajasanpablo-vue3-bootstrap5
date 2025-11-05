import '@testing-library/jest-dom'
import { beforeEach, vi } from 'vitest'

// Mock window.matchMedia for responsive tests
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock IntersectionObserver for lazy loading tests
Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
    thresholds: [0],
    root: null,
    rootMargin: '',
  })),
})

// Mock ResizeObserver
Object.defineProperty(globalThis, 'ResizeObserver', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  })),
})

// Mock console methods to reduce noise in tests
beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {})
  vi.spyOn(console, 'error').mockImplementation(() => {})
})

// Global test utilities
export const mockComponent = (name: string) => ({
  name,
  template: `<div data-testid="${name.toLowerCase()}">${name} Mock</div>`
})

export const createMountOptions = (props = {}, slots = {}) => ({
  props,
  slots,
  global: {
    stubs: {
      'router-link': true,
      'router-view': true
    }
  }
})
