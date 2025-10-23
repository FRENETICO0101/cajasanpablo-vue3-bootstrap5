<template>
  <div class="container overflow-hidden py-6">
    <div class="grid-wrapper col">
      <div v-for="(value, index) in gallery" class="lc-block" :key="index">
        <img class="img-fluid rounded rounded" :src="value.src" alt="" loading="lazy">
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
// import image1 from "@/assets/img-inauguracion-el-salto/salto_1.jpeg";
// import image2 from "@/assets/img-nino-2025-event/nino_1.webp";
// import image3 from "@/assets/img-nov-event/191.webp";
// import image4 from "@/assets/img-nov-event/167.webp";
// import image5 from "@/assets/img-nov-event/150.webp";
// import image6 from "@/assets/img-nov-event/140.webp";

const gallery = [
  {
    src: "/assets/img-inauguracion-el-salto/salto_1.jpeg"
  },
  {
    src: "/assets/img-nino-2025-event/nino_1.webp"
  },
  {
    src: "/assets/img-nov-event/191.webp"
  },
  {
    src: "/assets/img-nov-event/167.webp"
  },
  {
    src: "/assets/img-nov-event/150.webp"
  },
  {
    src: "/assets/img-nov-event/140.webp"
  }
]
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
</style>
