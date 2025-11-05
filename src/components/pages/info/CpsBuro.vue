<template>
  <main>
    <CpsPageHeader
      title="BURÓ DE ENTIDADES FINANCIERAS"
      imageUrl="/src/assets/buro de entidades financieras.webp"
      imageAlt="hombre feliz su esposa reuniendose asesor financiero firmando acuerdo oficina"
      colorText="text-white"
    />
      <section class="buro">
        <div class="container">
          <div class="row py-5">
            <div class="col-12 col-md-4">
              <img src="/src/assets/BURO.webp" alt="imagen buro" />
            </div>
            <div class="col-12 col-md-8">
              <h3 >¿Qué es?</h3>
              <p >
                Es una herramienta de consulta y difusión con la que podrás conocer los productos
                que ofrecen las entidades financieras, sus comisiones y tasas, las reclamaciones de
                los usuarios, las prácticas no sanas en que incurren, las sanciones administrativas
                que les han impuesto, las cláusulas abusivas de sus contratos y otra información que
                resulte relevante para informarte sobre su desempeño.
                <br /><br />
                Con el Buró de Entidades Financieras, se logrará saber quién es quién en bancos,
                seguros, sociedades financieras de objeto múltiple, cajas de ahorro, afores, entre
                otras entidades.<br /><br />
                Con ello, podrás comparar y evaluar a las entidades financieras, sus productos y
                servicios y tendrás mayores elementos para elegir lo que más te convenga.<br
                  /><br />
                Esta información te será útil para elegir un producto financiero y también para
                conocer y usar mejor los que ya tienes.<br /><br />
                Este Buró de Entidades Financieras, es una herramienta que puede contribuir al
                crecimiento económico del país, al promover la competencia entre las instituciones
                financieras; que impulsará la transparencia al revelar información a los usuarios
                sobre el desempeño de éstas y los productos que ofrecen y que va a facilitar un
                manejo responsable de los productos y servicios financieros al conocer a detalle sus
                características.<br /><br />
                Lo anterior, podrá derivar en un mayor bienestar social, porque al conjuntar en un
                solo espacio tan diversa información del sistema financiero, el usuario tendrá más
                elementos para optimizar su presupuesto, para mejorar sus finanzas personales, para
                utilizar correctamente los créditos que fortalecerán su economía y obtener los
                seguros que la protejan, entre otros aspectos.<br /><br
                  />
                En la siguiente tabla puedes consultar la información correspondiente únicamente a
                <b >Caja Popular San Pablo S.C. de A.P. de R.L. de C.V</b><br
                  /><br />
                Así mismo para conocer la información de todo el sector a la que corresponda, se
                podrá acceder al sitio:
                <a href="https://www.buro.gob.mx">https://www.buro.gob.mx</a><br
                  /><br />
              </p>
              <h3 >Periodo: Enero - Marzo 2025</h3>
            </div>
          </div>
          <div class="tabla position-relative">
            <img src="/src/assets/buro_Enero_Marzo_2025.png" alt="tabla Enero - Marzo 2025" />
            <div data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn">
              ver
            </div>
          </div>
          <div class="btn-consulta d-flex justify-content-end">
            <a target="_blank" href="https://ifit.condusef.gob.mx/ifit/ftb_vista_general.php"
              class="btn d-flex"><i class="fi fi-sr-eye me-2"></i>
              <p class="m-0">CONSULTA</p>
            </a>
          </div>
        </div>
        <div id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
          aria-hidden="true" class="modal fade">
          <div class="modal-dialog" style="max-width: 700px">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" data-bs-dismiss="modal" aria-label="Close"
                  class="btn-close"></button>
              </div>
              <div class="modal-body">
                <img src="/src/assets/evaluacion_condusef_ene_dic_2024.webp"
                  alt="Evaluacion condusef" />
              </div>
              <div class="modal-footer">
                <button type="button" data-bs-dismiss="modal" class="btn btn-secondary">
                  Cerrar
                </button>
              </div>
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
.buro img {
  width: 100%;
}

.buro p {
  text-align: justify;
}

.buro .tabla .btn {
  position: absolute;
  top: 90%;
  left: 95%;
  transform: translate(-50%, -50%);
  color: green;
  background-color: #e0e3e1;
  width: 9%;
  padding: 0;
}

.buro .btn-consulta .btn {
  background-color: var(--color-secundario);
  width: fit-content;
  padding: 10px;
  border-radius: 12px;
  color: #fff;
  font-size: 17px;
  cursor: pointer;
  margin: 20px 0;
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
