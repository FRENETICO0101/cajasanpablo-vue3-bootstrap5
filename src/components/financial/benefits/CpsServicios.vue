<template>
  <main>
    <CpsPageHeader
      title="PAGO DE SERVICIOS"
      image-url="/src/assets/pago_de_servicios.webp"
      image-alt="emocionada mujer hermosa parte superior recortada verano mira asombrado camara comprando tarjeta credito pie sobre fondo azul"
      color-text="text-black"
    />
    <section class="servicios">
        <div class="container py-5">
          <h2 class="text-center">SERVICIOS</h2>
          <p class="fs-5 mb-5">Como un servicio adicional, Caja San Pablo también te da opción
            para que puedas pagar tus cuentas de Agua (SIAPA) en nuestras oficinas, presentando el recibo con 5 días
            hábiles antes de su vencimiento. <br ><br > Recuerda que
            éste y todos los beneficios que otorga tu Cooperativa son para Socios cumplidos; ahorra, se puntual en tus
            créditos, evita los retiros a tu cuenta de Ahorro y aprovecha todas las ventajas que tenemos para ti.</p>
          <div class="row justify-content-evenly">
            <div class="col-12 col-lg-5 col-xl-4 mb-3"><img
                src="/src/assets/siapa.webp" alt="logo SIAPA" class="img-thumbnail rounded"></div>
          </div>
        </div>
      </section>
  </main>
</template>

<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
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
