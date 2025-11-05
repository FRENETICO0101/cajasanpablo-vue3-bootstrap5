<template>
  <main>
    <CpsPageHeader
      title="Servicio de Apoyo Funerario"
      imageUrl="/src/assets/profun.webp"
      imageAlt="Hombre parado en las montañas"
      colorText="text-white"
    />
      <section class="profun">
        <div class="container py-5">
          <strong>¿Sabías que contamos con Apoyo funerario?</strong>
          <br />
          <br />
          <span>
            Hay momentos que son inevitables, y en Caja Popular San Pablo, queremos acompañar a
            nuestros Socios con apoyo cálido y respetuoso en los momentos más difíciles.
          </span>
          <br />
          <br />
          <span>A través de ANEMEX, ponemos a tu disposición los servicios funerarios con cobertura en
            más de 40 agencias funerarias del Estado de Jalisco.</span>
          <br />
          <br />
          <strong>¿Quién es ANEMEX?</strong>
          <br />
          <br />
          <span>
            Es una empresa mexicana de asistencia funeraria que ofrece una membresía diseñada para
            brindarte tranquilidad en una de las etapas más complicadas de la vida.
          </span>
          <br />
          <br />
          <strong>¿Cómo puedo acceder al apoyo funerario?</strong>
          <br />
          <br />
          <span> Es muy fácil acceder a este beneficio siguiendo estos simples pasos: </span>
          <br />
          <br />
          <ol>
            <li>Llama al call center al 800 504 6455.</li>
            <li>Identifica al Socio (número de Socio) y recibe la confirmación.</li>
            <li>
              Detalla el servicio que necesitas: ¿información, cremación, velación en sala,
              funeraria o domicilio, traslado?
            </li>
            <li>Te proporcionaremos opciones de funerarias disponibles.</li>
            <li>El servicio se brindará de acuerdo con la funeraria correspondiente.</li>
            <li>Más información: anemex.com.mx</li>
          </ol>

          <strong>¿Este apoyo está disponible para todos los Socios de Caja Popular San Pablo?</strong>
          <br />
          <br />
          <span>
            Socios activos con una antigüedad mínima de 12 meses, con registro vigente de ahorro sistemático
            y al corriente en el pago de sus préstamos.
          </span>
          <br />
          <br />
          <br />
          <em>
            Este apoyo estará disponible exclusivamente por medio ANEMEX y las funerarias afiliadas.
          </em>
        </div>
      </section>
  </main>
</template>

<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
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
