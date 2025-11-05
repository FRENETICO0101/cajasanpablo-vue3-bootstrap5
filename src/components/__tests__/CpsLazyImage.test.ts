import { describe, it, expect, vi, beforeEach } from 'vitest'
import { createWrapper } from '../../test/test-utils'
import CpsLazyImage from '../CpsLazyImage.vue'

// Mock IntersectionObserver
const mockIntersectionObserver = vi.fn()
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
})

Object.defineProperty(globalThis, 'IntersectionObserver', {
  writable: true,
  value: mockIntersectionObserver,
})

describe('CpsLazyImage', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should render with required props', () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image'
      }
    })

    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('alt')).toBe('Test Image')
  })

  it('should show placeholder initially', () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image',
        placeholder: '/placeholder.jpg'
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('src')).toBe('/placeholder.jpg')
  })

  it('should apply custom CSS classes', () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image',
        imageClass: 'custom-image',
        wrapperClass: 'custom-wrapper'
      }
    })

    expect(wrapper.find('img').classes()).toContain('custom-image')
    expect(wrapper.find('.lazy-image-wrapper').classes()).toContain('custom-wrapper')
  })

  it('should show loading state', () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image',
        showLoading: true
      }
    })

    expect(wrapper.find('.loading-spinner').exists()).toBe(true)
  })

  it('should handle error state', async () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image',
        fallback: '/fallback.jpg'
      }
    })

    const img = wrapper.find('img')
    await img.trigger('error')

    expect(wrapper.emitted('error')).toBeTruthy()
  })

  it('should emit load event when image loads', async () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image'
      }
    })

    const img = wrapper.find('img')
    await img.trigger('load')

    expect(wrapper.emitted('load')).toBeTruthy()
  })

  it('should apply responsive sizing', () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image',
        sizes: '(max-width: 768px) 100vw, 50vw'
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('sizes')).toBe('(max-width: 768px) 100vw, 50vw')
  })

  it('should handle srcset for responsive images', () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image',
        srcset: '/test-image-small.jpg 400w, /test-image-large.jpg 800w'
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('srcset')).toBe('/test-image-small.jpg 400w, /test-image-large.jpg 800w')
  })

  it('should apply aspect ratio', () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image',
        aspectRatio: '16/9'
      }
    })

    const wrapper_div = wrapper.find('.lazy-image-wrapper')
    expect(wrapper_div.attributes('style')).toContain('aspect-ratio: 16/9')
  })

  it('should have proper accessibility attributes', () => {
    const wrapper = createWrapper(CpsLazyImage, {
      props: {
        src: '/test-image.jpg',
        alt: 'Test Image',
        loading: true
      }
    })

    const img = wrapper.find('img')
    expect(img.attributes('alt')).toBe('Test Image')
    expect(img.attributes('loading')).toBe('lazy')
  })
})
