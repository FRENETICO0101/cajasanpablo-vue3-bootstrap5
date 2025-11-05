<template>
  <div class="container overflow-hidden py-6">
    <div class="grid-wrapper col">
      <div v-for="(value, index) in currentImages" class="lc-block" :key="`${value.src}-${index}`">
        <img 
          class="img-fluid rounded gallery-image" 
          :src="`${assetPrefix}${value.src}`" 
          alt="Evento de Caja San Pablo" 
          loading="lazy"
        >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''

// Get asset prefix from environment variable

const gallery = [
  {
    src: "/assets/img-inauguracion-el-salto/salto_1.jpeg"
  },
  {
    src: "/assets/img-inauguracion-el-salto/salto_2.jpeg"
  },
  {
    src: "/assets/img-madres-2025-event/madre_1.webp"
  },
  {
    src: "/assets/img-madres-2025-event/madre_2.webp"
  },
  {
    src: "/assets/img-madres-2025-event/madre_3.webp"
  },
  {
    src: "/assets/img-madres-2025-event/madre_4.webp"
  },
  {
    src: "/assets/img-nino-2025-event/nino_1.webp"
  },
  {
    src: "/assets/img-nino-2025-event/nino_2.webp"
  },
  {
    src: "/assets/img-nino-2025-event/nino_3.webp"
  },
  {
    src: "/assets/img-nino-2025-event/nino_4.webp"
  },
  {
    src: "/assets/img-nov-event/191.webp"
  },
  {
    src: "/assets/img-nov-event/192.webp"
  },
  {
    src: "/assets/img-nov-event/167.webp"
  },
  {
    src: "/assets/img-nov-event/168.webp"
  },
  {
    src: "/assets/img-nov-event/169.webp"
  },
  {
    src: "/assets/img-nov-event/150.webp"
  },
  {
    src: "/assets/img-nov-event/151.webp"
  },
  {
    src: "/assets/img-nov-event/152.webp"
  },
  {
    src: "/assets/img-nov-event/140.webp"
  },
  {
    src: "/assets/img-nov-event/141.webp"
  },
  {
    src: "/assets/img-nov-event/142.webp"
  }
]

// Reactive array to hold current images
const currentImages = ref<{ src: string }[]>([])

// Timer reference for cleanup
let intervalId: number | null = null

function randomGalleryImages() {
  const randomGallery: { src: string }[] = []

  while (randomGallery.length < 6) {
    const randomIndex = Math.floor(Math.random() * gallery.length)
    if(!randomGallery.includes(gallery[randomIndex])){
      randomGallery.push(gallery[randomIndex])
    }
  }

  return randomGallery
}

function updateImages() {
  currentImages.value = randomGalleryImages()
}

// Initialize on component mount
onMounted(() => {
  // Set initial images
  updateImages()
  
  // Set up interval to update images every 10 seconds
  intervalId = setInterval(updateImages, 10000)
})

// Cleanup interval on component unmount
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
<style lang="css" scoped>
/* Main CSS */
.grid-wrapper>div {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid-wrapper>div>img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.grid-wrapper {
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 200px;
  grid-auto-flow: dense;
}

.grid-wrapper .wide {
  grid-column: span 2;
}

.grid-wrapper .tall {
  grid-row: span 2;
}

.grid-wrapper .big {
  grid-column: span 2;
  grid-row: span 2;
}

/* Image transitions */
.gallery-image {
  transition: all 0.8s ease-in-out;
  animation: fadeIn 0.8s ease-in-out;
}

.gallery-image:hover {
  transform: scale(1.05);
  filter: brightness(1.1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* Fade transition for Vue transitions */
.v-enter-active,
.v-leave-active {
  transition: all 0.8s ease-in-out;
}

.v-enter-from {
  opacity: 0;
  transform: scale(0.95) translateY(20px);
}

.v-leave-to {
  opacity: 0;
  transform: scale(1.05) translateY(-20px);
}
</style>
