<template>
  <main>
    <CpsPageHeader
      title="APP MÓVIL"
      :image-url="`${assetPrefix}/assets/app-movil.webp`"
      imageAlt="App móvil ilustración"
      colorText="text-white"
    />
    <section class="app-movil-container">
      <div class="app-movil-title text-center">
        DESCARGA LA APP MÓVIL
      </div>
      <div class="app-movil-links text-center">
        <a :href="playStoreUrl" target="_blank" class="btn btn-primary m-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48" style="vertical-align:middle;margin-right:8px;"><path fill="#34A853" d="M6.3 41.7 27.6 24 6.3 6.3z"/><path fill="#4285F4" d="M6.3 6.3 41.7 24 27.6 24z"/><path fill="#FBBC05" d="M6.3 41.7 41.7 24 27.6 24z"/><path fill="#EA4335" d="M41.7 24 6.3 6.3v35.4z"/></svg>
          Descargar en Google Play
        </a>
        <a :href="appStoreUrl" target="_blank" class="btn btn-primary m-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48" style="vertical-align:middle;margin-right:8px;"><path fill="#000" d="M34.6 24.1c0-6.2 5.1-9.2 5.3-9.3-2.9-4.2-7.4-4.8-9-4.8-3.8-.4-7.4 2.2-9.3 2.2-1.9 0-4.8-2.1-7.9-2-4.1.1-7.9 2.4-10 6.1-4.3 7.4-1.1 18.3 3.1 24.3 2.1 3 4.6 6.4 7.9 6.3 3.2-.1 4.4-2.1 8.2-2.1 3.8 0 4.8 2.1 8.2 2 3.3-.1 5.4-3.1 7.5-6.1 2.4-3.5 3.4-6.9 3.4-7.1-.1-.1-6.6-2.5-6.7-9.8z"/><path fill="#000" d="M29.2 7.6c1.7-2.1 2.8-5 2.5-7.6-2.4.1-5.3 1.6-7 3.7-1.6 1.9-3 4.9-2.5 7.7 2.7.2 5.3-1.4 7-3.8z"/></svg>
          Descargar en App Store
        </a>
      </div>
      <div class="app-movil-info mt-4">
        <div class="app-movil-subtitle">
          Procedimiento para atender aclaraciones.
        </div>
        <ul>
          <li>Acude directamente a la sucursal de tu preferencia.</li>
          <li>Uno de nuestros asesores te atenderá para identificar la(s) transacciones en cuestión.</li>
          <li>De ser necesario se procederá con el registro para su seguimiento.</li>
          <li>Te llegará un mensaje SMS con un folio asignado para su atención.</li>
          <li>El dictamen de respuesta se resolverá en un plazo máximo de 45 días naturales posteriores a su solicitud, en donde se te hará llegar un correo electrónico con la respuesta.</li>
        </ul>
      </div>
      <div class="app-movil-info mt-4">
        <div class="app-movil-subtitle">
          Consideraciones importantes
        </div>
        <ul>
          <li>Es importante presentar tu solicitud dentro de los 90 días posteriores a la operación, ya que es el plazo máximo para aclaraciones o reclamaciones.</li>
          <li>Para solicitar información, debes llamar al centro de atención telefónica al 33-36-44-17-28 Ext. 1272, 1286 (lunes a viernes de 9:00 a 18:00 y sábados de 9:00 a 13:00).</li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''
const playStoreUrl = ref('https://play.google.com/store/apps/details?id=com.cpsanpablo.mobil')
const appStoreUrl = ref('https://share.google/kLBeBvcKPBrC8WYjl')
</script>

<style scoped>
.app-movil-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.app-movil-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.app-movil-desc {
  font-size: 1.1rem;
  margin-bottom: 2rem;
}
.app-movil-links .btn {
  min-width: 180px;
}
.app-movil-info {
  margin-top: 2rem;
}
.app-movil-subtitle {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
</style>
