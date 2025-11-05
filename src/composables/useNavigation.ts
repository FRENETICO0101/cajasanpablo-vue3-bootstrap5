import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

export interface NavigationItem {
  href: string
  icon: string
  text: string
  external?: boolean
  ariaLabel?: string
}

export interface MobileMenuState {
  isOpen: boolean
  elementId: string
}

/**
 * Composable for navigation functionality
 * Provides navigation items, mobile menu state, and utility functions
 */
export function useNavigation() {
  const route = useRoute()

  // Navigation items configuration
  const navigationItems = ref<NavigationItem[]>([
    {
      href: '/servicio/sucursales',
      icon: 'location',
      text: 'SUCURSALES',
      ariaLabel: 'Ir a sucursales'
    },
    {
      href: '/servicio/creditos',
      icon: 'credit',
      text: 'CRÉDITOS',
      ariaLabel: 'Ir a créditos'
    },
    {
      href: '/servicio/cuentas-deposito',
      icon: 'bank',
      text: 'CUENTAS DE DEPÓSITO',
      ariaLabel: 'Ir a cuentas de depósito'
    },
    {
      href: '/servicio/buzon',
      icon: 'mail',
      text: 'BUZÓN',
      ariaLabel: 'Ir a buzón'
    }
  ])

  // External link for online banking
  const onlineBankingLink = ref({
    href: 'http://187.216.130.242/PortalInfiCaja',
    text: 'SALDOS EN <br>LÍNEA',
    external: true,
    ariaLabel: 'Abrir portal de saldos en línea (abre en nueva ventana)'
  })

  // Check if a route is currently active
  const isActiveRoute = computed(() => (href: string) => {
    return route.path === href
  })

  // Get navigation item by href
  const getNavigationItem = (href: string): NavigationItem | undefined => {
    return navigationItems.value.find(item => item.href === href)
  }

  // Get SVG icon for navigation item
  const getIconSvg = (iconType: string): string => {
    const icons: Record<string, string> = {
      location: `<path d="M12,0A10.011,10.011,0,0,0,2,10c0,5.282,8.4,12.533,9.354,13.343l.646.546.646-.546C13.6,22.533,22,15.282,22,10A10.011,10.011,0,0,0,12,0Zm0,15a5,5,0,1,1,5-5A5.006,5.006,0,0,1,12,15Z" /><circle cx="12" cy="10" r="3" />`,
      credit: `<path d="M4,11c-2.21,0-4,1.79-4,4v5c0,2.21,1.79,4,4,4h4.26c2.8,0,5.48-1.18,7.37-3.25l7.7-8.41c.95-1.06,.86-2.71-.19-3.66-.51-.47-1.19-.71-1.88-.68-.7,.03-1.34,.33-1.79,.83l-3.54,3.74c.03,.21,.06,.42,.06,.64,0,2.08-1.55,3.88-3.62,4.17l-4.25,.6c-.55,.08-1.05-.3-1.13-.85-.08-.55,.3-1.05,.85-1.13l4.16-.58c.94-.13,1.75-.81,1.94-1.73,.3-1.43-.79-2.69-2.16-2.69H4Z" /><path d="M9.81,4.79l-3.29-.55c-.3-.05-.52-.31-.52-.62,0-.34,.28-.62,.62-.62h2.64c.36,0,.69,.19,.87,.5,.28,.48,.89,.64,1.37,.36,.48-.28,.64-.89,.37-1.37-.54-.92-1.53-1.5-2.6-1.5h-.27c0-.55-.45-1-1-1s-1,.45-1,1h-.38c-1.45,0-2.62,1.18-2.62,2.62,0,1.29,.92,2.38,2.19,2.59l3.29,.55c.3,.05,.52,.31,.52,.62,0,.34-.28,.62-.62,.62h-2.64c-.36,0-.69-.19-.87-.5-.28-.48-.89-.64-1.37-.36-.48,.28-.64,.89-.37,1.37,.54,.92,1.53,1.5,2.6,1.5h.27c0,.55,.45,1,1,1s1-.45,1-1h.38c1.45,0,2.62-1.18,2.62-2.62,0-1.29-.92-2.38-2.19-2.59Z" />`,
      bank: `<path d="M22.432,11.046c-.338-.846-.824-1.636-1.432-2.327v-3.715c0-.618-.278-1.192-.764-1.576-.478-.377-1.089-.513-1.681-.374-1.825,.435-3.194,1.469-3.927,2.946h-5.363c-2.581,0-4.898,1.158-6.419,2.969-1.2-.175-1.055-1.971,.153-1.969,1.307-.005,1.308-1.995,0-2-3.185-.01-4.129,4.406-1.268,5.709-1.759,3.62-.229,8.282,3.268,10.212v.079c.002,3.351,4.74,4.118,5.829,1h2.343c1.089,3.12,5.827,2.349,5.829-1v-.092c1.56-.903,2.771-2.3,3.432-3.954,.821-.175,1.568-.848,1.568-1.954v-2c0-1.106-.748-1.779-1.568-1.954Zm-4.432,1.954c-1.308-.006-1.308-1.994,0-2,1.308,.006,1.308,1.994,0,2ZM6.052,4.512c-.562-5.591,7.74-6.132,7.948-.512h-4.734c-1.121,0-2.2,.185-3.214,.512Z" />`,
      mail: `<path d="M23.954,5.542,15.536,13.96a5.007,5.007,0,0,1-7.072,0L.046,5.542C.032,5.7,0,5.843,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6C24,5.843,23.968,5.7,23.954,5.542Z" /><path d="M14.122,12.546l9.134-9.135A4.986,4.986,0,0,0,19,1H5A4.986,4.986,0,0,0,.744,3.411l9.134,9.135A3.007,3.007,0,0,0,14.122,12.546Z" />`
    }
    return icons[iconType] || ''
  }

  return {
    navigationItems: navigationItems.value,
    onlineBankingLink: onlineBankingLink.value,
    isActiveRoute,
    getNavigationItem,
    getIconSvg
  }
}
