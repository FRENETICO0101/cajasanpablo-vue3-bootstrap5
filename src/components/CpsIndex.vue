<script setup lang="ts">
import backgroundImageWeAre from '@/assets/historia.webp'
import PreguntasBuzon from './CpsPreguntasBuzon.vue'
import IndexSlide from './CpsIndexSlide.vue'
import EventosGrid from './CpsEventosGrid.vue'

const weAreStyle = {
  backgroundImage: `url(${backgroundImageWeAre})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}

function loadUrl(urlString: string) {
  window.location.href = urlString
}
</script>
<template>
  <IndexSlide />
  <div class="container mb-3 mt-5">
    <div class="row row-cols-1 row-cols-lg-4 g-4">
      <div class="col">
        <div class="card h-100 shadow-lg">
          <img src="/src/assets/quieres_ser_socio.webp" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">QUIERO SER SOCIO</h5>
            <p class="card-text text-center text-cards-description">
              ¡Ahora más Fácil! Únete a esta Familia Cooperativista con solo 4 documentos.
            </p>
          </div>
          <div class="card-footer">
            <div class="text-center">
              <a href="/servicio/socio" class="btn btn-cards">Ver detalles</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 shadow-lg">
          <img src="/src/assets/img-inicio-cards/beneficios_oct_2025.webp" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">BENEFICIOS</h5>
            <div class="row text-center">
              <div class="col boxed">
                <img src="/src/assets/icon/consulta.webp" alt="Asesoría Jurídica" class="img-beneficio" />
                <div>
                  <a href="/beneficios/asesoria" class="texto-corto">Asesoría Jurídica</a>
                </div>
              </div>
              <div class="col boxed">
                <img src="/src/assets/icon/ahorrar-dinero.webp" alt="Protección al Ahorro y Crédito"
                  class="img-beneficio" />
                <div>
                  <a href="/beneficios/proteccion" class="texto-corto">Protección al Ahorro y Crédito</a>
                </div>
              </div>
            </div>
            <div class="row text-center">
              <div class="col boxed">
                <img src="/src/assets/icon/asistencia-medica.webp" alt="Asesoría Jurídica" class="img-beneficio" />
                <div>
                  <a href="/beneficios/medico" class="texto-corto">Servicios Médicos</a>
                </div>
              </div>
              <div class="col boxed">
                <img src="/src/assets/icon/pago.webp" alt="Protección al Ahorro y Crédito" class="img-beneficio" />
                <div>
                  <a href="/beneficios/servicios" class="texto-corto">Pago de Servicios</a>
                </div>
              </div>
            </div>
            <div class="row text-center">
              <div class="col boxed">
                <img src="/src/assets/icon/me-gusta.webp" alt="Asesoría Jurídica" class="img-beneficio" />
                <div>
                  <a href="/beneficios/servicio-apoyo-funerario/" class="texto-corto">Servicio de Apoyo Funerario</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 shadow-lg">
          <img src="/src/assets/img-inicio-cards/educacion_cooperativa_y_financiera.webp" class="card-img-top"
            alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">EDUCACIÓN COOPERATIVA Y FINANCIERA</h5>
            <p class="card-text text-center text-cards-description">
              Conoce esta nueva sección y aprende más sobre el Cooperativismo y Finanzas
              personales.
            </p>
          </div>
          <div class="card-footer">
            <div class="text-center">
              <a href="/servicio/educoof" class="btn btn-cards">Ver detalles</a>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100 shadow-lg">
          <img src="/src/assets/img-inicio-cards/cheerful-excited-young-woman-with-mobile-phone-credit-card.webp"
            class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">CRÉDITOS</h5>
            <p class="card-text text-center text-cards-description">
              Conoce todas las opciones de financiamiento para cada uno de tus proyectos,
              aprovecha los plazos cómodos e intereses justos.
            </p>
          </div>
          <div class="card-footer">
            <div class="text-center">
              <a href="/servicio/creditos" class="btn btn-cards">Ver detalles</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <section class="my-5 gap-5 row align-items-start">
      <div class="col boxed d-flex flex-column align-items-center">
        <a class="text-decoration-none animate__animated animate__fadeIn animate__slow" href="/btns/revistas">
          <div class="image-wrapper position-relative">
            <div class="overlay position-absolute"></div>
            <img loading="lazy" width="250px" height="250px"
              style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
              src="/src/assets/img-revistas/revista_oct_2025.webp" alt="Revista Libertador Cooperativo" />
          </div>
        </a>
      </div>
      <div class="col boxed d-flex flex-column align-items-center">
        <a target="_blank" class="text-decoration-none animate__animated animate__fadeIn animate__slow"
          href="/assets/pdf/promociones_2025.pdf">
          <div class="image-wrapper position-relative">
            <div class="overlay position-absolute"></div>
            <img loading="lazy" width="250px" height="250px"
              style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
              src="/src/assets/Promociones.webp" alt="Promociones 2025" />
          </div>
        </a>
      </div>
      <div class="col boxed d-flex flex-column align-items-center">
        <a class="text-decoration-none animate__animated animate__fadeIn animate__slow" href="/btns/alianzas">
          <div class="image-wrapper position-relative">
            <div class="overlay position-absolute"></div>
            <img loading="lazy" width="250px" height="250px"
              style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
              src="/src/assets/alianzas.webp" alt="Alianzas Estratégicas" />
          </div>
        </a>
      </div>
      <div class="col boxed d-flex flex-column align-items-center">
        <a target="_blank" class="text-decoration-none animate__animated animate__fadeIn animate__slow"
          href="/assets/pdf/libro-caja.pdf">
          <div class="image-wrapper position-relative">
            <div class="overlay position-absolute"></div>
            <img loading="lazy" width="250px" height="250px"
              style="border-radius: 7%; box-shadow: 1px 1px 21px 0px rgba(0, 0, 0, 0.75)"
              src="/src/assets/portlibro.webp" alt="Libro Conmemorativo" />
          </div>
        </a>
      </div>
      <!---->
    </section>
  </div>
  <section class="pb-5">
    <div class="container-fluid">
      <div class="row">
        <div class="bg-matriz col-12 col-md-7" :style="weAreStyle"></div>
        <div class="col-12 col-md-5 who-are">
          <div class="container py-5" style="height: 100%">
            <div class="d-flex flex-column justify-content-center align-items-center" style="height: 100%">
              <div class="text-white fs-2 united-text">
                "UNIDOS EN LA COOPERACIÓN, POR UN FUTURO MEJOR"
              </div>
              <div @click="loadUrl('/info/historia')"
                class="circuloycheck animate__animated animate__fadeInUp animate__slow" tabindex="0">
                <img loading="lazy" width="50px" height="50px" src="/src/assets/icon/cheque.webp" alt="icono check" />
                <div class="texto-circulo">HISTORIA</div>
              </div>
              <div @click="loadUrl('/info/trabajo')"
                class="circuloycheck animate__animated animate__fadeInUp animate__slow animate__delay-1s" tabindex="0">
                <img loading="lazy" width="50px" height="50px" src="/src/assets/icon/cheque.webp" alt="icono check" />
                <div class="texto-circulo">BOLSA DE TRABAJO</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="otros container-fluid">
    <div class="row align-items-center">
      <div class="nov-event-titulo-boton col-12 col-lg-5">
          <div class="nov-event-titulo text-center animate__animated animate__backInRight animate__slow">
            NOVEDADES<br />Y EVENTOS
          </div>
          <a href="/servicio/nov-event"
            aria-label="Novedades y Eventos" class="nov-event-enlace">
            <div class="nov-event-boton animate__animated animate__backInRight animate__slow animate__delay-1s">
              Conocer más
            </div>
          </a>
        </div>
      <div class="col col-sm-12 col-md-12 col-lg-6">
        <EventosGrid />
      </div>
    </div>
  </section>
  <section class="otros container-fluid mt-5">
    <div class="youtube">
      <div class="row align-items-center flex-row-reverse">
        <div class="nov-event-titulo-boton col-12 col-lg-5">
          <div class="nov-event-titulo text-center animate__animated animate__backInRight animate__slow">
            NUESTRO<br />CANAL
          </div>
          <a href="https://www.youtube.com/@cajapopularsanpablo9951" target="_blank"
            aria-label="Conocer más sobre nuestro canal en YouTube" class="nov-event-enlace">
            <div class="nov-event-boton animate__animated animate__backInRight animate__slow animate__delay-1s">
              Conocer más
            </div>
          </a>
        </div>
        <div class="col-12 col-lg-7 social-images">
          <div class="row row-cols-auto">
            <div class="col boxed">
              <a href="https://www.youtube.com/watch?v=3W9E1b9_r7Q" target="_blank"
                aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/min-yt1.webp"
                  alt="miniatura youtube"
                  class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
            </div>
            <div class="col boxed">
              <a href="https://www.youtube.com/watch?v=bLuf3GoJBPM" target="_blank"
                aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/img_logralo.webp"
                  alt="miniatura youtube"
                  class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
            </div>
            <div class="col boxed">
              <a href="https://www.youtube.com/watch?v=ffbZKWobhrw" target="_blank"
                aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/min-yt3.webp"
                  alt="miniatura youtube"
                  class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s animate__delay-1.5s" /></a>
            </div>
            <div class="col boxed">
              <a href="https://www.youtube.com/watch?v=Fl8aYzjgyRQ" target="_blank"
                aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/min-yt4.webp"
                  alt="miniatura youtube"
                  class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
            </div>
            <div class="col boxed">
              <a href="https://youtu.be/wRfz1qZwJ04?si=y5Ttm65H6q9zaMkU" target="_blank"
                aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/becas_youtube.webp"
                  alt="miniatura youtube"
                  class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
            </div>
            <div class="col boxed">
              <a href="https://www.youtube.com/watch?v=9wI-J3yFDPM" target="_blank"
                aria-label="Ver video en YouTube"><img loading="lazy" src="/src/assets/img_historias_exito.webp"
                  alt="miniatura youtube"
                  class="min-youtube col animate__animated animate__fadeIn animate__slow animate__delay-3s 3s" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <hr />
  <PreguntasBuzon />
</template>
<style scoped>
a {
  text-decoration: none;
}

/* .boxed {
  transition: all 0.3s;
} */

/* .boxed:hover {
  transform: scale(1.15);
} */

.boxed {
  box-shadow: 0 0 1px #00000024;
  padding: 10px 5px;
}

/* .card {
  transition: all 0.3s;
}

.card:hover {
  transform: scale(1.15);
} */

.preg-frec .accordion-button {
  margin: 5px 0;
  font-size: 1.3rem;
  color: var(--bs-gray);
}

.accordion-body .resp {
  font-size: 1.1rem;
  text-align: justify;
  padding: 25px 20px;
  box-shadow: 0 10px 20px #00000042;
  border-radius: 0 0 10px 10px;
  font-family: inherit;
}

.rounded-btn {
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s ease;
}

.rounded-btn:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

.rounded-btn:active {
  transform: translateY(0);
}

.preg-frec .nov-event-boton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 194px;
  height: 65px;
  background-color: var(--color-primario);
  color: #fff;
  font-size: 1.5rem;
  border-radius: 40px;
  margin: 20px auto;
  transition: all 0.3s ease;
  cursor: pointer;
}

.preg-frec .nov-event-boton:hover {
  color: white;
  background-color: var(--color-naranja);
}

.descfb {
  font-size: 1.4rem;
  color: var(--color-azul-oscuro);
  text-align: center;
}

.titulofb {
  color: var(--color-primario);
}

.social-images a img {
  width: 255px;
  border-radius: 10px;
  margin: 20px 11px;
  padding: 0;
  max-width: 300px;
  cursor: pointer;
}

.btn-cards {
  background-color: var(--color-primario);
  color: white;
}

.btn-cards:hover {
  color: white;
  background-color: var(--color-naranja);
}

.text-cards-description {
  color: var(--color-primario);
}

.img-beneficio {
  width: 30px;
  height: 30px;
}

.texto-corto {
  text-decoration: none;
}

.adds-text {
  padding-top: 5px;
  font-size: large;
}

.who-are {
  background-color: #003063;
}

.united-text {
  text-align: center;
  text-shadow: 1px 1px 10px black;
  white-space: pre-line;
  font-weight: 100;
  margin-bottom: 50px;
}

.circuloycheck {
  background-color: #fff;
  display: flex;
  align-items: center;
  border-radius: 60px;
  padding-left: 10px;
  height: 70px;
  margin: 15px auto;
  max-width: 600px;
  width: 90%;
  cursor: pointer;
}

.texto-circulo {
  margin-left: 5px;
}

.otros .nov-event-titulo-boton .nov-event-titulo {
  font-size: 3rem;
  color: var(--color-primario);
  text-shadow: 0px 0px 10px var(--color-blanco);
  white-space: pre-line;
}

.otros .nov-event-titulo-boton .nov-event-enlace .nov-event-boton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 194px;
  height: 65px;
  background-color: var(--color-primario);
  color: #fff;
  font-size: 1.5rem;
  border-radius: 40px;
  margin: 20px auto 0;
}

.otros .nov-event-titulo-boton .nov-event-enlace .nov-event-boton:hover {
  color: white;
  background-color: var(--color-naranja);
}

</style>
