<template>
  <main>
    <div class="mantenimiento">
        <div class="container">
          <div class="row text-center">
            <div class="col-12 text-center"><img
                :src="`${assetPrefix}/assets/puerco_educoof.webp`">
              <h1 class="my-2">Estamos en Mantenimiento</h1>
              <p >Para mejorar tu experiencia en Educación Cooperativa y Financiera. <br
                  > Volveremos pronto. <br ><span
                  class="mt-2"> Gracias por tu paciencia.</span></p>
            </div>
          </div>
        </div>
      </div>
  </main>
</template>

<script setup lang="ts">
// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''
</script>
<style lang="css" scoped>
.mantenimiento {
  height: 80vh;
  background-color: var(--color-primario);
  color: #fff
}

.mantenimiento img {
  width: 150px;
  object-fit: cover;
  animation: pulse 2s infinite
}

.mantenimiento h1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 0;
  color: #efbb21
}

.mantenimiento p {
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0
}

.mantenimiento span {
  color: #efbb21
}

.mantenimiento .col-12 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh
}
</style>
