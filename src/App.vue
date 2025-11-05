<script setup lang="ts">
import CpsFooter from './components/layout/CpsFooter.vue';
import CpsHeader from './components/layout/CpsHeader.vue';

</script>

<template>
  <div id="app">
    <CpsHeader />
    <main>
      <router-view />
    </main>
    <CpsFooter />
  </div>
</template>
