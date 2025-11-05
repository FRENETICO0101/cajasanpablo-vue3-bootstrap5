<script setup lang="ts">
import VideoThumbnail from './CpsVideoThumbnail.vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


// Video thumbnails data
const videos = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/watch?v=3W9E1b9_r7Q",
    imageUrl: `${assetPrefix}/assets/min-yt1.webp`,
    altText: "Historias de Éxito San Pablo",
    animationDelay: "3s",
    title: "Historias de Éxito San Pablo",
    description: "52 años de Historias de Éxito 📜, platicamos con 5 de nuestros colaboradores 👩‍💼👨‍💻y nos compartieron como fue su inicio en el cooperativismo💰. Y tú ¿Cuantos años tienes en esta gran Familia?",
    duration: "9:34"
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/watch?v=bLuf3GoJBPM",
    imageUrl: `${assetPrefix}/assets/img_logralo.webp`,
    altText: "Necesitas un Crédito",
    animationDelay: "3s",
    title: "Necesitas un Crédito",
    description: "Respaldamos tus objetivos financieros a través de Créditos diseñados para ayudarte a lograrlo",
    duration: "0:19"
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/watch?v=ffbZKWobhrw",
    imageUrl: `${assetPrefix}/assets/min-yt3.webp`,
    altText: "miniatura youtube",
    animationDelay: "1.5s",
    title: "Historias de Éxito San Pablo",
    description: "Gracias por hacernos parte de sus proyectos y qué mejor que ustedes mismos sean quienes nos cuenten su historia de Éxito con Caja San Pablo. 51 años Creciendo Contigo.",
    duration: "4:46"
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/watch?v=Fl8aYzjgyRQ",
    imageUrl: `${assetPrefix}/assets/min-yt4.webp`,
    altText: "RALLYCOOP2022",
    animationDelay: "3s",
    title: "RALLYCOOP2022",
    description: "¿Estás listo para el regreso del #Rallycoop2022 🏁? Acompáñanos y aprende  🦸‍♂️¡Estamos preparando algo increíble! 🦸‍♀️",
    duration: "1:32"
  },
  {
    id: 5,
    videoUrl: "https://youtu.be/wRfz1qZwJ04?si=y5Ttm65H6q9zaMkU",
    imageUrl: `${assetPrefix}/assets/becas_youtube.webp`,
    altText: "BECAS ESCOLARES 2023-2024",
    animationDelay: "3s",
    title: "BECAS ESCOLARES 2023-2024",
    description: "🔹Socio y Ahorrador Menor Becado 2023🔹",
    duration: "3:18"
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/watch?v=9wI-J3yFDPM",
    imageUrl: `${assetPrefix}/assets/img_historias_exito.webp`,
    altText: "HISTORIAS DE ÉXITO SAN PABLO",
    animationDelay: "3s",
    title: "HISTORIAS DE ÉXITO SAN PABLO",
    description: "Gracias por hacernos parte de sus proyectos y qué mejor que ustedes mismos sean quienes nos cuenten su historia de Éxito con Caja San Pablo. 51 años Creciendo Contigo.",
    duration: "1:18"
  }
]
</script>

<template>
  <div class="row g-3">
    <div v-for="video in videos" :key="video.id" class="col-12 col-sm-6 col-md-4 col-lg-4">
      <VideoThumbnail
        :video-url="video.videoUrl"
        :image-url="video.imageUrl"
        :alt-text="video.altText"
        :animation-delay="video.animationDelay"
        :title="video.title"
        :description="video.description"
        :duration="video.duration"
      />
    </div>
  </div>
</template>
