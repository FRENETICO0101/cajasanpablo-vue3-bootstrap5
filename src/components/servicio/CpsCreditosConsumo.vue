<template>
  <main>
    <section class="credito-contaner">
      <div class="alert alert-light" role="info" style="font-size: large;">
        <strong>AVISO IMPORTANTE:</strong> Todos los productos de crédito están sujetos a aprobación conforme a las
        políticas internas y requisitos vigentes. Consulta términos y condiciones en tu sucursal. La Cooperativa se
        reserva el derecho de solicitar la comprobación del destino del crédito en los casos que así lo determine.
      </div>
      <div class="credito-tipe">CONSUMO</div>
      <div class="card-container row justify-content-center">
        <div class="col-12 col-sm-6 col-lg-3 card-credito">
          <img loading="lazy" alt="icono credito" src="/src/assets/icon/credits/automatico.png" />
          <div class="card-credito-details">
            Ideal para imprevistos o necesidades personales, te ofrecemos un préstamo de hasta el 90% de tus ahorros.
          </div>
          <div class="card-credito-btn" @:click="showDetails('creditAutomatic', 'creditAutomaticBtn')"
            id="creditAutomaticBtn">
            Leer más
          </div>
        </div>
        <div id="creditAutomatic" class="card-credito-info" style="display: none">
          <p class="card-credito-detalle">
            Ideal para imprevistos o necesidades personales, te ofrecemos un préstamo de hasta el 90% de tus ahorros.
          </p>
          <a class="card-credito-btn-simulador" href="/inicio/simulador/automatico">SIMULADOR
            DE PAGOS<i class="fi fi-sr-credit-card"></i></a>
          <div class="accordion accordion-flush" id="accordionFlush1">
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
                      Desde $500 hasta $50,000 | Hasta 36 meses
                    </li>
                    <li>
                      De $50,001 hasta el 3% del capital neto de la entidad| Hasta 60 meses
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
                    <li>Mensual 1.00%
                    </li>
                    <li>
                      Anual 12.00%
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
                      <span class="cat-gat">195.3%</span>
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
                      Mensuales, sobre saldo insoluto
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
                      Ser Socio con parte social completa y expediente actualizado
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
                      No es necesario un aval
                    </li>
                    <li>
                      No necesitas justificar en qué gastas el crédito
                    </li>
                    <li>
                      Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés
                      ordinaria.
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="col-12 col-sm-6 col-lg-3 card-credito">
          <img loading="lazy" alt="icono credito" src="/src/assets/icon/credits/credilomio.png" />
          <div class="card-credito-details">
            Ideal para imprevistos o necesidades personales, te ofrecemos un préstamo de hasta el 90% de tus ahorros.
          </div>
          <div class="card-credito-btn" @click="showDetails('creditLomio', 'creditLomioId')" id="creditLomioId">
            Leer más
          </div>
        </div>
        <div id="creditLomio" class="card-credito-info" style="display: none">
          <p class="card-credito-detalle">
            Ideal para imprevistos o necesidades personales, te ofrecemos un préstamo de hasta el 90% de tus ahorros.
          </p>
          <a class="card-credito-btn-simulador" href="/inicio/simulador/credilomio">SIMULADOR
            DE PAGOS<i class="fi fi-sr-credit-card"></i></a>
          <div class="accordion accordion-flush" id="accordionFlush2">
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
                      Desde $500 hasta $50,000 | Hasta 36 meses
                    </li>
                    <li>
                      De $50,001 hasta el 3% del capital neto de la entidad| Hasta 60 meses
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
                    <li>Mensual 1.00%
                    </li>
                    <li>
                      Anual 12.00%
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
                      <span class="cat-gat">201.5%</span>
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
                      Mensuales, sobre saldo insoluto
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
                      Ser Socio con parte social completa y expediente actualizado
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
                      No es necesario un aval
                    </li>
                    <li>
                      No necesitas justificar en qué gastas el crédito
                    </li>
                    <li>
                      Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés
                      ordinaria.
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="col-12 col-sm-6 col-lg-3 card-credito">
          <img loading="lazy" alt="icono credito" src="/src/assets/icon/credits/mi_primer_credito.png" />
          <div class="card-credito-details">
            Crédito para nuestros Socios jóvenes que desean comenzar con su historial de crédito. 
          </div>
          <div class="card-credito-btn" @click="showDetails('creditFirst', 'creditFirstId')" id="creditFirstId">
            Leer más
          </div>
        </div>
        <div id="creditFirst" class="card-credito-info" style="display: none">
          <p class="card-credito-detalle">
            Crédito para nuestros Socios jóvenes que desean comenzar con su historial de crédito. 
          </p>
          <a class="card-credito-btn-simulador" href="/inicio/simulador/credilomio">SIMULADOR
            DE PAGOS<i class="fi fi-sr-credit-card"></i></a>
          <div class="accordion accordion-flush" id="accordionFlush2">
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
                      Desde $5,000 hasta $25,000 | Hasta 36 meses
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
                      Mensual 2%
                    </li>
                    <li>
                      Anual 24%
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
                      Mensual 4%
                    </li>
                    <li>
                      Anual 48%
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
                      26.8%
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
                      Mensuales, sobre saldo insoluto
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
                      Edad de 18 a 20 años
                    </li>
                    <li>
                      Ser Socio con parte social completa y expediente actualizado
                    </li>
                    <li>
                      10% de garantía financiera en tu cuenta de ahorro.
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
                      Autorización para consulta de buró de crédito (SIC) del solicitante.
                    </li>
                    <li>
                      Aval con buen historial crediticio.
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del aval.
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
                      Comienza a generar historial crediticio.
                    </li>
                    <li>
                      Flexibilidad en tu primer crédito.
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="col-12 col-sm-6 col-lg-3 card-credito">
          <img loading="lazy" alt="icono credito" src="/src/assets/icon/credits/credigodin.png" />
          <div class="card-credito-details">
            Crédito pensado para nuestros asalariados, pensionados o jubilados que desean cubrir necesidades o gastos
            personales.
          </div>
          <div class="card-credito-btn" @click="showDetails('creditGodin', 'creditGodinId')" id="creditGodinId">
            Leer más
          </div>
        </div>
        <div id="creditGodin" class="card-credito-info" style="display: none">
          <p class="card-credito-detalle">
            Crédito pensado para nuestros asalariados, pensionados o jubilados que desean cubrir necesidades o gastos
            personales.
          </p>
          <a class="card-credito-btn-simulador" href="/inicio/simulador/credilomio">SIMULADOR
            DE PAGOS<i class="fi fi-sr-credit-card"></i></a>
          <div class="accordion accordion-flush" id="accordionFlush2">
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
                      Desde $5,000 hasta $100,000 | Hasta 72 meses
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
                      Mensual 2%
                    </li>
                    <li>
                      Anual 24%
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
                      Mensual 4%
                    </li>
                    <li>
                      Anual 48%
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
                      <span class="cat-gat">26.8%</span>
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
                      Mensuales, sobre saldo insoluto
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
                      10% de garantía financiera en tu cuenta de ahorro.
                    </li>
                    <li>
                      Identificación oficial vigente
                    </li>
                    <li>
                      Comprobante de domicilio (no mayor a 60 días)
                    </li>
                    <li>
                      Comprobante de ingresos (Estado de cuenta bancaria y/o nómina timbrada de los últimos 30 días)
                      En caso de asalariado, contar con 6 meses de antigüedad comprobable en el empleo.
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del solicitante.
                    </li>
                    <li>
                      Aval con buen historial crediticio.
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del aval.
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
                      Especial para quienes reciben nómina o pensión
                    </li>
                    <li>
                      Puedes acceder incluso si ya estás jubilado
                    </li>
                    <li>
                      Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés
                      ordinaria.
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="col-12 col-sm-6 col-lg-3 card-credito">
          <img loading="lazy" alt="icono credito" width="220px" src="/src/assets/icon/credits/ordinario.png" />
          <div class="card-credito-details">
            Crédito personal de Caja Popular San Pablo, para que tú decidas en qué usarlo.
          </div>
          <div class="card-credito-btn" @click="showDetails('creditOrdinary', 'creditOrdinaryId')"
            id="creditOrdinaryId">
            Leer más
          </div>
        </div>
        <div id="creditOrdinary" class="card-credito-info" style="display: none">
          <p class="card-credito-detalle">
            Crédito personal de Caja Popular San Pablo, para que tú decidas en qué usarlo.
          </p>
          <a class="card-credito-btn-simulador" href="/inicio/simulador/ordinario">SIMULADOR
            DE PAGOS<i class="fi fi-sr-credit-card"></i></a>
          <div class="accordion accordion-flush" id="accordionFlush0">
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
                      Desde $5,000 hasta $50,000 | Hasta 48 meses
                    </li>
                    <li>
                      De $50,001 hasta $200,000| Hasta 60 meses
                    </li>
                    <li>
                      De $200,001 hasta $300,000| Hasta 72 meses
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
                      Mensual 1.80%
                    </li>
                    <li>
                      Anual 21.60%
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
                      Mensual 4%
                    </li>
                    <li>
                      Anual 48%
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
                      <span class="cat-gat">18.5%</span>
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
                      Mensuales, sobre saldo insoluto
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
                      10% de garantía financiera en tu cuenta de ahorro.
                    </li>
                    <li>
                      Identificación oficial vigente
                    </li>
                    <li>
                      Comprobante de domicilio (no mayor a 60 días)
                    </li>
                    <li>
                      Comprobante de ingresos (de los últimos 30 días)
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del solicitante.
                    </li>
                    <li>
                      Aval con buen historial crediticio.
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del aval.
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
                      Se podrá exentar el requisito del aval.
                    </li>
                    <li>
                      Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés
                      ordinaria.
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="col-12 col-sm-6 col-lg-3 card-credito">
          <img loading="lazy" alt="icono credito" src="/src/assets/icon/credits/credileal.png" />
          <div class="card-credito-details">
            Crédito de consumo exclusivo para Socios con una sólida trayectoria en la cooperativa.
          </div>
          <div class="card-credito-btn" @click="showDetails('creditLeal', 'creditLealId')" id="creditLealId">
            Leer más
          </div>
        </div>
        <div id="creditLeal" class="card-credito-info" style="display: none">
          <p class="card-credito-detalle">
            Crédito de consumo exclusivo para Socios con una sólida trayectoria en la cooperativa.
          </p>
          <a class="card-credito-btn-simulador" href="/inicio/simulador/credileal">SIMULADOR
            DE PAGOS<i class="fi fi-sr-credit-card"></i></a>
          <div class="accordion accordion-flush" id="accordionFlush3">
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
                      Desde $5,000 hasta $50,000 | Hasta 48 meses
                    </li>
                    <li>
                      De $50,001 hasta $100,000| Hasta 60 meses
                    </li>
                    <li>
                      De $100,001 hasta $200,000| Hasta 72 meses
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
                      Mensual 1.5%
                    </li>
                    <li>
                      Anual 18%
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
                      Mensual 4%
                    </li>
                    <li>
                      Anual 48%
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
                      <span class="cat-gat">13.9%</span>
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
                      Mensuales, sobre saldo insoluto
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
                      Identificación oficial vigente
                    </li>
                    <li>
                      10% de garantía financiera en tu cuenta de ahorro.
                    </li>
                    <li>
                      Comprobante de domicilio (no mayor a 60 días)
                    </li>
                    <li>
                      Comprobante de ingresos (no mayor a 30 días)
                    </li>
                    <li>
                      Antigüedad mínima de 3 años como socio
                    </li>
                    <li>
                      Ahorro mensual mínimo de 10 meses.
                    </li>
                    <li>
                      Historial crediticio dentro de Caja San Pablo mínimo de 12 meses.
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del solicitante.
                    </li>
                    <li>
                      Aval con buen historial crediticio.
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del aval.
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
                      Reconocimiento a tu trayectoria como socio en Caja San Pablo.
                    </li>
                    <li>
                      Se podrá exentar el requisito del aval.
                    </li>
                    <li>
                      Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés
                      ordinaria.
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="col-12 col-sm-6 col-lg-3 card-credito">
          <img loading="lazy" alt="icono credito" src="/src/assets/icon/credits/automovil.png" />
          <div class="card-credito-details">
            Adquiere tu auto nuevo o seminuevo (hasta 5 años de antigüedad) para uso personal, disponible en agencias
            distribuidoras autorizadas o en lotes registrados ante ANCA o AMDA.
          </div>
          <div class="card-credito-btn" @click="showDetails('creditVehicle', 'creditVehicleId')" id="creditVehicleId">
            Leer más
          </div>
        </div>
        <div id="creditVehicle" class="card-credito-info" style="display: none">
          <p class="card-credito-detalle">
            Adquiere tu auto nuevo o seminuevo (hasta 5 años de antigüedad) para uso personal, disponible en agencias
            distribuidoras autorizadas o en lotes registrados ante ANCA o AMDA.
          </p>
          <a class="card-credito-btn-simulador" href="/inicio/simulador/automovil">SIMULADOR
            DE PAGOS<i class="fi fi-sr-credit-card"></i></a>
          <div class="accordion accordion-flush" id="accordionFlush4">
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
                      <b>AUTO NUEVO:</b> desde $50,000 hasta $700,000 | Hasta 72 meses
                    </li>
                    <li>
                      <b>AUTO SEMINUEVO:</b> desde $50,000 hasta $300,000 | Hasta 60 meses
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
                      Mensual 1.20%
                    </li>
                    <li>
                      Anual 14.40%
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
                      Mensual 4%
                    </li>
                    <li>
                      Anual 48%
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
                      <span class="cat-gat">15.8%</span>
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
                      Mensuales, sobre saldo insoluto
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
                      10% de garantía financiera en tu cuenta de ahorro.
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
                      Cotización del auto
                    </li>
                    <li>
                      Cotización de Póliza de seguro vehicular
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del solicitante.
                    </li>
                    <li>
                      Aval con buen historial crediticio.
                    </li>
                    <li>
                      Autorización para consulta de buró de crédito (SIC) del aval.
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
                      Se podrá exentar el requisito del aval.
                    </li>
                    <li>
                      Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés
                      ordinaria.
                    </li>
                    <li>
                      Este tipo de préstamo podrá otorgarse al acreditado independientemente si cuenta con otro u
                      otros préstamos con saldo a favor de la Cooperativa.
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!---->
        <div class="col-12 col-sm-6 col-lg-3 card-credito">
          <img loading="lazy" alt="icono credito" src="/src/assets/icon/credits/ordinario_hipotecario.png" />
          <div class="card-credito-details">
            Crédito con garantía hipotecaria para que adquieras lo que necesitas sin complicaciones.
          </div>
          <div class="card-credito-btn" @click="showDetails('creditOrdinayHipo', 'creditOrdinayHipoId')"
            id="creditOrdinayHipoId">
            Leer más
          </div>
        </div>
        <div id="creditOrdinayHipo" class="card-credito-info" style="display: none">
          <p class="card-credito-detalle">
            Crédito con garantía hipotecaria para que adquieras lo que necesitas sin complicaciones.
          </p>
          <a class="card-credito-btn-simulador" href="/inicio/simulador/hipotecario">SIMULADOR
            DE PAGOS<i class="fi fi-sr-credit-card"></i></a>
          <div class="accordion accordion-flush" id="accordionFlush7">
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
                      Desde $300,001 hasta $5,000,000 | Hasta 240 meses
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
                      Mensual 1.00%
                    </li>
                    <li>
                      Anual 12.00 %
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
                      Mensual 4%
                    </li>
                    <li>
                      Anual 48%
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
                      <span class="cat-gat">13.5%</span>
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
                      Mensuales
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
                      Garantía hipotecaria: se financiará hasta un máximo del 50% del valor del avalúo de la garantía.
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
        <!---->
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

.card-credito-details {
  margin: 20px 0 20px 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
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
