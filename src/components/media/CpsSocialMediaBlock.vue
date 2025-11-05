<template>
  <div class="redesblock col-12 col-md-4">
    <div class="redes-sociales">
      <a href="https://www.facebook.com/CajaSanPabloOficial/" target="_blank"
        aria-label="Visita nuestro pagina de facebook">
        <CpsFacebookIcon />
      </a>
      <a href="https://twitter.com/cajasanpablo" target="_blank"
        aria-label="Visita nuestro perfil de twitter">
        <CpsTwitterIcon />
      </a>
      <a href="https://www.instagram.com/cajapopularsanpablo/"
        target="_blank" aria-label="Visita nuestro perfil de instagram">
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
    <div class="contactanos">
      <p>¡CONTÁCTANOS!</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  CpsFacebookIcon,
  CpsTwitterIcon,
  CpsInstagramIcon,
  CpsYouTubeIcon,
  CpsTikTokIcon
} from '@/components/icons'
</script>

<style lang="css" scoped>
.redes-sociales {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;
}

.redes-sociales a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 1.4rem;
  fill: #fff;
  border-radius: 50%;
  background-color: var(--color-primario);
  transition: all 0.3s ease;
}

.redes-sociales a:hover {
  background-color: var(--color-secundario);
  transform: scale(1.05);
}

.redes-sociales a svg {
  width: 25px;
  height: 25px;
  fill: #fff;
}

.contactanos {
  text-align: center;
  margin-top: 20px;
}

.contactanos p {
  color: var(--color-blanco);
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0;
}

@media (max-width: 768px) {
  .redesblock {
    text-align: center;
    margin-top: 20px;
  }

  .redes-sociales {
    justify-content: center;
  }
}
</style>
