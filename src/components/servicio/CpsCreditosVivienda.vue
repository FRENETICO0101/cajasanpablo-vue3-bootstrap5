<template>
  <main>
    <section class="credito-contaner">
      <div class="credito-tipe">VIVIENDA</div>
      <div class="card-container row justify-content-center">
        <div class="col-12 col-sm-6 col-lg-3 card-credito">
          <img loading="lazy" alt="icono credito" src="/src/assets/icon/credits/vivienda.png" />
          <div class="card-credito-details">
            Diseñado para construir, remodelar o ampliar tu casa. Ideal para mejorar tu patrimonio.
          </div>
          <div class="card-credito-btn" @click="showDetails('prestamoVivienda', 'prestamoViviendaId')"
            id="prestamoViviendaId">
            Leer más
          </div>
        </div>
        <div id="prestamoVivienda" class="card-credito-info" style="display: none">
          <p class="card-credito-detalle">
            Diseñado para construir, remodelar o ampliar tu casa. Ideal para mejorar tu patrimonio.
          </p>
          <a class="card-credito-btn-simulador" href="/inicio/simulador/vivienda">SIMULADOR
            DE PAGOS<i class="fi fi-sr-credit-card"></i></a>
          <div class="accordion accordion-flush" id="accordionFlush14">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne1">
                <button type="button" data-bs-toggle="collapse" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseOne1" aria-controls="flush-collapseOne1">
                  <b>Montos y plazos</b>
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="flush-collapseOne1" aria-labelledby="flush-headingOne1"
                data-bs-parent="#accordionFlushExampleOne1">
                <div class="accordion-body">
                  <ul>
                    <li>
                      Desde $300,001 hasta $8,000,000 | Hasta 240 meses
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo1">
                <button type="button" data-bs-toggle="collapse" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseTwo1" aria-controls="flush-collapseTwo1">
                  <b>Tasa Ordinaria</b>
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="flush-collapseTwo1" aria-labelledby="flush-headingTwo1"
                data-bs-parent="#accordionFlushExampleTwo1">
                <div class="accordion-body">
                  <ul>
                    <li>
                      Mensual 0.8%
                    </li>
                    <li>
                      Anual 9.60 %
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree1">
                <button type="button" data-bs-toggle="collapse" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseThree1" aria-controls="flush-collapseThree1">
                  <b>Tasa Moratoria</b>
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="flush-collapseThree1" aria-labelledby="flush-headingThree1"
                data-bs-parent="#accordionFlushExampleThree1">
                <div class="accordion-body">
                  <ul>
                    <li>
                      Mensual 3%
                    </li>
                    <li>
                      Anual 36%
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour1">
                <button type="button" data-bs-toggle="collapse" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseFour1" aria-controls="flush-collapseFour1">
                  <b>CAT promedio (sin IVA)</b>
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="flush-collapseFour1" aria-labelledby="flush-headingFour1"
                data-bs-parent="#accordionFlushExampleFour1">
                <div class="accordion-body">
                  <ul>
                    <li>
                      <span class="cat-gat">11.1%</span>
                    </li>
                    <li>
                      CAT promedio para fines informativos y de comparación.
                    </li>

                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive1">
                <button type="button" data-bs-toggle="collapse" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseFive1" aria-controls="flush-collapseFive1">
                  <b>Comisiones</b>
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="flush-collapseFive1" aria-labelledby="flush-headingFive1"
                data-bs-parent="#accordionFlushExampleFive1">
                <div class="accordion-body">
                  <ul>
                    <li>
                      Este producto no genera ninguna Comisión.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSix1">
                <button type="button" data-bs-toggle="collapse" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseSix1" aria-controls="flush-collapseSix1">
                  <b>Pagos</b>
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="flush-collapseSix1" aria-labelledby="flush-headingSix1"
                data-bs-parent="#accordionFlushExampleSix1">
                <div class="accordion-body">
                  <ul>
                    <li>
                      Mensual sobre saldos insolutos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven1">
                <button type="button" data-bs-toggle="collapse" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseSeven2" aria-controls="flush-collapseSeven2">
                  <b>Requisitos</b>
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="flush-collapseSeven2" aria-labelledby="flush-headingSeven1"
                data-bs-parent="#accordionFlushExampleSeven1">
                <div class="accordion-body">
                  <ul>
                    <li>
                      18 años en adelante
                    </li>
                    <li>
                      Ser Socio con parte social completa y expediente actualizado
                    </li>
                    <li>
                      $20,000 pesos de garantía financiera en tu cuenta de ahorro.
                    </li>
                    <li>
                      Identificación oficial vigente
                    </li>
                    <li>
                      Comprobante de domicilio (no mayor a 60 días)
                    </li>
                    <li>
                      Comprobante de ingresos (no mayor a 30 días)
                    </li>
                    <li>
                      Garantía hipotecaria: se financiará hasta un máximo del 90% del valor del avalúo de la garantía.
                    </li>
                    <li>
                      Documentación de la garantía: escritura, comprobante de pago de predial, Para más detalles,
                      acércate a tu asesor.
                    </li>
                    <li>
                      Avaluó de propiedad a hipotecar.
                    </li>
                    <li>
                      Cotización de las pólizas de seguros de vida y daños
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del solicitante.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven3">
                <button type="button" data-bs-toggle="collapse" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseSeven3" aria-controls="flush-collapseSeven3">
                  <b>Beneficios</b>
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="flush-collapseSeven3" aria-labelledby="flush-headingSeven1"
                data-bs-parent="#accordionFlushExampleSeven3">
                <div class="accordion-body">
                  <ul>
                    <li>
                      No necesitas aval.
                    </li>
                    <li>
                      Tasa de interés competitiva.
                    </li>
                    <li>
                      Acompañamiento legal para la formalización de la hipoteca.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingSeven1">
                <button type="button" data-bs-toggle="collapse" aria-expanded="false" class="accordion-button collapsed"
                  data-bs-target="#flush-collapseSeven1" aria-controls="flush-collapseSeven1">
                  <b>Nota</b>
                </button>
              </h2>
              <div class="accordion-collapse collapse" id="flush-collapseSeven1" aria-labelledby="flush-headingSeven1"
                data-bs-parent="#accordionFlushExampleSeven1">
                <div class="accordion-body">
                  <ul>
                    <li>
                      Incumplir tus obligaciones te puede generar comisiones e intereses moratorios
                    </li>
                    <li>
                      Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio
                    </li>
                    <li>
                      El avalista, obligado solidario o coacreditado responderá como obligado principal por el total
                      del pago frente a la Institución Financiera
                    </li>
                    <li>
                      Los gastos de escrituración y avalúos corren por cuenta del socio
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!----><!---->
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
function hideAllExceptOne(className: string, elementToKeepId: string) {
  const elements = document.querySelectorAll(`.${className}`);
  const elementToKeep = document.getElementById(elementToKeepId)?.parentElement
  elements.forEach(element => {
    if (element !== elementToKeep) {
      (element as HTMLElement).style.display = 'none';
    }
  });
}
function showAllExcept(className: string) {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach(element => {
    (element as HTMLElement).style.display = 'block';
  });
}
function showDetails(elementId: string, buttonElementId: string) {
  const element = document.getElementById(elementId)
  const buttonElement = document.getElementById(buttonElementId)

  if (element && buttonElement) {
    if (element.style.display == 'none') {
      hideAllExceptOne('card-credito', buttonElementId);
      element.style.display = 'block'
      buttonElement.innerHTML = element.style.display == "block" ? "Ocultar" : "Leer más";
    } else {
      showAllExcept('card-credito');
      element.style.display = 'none'
      buttonElement.innerHTML = element.style.display == "block" ? "Ocultar" : "Leer más";
    }
  }
}
</script>
<style lang="css" scoped>
.card-credito-details {
  margin: 20px 0 20px 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-credito {
  padding: 40px 20px 10px 20px;
  margin-bottom: 50px;
  border-radius: 25px;
  background-color: #e9ecef;
}

.cat-gat {
  font-size: large;
  font-weight: bold;
}

.back-black {
  background-color: var(--color-gris);
}

.credito-contaner {
  width: 100%;
  padding: 40px 10%;
  margin: auto;
}

.credito-contaner .credito-tipe {
  font-size: 3rem;
  color: var(--color-negro);
  text-align: center;
}

.credito-contaner .card-container {
  padding: 40px 0;
  gap: 0px 80px;
  justify-content: space-evenly;
}

.credito-contaner .card-container .card-credito {
  text-align: center;
  padding-bottom: 6.25rem;
}

.credito-contaner .card-container .card-credito img {
  text-align: center;
  width: 100%;
  /* max-width: 300px; */
}

.credito-contaner .card-container .card-credito .card-credito-title {
  font-size: 1.2rem;
  height: 85px;
  color: var(--color-negro);
  display: flex;
  align-items: center;
  justify-content: center;
}

.credito-contaner .card-container .card-credito .card-credito-btn {
  font-size: 1.1rem;
  background-color: var(--color-primario);
  color: var(--color-blanco);
  height: 40px;
  width: 110px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  transition: all 0.3s ease-out;
  cursor: pointer;
}

.credito-contaner .card-container .card-credito-info {
  width: 80%;
  padding: 30px 15px;
  height: auto;
  background-color: var(--color-primario);
  border-radius: 20px;
  display: block;
  width: 92%;
  min-width: 300px;
}

.credito-contaner .card-container .card-credito-info .accordion .accordion-item {
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.credito-contaner .card-container .card-credito-info .accordion .accordion-item .accordion-header .accordion-button b {
  color: var(--color-primario);
}

.credito-contaner .card-container .card-credito-info .card-credito-detalle {
  margin-bottom: 30px;
  font-size: 20px;
  color: var(--color-blanco);
  text-align: center;
}

.credito-contaner .card-container .card-credito-info .card-credito-btn-simulador {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 700;
  background-color: var(--color-gris);
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 15px;
  margin: auto auto 35px;
  color: var(--color-naranja);
  width: 65%;
  max-width: 320px;
}

.credito-contaner .card-container .card-credito-info .card-credito-btn-simulador i {
  margin-left: 5px;
}

.credito-contaner .card-container .card-credito-info .btnsinfo {
  width: 100%;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: var(--color-azul-oscuro);
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
