<script setup lang="ts">
import {
  CpsFacebookIcon,
  CpsTwitterIcon,
  CpsInstagramIcon,
  CpsYouTubeIcon,
  CpsTikTokIcon
} from '@/components/icons'

interface Props {
  title: string
  imageUrl: string
  imageAlt: string
  colorText?: string
}

defineProps<Props>()
</script>

<template>
  <div class="page-header-container">
    <header>
      <img :src="imageUrl" :alt="imageAlt" />
      <div class="title-block">
        <h1 :class="colorText || 'text-white'">
          {{ title }}
        </h1>
        <div class="redes-sociales-container">
          <div class="redes-sociales">
            <a href="https://www.facebook.com/CajaSanPabloOficial/" target="_blank"
              aria-label="Visita nuestro pagina de facebook">
              <CpsFacebookIcon />
            </a>
            <a href="https://twitter.com/cajasanpablo" target="_blank"
              aria-label="Visita nuestro perfil de twitter">
              <CpsTwitterIcon />
            </a>
            <a href="https://www.instagram.com/cajapopularsanpablo/" target="_blank"
              aria-label="Visita nuestro perfil de instagram">
              <CpsInstagramIcon />
            </a>
            <a href="https://www.youtube.com/channel/UCyBT1Re7IC5AgO1p66AHmNA" target="_blank"
              aria-label="Visita nuestro canal de YouTube">
              <CpsYouTubeIcon />
            </a>
            <a href="https://www.tiktok.com/@cajasanpablo" target="_blank"
              aria-label="Visita nuestro perfil de tiktok">
              <CpsTikTokIcon />
            </a>
          </div>
          <div class="contactanos">
            <p>¡CONTÁCTANOS!</p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style lang="css" scoped>
/* Container styles */
.page-header-container {
  width: 100%;
}

.redes-sociales-container {
  width: 100%;
}

/* Header styles */
header {
  position: relative;
  width: 100%;
  height: 70vh;
  overflow: hidden;
}

header img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.3s ease;
}

header:hover img {
  transform: scale(1.02);
}

header .title-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 15px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

header .title-block h1 {
  font-size: 3rem;
  text-shadow: 2px 2px 15px rgba(0, 0, 0, 0.8);
  animation: zoomIn 1s ease-in-out;
  margin-bottom: 20px;
  font-weight: 700;
  letter-spacing: 2px;
}

/* Social media styles */
.redes-sociales {
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin: 20px 0;
}

.redes-sociales a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  font-size: 1.4rem;
  fill: #fff;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  animation: flip 1.5s ease-in-out;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.redes-sociales a::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.redes-sociales a:hover::before {
  left: 100%;
}

.redes-sociales a:hover {
  background-color: #fff;
  fill: var(--color-primario);
  transform: translateY(-3px) scale(1.1);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  border-color: #fff;
}

.redes-sociales a svg {
  width: 32px;
  height: 32px;
  transition: all 0.3s ease;
}

.contactanos {
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
  text-align: center;
  padding: 20px 0 0;
  overflow: hidden;
}

.contactanos p {
  animation: fadeInRight 1.5s ease-in-out;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 0;
}

/* Responsive improvements */
@media (max-width: 768px) {
  header {
    height: 50vh;
  }

  header .title-block {
    padding: 20px;
    margin: 0 20px;
  }

  header .title-block h1 {
    font-size: 2rem;
  }

  .contactanos {
    font-size: 1.4rem;
  }

  .redes-sociales {
    gap: 10px;
  }

  .redes-sociales a {
    width: 45px;
    height: 45px;
  }

  .redes-sociales a svg {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 576px) {
  header {
    height: 40vh;
  }

  header .title-block h1 {
    font-size: 1.5rem;
  }

  .contactanos {
    font-size: 1.2rem;
  }
}

/* Animation keyframes */
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes flip {
  0% {
    transform: rotateY(-180deg);
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    transform: rotateY(0);
    opacity: 1;
  }
}

/* Focus styles for accessibility */
.redes-sociales a:focus {
  outline: 2px solid var(--color-naranja);
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  header .title-block {
    background: rgba(0, 0, 0, 0.8);
    border: 2px solid #fff;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
