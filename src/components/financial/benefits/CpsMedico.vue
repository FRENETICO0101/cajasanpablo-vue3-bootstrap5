<template>
  <main>
    <CpsPageHeader
      title="SERVICIOS MÉDICOS"
      :image-url="`${assetPrefix}/assets/servicios_medicos.webp`"
      image-alt="Enfermera sosteniendo un estetoscopio en forma de corazon"
      color-text="text-white"
    />
    <section class="medico">
      <div class="container py-5">
        <h2 class="text-center fs-1">SERVICIO MÉDICO</h2>
        <p class="fs-5">Porque nos interesa tu bienestar y el de tu familia, ofrecemos
          atención médica general y especialidades con costos preferenciales a nuestros Socios cumplidos. Además
          disfruta de campañas médicas gratuitas y convenios con importantes instituciones. Realiza tu cita llamando
          al (33) 38 01 87 80 con la Srita. Josefina Rivera Montoya </p><a
          href="/assets/pdf/especialidades.pdf" target="_blank"><button
            class="btn btn-lg text-white">VER ESPECIALISTAS</button></a>
          <div class="row pt-5">
            <div class="col-12 col-md-6 mb-4">
              <div class="row p-3 mb-4 bg-light align-items-center">
                <div class="col-1"><i
                    class="fi fi-sr-phone-call"></i></div>
                <div class="col-11">
                  <div class="row flex-column">
                    <div class="col">
                      <h3 >Teléfono</h3>
                    </div>
                    <div class="col"><a >3338018780</a></div>
                  </div>
                </div>
              </div>
              <div class="row p-3 bg-light align-items-center">
                <div class="col-1"><i class="fi fi-sr-user"></i>
                </div>
                <div class="col-11">
                  <div class="row flex-column">
                    <div class="col">
                      <h3 >Horario</h3>
                    </div>
                    <div class="col"><a >Lunes a Viernes de 9:00 a
                        14:00 horas y de 15:00 a 18:00 horas. Sábado de 9:00 a 13:00 horas. Consulta con especialistas,
                        previa cita.</a></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="ratio ratio-16x9"><iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.0615368485705!2d-103.29680212397946!3d20.6670753001015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3df273a028b%3A0x67db3162c57ef8bc!2sC.%20Carlos%20Gonz%C3%A1lez%20Pe%C3%B1a%20360%2C%20Santa%20Ma.%20de%20Silo%2C%2044750%20Guadalajara%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1694033376494!5m2!1ses-419!2smx"
                  width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                  style="border: 0;"></iframe></div>
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
.medico {
  text-align: justify
}

.medico button {
  background-color: var(--color-secundario)
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
