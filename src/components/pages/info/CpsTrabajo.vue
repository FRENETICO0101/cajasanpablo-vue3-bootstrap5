<template>
  <main>
    <CpsPageHeader
      title="BOLSA DE TRABAJO"
      :image-url="`${assetPrefix}/assets/bolsa_de_trabajo_oct_2025.webp`"
      imageAlt="Dos mujeres empresarias"
      colorText="text-black"
    />
      <section class="trabajo">
        <div class="container">
          <div class="row py-5">
            <div class="col-12 col-md-6 d-flex justify-content-center align-items-start">
              <img :src="`${assetPrefix}/assets/RH.webp`" alt="..." class="img-fluid" />
            </div>
            <div
              class="col-12 col-md-6 d-flex flex-column justify-content-center align-items-start gap-1">
              <h1 >¿Buscas trabajo?</h1>
              <p >
                ¿Quieres ser parte de una empresa líder en el mercado?
              </p>
              <p >¡Esta es tu oportunidad!</p>
              <p >
                Envíanos tu CV a:
                <a href="rhumanos@cajasanpablo.com">rhumanos@cajasanpablo.com</a>
                o
              </p>
              <p >
                llámanos al:
                <a href="tel: 3338831830">3338831830</a>
                y
                <a href="tel: 3336441728">3336441728</a>
              </p>
              <p >Extenciones: 1126 / 1249 / 1282</p>
            </div>
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
