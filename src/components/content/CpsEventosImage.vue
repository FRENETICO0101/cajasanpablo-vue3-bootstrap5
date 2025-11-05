<template>
  <img loading="lazy" :src="`${assetPrefix}/assets/jason-goodman-NdZ08c-zu0c-unsplash.webp`" alt="Imagen  novedades y eventos"
    class="col-md-8 col-xl-7 p-0 object-fit-cover" style="width: 100vh;" />
</template>

<script setup lang="ts">
// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''
</script>
