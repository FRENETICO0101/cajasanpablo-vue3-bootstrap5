<template>
  <nav
    :class="className"
    role="navigation"
    aria-label="Main navigation"
    :aria-expanded="isMenuOpen"
  >
    <div class="container-fluid">
      <!-- Logo -->
      <a
        :href="logoConfig.href"
        :aria-label="`Go to homepage - ${logoConfig.alt}`"
        class="navbar-brand"
      >
        <img
          :alt="logoConfig.alt"
          :src="logoConfig.src"
          :width="logoConfig.width"
          :height="logoConfig.height"
        />
      </a>

      <!-- Desktop Navigation -->
      <ul
        class="nav d-none d-lg-flex justify-content-end gap-4"
        role="menubar"
        aria-label="Desktop navigation menu"
      >
        <li
          v-for="item in currentNavigationItems"
          :key="item.href"
          class="svg-img-text"
          role="none"
        >
          <a
            :href="item.href"
            :class="{ 'active': isActiveRoute(item.href) }"
            :aria-current="isActiveRoute(item.href) ? 'page' : undefined"
            role="menuitem"
            :tabindex="0"
            @click="handleNavigationClick($event, item.href)"
          >
            <svg
              v-if="item.icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              class="svg-image"
              :aria-label="item.text"
              role="img"
              v-html="getIconSvg(item.icon)"
            >
            </svg>
            {{ item.text }}
          </a>
        </li>

        <!-- Online Banking Button -->
        <li v-if="showOnlineBanking" class="btn-saldo" role="none">
          <a
            :href="onlineBankingConfig.href"
            :target="onlineBankingConfig.target"
            :rel="onlineBankingConfig.rel"
            :aria-label="onlineBankingConfig.ariaLabel"
            type="button"
            class="saldos btn btn-primary"
            role="menuitem"
            tabindex="0"
            v-html="onlineBankingConfig.text"
          >
          </a>
        </li>
      </ul>

      <!-- Mobile Menu Toggle -->
      <button
        type="button"
        class="menu-icon d-lg-none btn btn-link p-0 border-0"
        :aria-expanded="isMenuOpen"
        :aria-label="isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'"
        aria-controls="menuNavBar"
        @click="toggleMenu('menuNavBar')"
      >
        <img
          src="/src/assets/icon/menu.webp"
          width="45"
          height="45"
          alt=""
          aria-hidden="true"
        />
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <ul
      class="menu-desplegable d-lg-none"
      id="menuNavBar"
      :style="{ display: isMenuOpen ? 'block' : 'none' }"
      role="menu"
      aria-label="Mobile navigation menu"
      :aria-hidden="!isMenuOpen"
    >
      <div class="container">
        <li
          v-for="(item, index) in currentNavigationItems"
          :key="item.href"
          role="none"
        >
          <a
            :href="item.href"
            :class="{ 'active': isActiveRoute(item.href) }"
            :aria-current="isActiveRoute(item.href) ? 'page' : undefined"
            role="menuitem"
            :tabindex="isMenuOpen ? 0 : -1"
            @click="handleNavigationClick($event, item.href)"
          >
            {{ item.text }}
          </a>
          <hr v-if="index < currentNavigationItems.length - 1" class="linea-horizontal" aria-hidden="true" />
        </li>

        <!-- Mobile Online Banking -->
        <li v-if="showOnlineBanking" role="none">
          <hr class="linea-horizontal" aria-hidden="true" />
          <a
            :href="onlineBankingConfig.href"
            :target="onlineBankingConfig.target"
            :rel="onlineBankingConfig.rel"
            :aria-label="onlineBankingConfig.ariaLabel"
            class="saldos btn btn-primary"
            role="menuitem"
            :tabindex="isMenuOpen ? 0 : -1"
          >
            SALDOS EN LÍNEA
          </a>
        </li>
      </div>
    </ul>
  </nav>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, computed, toRefs } from 'vue'
import { useNavigation } from '@/composables/useNavigation'
import { useMobileMenu } from '@/composables/useMobileMenu'
import { useAccessibility } from '@/composables/useAccessibility'
import type { NavBarProps, LogoConfig, ExternalLink } from '@/components/types/navbar'

// Props with default values and type safety
const props = withDefaults(defineProps<NavBarProps>(), {
  logo: () => ({
    src: '/src/assets/icon/LogoSitioWeb.webp',
    alt: 'Logo Caja Popular San Pablo',
    width: 160,
    height: 44,
    href: '/'
  }),
  showOnlineBanking: true,
  className: 'menu-superior navbar navbar-expand-lg navbar-light',
  sticky: false,
  customNavigationItems: undefined
})

// Reactive props
const { logo, showOnlineBanking, className, customNavigationItems } = toRefs(props)

// Composables
const { navigationItems, onlineBankingLink, isActiveRoute, getIconSvg } = useNavigation()
const { isMenuOpen, toggleMenu, setupClickOutside, cleanup } = useMobileMenu()
const { announceToScreenReader } = useAccessibility()

// Computed properties with proper typing
const currentNavigationItems = computed(() =>
  customNavigationItems?.value || navigationItems
)

const logoConfig = computed((): LogoConfig => ({
  src: logo.value.src,
  alt: logo.value.alt,
  width: logo.value.width,
  height: logo.value.height,
  href: logo.value.href || '/'
}))

const onlineBankingConfig = computed((): ExternalLink => ({
  href: onlineBankingLink.href,
  text: onlineBankingLink.text,
  external: onlineBankingLink.external,
  ariaLabel: onlineBankingLink.ariaLabel || 'Open online banking in new tab',
  target: '_blank',
  rel: 'noopener noreferrer'
}))

// Methods with proper typing
const handleNavigationClick = (event: MouseEvent, href: string): void => {
  // Add analytics tracking or custom logic here if needed
  console.log('Navigation clicked:', href)

  // Announce navigation to screen readers
  const linkText = currentNavigationItems.value.find(item => item.href === href)?.text || href
  announceToScreenReader(`Navigating to ${linkText}`)
}

// Setup mobile menu functionality
onMounted(() => {
  setupClickOutside()
})

// Cleanup on unmount
onUnmounted(() => {
  cleanup()
})
</script>
<style scoped>
@import '@/assets/variables.css';
@import '@/assets/animations.css';

@-webkit-keyframes bounce {

  0%,
  20%,
  53%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215,
        0.61,
        0.355,
        1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  40%,
  43% {
    -webkit-animation-timing-function: cubic-bezier(0.755,
        0.05,
        0.855,
        0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -30px, 0) scaleY(1.1);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    -webkit-animation-timing-function: cubic-bezier(0.755,
        0.05,
        0.855,
        0.06);
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    -webkit-transform: translate3d(0, -15px, 0) scaleY(1.05);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    -webkit-transition-timing-function: cubic-bezier(0.215,
        0.61,
        0.355,
        1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    -webkit-transform: translate3d(0, 0, 0) scaleY(0.95);
    transform: translateZ(0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -4px, 0) scaleY(1.02);
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
}

@-webkit-keyframes flash {

  0%,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
}

@-webkit-keyframes pulse {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scaleZ(1);
  }

  50% {
    -webkit-transform: scale3d(1.05, 1.05, 1.05);
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scaleZ(1);
  }
}

@-webkit-keyframes rubberBand {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scaleZ(1);
  }

  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scaleZ(1);
  }
}

@-webkit-keyframes shakeX {

  0%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
}

@-webkit-keyframes shakeY {

  0%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }
}

@-webkit-keyframes headShake {
  0% {
    -webkit-transform: translateX(0);
    transform: translate(0);
  }

  6.5% {
    -webkit-transform: translateX(-6px) rotateY(-9deg);
    transform: translate(-6px) rotateY(-9deg);
  }

  18.5% {
    -webkit-transform: translateX(5px) rotateY(7deg);
    transform: translate(5px) rotateY(7deg);
  }

  31.5% {
    -webkit-transform: translateX(-3px) rotateY(-5deg);
    transform: translate(-3px) rotateY(-5deg);
  }

  43.5% {
    -webkit-transform: translateX(2px) rotateY(3deg);
    transform: translate(2px) rotateY(3deg);
  }

  50% {
    -webkit-transform: translateX(0);
    transform: translate(0);
  }
}

@-webkit-keyframes swing {
  20% {
    -webkit-transform: rotate3d(0, 0, 1, 15deg);
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    -webkit-transform: rotate3d(0, 0, 1, -10deg);
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    -webkit-transform: rotate3d(0, 0, 1, 5deg);
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    -webkit-transform: rotate3d(0, 0, 1, -5deg);
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0);
  }
}

@-webkit-keyframes tada {
  0% {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scaleZ(1);
  }

  10%,
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scaleZ(1);
  }
}

@-webkit-keyframes wobble {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  15% {
    -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes jello {

  0%,
  11.1%,
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  22.2% {
    -webkit-transform: skewX(-12.5deg) skewY(-12.5deg);
    transform: skew(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    -webkit-transform: skewX(6.25deg) skewY(6.25deg);
    transform: skew(6.25deg) skewY(6.25deg);
  }

  44.4% {
    -webkit-transform: skewX(-3.125deg) skewY(-3.125deg);
    transform: skew(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    -webkit-transform: skewX(1.5625deg) skewY(1.5625deg);
    transform: skew(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    -webkit-transform: skewX(-0.78125deg) skewY(-0.78125deg);
    transform: skew(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    -webkit-transform: skewX(0.390625deg) skewY(0.390625deg);
    transform: skew(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    -webkit-transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    transform: skew(-0.1953125deg) skewY(-0.1953125deg);
  }
}

@-webkit-keyframes heartBeat {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  14% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  28% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  42% {
    -webkit-transform: scale(1.3);
    transform: scale(1.3);
  }

  70% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes backInDown {
  0% {
    -webkit-transform: translateY(-1200px) scale(0.7);
    transform: translateY(-1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0) scale(0.7);
    opacity: 0.7;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes backInLeft {
  0% {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translate(-2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translate(0) scale(0.7);
    opacity: 0.7;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes backInRight {
  0% {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translate(2000px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translate(0) scale(0.7);
    opacity: 0.7;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes backInUp {
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }

  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0) scale(0.7);
    opacity: 0.7;
  }

  to {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@-webkit-keyframes backOutDown {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0) scale(0.7);
    opacity: 0.7;
  }

  to {
    -webkit-transform: translateY(700px) scale(0.7);
    transform: translateY(700px) scale(0.7);
    opacity: 0.7;
  }
}

@-webkit-keyframes backOutLeft {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translate(0) scale(0.7);
    opacity: 0.7;
  }

  to {
    -webkit-transform: translateX(-2000px) scale(0.7);
    transform: translate(-2000px) scale(0.7);
    opacity: 0.7;
  }
}

@-webkit-keyframes backOutRight {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateX(0px) scale(0.7);
    transform: translate(0) scale(0.7);
    opacity: 0.7;
  }

  to {
    -webkit-transform: translateX(2000px) scale(0.7);
    transform: translate(2000px) scale(0.7);
    opacity: 0.7;
  }
}

@-webkit-keyframes backOutUp {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }

  20% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0) scale(0.7);
    opacity: 0.7;
  }

  to {
    -webkit-transform: translateY(-700px) scale(0.7);
    transform: translateY(-700px) scale(0.7);
    opacity: 0.7;
  }
}

@-webkit-keyframes bounceIn {

  0%,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215,
        0.61,
        0.355,
        1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scaleZ(1);
  }
}

@-webkit-keyframes bounceInDown {

  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215,
        0.61,
        0.355,
        1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0) scaleY(3);
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0) scaleY(0.9);
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.95);
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0) scaleY(0.985);
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes bounceInLeft {

  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215,
        0.61,
        0.355,
        1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0) scaleX(3);
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0) scaleX(1);
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0) scaleX(0.98);
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0) scaleX(0.995);
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes bounceInRight {

  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215,
        0.61,
        0.355,
        1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0) scaleX(3);
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0) scaleX(1);
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0) scaleX(0.98);
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0) scaleX(0.995);
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes bounceInUp {

  0%,
  60%,
  75%,
  90%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215,
        0.61,
        0.355,
        1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0) scaleY(5);
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.95);
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0) scaleY(0.985);
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes bounceOut {
  20% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
}

@-webkit-keyframes bounceOutDown {
  20% {
    -webkit-transform: translate3d(0, 10px, 0) scaleY(0.985);
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0) scaleY(0.9);
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0) scaleY(3);
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
}

@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0) scaleX(0.9);
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0) scaleX(2);
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
}

@-webkit-keyframes bounceOutRight {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(-20px, 0, 0) scaleX(0.9);
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0) scaleX(2);
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
}

@-webkit-keyframes bounceOutUp {
  20% {
    -webkit-transform: translate3d(0, -10px, 0) scaleY(0.985);
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    -webkit-transform: translate3d(0, 20px, 0) scaleY(0.9);
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0) scaleY(3);
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInDownBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInLeftBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInRightBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInUpBig {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInTopLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInTopRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInBottomLeft {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeInBottomRight {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}

@-webkit-keyframes fadeOutDown {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@-webkit-keyframes fadeOutDownBig {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, 2000px, 0);
    transform: translate3d(0, 2000px, 0);
  }
}

@-webkit-keyframes fadeOutLeft {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@-webkit-keyframes fadeOutLeftBig {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}

@-webkit-keyframes fadeOutRight {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@-webkit-keyframes fadeOutRightBig {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(2000px, 0, 0);
    transform: translate3d(2000px, 0, 0);
  }
}

@-webkit-keyframes fadeOutUp {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

@-webkit-keyframes fadeOutUpBig {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }
}

@-webkit-keyframes fadeOutTopLeft {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, -100%, 0);
    transform: translate3d(-100%, -100%, 0);
  }
}

@-webkit-keyframes fadeOutTopRight {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, -100%, 0);
    transform: translate3d(100%, -100%, 0);
  }
}

@-webkit-keyframes fadeOutBottomRight {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 100%, 0);
    transform: translate3d(100%, 100%, 0);
  }
}

@-webkit-keyframes fadeOutBottomLeft {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 100%, 0);
    transform: translate3d(-100%, 100%, 0);
  }
}

@-webkit-keyframes flip {
  0% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    transform: perspective(400px) scaleZ(1) translateZ(0) rotateY(-360deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  40% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
    transform: perspective(400px) scaleZ(1) translateZ(150px) rotateY(-190deg);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  50% {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
    transform: perspective(400px) scaleZ(1) translateZ(150px) rotateY(-170deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  80% {
    -webkit-transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  to {
    -webkit-transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    transform: perspective(400px) scaleZ(1) translateZ(0) rotateY(0);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
}

@-webkit-keyframes flipInX {
  0% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotateX(90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotateX(-20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotateX(10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotateX(-5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@-webkit-keyframes flipInY {
  0% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotateY(90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    transform: perspective(400px) rotateY(-20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  60% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    transform: perspective(400px) rotateY(10deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    transform: perspective(400px) rotateY(-5deg);
  }

  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@-webkit-keyframes flipOutX {
  0% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotateX(-20deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotateX(90deg);
    opacity: 0;
  }
}

@-webkit-keyframes flipOutY {
  0% {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }

  30% {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    transform: perspective(400px) rotateY(-15deg);
    opacity: 1;
  }

  to {
    -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    transform: perspective(400px) rotateY(90deg);
    opacity: 0;
  }
}

@-webkit-keyframes lightSpeedInRight {
  0% {
    -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
    transform: translate3d(100%, 0, 0) skew(-30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(20deg);
    transform: skew(20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(-5deg);
    transform: skew(-5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes lightSpeedInLeft {
  0% {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(30deg);
    transform: translate3d(-100%, 0, 0) skew(30deg);
    opacity: 0;
  }

  60% {
    -webkit-transform: skewX(-20deg);
    transform: skew(-20deg);
    opacity: 1;
  }

  80% {
    -webkit-transform: skewX(5deg);
    transform: skew(5deg);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes lightSpeedOutRight {
  0% {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
    transform: translate3d(100%, 0, 0) skew(30deg);
    opacity: 0;
  }
}

@-webkit-keyframes lightSpeedOutLeft {
  0% {
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(-100%, 0, 0) skewX(-30deg);
    transform: translate3d(-100%, 0, 0) skew(-30deg);
    opacity: 0;
  }
}

@-webkit-keyframes rotateIn {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, -200deg);
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
    opacity: 1;
  }
}

@-webkit-keyframes rotateInDownLeft {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
    opacity: 1;
  }
}

@-webkit-keyframes rotateInDownRight {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
    opacity: 1;
  }
}

@-webkit-keyframes rotateInUpLeft {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
    opacity: 1;
  }
}

@-webkit-keyframes rotateInUpRight {
  0% {
    -webkit-transform: rotate3d(0, 0, 1, -90deg);
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
    opacity: 1;
  }
}

@-webkit-keyframes rotateOut {
  0% {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 200deg);
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
}

@-webkit-keyframes rotateOutDownLeft {
  0% {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 45deg);
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
}

@-webkit-keyframes rotateOutDownRight {
  0% {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@-webkit-keyframes rotateOutUpLeft {
  0% {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, -45deg);
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
}

@-webkit-keyframes rotateOutUpRight {
  0% {
    opacity: 1;
  }

  to {
    -webkit-transform: rotate3d(0, 0, 1, 90deg);
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
}

@-webkit-keyframes hinge {
  0% {
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    -webkit-transform: rotate3d(0, 0, 1, 80deg);
    transform: rotate3d(0, 0, 1, 80deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    -webkit-transform: rotate3d(0, 0, 1, 60deg);
    transform: rotate3d(0, 0, 1, 60deg);
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    -webkit-transform: translate3d(0, 700px, 0);
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
}

@-webkit-keyframes jackInTheBox {
  0% {
    opacity: 0;
    -webkit-transform: scale(0.1) rotate(30deg);
    transform: scale(0.1) rotate(30deg);
    -webkit-transform-origin: center bottom;
    transform-origin: center bottom;
  }

  50% {
    -webkit-transform: rotate(-10deg);
    transform: rotate(-10deg);
  }

  70% {
    -webkit-transform: rotate(3deg);
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@-webkit-keyframes rollIn {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes rollOut {
  0% {
    opacity: 1;
  }

  to {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
}

@-webkit-keyframes zoomIn {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

@-webkit-keyframes zoomInDown {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55,
        0.055,
        0.675,
        0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175,
        0.885,
        0.32,
        1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@-webkit-keyframes zoomInLeft {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55,
        0.055,
        0.675,
        0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175,
        0.885,
        0.32,
        1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@-webkit-keyframes zoomInRight {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55,
        0.055,
        0.675,
        0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175,
        0.885,
        0.32,
        1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@-webkit-keyframes zoomInUp {
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55,
        0.055,
        0.675,
        0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175,
        0.885,
        0.32,
        1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@-webkit-keyframes zoomOut {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

@-webkit-keyframes zoomOutDown {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55,
        0.055,
        0.675,
        0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175,
        0.885,
        0.32,
        1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@-webkit-keyframes zoomOutLeft {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(-2000px, 0, 0);
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
}

@-webkit-keyframes zoomOutRight {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    -webkit-transform: scale(0.1) translate3d(2000px, 0, 0);
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
}

@-webkit-keyframes zoomOutUp {
  40% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55,
        0.055,
        0.675,
        0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175,
        0.885,
        0.32,
        1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@-webkit-keyframes slideInDown {
  0% {
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes slideInLeft {
  0% {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes slideInRight {
  0% {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes slideInUp {
  0% {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }
}

@-webkit-keyframes slideOutDown {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
}

@-webkit-keyframes slideOutLeft {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
}

@-webkit-keyframes slideOutRight {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
}

@-webkit-keyframes slideOutUp {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translateZ(0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }
}

:root {
  --color-primario: #3066be;
  --color-secundario: #6d9dc5;
  --color-blanco: white;
  --color-negro: black;
  --color-azul-oscuro: #003063;
  --color-naranja: #dc9c48;
  --color-gris: #dfdfdf;
}

.visuallyhidden {
  position: absolute;
  clip: rect(1px, 1px, 1px, 1px);
  -webkit-clip-path: inset(0px 0px 99.9% 99.9%);
  clip-path: inset(0px 0px 99.9% 99.9%);
  overflow: hidden;
  height: 1px;
  width: 1px;
  padding: 0;
  border: 0;
}

a {
  text-decoration: none;
}

.contactanos-flotante {
  position: fixed;
  top: 90%;
  right: 4%;
  animation: bounce 3s 3s 5;
  transition: all 0.5s;
  z-index: 1;
}

.contactanos-flotante:hover {
  transform: scale(1.4);
}

.avisos-importantes {
  background-color: var(--color-primario);
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  padding: 5px 30px;
}

.avisos-importantes a {
  background-color: #fff;
  border-radius: 30px;
  padding: 3px 7px;
  transition: all 0.5s;
  cursor: pointer;
}

.avisos-importantes a svg {
  width: 17px;
  height: auto;
  fill: var(--color-primario);
  position: relative;
  bottom: 2px;
}

.avisos-importantes a:hover {
  background-color: var(--color-naranja);
  fill: #fff;
}

.avisos-importantes a:hover svg {
  fill: #fff;
}

.menu-superior {
  background-color: var(--color-azul-oscuro);
  /* padding: 10px; */
  /* height: 70px; */
  /* position: sticky; */
  /* top: 0; */
  /* z-index: 10; */
}

.menu-superior a {
  cursor: pointer;
  color: #fff;
}

.menu-superior ul {
  font-weight: 500;
}

.menu-superior ul .svg-img-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  animation: flipInX;
}

.menu-superior ul .svg-img-text .ruta-activa {
  color: var(--color-naranja);
}

.menu-superior ul .svg-img-text .ruta-activa .svg-image {
  fill: var(--color-naranja);
}

.menu-superior ul .svg-img-text .ruta-activa .svg-image path {
  fill: var(--color-naranja);
}

.menu-superior ul .svg-img-text a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.menu-superior ul .svg-img-text a:hover {
  color: var(--color-naranja);
}

.menu-superior ul .svg-img-text a:hover .svg-image {
  fill: var(--color-naranja);
}

.menu-superior ul .svg-img-text a:hover .svg-image path {
  fill: var(--color-naranja);
}

.menu-superior ul .svg-img-text a .ruta-activa {
  fill: var(--color-naranja);
  color: var(--color-naranja);
}

.menu-superior ul .svg-img-text a .ruta-activa path {
  fill: var(--color-naranja);
}

.menu-superior ul .svg-img-text a .svg-image {
  margin: 0 auto;
  fill: var(--color-blanco);
}

.menu-superior ul .svg-img-text a .svg-image path {
  fill: var(--color-blanco);
}

@media (min-width: 768px) and (max-width: 991px) {
  .menu-superior ul .svg-img-text a .svg-image {
    margin-bottom: 5px;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .menu-superior ul .svg-img-text {
    font-size: 13px;
  }
}

.menu-superior ul .svg-img-text:nth-child(1) {
  animation-duration: 0.5s;
}

.menu-superior ul .svg-img-text:nth-child(2) {
  animation-duration: 1s;
}

.menu-superior ul .svg-img-text:nth-child(3) {
  animation-duration: 1.5s;
}

.menu-superior ul .svg-img-text:nth-child(4) {
  animation-duration: 2s;
}

.menu-superior ul .btn-saldo {
  animation: flipInX;
  animation-duration: 2.5s;
}

.menu-superior ul .btn-saldo .saldos {
  background-color: var(--color-primario);
  border: none;
  font-size: 13px;
  font-weight: 500;
}

.menu-superior ul .btn-saldo .saldos:hover {
  background-color: var(--color-naranja);
}

.menu-superior .menu-icon {
  cursor: pointer;
  animation: fadeIn;
  animation-duration: 1s;
}

.menu-superior .menu-desplegable {
  background-color: var(--color-azul-oscuro);
  position: absolute;
  width: 100%;
  top: 68px;
  right: 0;
  text-align: end;
  z-index: 2;
  padding: 15px;
}

.menu-superior .menu-desplegable .linea-horizontal {
  color: #fff;
}

.menu-superior .menu-desplegable li {
  list-style: none;
}

.menu-superior .menu-desplegable li a {
  color: #fff;
}
</style>
