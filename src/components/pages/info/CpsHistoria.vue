<template>
  <main>
    <CpsPageHeader
      title="HISTORIA"
      imageUrl="/src/assets/historia.webp"
      imageAlt="foto sucursal caja popular san pablo matriz"
      colorText="text-black"
    />
      <div class="container">
        <section class="historia-container-section historia">
          <div class="quienes--somos-title">Caja Popular San Pablo</div>
          <div class="quienes--somos-desc">Nace en la Colonia Libertad, al oriente de la Ciudad
            de Guadalajara Jalisco, registrándose de manera oficial en la Federación Jalisco, el 27 de febrero 1971.
            Fundada por el Presbítero José Guadalupe Pineda Velázquez (Q.E.P.D) párroco de San Pablo Apóstol en la misma
            época, apoyando en su incansable tarea por sus cofundadores para mejorar las condiciones de vida de sus
            Socios, a través de la Ayuda Mutua y disminuir la usura. Gracias a su desarrollo, solidez y confianza, por
            más de 36 años; fue autorizada en el año 2007 Comisión Nacional Bancaria y de Valores, consolida hoy como
            una de las Cooperativas más reconocidas y ejemplar en aplicación de la Obra Social. La base de nuestro éxito
            se encuentra en el compromiso del equipo de trabajo y órganos de Gobierno, el Consejo de Administración y
            Vigilancia formados por nuestros Socios, nuestras propias Bases Constitutivas, cimentadas en los principios
            del Cooperativismo Universal y la Normatividad vigente que rige a las Sociedades Cooperativas de Ahorro y
            Préstamo.</div>
        </section>
        <section class="historia-container-section quienes-somos">
          <div class="quienes--somos-title">¿QUIÉNES SOMOS?</div>
          <div class="quienes--somos-desc">Somos una Sociedad Cooperativa de Ahorro y Préstamo
            con más de 53 años al servicio de nuestros Socios, contribuyendo en el crecimiento económico de más de 82
            mil cooperativistas activos en nuestra orgullosa Institución. Trabajamos para llevar más y mejores
            alternativas financieras a las familias de Jalisco, educando en materia cooperativista para la sana
            administración de los recursos y el uso responsable de productos crediticios con intereses justos. </div>
          <div class="logo biglogo"></div>
        </section>
        <section class="historia-container-section mvv">
          <div class="row">
            <div class="nuestros--valores-img mision"></div>
            <div class="quienes--somos-title">MISIÓN</div>
            <div class="quienes--somos-desc">Otorgar servicios financieros oportunos y
              eficientes, contribuyendo en mejorar la calidad de vida de nuestros Socios.</div>
          </div>
          <div class="row">
            <div class="nuestros--valores-img vision"></div>
            <div class="quienes--somos-title">VISIÓN</div>
            <div class="quienes--somos-desc">Liderar la excelencia Cooperativa en la región
              occidente.</div>
          </div>
          <div class="row">
            <div class="nuestros--valores-img valores"></div>
            <div class="quienes--somos-title">NUESTROS VALORES</div>
            <div class="quienes--somos-desc">Honestidad, Lealtad y Actitud Positiva. Creemos en
              nuestro personal, su integridad, su ética y profesionalismo para trabajar, en su honradez y alto sentido
              de responsabilidad. Estamos comprometidos con la comunidad cooperativista; brindando siempre una sonrisa,
              actitud positiva y un compañerismo pleno; deseamos que la experiencia de nuestros Socios sea excelente al
              recibir nuestros servicios y beneficios. <br ><br ><b
                >“UNIDOS EN LA COOPERACIÓN, POR UN FUTURO MEJOR”</b></div>
          </div>
        </section>
      </div>
  </main>
</template>

<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
</script>

<style lang="css" scoped>
.historia {
  background-color: #fff;
  position: relative;
  top: -170px;
  margin: 0 8%;
  box-shadow: 1px 1px 21px #00000040;
  padding: 20px;
  min-width: 285px
}

.historia .quienes--somos-title {
  font-size: 2.5rem;
  color: var(--color-primario);
  text-align: center
}

.historia .quienes--somos-desc {
  text-align: justify;
  font-size: 1.2rem;
  color: var(--color-negro);
  white-space: pre-line;
  margin: 20px 0
}

.quienes-somos .quienes--somos-title {
  font-size: 2.5rem;
  color: var(--color-primario);
  text-align: center
}

.quienes-somos .quienes--somos-desc {
  text-align: justify;
  font-size: 1.2rem;
  color: var(--color-negro);
  white-space: pre-line;
  margin: 20px 0
}

.quienes-somos .logo {
  background-image: url("/src/assets/media/LOGOTIPO1-N5CLWHFF.webp");
  background-size: cover;
  height: 45px;
  width: 35px
}

.quienes-somos .biglogo {
  width: 170px;
  height: 220px;
  margin: auto
}

.mvv {
  margin: 150px 8%;
  box-shadow: 1px 1px 21px #00000040;
  background-color: #fff;
  padding: 50px 25px
}

.mvv .nuestros--valores-img {
  background-size: cover;
  height: 100px;
  width: 100px;
  margin: auto auto 25px
}

.mvv .quienes--somos-title {
  font-size: 2.5rem;
  color: var(--color-primario);
  text-align: center
}

.mvv .quienes--somos-desc {
  font-size: 1rem;
  color: var(--color-negro);
  white-space: pre-line;
  margin: 20px 0;
  text-align: center
}

.mvv .mision {
  background-image: url("/src/assets/mision-6XM2ESYQ.webp")
}

.mvv .vision {
  background-image: url("/src/assets/testigo-ODA3STMN.webp")
}

.mvv .valores {
  background-image: url("/src/assets/propuesta-de-valor-MFU5OJD3.webp")
}

header {
  position: relative;
  width: 100%;
  height: 70vh
}

header img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top
}

header .title-block {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center
}

header .title-block h1 {
  font-size: 3rem;
  text-shadow: 0 0 10px white;
  animation: zoomIn 1s ease-in-out
}

.redes-sociales {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap
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
  transition: .55s
}

.redes-sociales a:hover {
  background-color: #fff;
  fill: #000
}

.redes-sociales a svg {
  width: 30px
}

.contactanos {
  font-size: 2rem;
  color: #fff;
  text-shadow: 1px 1px 20px black;
  text-align: center;
  padding: 15px 0 0;
  overflow: hidden
}

.contactanos p {
  animation: fadeInRight;
  animation-duration: 1.5s
}
</style>
