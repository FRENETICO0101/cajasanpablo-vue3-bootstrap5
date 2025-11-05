/**
 * TypeScript type definitions for CpsNavBar component
 */

// Import from composables first
import type { NavigationItem } from '@/composables/useNavigation'

export interface LogoConfig {
  src: string
  alt: string
  width: number
  height: number
  href?: string
}

export interface NavBarProps {
  /** Configuration for the logo */
  logo?: LogoConfig
  /** Whether to show the online banking button */
  showOnlineBanking?: boolean
  /** Custom CSS classes for the navbar */
  className?: string
  /** Whether the navbar is sticky */
  sticky?: boolean
  /** Custom navigation items (overrides default) */
  customNavigationItems?: NavigationItem[]
}

export interface ExternalLink {
  href: string
  text: string
  external: boolean
  ariaLabel?: string
  target?: '_blank' | '_self' | '_parent' | '_top'
  rel?: string
}

export interface IconMap {
  [key: string]: string
}

export interface MenuButtonAttributes {
  'aria-expanded': string
  'aria-controls': string
  'aria-label': string
  role: string
  type: 'button'
}

export interface MenuAttributes {
  'aria-hidden': string
  'aria-labelledby'?: string
  role: 'menu'
  id: string
}

export interface NavigationItemProps extends NavigationItem {
  isActive?: boolean
  tabIndex?: number
}

// Re-export NavigationItem for convenience
export type { NavigationItem }

/**
 * Event payload when navigation item is clicked
 */
export interface NavigationClickEvent {
  item: NavigationItem
  event: MouseEvent
  isExternal: boolean
}

/**
 * Configuration for component behavior
 */
export interface NavBarConfig {
  /** Animation duration for mobile menu */
  animationDuration: number
  /** Whether to auto-close menu on route change */
  autoCloseOnRouteChange: boolean
  /** Whether to prevent body scroll when menu is open */
  preventBodyScroll: boolean
  /** Focus trap configuration */
  focusTrap: {
    enabled: boolean
    returnFocus: boolean
  }
}
