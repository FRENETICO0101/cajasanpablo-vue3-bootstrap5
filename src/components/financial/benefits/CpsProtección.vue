<template>
  <main>
    <CpsPageHeader
      title="Protección al Ahorro y Crédito"
      :image-url="`${assetPrefix}/assets/proteccion_al_ahorro_y_credito.webp`"
      image-alt="Planta con frasco de dinero"
      color-text="text-black"
    />
    <section class="proteccion py-5">
      <div class="container">
        <p class="fs-4">El beneficio de la protección, es una manera de reconocer la
          excelencia en el cumplimiento y calidad de nuestros Socios Adultos y Ahorradores Menores, es un apoyo
          económico para el beneficiario que se haya destinado. Para poder tener acceso a este beneficio, es
          importante mantener la constancia en ahorro y pagos puntuales, aquí te compartimos los requisitos: </p><br
          >
        <ul class="fs-5 mb-5">
          <li >Socio Adulto o Ahorrador Menor activo de la Cooperativa.</li>
          <li >Antigüedad como Socio o Ahorrador Menor, mínima de 1 año.</li>
          <li >Registrar ahorro sistemático (Ahorro consecutivo mínimo una vez cada mes).</li>
          <li >En caso de tener préstamos, que éstos se encuentren al corriente.</li>
          <li >Haber ingresado como Socio antes de cumplir 60 años de edad.</li>
        </ul>
        <div class="nota p-5 text-white">
          <p class="fs-5">Para conocer el proceso y más detalles, te pedimos nos visites en
            el área de Captación de cualquiera de nuestras Sucursales, e daremos información completa y resolveremos
            tus dudas. <br ><br > Recuerda mantener actualizado tu
            expediente y datos de beneficiario (s).<br ><br ><b
              >* Las bases, requisitos y demás pueden variar de acuerdo a las políticas
              vigentes consulta siempre con un Asesor San Pablo en el área de captación de tu sucursal.</b></p>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''

</script>
<style lang="css" scoped>
.proteccion {
  text-align: justify
}

.proteccion .nota {
  background-color: var(--color-azul-oscuro)
}
</style>
