<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'

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

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


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
    schedule: "Lunes a Viernes de 10:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
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
    phone: "3331606541",
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
    schedule: "Lunes a Viernes de 10:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: salto,
    href: "https://maps.app.goo.gl/YfNnJvRj6xkKMPBn7",
    caption: "EL SALTO",
    address: "Emilio Carranza No. 79",
    phone: "3337324904",
    schedule: "Lunes a Viernes de 10:00 a 17:45 horas <br>Sábado de 9:00 a 13:00 horas"
  },
  {
    url: medico,
    href: "https://goo.gl/maps/g9wEcXDEuCqh9kCa7",
    caption: "SERVICIO MÉDICO",
    address: "Segunda de Carlos González Peña #360 Col. Libertad, a unas puertas del estacionamiento de Oficina Matriz",
    phone: "33 3801 8780",
    schedule: "Lunes a Viernes de 10:00 a 18:45 horas <br>Sábado de 9:00 a 13:00 horas"
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
    <CpsPageHeader title="SUCURSALES" :image-url="`${assetPrefix}/assets/historia.webp`"
      image-alt="Mujer sosteniendo un mapa y un celular" color-text="text-white" />
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
                  <p>Ubicación</p>
                </div>
              </div>
            </a>
            <div class="card-suc-title-btn">
              <div class="card-suc-details">
                <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalDetails"
                  @click="selectPlace(value)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                  </svg>
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
                <ul class="modal-info-list">
                  <li class="info-item">
                    <div class="info-icon location-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>
                    <div class="info-content" v-html="selectedPlace ? selectedPlace.address : ''"></div>
                  </li>
                  <li class="info-item">
                    <div class="info-icon phone-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                    <div class="info-content" v-html="selectedPlace ? selectedPlace.phone : ''"></div>
                  </li>
                  <li class="info-item">
                    <div class="info-icon calendar-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                      </svg>
                    </div>
                    <div class="info-content" v-html="selectedPlace ? selectedPlace.schedule : ''"></div>
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
  border-radius: 0px;
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

/* ===== MODAL STYLING ===== */
.modal-info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 0px;
  border-left: 4px solid var(--color-primario);
  transition: all 0.3s ease;
}

.info-item:hover {
  background: #e9ecef;
  transform: translateX(5px);
}

.info-item:last-child {
  margin-bottom: 0;
}

.info-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-icon svg {
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
}

.info-item:hover .info-icon svg {
  transform: scale(1.1);
}

.location-icon {
  color: var(--color-primario);
}

.phone-icon {
  color: var(--color-naranja);
}

.calendar-icon {
  color: var(--color-secundario);
}

.info-content {
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
  color: #333;
}

.info-content br {
  margin-bottom: 5px;
}

/* Modal header styling */
.modal-header {
  background: linear-gradient(135deg, var(--color-primario), var(--color-secundario));
  color: white;
  border-bottom: none;
}

.modal-header .modal-title {
  font-weight: 700;
  font-size: 1.25rem;
}

.modal-header .btn-close {
  filter: invert(1);
}

.modal-footer {
  border-top: 1px solid #dee2e6;
  background: #f8f9fa;
}

.modal-footer .btn-secondary {
  background: var(--color-primario);
  border-color: var(--color-primario);
  color: white;
  transition: all 0.3s ease;
}

.modal-footer .btn-secondary:hover {
  background: var(--color-naranja);
  border-color: var(--color-naranja);
  transform: translateY(-2px);
}

/* Responsive modal styles */
@media (max-width: 576px) {
  .info-item {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .info-icon {
    align-self: center;
    width: 32px;
    height: 32px;
  }
}

.card-container .card-suc .card-suc-title-btn {
  position: relative;
  top: 37%;
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
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: var(--color-primario);
  width: fit-content;
  border-radius: 15px;
  height: 30px;
  color: var(--color-blanco);
  margin: 20px auto;
  font-size: 1rem;
  padding: 8px 12px;
  transition: background-color .5s ease
}

.card-container .card-suc .card-suc-title-btn .card-suc-btng p {
  margin: 0;
  padding: 0
}

.card-suc-details {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-naranja);
  width: fit-content;
  border-radius: 15px;
  height: 30px;
  color: var(--color-blanco);
  margin: 20px auto;
  font-size: 1rem;
  padding: 8px 12px;
  transition: background-color .5s ease
}

.card-suc-details button {
  background: none;
  border: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.card-suc-details button p {
  color: white;
  margin: 0;
  padding: 0;
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
</style>
