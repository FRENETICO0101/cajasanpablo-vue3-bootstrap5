<template>
  <main>
    <CpsPageHeader
      title="DESPACHOS DE COBRANZA EXTERNOS"
      image-url="/src/assets/Despacho de cobranza.webp"
      image-alt="cuatro personas sentadas tras su computadora"
      color-text="text-white"
    />
      <section class="despacho-cobranza">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <p >Consulta nuestro aviso de datos <strong >dando click
                  en la imagen</strong></p><a href="/assets/pdf/datos de cobranza.pdf"
                target="_blank"><img src="/src/assets/Despachos.webp"
                  alt="Despacho de cobranza" class="img-fluid"></a>
            </div>
            <div class="col-12 col-md-6">
              <p >Consultar nuestro directorio <strong >dando click en
                  la imagen</strong></p><a
                href="/assets/pdf/AVISO DE DATOS DESPACHOS DE COBRANZA.pdf" target="_blank"><img
                  src="/src/assets/Aviso de datos de Despachos de Cobranza.webp"
                  alt="Despacho de cobranza" class="img-fluid"></a>
            </div>
          </div>
        </div>
      </section>
  </main>
</template>
<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
</script>
<style lang="css" scoped>
.despacho-cobranza {
  padding: 80px 0
}

.despacho-cobranza .que-es {
  margin-bottom: 50px
}

.despacho-cobranza p {
  font-size: 1.2rem
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
