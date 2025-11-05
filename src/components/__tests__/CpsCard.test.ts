import { describe, it, expect } from 'vitest'
import { createWrapper } from '../../test/test-utils'
import CpsCard from '../CpsCard.vue'

describe('CpsCard', () => {
  it('should render with basic props', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content'
      }
    })

    expect(wrapper.text()).toContain('Test Card')
    expect(wrapper.text()).toContain('Test content')
  })

  it('should render with custom CSS classes', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content',
        cardClass: 'custom-card',
        titleClass: 'custom-title'
      }
    })

    expect(wrapper.find('.card').classes()).toContain('custom-card')
    expect(wrapper.find('.card-title').classes()).toContain('custom-title')
  })

  it('should render with custom styles', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content',
        cardStyle: { backgroundColor: 'red' },
        titleStyle: { color: 'blue' }
      }
    })

    const card = wrapper.find('.card')
    const title = wrapper.find('.card-title')

    expect(card.attributes('style')).toContain('background-color: red')
    expect(title.attributes('style')).toContain('color: blue')
  })

  it('should render action button when provided', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content',
        actionText: 'Click Me',
        actionLink: '/test'
      }
    })

    const actionButton = wrapper.find('.btn')
    expect(actionButton.exists()).toBe(true)
    expect(actionButton.text()).toBe('Click Me')
    expect(actionButton.attributes('href')).toBe('/test')
  })

  it('should emit action-click when action button is clicked', async () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content',
        actionText: 'Click Me'
      }
    })

    const actionButton = wrapper.find('.btn')
    await actionButton.trigger('click')

    expect(wrapper.emitted('action-click')).toBeTruthy()
  })

  it('should render with image when imageUrl is provided', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content',
        imageUrl: '/test-image.jpg',
        imageAlt: 'Test Image'
      }
    })

    const image = wrapper.find('.card-img-top')
    expect(image.exists()).toBe(true)
    expect(image.attributes('src')).toBe('/test-image.jpg')
    expect(image.attributes('alt')).toBe('Test Image')
  })

  it('should render loading state', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content',
        loading: true
      }
    })

    expect(wrapper.find('.loading-spinner').exists()).toBe(true)
    expect(wrapper.find('.card-body').classes()).toContain('opacity-50')
  })

  it('should render error state', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content',
        error: 'Something went wrong'
      }
    })

    expect(wrapper.text()).toContain('Something went wrong')
    expect(wrapper.find('.alert-danger').exists()).toBe(true)
  })

  it('should apply responsive sizing classes', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content',
        size: 'sm'
      }
    })

    expect(wrapper.find('.card').classes()).toContain('card-sm')
  })

  it('should handle slot content', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card'
      },
      slots: {
        default: '<p>Custom slot content</p>',
        actions: '<button class="custom-action">Custom Action</button>'
      }
    })

    expect(wrapper.text()).toContain('Custom slot content')
    expect(wrapper.find('.custom-action').exists()).toBe(true)
  })

  it('should have proper accessibility attributes', () => {
    const wrapper = createWrapper(CpsCard, {
      props: {
        title: 'Test Card',
        content: 'Test content'
      }
    })

    const card = wrapper.find('.card')
    expect(card.attributes('role')).toBe('article')
    expect(card.attributes('aria-labelledby')).toBeDefined()
  })
})
