<script setup lang="ts">
import EventosGrid from './CpsEventosGrid.vue'
// News and Events section component
</script>

<template>
  <section class="otros container-fluid">
    <div class="row align-items-center mb-5">
      <div class="nov-event-titulo-boton col-12 col-lg-5 mb-3">
        <div class="nov-event-titulo text-center animate__animated animate__backInRight animate__slow">
          NOVEDADES<br />Y EVENTOS
        </div>
        <a href="/servicio/nov-event"
          aria-label="Novedades y Eventos" class="nov-event-enlace">
          <div class="nov-event-boton animate__animated animate__backInRight animate__slow animate__delay-1s">
            Conocer más
          </div>
        </a>
      </div>
      <div class="col col-sm-12 col-md-12 col-lg-6">
        <EventosGrid />
      </div>
    </div>
  </section>
</template>

<style scoped>
.otros .nov-event-titulo-boton .nov-event-titulo {
  font-size: 3rem;
  color: var(--color-primario);
  text-shadow: 0px 0px 10px var(--color-blanco);
  white-space: pre-line;
}

.otros .nov-event-titulo-boton .nov-event-enlace {
  text-decoration: none;
}

.otros .nov-event-titulo-boton .nov-event-enlace .nov-event-boton {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 194px;
  height: 65px;
  background-color: var(--color-primario);
  color: #fff;
  font-size: 1.5rem;
  border-radius: 40px;
  margin: 20px auto 0;
  transition: all 0.3s ease;
}

.otros .nov-event-titulo-boton .nov-event-enlace .nov-event-boton:hover {
  color: white;
  background-color: var(--color-naranja);
}
</style>
