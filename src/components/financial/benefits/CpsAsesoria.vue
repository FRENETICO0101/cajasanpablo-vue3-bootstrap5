<template>
  <main>
    <CpsPageHeader
      title="ASESORÍA JURÍDICA"
      image-url="/src/assets/joven-pareja-feliz-consultando-gerente-banco-reunion-oficina.webp"
      image-alt="joven pareja feliz consultando gerente banco reunion oficina"
      color-text="text-white"
    />
    <section class="asesoria-juridica mt-5">
      <div class="container">
        <div class="row align-items-start">
          <p class="col-12 col-md-6 fs-5 p-3">Conocemos que en el trayecto de la vida
            existen situaciones en las que es necesario el apoyo de profesionales y en materia preventiva, por lo que
            Caja Popular San Pablo te ofrece de manera gratuita, la asesoría y consultoría Jurídica de cualquier
            índole. Este es un beneficio más por ser un Socio cumplido, recuerda que para acceder a él y aprovechar
            todas las demás ventajas, debes mantener tu ahorro sistemático así como el pago puntual en tus préstamos.
          </p>
          <div class="col-12 col-md-6"><img
              src="/src/assets/mujer-asesoria.webp" alt="Mujer asesora" class="img-thumbnail"></div>
        </div>
        <div class="title-ubicacion text-center">
          <h2 class="fs-1 my-5">UBICACIÓN</h2>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="row p-3 mb-4 bg-light align-items-center">
              <div class="col-1"><i
                  class="fi fi-sr-phone-call"></i></div>
              <div class="col-11">
                <div class="row flex-column">
                  <div class="col">
                    <h3 >Teléfono</h3>
                  </div>
                  <div class="col">
                    <div ><a >3338831830</a> Ext. 1196</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row p-3 mb-3 bg-light align-items-center">
              <div class="col-1"><i class="fi fi-sr-user"></i>
              </div>
              <div class="col-11">
                <h3 > LIC. JUNIRO JUNIOR RODRIGUEZ VALLES</h3>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="ratio ratio-16x9"><iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.052374483234!2d-103.29676762397959!3d20.66744810008884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b02e723e02c3%3A0x83a1b47bed7fd48e!2sCaja%20Popular%20San%20Pablo%20Matriz!5e0!3m2!1ses-419!2smx!4v1694026879947!5m2!1ses-419!2smx"
                width="600" height="450" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                style="border: 0;"></iframe></div>
          </div>
        </div>
      </div>
      <div class="mensaje bg-warning mt-5 p-4">
        <p class="m-0 fs-5 text-center">La asesoría Jurídica se dará a los Socios en un <b
            >horario de lunes a viernes 9:00 a 18:45 horas, sábado de 9:00 a 13:00 horas en
            oficina Matriz.</b></p>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
</script>
<style lang="css" scoped>
.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* Optional: Set a width for the image if it's not full width */
  width: 60%;
}
</style>
