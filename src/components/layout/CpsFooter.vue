<template>
  <footer class="footer mt-auto">
    <div class="footer-content">
      <div class="container">
        <div class="row">
          <div class="footer-img col-12 col-md-4" tabindex="0">
            <img @click="loadUrl('/info/buro')" loading="lazy" width="120" height="110"
              :src="`${assetPrefix}/assets/icon/logo-de-buro.webp`" alt="logo buro" />
          </div>
          <hr class="linea-horizontal d-md-none" />
          <div class="col-12 col-md-4 text-center text-md-start mb-5 mb-md-0">
            <h3 class="footer-titulo">
              ENLACES WEB
            </h3>
            <ul class="enlaces-web">
              <li >
                <a routerlink="info/aviso" href="/info/aviso"
                  aria-label="Aviso de Privacidad">Aviso de Privacidad</a>
              </li>
              <li >
                <a href="https://www.gob.mx/condusef"
                  aria-label="Visita la pagina oficial de la Condusef" target="_blank">Condusef</a>
              </li>
              <li >
                <a href="/assets/pdf/unidad especializada.pdf"
                  aria-label="Abrir PDF Unidad Especializada de Atencion a Socios" target="_blank">Unidad
                  Especializada de Atencion a Socios</a>
              </li>
              <li >
                <a routerlink="info/despachos-cobranza" href="/info/despachos-cobranza"
                  aria-label="Abrir PDF Despachos de Cobranza Externos">Despachos de Cobranza Externos</a>
              </li>
              <li >
                <a href="/assets/pdf/derechos_arco.pdf"
                  aria-label="Abrir PDF Derechos Arco" target="_blank">Derechos Arco</a>
              </li>
              <li >
                <a href="/assets/pdf/cat_y_gat_matriz_1_oct_2025.pdf"
                  aria-label="Abrir PDF Costos y Comisiones" target="_blank">Costos y Comisiones</a>
              </li>
            </ul>
          </div>
          <CpsSocialMediaBlock />
        </div>
      </div>
    </div>
    <div class="derechos text-center p-2">
      <div class="derechos-texto">
        © 2015 - 2024 Caja Popular San Pablo S.C. de A.P. de R.L. de C.V.
        Reservados todos los derechos.
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import CpsSocialMediaBlock from '@/components/media/CpsSocialMediaBlock.vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


function loadUrl(urlString: string) {
  window.location.href = urlString
}
</script>
