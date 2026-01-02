<script setup lang="ts">
import image1 from "@/assets/anticipar_pagos.webp"
import image2 from "@/assets/norma_ifrs9.webp"
import image3 from "@/assets/promocion.webp"
import image4 from "@/assets/SPEI.webp"
import image5 from "@/assets/datos-biometricos-1.webp"
import image6 from "@/assets/inscribeteahoraesmásfacil.webp"
import image7 from "@/assets/alianzasgal-2.webp"
import image8 from "@/assets/dias-cerrados.webp"
import image9 from "@/assets/calendario_despensas.webp"


const slides = [
  {
    src: image9,
    alt: "Despensas 2025",
    href: "/assets/pdf/calendario_de_despensas_2025.pdf",
    target: "_blank",
    style: "background-color: black; bottom: 1%; color: white; right: 1%",
    caption: "Información",
    interval: 7000
  },
  {
    src: image8,
    alt: "Dias cerrados",
    href: "",
    target: "",
    style: "",
    caption: "",
    interval: 7000
  },
  {
    src: image1,
    alt: "Imagen Gracias por Anticipar tus Pagos",
    href: "",
    target: "",
    style: "",
    caption: "",
    interval: 5000
  },
  {
    src: image2,
    alt: "Normativa IFRS9",
    href: "/assets/pdf/NORMA_IFRS9.pdf",
    target: "_blank",
    style: "background-color: rgb(244, 163, 26); bottom: 10%; color: black; right: 8%",
    caption: "Normativa IFRS9",
    interval: 5000
  },
  {
    src: image3,
    alt: "Imagen promocion 2025 - 2026",
    href: "/assets/pdf/promociones.pdf",
    target: "_blank",
    style: "background-color: rgb(244, 163, 26); bottom: 10%; color: black; right: 8%",
    caption: "Conoce las bases",
    interval: 5000,
  },
  {
    src: image4,
    alt: "App Móvil banca electrónica guía de usuario",
    href: "/assets/pdf/Guia app.pdf",
    target: "_blank",
    style: "background-color: rgb(35, 91, 165); bottom: 10%; color: white; right: 8%",
    caption: "Guia de usuario SPEI",
    interval: 5000,
  },
  {
    src: image5,
    alt: "Datos biometricos imagen",
    href: "/assets/pdf/datos biometricos.pdf",
    target: "_blank",
    style: "background-color: rgb(244, 163, 26); bottom: 10%; color: rgb(22, 34, 59); min-width: 200px; right: 8%;",
    caption: "¡REGISTRATE YA!",
    interval: 5000,
  },
  {
    src: image6,
    alt: "Imagen inscribete ahora es más facil",
    href: "/servicio/socio",
    target: "_self",
    style: "background-color: white; bottom: 10%; color: black; left: 50%",
    caption: "QUIERO SER SOCIO",
    interval: 5000,
  },
  {
    src: image7,
    alt: "Alianzas imagen",
    href: "/btns/alianzas",
    target: "_self",
    style: "background-color: white; bottom: 5%; color: rgb(63, 126, 189); right: 31%",
    caption: "VER",
    interval: 5000,
  }
]
</script>
<template>
  <div class="container mb-3">
    <div class="dynamic-carousel">
      <!-- Carousel -->
      <div id="carouselStart" class="carousel carousel-fade slide" data-bs-ride="carousel">
        <!-- Slides -->
        <div class="carousel-inner">

          <div v-for="(slide, index) in slides" :key="index" class="carousel-item" :class="{ active: index === 0 }"
            :data-bs-interval="slide.interval || 5000">
            <img :src="slide.src" class="d-block w-100" :alt="slide.alt" style="object-fit: cover;">
            <div v-if="slide.caption" class="carousel-caption d-block">
              <a v-if="slide.href" :target="slide.target" class="btnGallery" :href="slide.href" :style="slide.style">{{
                slide.caption }}
              </a>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselStart" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselStart" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}

.carousel-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  vertical-align: middle;
  overflow-clip-margin: content-box;
  overflow: clip;
  border-radius: 0 0 25px 25px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 15px;
}

.btnGallery {
  min-width: fit-content;
  text-align: center;
  border-radius: 45px;
  width: 20%;
  font-weight: 700;
  padding: 10px;
  position: absolute;
  transition: all 1s ease;
 }

@media (max-width: 768px) {
  .btnGallery {
    /* width: 70vw; */
    left: auto !important;
    right: auto !important;
    /* transform: translateX(-50%); */
    bottom: 5% !important;
    font-size: 1.1rem;
    min-width: 140px;
    /* max-width: 90vw; */
    /* padding: 12px 8px; */
  }
}
</style>
