<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import matriz from "/src/assets/media/suc-matriz-6H6L367K.webp";
import pinMap from "/src/assets/icon/mapas-de-google.webp"
import chapala from "/src/assets/media/chapala-3-AM3NNGUT.webp"
import ocotlan from "/src/assets/media/ocotlan-5TU4MCEL.webp"
import zalatitan from "/src/assets/media/suczalatitan-XESY22I7.webp"
import centro from "/src/assets/media/centro-BO7DGDSJ.webp"
import aleira from "/src/assets/media/aleira-4L4TYFDR.webp"
import iglesias from "/src/assets/media/jose-ma.-i-JXJCIUAL.webp"
import obrero from "/src/assets/media/sucobrero-2E2YKXKD.webp"
import belisario from "/src/assets/media/suc-belisario-TRSC2NC2.webp"
import zapopan from "/src/assets/media/suc.-zapopan-3-5NQJTLFS.webp"
import tonala from "/src/assets/media/tonala1-GSQS6C4W.webp"
import centroSur from "/src/assets/media/Centro-Sur-WQU36CMY.webp"
import pedrito from "/src/assets/media/san-pedrito-46WBOKT7.webp"
import chapalita from "/src/assets/media/chapalita-ZSFKAIAY.webp"
import santaFe from "/src/assets/media/sucsantafe-UBGMNHHR.webp"
import tlaquepaque from "/src/assets/media/tlaquepaque-BVQLGZOI.webp"
import salto from "/src/assets/media/sucursal_el_salto.webp"
import medico from "/src/assets/media/serviciomed-626x417-OMYNMLHJ.webp"

import { Modal } from 'bootstrap';

const selectedPlace = ref()
const modalInstance = ref<Modal | null>(null);
const isVisible = ref(false);

const places = [
  {
    url: matriz,
    href: "https://goo.gl/maps/FAowX7hVz3wxy7CVA",
    caption: "MATRIZ",
    address: "Josefa Ortiz de Domínguez N°. 3008 <br>Col. Libertad, Guadalajara, Jal.",
    phone: "3336441728 / 3338831830",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: chapala,
    href: "https://goo.gl/maps/Dw13Emd7G35Wr18a6",
    caption: "CHAPALA",
    address: "Juárez N° 571 <br>Col. Chapala Centro Chapala, Jal.",
    phone: " (376) 765-3669",
    schedule: "Lunes a Viernes de 10:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: ocotlan,
    href: "https://maps.app.goo.gl/QVexWKgZ1i89Jctw7",
    caption: "OCOTLÁN",
    address: "Dr. Delgadillo Araujo N° 214, <br>Col. Florida, Ocotlán Jalisco.",
    phone: "(392) 688-0259",
    schedule: "Lunes a Viernes de 10:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: zalatitan,
    href: "https://goo.gl/maps/oYUFnFtS8SDJvh4x8",
    caption: "ZALATITÁN",
    address: "Av. Zalatitán N° 370 <br>Col. Alamedas de Zalatitán, Tonalá, Jal.",
    phone: "333607-3717",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: centro,
    href: "https://goo.gl/maps/3YVDQcCKRUmfnsMr6",
    caption: "CENTRO",
    address: "Av. Federalismo Norte N° 79 entre Juárez y Pedro Moreno Zona Centro, Guadalajara, Jal.",
    phone: " 333613-9592",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: aleira,
    href: "https://maps.app.goo.gl/TC17YZmFXWX4m9zXA",
    caption: "PLAZA ALEIRA",
    address: "Av. Juan Gil Preciado 2001, local 19. Parques Zapopan, Zapopan, Jal.",
    phone: "33 3883-1830",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: iglesias,
    href: "https://goo.gl/maps/nS6fTmuqS89ZAGFr6",
    caption: "JOSÉ MA. IGLESIAS",
    address: "osé Ma. Iglesias N° 4026 Fracc. San Francisco S.L. Guadalajara, Jal.",
    phone: "333608-4503",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: obrero,
    href: "https://goo.gl/maps/Naxp6vFJX5WyWMm19",
    caption: "OBRERO",
    address: "Av. Artesanos N° 1393 <br>Col. Oblatos, Guadalajara, Jal.",
    phone: " 331652-9944",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: belisario,
    href: "https://maps.app.goo.gl/F9ssQ3kHrNWxjH9D7",
    caption: "BELISARIO DOMINGUEZ",
    address: "Av. Belisario Domínguez 2323, interior 3, Colonia Belisario Domínguez, 44330 Guadalajara, Jalisco.",
    phone: " 33379-49007",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: zapopan,
    href: "https://goo.gl/maps/YjSSc7teQBNRANWTA",
    caption: "ZAPOPAN",
    address: "Ramón Corona N° 340 <br>Col. La Villa, Zapopan, Jal.",
    phone: " 333833-8253",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: tonala,
    href: "https://goo.gl/maps/vJi1iPVUPGQKxTCH7",
    caption: "TONALÁ",
    address: "Av. Tonalá N° 50, Local 7 <br>Col. Tonalá Centro, Tonalá, Jal.",
    phone: "333792-6340",
    schedule: "Lunes a Viernes de 10:00 a 18:45 horas Sábado de 9:00 a 13:00 horas"
  },
  {
    url: centroSur,
    href: "https://maps.app.goo.gl/hctrRYvLY1fLU3e88",
    caption: "CENTRO SUR",
    address: "Anillo Perif. Sur Manuel Gómez Morín 7835-local 7, Santa María Tequepexpan",
    phone: "33 3271-9285",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: pedrito,
    href: "https://goo.gl/maps/UJ1xAEsHWpkNpxH97",
    caption: "SAN PEDRITO",
    address: "Poza Rica N° 4932 <br>Col. San Pedrito, Tlaquepaque, Jal.",
    phone: "333600-3162",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: chapalita,
    href: "https://maps.app.goo.gl/jCUL8Zqm2vGiCJgq8",
    caption: "CHAPALITA",
    address: "Avenida Guadalupe 1162 int. 10 Colonia Chapalita",
    phone: "Conmutador: 3338831830 o 3336441728 Ext. Captación: 1103 / 1121 / 1178 / 1235 / 1124 Crédito: 1104 / 1132 / 1154 / 1155 Cobranza: 1131 / 1125 / 1105",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: santaFe,
    href: "https://goo.gl/maps/bMoML5MdvhfeFoxx6",
    caption: "SANTA FÉ",
    address: "Boulevard Colón N° 215 <br>Fracc. Santa Fé, Tlajomulco de Zúñiga, Jal.",
    phone: "331189-0728",
    schedule: "Lunes a Viernes de 9:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: tlaquepaque,
    href: "https://goo.gl/maps/3QqWppdVYUKB742k9",
    caption: "TLAQUEPAQUE",
    address: "Calle 16 de Septiembre N° 9, <br>Col. Tlaquepaque Centro, San Pedro Tlaquepaque Jalisco.",
    phone: "331001-0760",
    schedule: "Lunes a Viernes de 10:00 a 18:45 horas Sábado de 9:00 a 13:00 horas"
  },
  {
    url: salto,
    href: "https://maps.app.goo.gl/YfNnJvRj6xkKMPBn7",
    caption: "EL SALTO",
    address: "Emilio Carranza No. 79",
    phone: "3337324904",
    schedule: "Lunes a Viernes de 10:00 a 17:45 horas Sábado de 9:00 a 13:00 horas"
  },
  {
    url: medico,
    href: "https://goo.gl/maps/g9wEcXDEuCqh9kCa7",
    caption: "SERVICIO MÉDICO",
    address: "Segunda de Carlos González Peña #360 Col. Libertad, a unas puertas del estacionamiento de Oficina Matriz",
    phone: "33 3801 8780",
    schedule: "Lunes a Viernes de 10:00 a 18:45 horas Sábado de 9:00 a 13:00 horas"
  }
]

function selectPlace(item: unknown) {
  selectedPlace.value = item
  modalInstance.value?.show();
  isVisible.value = true;
}

onMounted(() => {
  const modalElement = document.getElementById('detailsPlaceModal');
  if (modalElement) {
    modalInstance.value = new Modal(modalElement);

    // Event listeners
    modalElement.addEventListener('show.bs.modal', () => {
      isVisible.value = true;
    });

    modalElement.addEventListener('hide.bs.modal', () => {
      isVisible.value = false;
    });
  }
});

onUnmounted(() => {
  modalInstance.value?.dispose();
});
</script>
<template>
  <main>
    <header _ngcontent-ng-c3982346130><img _ngcontent-ng-c3982346130 src="/src/assets/historia.webp"
        alt="Mujer sosteniendo un mapa y un celular">
      <div _ngcontent-ng-c3982346130 class="title-block">
        <h1 _ngcontent-ng-c3982346130 class="text-black">SUCURSALES</h1>
        <div _ngcontent-ng-c472793725 class="redes-sociales"><a _ngcontent-ng-c472793725
            href="https://www.facebook.com/CajaSanPabloOficial/" target="_blank"
            aria-label="Visita nuestro pagina de facebook"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="50" height="50"
              style="enable-background: new 0 0 24 24;">
              <g _ngcontent-ng-c472793725="">
                <path _ngcontent-ng-c472793725=""
                  d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
              </g>
            </svg></a><a _ngcontent-ng-c472793725 href="https://twitter.com/cajasanpablo" target="_blank"
            aria-label="Visita nuestro perfil de twitter"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 24 24">
              <polygon _ngcontent-ng-c472793725=""
                points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159" />
              <path _ngcontent-ng-c472793725=""
                d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z" />
            </svg></a><a _ngcontent-ng-c472793725 href="https://www.instagram.com/cajapopularsanpablo/" target="_blank"
            aria-label="Visita nuestro perfil de instagram"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="50" height="50"
              style="enable-background: new 0 0 24 24;">
              <g _ngcontent-ng-c472793725="">
                <path _ngcontent-ng-c472793725=""
                  d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
                <path _ngcontent-ng-c472793725=""
                  d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
                <circle _ngcontent-ng-c472793725="" cx="18.406" cy="5.594" r="1.44" />
              </g>
            </svg></a><a _ngcontent-ng-c472793725 href="https://www.youtube.com/channel/UCyBT1Re7IC5AgO1p66AHmNA"
            target="_blank" aria-label="Visita nuestro canal de YouTube"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="50" height="50"
              style="enable-background: new 0 0 24 24;">
              <g _ngcontent-ng-c472793725="" id="XMLID_184_">
                <path _ngcontent-ng-c472793725=""
                  d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z" />
              </g>
            </svg></a><a _ngcontent-ng-c472793725 href="https://www.tiktok.com/@cajasanpablo" target="_blank"
            aria-label="Visita nuestro perfil de tiktok"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="50" height="50"
              style="enable-background: new 0 0 24 24;">
              <path _ngcontent-ng-c472793725=""
                d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594c-1.618,0-3.119-0.51-4.352-1.376  c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235  c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469c0,1.332,0.756,2.489,1.86,3.07  c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126c0,0.358,0.035,0.707,0.097,1.047  c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z" />
            </svg></a></div>
        <div _ngcontent-ng-c472793725 class="contactanos">
          <p _ngcontent-ng-c472793725>¡CONTÁCTANOS!</p>
        </div>
      </div>
    </header>
    <section class="sucursales">
      <div class="container py-5">
        <div class="card-container row justify-content-evenly">

          <div v-for="(value, index) in places" class="card-suc col" :key="index"
            :style="{ backgroundImage: `url(${value.url})` }">
            <div class="card-suc-title-btn">
              <div class="card-suc-title">{{ value.caption }}</div>
            </div>
            <a target="_blank" :href="value.href">
              <div class="card-suc-title-btn">
                <div class="card-suc-btng">
                  <img :src="pinMap" width="16px" height="16px" alt="pin-mapa">
                  <p>Obtener dirección</p>
                </div>
              </div>
            </a>
            <div class="card-suc-title-btn">
              <div class="card-suc-details">
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalDetails"
                  @click="selectPlace(value)">
                  <p>Detalles</p>
                </button>
              </div>
            </div>
            <div class="card-suc-inf">
              <div class="card-suc-inf-title">Teléfono</div>
              <div class="card-suc-inf-numbers">{{ value.phone }}</div>
              <div class="card-suc-inf-title">Horario</div>
              <div class="card-suc-inf-numbers">{{ value.schedule }}</div>
            </div>
          </div>

        </div>
      </div>
      <!-- Modal -->
      <div class="modal fade" :class="{ 'show d-block': isVisible }" tabindex="-1" v-show="isVisible"
        id="detailsPlaceModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ selectedPlace ? selectedPlace.caption : '' }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <slot name="body">
                <ul>
                  <li>
                    <div v-html="selectedPlace ? selectedPlace.address : ''"></div>
                  </li>
                  <li>
                    <div v-html="selectedPlace ? selectedPlace.phone : ''"></div>
                  </li>
                  <li>
                    <div v-html="selectedPlace ? selectedPlace.schedule : ''"></div>
                  </li>
                </ul>
              </slot>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Enterado
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- Backdrop -->
      <div class="modal-backdrop fade" :class="{ 'show': isVisible }" v-show="isVisible"></div>
    </section>
  </main>
</template>
<style lang="css" scoped>
.card-container {
  gap: 0px 80px
}

.card-container .card-suc {
  height: 415px;
  margin: 20px 0;
  text-align: center;
  background-size: cover;
  box-shadow: 1px 1px 21px #000000bf;
  overflow: hidden;
  border-radius: 5px;
  min-width: 240px;
  max-width: 280px;
  transition: box-shadow .5s ease
}

.card-container .card-suc a {
  text-decoration: none
}

.card-container .card-suc .nueva-sucursal {
  background: var(--color-naranja);
  color: #fff;
  transform: rotate(45deg);
  padding: 8px 0;
  position: absolute;
  bottom: 180px;
  left: 90px;
  font-size: 20px;
  width: 220px
}

.card-container .card-suc .card-suc-title-btn {
  position: relative;
  top: 37%
}

.card-container .card-suc .card-suc-title-btn .card-suc-title {
  font-size: 2.0rem;
  color: var(--color-blanco);
  text-shadow: 0 0 10px black;
  line-height: 30px;
  margin-bottom: 5px
}

.card-container .card-suc .card-suc-title-btn .card-suc-btng {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-primario);
  width: 190px;
  border-radius: 15px;
  height: 30px;
  color: var(--color-blanco);
  margin: 20px auto;
  font-size: 1rem;
  padding: 10px;
  transition: background-color .5s ease
}

.card-container .card-suc .card-suc-title-btn .card-suc-btng p {
  margin: 0;
  padding: 0
}

.card-suc-details {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-naranja);
  width: 100px;
  border-radius: 15px;
  height: 30px;
  color: var(--color-blanco);
  margin: 20px auto;
  font-size: 1rem;
  padding: 10px;
  transition: background-color .5s ease
}

.card-suc-details button p {
  color: white;
  padding-top: 15px;
}

.card-suc-inf {
  background-color: #4d4d4fcc;
  padding: 20px;
  text-align: start;
  height: 325px;
  transform: translateY(315px)
}

.card-suc-inf .card-suc-inf-title {
  font-size: 2.6rem;
  color: var(--color-blanco)
}

.card-suc-inf .card-suc-inf-numbers {
  color: var(--color-blanco);
  font-size: 1.2rem;
  margin: 10px 0;
  white-space: pre-line
}

.card-container .card-suc:hover {
  box-shadow: 1px 1px 21px 0 var(--color-naranja)
}

.card-container .card-suc:hover .card-suc-title-btn .card-suc-btng {
  background-color: var(--color-primario)
}

.card-container .card-suc-inf {
  background-color: #4d4d4fcc;
  padding: 20px;
  text-align: start;
  height: 325px;
  transform: translateY(315px)
}

header[_ngcontent-ng-c3982346130] {
  position: relative;
  width: 100%;
  height: 70vh
}

header[_ngcontent-ng-c3982346130] img[_ngcontent-ng-c3982346130] {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top
}

header[_ngcontent-ng-c3982346130] .title-block[_ngcontent-ng-c3982346130] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center
}

header[_ngcontent-ng-c3982346130] .title-block[_ngcontent-ng-c3982346130] h1[_ngcontent-ng-c3982346130] {
  font-size: 3rem;
  text-shadow: 0 0 10px white;
  animation: zoomIn 1s ease-in-out
}

.redes-sociales[_ngcontent-ng-c472793725] {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap
}

.redes-sociales[_ngcontent-ng-c472793725] a[_ngcontent-ng-c472793725] {
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

.redes-sociales[_ngcontent-ng-c472793725] a[_ngcontent-ng-c472793725]:hover {
  background-color: #fff;
  fill: #000
}

.redes-sociales[_ngcontent-ng-c472793725] a[_ngcontent-ng-c472793725] svg[_ngcontent-ng-c472793725] {
  width: 30px
}

.contactanos[_ngcontent-ng-c472793725] {
  font-size: 2rem;
  color: #fff;
  text-shadow: 1px 1px 20px black;
  text-align: center;
  padding: 15px 0 0;
  overflow: hidden
}

.contactanos[_ngcontent-ng-c472793725] p[_ngcontent-ng-c472793725] {
  animation: fadeInRight;
  animation-duration: 1.5s
}
</style>
