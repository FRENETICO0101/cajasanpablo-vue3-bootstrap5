<template>
  <main>
    <div class="container">
      <div class="row py-5">
        <div class="col-12 col-lg-6 d-flex flex-column justify-content-center">
          <section class="preg-frec py-5 py-lg-0">
            <div class="container text-center">
              <img loading="lazy" width="200px" height="200px" :src="`${assetPrefix}/assets/icon/informacion.webp`"
                alt="icono signo de interrogación" class="imgfb" />
              <div class="titulofb text-center fs-1 my-4 text-center">
                Preguntas Frecuentes
              </div>
              <div id="pregfrecbtn" class="nov-event-boton button-toggle" @click="toggle">
                <Transition name="text-fade" mode="out-in">
                  <span :key="buttonText">{{ buttonText }}</span>
                </Transition>
              </div>

              <Transition name="fade-slide">
                <div v-if="isVisible" class="accordion-wrapper">
                  <div id="pregfrec" class="container accordion-container">
                    <div id="accordionFlushExample" class="accordion accordion-flush">
                      <div class="accordion-item">
                    <h2 id="flush-headingOne" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                        aria-expanded="false" aria-controls="flush-collapseOne" class="accordion-button collapsed">
                        ¿Qué es una Sociedad Cooperativa de Ahorro y Crédito?
                      </button>
                    </h2>
                    <div id="flush-collapseOne" aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-1">
                          “La Sociedad Cooperativa es una forma de organización social integrada
                          por personas físicas con base en intereses comunes y en los principios
                          de solidaridad, esfuerzo propio y ayuda mutua, con el propósito de
                          satisfacer necesidades individuales y colectivas, a través de la
                          realización de actividades económicas de producción, distribución y
                          consumo de bienes y servicios.” <br /><br />
                          Así lo define la “Ley General de Sociedades Cooperativas (LGSC) Art. 2
                          <br /><br />
                          Además se rige bajo sus Estatutos definidos por los mismos Socios; funge
                          como intermediario financiero *Ahorro y Crédito* sin fines de lucro y
                          ofrece servicios exclusivos a sus Asociados.
                          <br /><br />
                          Fuente:
                          <a
                            href="http://www.diputados.gob.mx/LeyesBiblio/pdf/143_190118.pdf">www.diputados.gob.mx/LeyesBiblio/pdf/143_190118.pdf</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingTwo" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                        aria-expanded="false" aria-controls="flush-collapseTwo" class="accordion-button collapsed">
                        ¿Qué beneficios tienen las Cajas para sus socios y la comunidad?
                      </button>
                    </h2>
                    <div id="flush-collapseTwo" aria-labelledby="flush-headingTwo"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-2">
                          Las Sociedades Cooperativas de Ahorro y Préstamo juegan un papel muy
                          importante en muchos sentidos:<br /><br />
                          • Promueven la inclusión financiera de productos y servicios financieros
                          formales en zonas donde la infraestructura bancaria aún es limitada; es
                          decir, ayudan a las personas a acceder a productos y servicios
                          financieros formales en condiciones de seguridad.<br />
                          • Ofrecen productos que están diseñados para personas con menores
                          recursos o cuyos ingresos no son constantes.<br />
                          • Impulsan el desarrollo económico en las localidades donde operan al
                          ofrecer créditos para fines productivos y retener el ahorro en la
                          localidad.<br />
                          • Contribuyen a la satisfacción de necesidades individuales y
                          colectivas, proporcionando servicios de asistencia social, a través de
                          la distribución de sus remanentes mediante fondos constituidos para
                          tales fines.<br /><br />
                          Más información:
                          <a href="https://www.condusef.gob.mx/">https://www.condusef.gob.mx/</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingThree" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                        aria-expanded="false" aria-controls="flush-collapseThree" class="accordion-button collapsed">
                        ¿En qué te debes fijar antes de depositar tu dinero en una Caja?
                      </button>
                    </h2>
                    <div id="flush-collapseThree" aria-labelledby="flush-headingThree"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-3">
                          1. Verificar si se encuentra registrada. Todas las SOCAP que realicen
                          operaciones que impliquen la captación de recursos de sus socios para su
                          colocación (otorgar créditos) entre los mismos, independientemente de su
                          tipo (grandes, medianas o pequeñas cooperativas), debieron haberse
                          inscrito antes de febrero de 2010 en el Registro Nacional Único de
                          SOCAP, que administra el Fondo de Supervisión Auxiliar de Sociedades
                          Cooperativas de Ahorro y Préstamo y de Protección a sus Ahorradores
                          (FOCOOP), de otra forma están operando al margen de la ley, con el
                          riesgo económico que esto implica para el patrimonio de los socios
                          ahorradores y los de aspecto legal para los administradores de la
                          Sociedad.<br /><br />
                          Para consultar la situación que guardan las SOCAP, se puede acceder a la
                          página de internet que tiene el FOCOOP: www.focoop.com.mx.<br /><br />
                          2. Verificar si se encuentra autorizada y supervisada por la CNBV. Caja
                          Popular San Pablo, Cooperativa Autorizada y Supervisada por la Comisión
                          Nacional Bancaria y de Valores desde 2007 Oficio CNBV 310-1500125/2007
                          134-870855/2007
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingFour" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                        aria-expanded="false" aria-controls="flush-collapseFour" class="accordion-button collapsed">
                        ¿Quién supervisa a las Cooperativas de Ahorro y Crédito?
                      </button>
                    </h2>
                    <div id="flush-collapseFour" aria-labelledby="flush-headingFour"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-1">
                          Las Cooperativas Certificadas y Autorizadas por (CNBV); Nos encontramos
                          sujetos a la propia supervisión y regulación de la Comisión Nacional
                          Bancaria y de Valores en términos de la (LRASCAP). Ley para Regular las
                          Actividades de las Sociedades Cooperativas de Ahorro y Préstamo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingFive" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                        aria-expanded="false" aria-controls="flush-collapseFive" class="accordion-button collapsed">
                        ¿Quién es Caja Popular San Pablo?
                      </button>
                    </h2>
                    <div id="flush-collapseFive" aria-labelledby="flush-headingFive"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-2">
                          Somos una Cooperativa autorizada y supervisada por la CNBV; con más de
                          50 años al servicio de nuestros Socios, contribuyendo a la mejora
                          continua de la economía social, promoviendo la cultura del ahorro y el
                          uso seguro de créditos con tasas justas, además de otorgar servicios y
                          protecciones especiales a nuestra comunidad
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingSix" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                        aria-expanded="false" aria-controls="flush-collapseSix" class="accordion-button collapsed">
                        ¿Qué beneficios se obtienen al ingresar a Caja Popular San Pablo?
                      </button>
                    </h2>
                    <div id="flush-collapseSix" aria-labelledby="flush-headingSix"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-3">
                          Ingresar a una Cooperativa certificada es sinónimo de seguridad y
                          confianza, entre otros beneficios importantes obtendrás al ingresar con
                          nosotros:<br /><br />
                          • Apertura de cuentas de ahorro sin comisiones<br />
                          • Acceso a todas las cuentas de ahorro disponibles con atractivos
                          rendimientos.<br />
                          • Extensa gama de productos crediticios para cualquier necesidad con
                          tasas justas.<br />
                          • Servicios escolares, además convenios con Instituciones educativas.<br />
                          • Servicios adicionales como: pago de servicios, envío de remesas,
                          cajeros automáticos, servicios en red, entre otros.<br />
                          • Servicios médicos, campañas de salud y alianzas con diversas empresas
                          con descuentos y precios especiales.<br />
                          • Seguro de protección al Ahorro y Crédito, por tu cumplimiento
                          puntual.<br />
                          • Servicio de Apoyo Funerario sin costo a Socios por buen manejo de
                          cuenta (revisar políticas vigentes).<br />
                          • Participación en Concurso de Becas Escolares para estudiantes, desde
                          Primaria, hasta Licenciatura.<br />
                          • Participación en promociones, eventos y apoyos de Obra Social todo el
                          año.<br />
                          • Opción de pagos electrónicos para mayor comodidad (TPV, Depósitos
                          bancarios, Cajeros Receptores).
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingEight" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                        aria-expanded="false" aria-controls="flush-collapseEight" class="accordion-button collapsed">
                        ¿Qué es la Parte Social?
                      </button>
                    </h2>
                    <div id="flush-collapseEight" aria-labelledby="flush-headingEight"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-2">
                          Es la Aportación al Capital Social de la Cooperativa, lo que permite ser
                          Socio activo de la Institución; existe un Certificado Oficial que avala
                          la inscripción como Socio, se otorga al momento de liquidar la cantidad
                          estipulada de $1,000.00 (Un mil pesos) según las Normas Vigentes.<br /><br />
                          Ésta la define de manera autónoma cada entidad y al cubrirse
                          completamente, se empiezan a recibir los beneficios; cabe mencionar que
                          ésta cantidad es dinero del Socio, si por alguna situación decide
                          separarse de Caja San Pablo, se devolverá íntegramente al titular.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingNine" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                        aria-expanded="false" aria-controls="flush-collapseNine" class="accordion-button collapsed">
                        ¿De qué manera puedo saber si mis ahorros están seguros en una Sociedad
                        Cooperativa de Ahorro y Préstamo?
                      </button>
                    </h2>
                    <div id="flush-collapseNine" aria-labelledby="flush-headingNine"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-3">
                          La Comisión Nacional Bancaria y de Valores (CNBV), de acuerdo a la Ley
                          para Regular las Actividades de las Sociedades Cooperativas de Ahorro y
                          Préstamo, solo realiza supervisión a Entidades Autorizadas, para seguir
                          con las operaciones de Ahorro y Préstamo como Cooperativas con niveles
                          de operación I a IV (SOCAP).<br /><br />
                          Así mismo se tiene el apoyo del Fideicomiso Fondo de Supervisión
                          Auxiliar de Sociedades Cooperativas de Ahorro y Préstamo y de Protección
                          a sus Ahorradores (FOCOOP) hasta por 25 mil UDIS para un caso de
                          contingencia.<br /><br />
                          Por la seguridad de tu patrimonio, utiliza únicamente los servicios que
                          ofrecen las Sociedades Cooperativas de Ahorro y Préstamo autorizadas
                          como Caja Popular San Pablo, puedes consultar en el Padrón de Entidades
                          Financieras Supervisadas (PES) entrando a:
                          <a href="www.gob.mx/cnbv">www.gob.mx/cnbv</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingTen" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                        aria-expanded="false" aria-controls="flush-collapseTen" class="accordion-button collapsed">
                        ¿Al cuánto tiempo de haber ingresado como Socio, puedo solicitar un
                        préstamo?
                      </button>
                    </h2>
                    <div id="flush-collapseTen" aria-labelledby="flush-headingTen"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-1">
                          Una vez cubierta la Parte Social ($1,000.00), eres oficialmente Socio,
                          por lo que puedes hacer uso de los derechos en cuentas de Ahorro y
                          Créditos; es importante mencionar que éste trámite lleva una valoración
                          crediticia por nuestros analistas, y tu saldo en ahorro y capacidad de
                          pago son piezas clave para la autorización; la variación es cuestión de
                          días.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingEleven" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEleven"
                        aria-expanded="false" aria-controls="flush-collapseEleven" class="accordion-button collapsed">
                        Ingresé hace tiempo y no concluí la Parte Social, ¿Qué pasa con mi cuenta?
                      </button>
                    </h2>
                    <div id="flush-collapseEleven" aria-labelledby="flush-headingEleven"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-2">
                          Jamás pierdes tu dinero es muy importante aclararlo, éste es enviado a
                          una cuenta por cobrar, que puedes recuperar presentando tu
                          identificación oficial.<br /><br />
                          Si el tiempo no asciende a un periodo entre 3 a 6 meses como mínimo,
                          puede que tu cuenta aun esté vigente; si deseas recuperarla solo debes
                          realizar un depósito de complemento a la brevedad; en cambio, si el
                          periodo es más largo, necesitarás darte de alta nuevamente en módulos de
                          captación, con la documentación oficial.<br /><br />
                          Si te encuentras en este supuesto, llama al módulo de Información al
                          3338831830 Ext. 1110 u 1161, en donde pueden informarte la situación de
                          tu cuenta
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingtwelve" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsetwelve"
                        aria-expanded="false" aria-controls="flush-collapsetwelve" class="accordion-button collapsed">
                        ¿En dónde puedo consultar mis saldos?
                      </button>
                    </h2>
                    <div id="flush-collapsetwelve" aria-labelledby="flush-headingtwelve"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-3">
                          Puedes revisar e imprimir saldos en los kioscos que se encuentran
                          destinados para ello en nuestras oficinas, también puedes revisarlo en
                          la página web registrándote e ingresando al apartado “SALDOS EN LÍNEA”,
                          así como en cada una de nuestras sucursales, movimiento exclusivo del
                          titular de la cuenta e identificándote debidamente.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingThirteen" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThirteen"
                        aria-expanded="false" aria-controls="flush-collapseThirteen" class="accordion-button collapsed">
                        ¿Puedo realizar movimientos en cualquier Sucursal San Pablo?
                      </button>
                    </h2>
                    <div id="flush-collapseThirteen" aria-labelledby="flush-headingThirteen"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-1">
                          Nuestras oficinas están conectadas por red, por lo que puedes efectuar
                          cualquier trámite, deposito, pago, ahorro, registro en la Sucursal que
                          decidas.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingFourteen" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourteen"
                        aria-expanded="false" aria-controls="flush-collapseFourteen" class="accordion-button collapsed">
                        ¿Las promociones de Caja Popular San Pablo son para todos?
                      </button>
                    </h2>
                    <div id="flush-collapseFourteen" aria-labelledby="flush-headingFourteen"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-2">
                          Cada una de las promociones establecidas por la Cooperativa, presentan
                          una serie de Bases que se dan a conocer en el mes de enero de todos los
                          años; la convocatoria está abierta para todos los Socios, pero solo
                          aquellos que acepten y cumplan las condiciones, serán acreedores.
                          <br /><br />
                          Encuentra toda la Información en la Sección Promociones, Revista
                          Mensual, Redes Sociales o directamente en tu Sucursal.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingFiveTeen" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFiveTeen"
                        aria-expanded="false" aria-controls="flush-collapseFiveTeen" class="accordion-button collapsed">
                        ¿Quiénes son nuestros Directivos?
                      </button>
                    </h2>
                    <div id="flush-collapseFiveTeen" aria-labelledby="flush-headingFiveTeen"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-3">
                          Son Socios, como todos nosotros, que se eligen mediante los periodos de
                          elecciones en las Asambleas Generales que se realizan cada año.<br /><br />
                          Las personas deben tener conocimientos básicos para poder manejar una
                          institución como San Pablo; cada año se celebran los Talleres
                          “Competencias Directivas” que tienen como finalidad, preparar a quienes
                          tienen la intención de formar parte de nuestro Órgano de Gobierno; si
                          estás interesado en ser parte del equipo, mantente atento a las
                          siguientes convocatorias que se publican en nuestros medios de
                          información.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 id="flush-headingSixTeen" class="accordion-header">
                      <button type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSixTeen"
                        aria-expanded="false" aria-controls="flush-collapseSixTeen" class="accordion-button collapsed">
                        ¿Cuentan con bolsa de trabajo?
                      </button>
                    </h2>
                    <div id="flush-collapseSixTeen" aria-labelledby="flush-headingSixTeen"
                      data-bs-parent="#accordionFlushExample" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="resp resp-3">
                          Claro, en ésta página web, encontraras un apartado del mismo nombre, ahí
                          se publican las actualizaciones de vacantes disponibles, además de los
                          datos de contacto del área de Recursos Humanos
                          <a routerlink="/info/trabajo" href="/info/trabajo">Consultar
                            bolsa de trabajo</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                </div>
              </Transition>
            </div>
          </section>
        </div>
        <hr class="d-block d-lg-none m" style="width: 90%; margin: 0 auto" />
        <div class="col-12 col-lg-6 d-flex flex-column align-items-center">
          <section class="buzon mb-5 py-5 py-lg-0">
            <div class="container text-center">
              <img width="200px" height="200px" loading="lazy" :src="`${assetPrefix}/assets/icon/buzon.webp`"
                alt="Buzón de Comentarios" />
              <div class="titulofb fs-1 my-3">
                Buzón de Comentarios
              </div>
              <div class="descfb">
                Nos importa tu opinión, háznos saber tus recomendaciones para brindarte un mejor
                servicio
              </div>
              <a routerlink="/servicio/buzon" class="nov-event-enlace" href="/servicio/buzon">
                <div class="nov-event-boton">Ir a Buzón</div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


// Direct implementation to test if import is the issue
const isVisible = ref(false)
const buttonText = ref('Ver más')

const toggle = () => {
  isVisible.value = !isVisible.value
  buttonText.value = isVisible.value ? 'Ocultar' : 'Ver más'
}

</script>
<style scoped>
/* =============================================================================
   ACCORDION STYLES
   ============================================================================= */

.accordion-container {
  overflow: hidden;
}

.preg-frec .accordion-button {
  margin: 5px 0;
  font-size: 1.3rem;
  color: var(--bs-gray);
}

.accordion-body .resp {
  font-size: 1.1rem;
  text-align: justify;
  padding: 25px 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.26);
  border-radius: 0 0 10px 10px;
  font-family: inherit;
}

/* =============================================================================
   BUTTON STYLES
   ============================================================================= */

/* Primary action buttons */
.nov-event-boton {
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
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.nov-event-boton:hover {
  background-color: var(--color-secundario);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.nov-event-boton:active {
  transform: translateY(0);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* Specific button context overrides */
.buzon .nov-event-enlace .nov-event-boton {
  margin: 20px auto 0;
}

/* Card buttons */
.btn-cards {
  background-color: var(--color-primario);
  color: white;
}

/* =============================================================================
   TYPOGRAPHY STYLES
   ============================================================================= */

.titulofb {
  color: var(--color-primario);
}

.descfb {
  font-size: 1.4rem;
  color: var(--color-azul-oscuro);
  text-align: center;
}

.text-cards-description {
  color: var(--color-primario);
}

.adds-text {
  padding-top: 5px;
  font-size: large;
}

.united-text {
  text-align: center;
  text-shadow: 1px 1px 10px black;
  white-space: pre-line;
  font-weight: 100;
  margin-bottom: 50px;
}

.texto-circulo {
  margin-left: 5px;
}

/* =============================================================================
   IMAGE STYLES
   ============================================================================= */

.social-images a img {
  width: 255px;
  border-radius: 10px;
  margin: 20px 11px;
  padding: 0;
  max-width: 300px;
  cursor: pointer;
}

.img-beneficio {
  width: 30px;
  height: 30px;
}

.center-image {
  display: block;
  margin: 0 auto;
  width: 60%;
}

/* =============================================================================
   LAYOUT & CONTAINERS
   ============================================================================= */

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

.boxed {
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.14);
  padding: 10px 5px;
}

.who-are {
  background-color: #003063;
}

/* =============================================================================
   HEADER STYLES
   ============================================================================= */

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

/* =============================================================================
   SOCIAL MEDIA & CONTACT STYLES
   ============================================================================= */

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
  animation: flip 1.5s;
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
  animation: fadeInRight 1.5s;
}

/* =============================================================================
   UTILITY CLASSES
   ============================================================================= */

.texto-corto {
  text-decoration: none;
}

.nov-event-enlace {
  text-decoration: none;
}

.nov-event-enlace:hover {
  text-decoration: none;
}

.otros .nov-event-titulo-boton .nov-event-titulo {
  font-size: 3rem;
  color: var(--color-primario);
  text-shadow: 0 0 10px var(--color-blanco);
  white-space: pre-line;
}
</style>
