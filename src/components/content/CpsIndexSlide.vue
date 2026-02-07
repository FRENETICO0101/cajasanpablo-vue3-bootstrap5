<script setup lang="ts">
import image1 from "@/assets/anticipar_pagos.webp"
import image2 from "@/assets/norma_ifrs9.webp"
// import image3 from "@/assets/promocion_2026.webp"
import image4 from "@/assets/SPEI.webp"
import image5 from "@/assets/datos-biometricos-1.webp"
import image6 from "@/assets/inscribeteahoraesmásfacil.webp"
import image7 from "@/assets/alianzasgal-2.webp"
import image8 from "@/assets/comunicado_vale_de_despensa_2026.webp"
import image9 from "@/assets/img_0.webp"
import image10 from "@/assets/aniversario_2026.webp"
import image11 from "@/assets/inscribete.webp"
import image12 from "@/assets/aviso_interes_ahorro_2026.webp"
import image13 from "@/assets/convocatorias_asamblea_2026.webp"

const slides = [
  {
    src: image9,
    alt: "Comuinucado Condolencias",
    href: "",
    target: "",
    style: "",
    caption: "",
    interval: 5000
  },
  {
    src: image11,
    alt: "Imagen Inscríbete",
    href: "",
    target: "",
    style: "",
    caption: "",
    interval: 5000
  },
  {
    src: image10,
    alt: "Imagen Aniversario 2026",
    href: "/assets/pdf/aniversario_2026.pdf",
    target: "_blank",
    style: "background-color: white; bottom: 5%; color: rgb(63, 126, 189); right: 31%",
    caption: "Ver",
    interval: 5000,
  },
  {
    src: image12,
    alt: "Imagen Aviso de interés ahorro 2026",
    href: "/assets/pdf/aviso_ahorro_ adulto2026.pdf",
    target: "_blank",
    style: "background-color: white; bottom: 5%; color: rgb(63, 126, 189); right: 31%",
    caption: "Leer aviso",
    interval: 5000,
  },
  {
    src: image13,
    alt: "Imagen Convocatoria Asamblea 2026",
    href: "/assets/pdf/asamblea_web_2026.pdf",
    target: "_blank",
    style: "background-color: white; bottom: 5%; color: rgb(63, 126, 189); right: 31%",
    caption: "Ver conviocatoria",
    interval: 5000,
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
  /* {
    src: image3,
    alt: "Imagen promocion 2025 - 2026",
    href: "/assets/pdf/bases_promociones_2026.pdf",
    target: "_blank",
    style: "background-color: rgb(244, 163, 26); bottom: 10%; color: black; right: 8%",
    caption: "Conoce las bases",
    interval: 5000,
  }, */
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
  },
  {
    src: image8,
    alt: "Comunicado vale de despensa 2026",
    href: "/assets/pdf/Comunicado_Despensa_2026.pdf",
    target: "_blank",
    style: "background-color: white; bottom: 5%; color: rgb(63, 126, 189); right: 31%",
    caption: "Leer comunicado",
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
