import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import type { Component } from 'vue'

/**
 * Helper function to create a wrapper with common test setup
 */
export function createWrapper(component: Component, options = {}) {
  const defaultOptions = {
    global: {
      stubs: {
        'router-link': {
          template: '<a><slot /></a>',
          props: ['to']
        },
        'router-view': {
          template: '<div><slot /></div>'
        }
      }
    }
  }

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    global: {
      ...defaultOptions.global,
      ...(options as { global?: Record<string, unknown> }).global
    }
  }

  return mount(component, mergedOptions)
}

/**
 * Mock for Bootstrap modal functionality
 */
export const mockBootstrapModal = () => ({
  show: vi.fn(),
  hide: vi.fn(),
  toggle: vi.fn(),
  dispose: vi.fn()
})

/**
 * Mock for Bootstrap collapse functionality
 */
export const mockBootstrapCollapse = () => ({
  show: vi.fn(),
  hide: vi.fn(),
  toggle: vi.fn(),
  dispose: vi.fn()
})

/**
 * Helper to simulate async loading states
 */
export const waitForAsync = () => new Promise(resolve => setTimeout(resolve, 0))

/**
 * Helper to create mock image load events
 */
export const createImageLoadEvent = (success = true) => {
  const event = new Event(success ? 'load' : 'error')
  return event
}

/**
 * Helper to simulate intersection observer entries
 */
export const createIntersectionEntry = (isIntersecting = true) => ({
  isIntersecting,
  intersectionRatio: isIntersecting ? 1 : 0,
  target: document.createElement('div'),
  boundingClientRect: new DOMRect(),
  intersectionRect: new DOMRect(),
  rootBounds: new DOMRect(),
  time: Date.now()
})

/**
 * Mock error for testing error handling
 */
export class MockError extends Error {
  constructor(message = 'Test error', public code?: string, public severity?: 'low' | 'medium' | 'high' | 'critical') {
    super(message)
    this.name = 'MockError'
  }
}
