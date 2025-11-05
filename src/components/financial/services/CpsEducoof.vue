<template>
  <main>
    <CpsPageHeader
      title="EDUCACIÓN COOPERATIVA Y FINANCIERA"
      imageUrl="/src/assets/img-inicio-cards/educacion_cooperativa_y_financiera.webp"
      imageAlt="Dos personas chocando la mano"
      colorText="text-white"
    />
    <div class="container py-5">
      <div class="row">
        <div class="col d-flex justify-content-center"><a
            href="/servicio/mantenimiento" class="card text-center"><img
              src="/src/assets/icon/puerco_educoof.webp" loading="lazy" alt="educoof.com"
              style="object-fit: contain; background-color: var(--color-primario);"></a></div>
        <div class="col d-flex justify-content-center"><a
            routerlink="/servicio/blog" class="card text-center" href="/servicio/blog"><img
              src="/src/assets/icon/blog_educoof.gif" loading="lazy" alt="Blog educación cooperativa y financiera"
              style="object-fit: contain;"></a></div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
</script>

<style lang="css" scoped>
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
