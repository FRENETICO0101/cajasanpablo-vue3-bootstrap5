<template>
  <main>
    <CpsPageHeader
      title="Servicio de Apoyo Funerario"
      :image-url="`${assetPrefix}/assets/profun.webp`"
      imageAlt="Hombre parado en las montañas"
      colorText="text-white"
    />
      <section class="profun">
        <div class="container py-5">
          <strong>Estimados Socios</strong>
          <br />
          <br />
          <p>
            Con el compromiso de brindarles siempre mejores beneficios y mayor tranquilidad, les informamos que hemos
            realizado un cambio en la agencia de asistencia funeraria que forma parte de sus servicios como Socios.
          </p>
          <p>
            Este cambio nos permite ofrecerles mayores protecciones y mejores condiciones de cobertura en caso de
            defunción, reforzando así el apoyo para ustedes y sus familias en momentos difíciles.
          </p>
          <p>
            A partir del mes de enero de 2026, marcando al número 55 5480 3816.
          </p>
          <p>
            Opción 1, MAWDY les brindará todo el
            servicio de información, asistencia funeraria y acompañamiento a los familiares de los titulares, teniendo
            una cobertura a nivel nacional.
          </p>
          <p>
            Para mayor información en los próximos días podrán consultar los detalles específicos de las nuevas
            coberturas, así como los procedimientos de atención, en nuestras sucursales o a través de nuestros canales
            oficiales.
          </p>
          <p>
            Agradecemos su confianza y reiteramos nuestro compromiso de seguir trabajando en beneficio de su bienestar
            y el de sus seres queridos.
          </p>
          <p>
            Atentamente,
          </p>
          <p>
            Caja Popular San Pablo
          </p>
          <br />
          <strong>¿Qué es MAWDY?</strong>
          <br />
          <br />
          <p>
            MAWDY es la unidad de asistencia del Grupo MAPFRE, una empresa que ofrece soluciones de protección y
            asistencia más allá de los seguros tradicionales, que cuenta con una notable trayectoria de más de 34 años
            en Asistencia y Protección que la respalda.
          </p>
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
img.apoyo_funerario_2025 {
  display: block;
  margin: auto;
  width: 100%;
}

header {
  position: relative;
  width: 100%;
  height: 70vh;
}

header img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top;
}

header .title-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
}

header .title-block h1 {
  font-size: 3rem;
  text-shadow: 0 0 10px white;
  animation: zoomIn 1s ease-in-out;
}

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
  border: 2px solid white;
  animation: flip;
  animation-duration: 1.5s;
  transition: 0.55s;
}

.redes-sociales a:hover {
  background-color: #fff;
  fill: #000;
}

.redes-sociales a svg {
  width: 30px;
}

.contactanos {
  font-size: 2rem;
  color: #fff;
  text-shadow: 1px 1px 20px black;
  text-align: center;
  padding: 15px 0 0;
  overflow: hidden;
}

.contactanos p {
  animation: fadeInRight;
  animation-duration: 1.5s;
}

.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* Optional: Set a width for the image if it's not full width */
  width: 60%;
}
</style>
