<script setup lang="ts">
import CpsNavBar from './CpsNavBar.vue'
import {
  CpsFacebookIcon,
  CpsTwitterIcon,
  CpsInstagramIcon,
  CpsYouTubeIcon,
  CpsTikTokIcon
} from '@/components/icons'

</script>

<template>
  <div>
    <div class="avisos-importantes d-none d-md-block">
      <div class="row">
        <div class="col-6 d-flex align-items-center justify-content-center gap-2">
          CONOCE LOS
          <a href="/src/assets/pdf/dias inhabiles.pdf" target="_blank">DÍAS INHÁBILES
            2025</a>
        </div>
        <div class="col-6 d-flex align-items-center justify-content-center gap-2">
          CONTÁCTANOS EN NUESTRAS REDES SOCIALES:
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
          <a href="https://www.youtube.com/channel/UCyBT1Re7IC5AgO1p66AHmNA"
            target="_blank" aria-label="Visita nuestro canal de YouTube">
            <CpsYouTubeIcon />
          </a>
          <a href="https://www.tiktok.com/@cajasanpablo" target="_blank"
            aria-label="Visita nuestro perfil de tiktok">
            <CpsTikTokIcon />
          </a>
        </div>
      </div>
    </div>
    <CpsNavBar />
    <a href="https://www.messenger.com/t/CajaSanPabloOficial" target="_blank"
      class="contactanos-flotante"><img width="50px" height="50px"
        src="/src/assets/icon/mensajero.webp" alt="icono-messenger-meta" /></a>
  </div>
</template>
