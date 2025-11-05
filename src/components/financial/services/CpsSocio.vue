<template>
  <main>
    <CpsPageHeader
      title="QUIERO SER SOCIO"
      :image-url="`${assetPrefix}/assets/quieres_ser_socio.webp`"
      imageAlt="Dos personas chocando la mano"
      colorText="text-white"
    />
      <section class="deseo--socio-container">
        <div class="deseo--socio-titulo text-center">
          DESEO SER SOCIO
        </div>
        <div class="deseo--socio-desc">
          COPIA Y ORIGINAL DE LOS SIGUIENTES DOCUMENTOS
        </div>
        <div class="requisitos--container">
          <div class="deseo--socio-subtitulo">
            Adultos
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Identificación oficial vigente con fotografía (INE, Pasaporte
              Mexicano,Cédula Profesional, licencia para conducir del Estado
              de Jalisco).
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Constancia de RFC con homoclave.
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Constancia de CURP.
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Comprobante de domicilio no mayor a 60 días de su emisión.
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Parte Social $1,000.00.
            </div>
          </div>
          <!---->
          <div class="deseo--socio-subtitulo">
            Datos adicionales
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Teléfono celular del Titular.
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Correo electrónico del titular.
            </div>
          </div>
        </div>
        <div class="requisitos--container requisitos--color">
          <div class="deseo--socio-subtitulo">
            Ahorradores menores de edad (De 1 a 17 años)
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Acta de nacimiento del menor.
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Presentarse acompañado de papá o mamá con identificación oficial
              con fotografía (INE, Pasaporte Mexicano, Cédula Profesional,
              Licencia para conducir del Estado de Jalisco).
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Constancia de CURP del menor.
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Constancia de RFC con homoclave de padre/tutor.
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Comprobante de domicilio no mayor a 60 días de su emisión.
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              $100.00 mínimo para abrir la cuenta.
            </div>
          </div>
          <!---->
        </div>
        <div class="requisitos--container">
          <div class="deseo--socio-subtitulo">
            Ciudadanos mexicanos naturalizados (Extranjeros) Además de cumplir
            con los datos antes mencionados, deberán presentar:
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Carta de Naturalización. (Instrumento jurídico por el cual se
              acredita el otorgamiento de la nacionalidad mexicana a los
              extranjeros).
            </div>
          </div>
          <div class="check--descripcion">
            <img loading="lazy" width="45" height="45" :src="`${assetPrefix}/assets/icon/cheque.webp`"
              alt="icono check" />
            <div class="check--descripcion-text">
              Dato de su domicilio en el país de origen.
            </div>
          </div>
          <!---->
          <div class="deseo--socio-desc" style="color: brown; margin-top: 30px">
            Importante: Los documentos personales deberán estar traducidos al
            español (documento oficial).
          </div>
        </div>
      </section>
  </main>
</template>

<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''

</script>

<style lang="css" scoped>
/* ===== MAIN CONTAINER ===== */
.deseo--socio-container {
  padding: 60px 15px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 50%, #f1f8e9 100%);
  min-height: 80vh;
  position: relative;
}

.deseo--socio-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(var(--color-primario-rgb, 51, 122, 183), 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.05) 0%, transparent 50%);
  z-index: 0;
}

/* ===== TYPOGRAPHY ===== */
.deseo--socio-container .deseo--socio-titulo {
  font-size: clamp(2rem, 4vw, 3rem);
  color: var(--color-primario);
  font-weight: 900;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
  animation: slideInDown 0.8s ease-out;
}

.deseo--socio-container .deseo--socio-desc {
  text-align: center;
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #333;
  margin: 0 auto 40px;
  font-weight: 600;
  max-width: 800px;
  position: relative;
  z-index: 2;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* ===== REQUIREMENT CONTAINERS ===== */
.deseo--socio-container .requisitos--container {
  padding: 40px;
  width: 95%;
  max-width: 1300px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.08);
  margin: 40px auto;
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
  animation: cardSlideIn 0.8s ease-out;
}

.deseo--socio-container .requisitos--container:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.15),
    0 12px 24px rgba(0, 0, 0, 0.1);
}

.deseo--socio-container .requisitos--container.requisitos--color {
  background: linear-gradient(135deg, rgba(255, 140, 0, 0.1), rgba(255, 255, 255, 0.95));
  border-left: 6px solid var(--color-naranja);
}

/* ===== SUBTITLES ===== */
.deseo--socio-container .requisitos--container .deseo--socio-subtitulo {
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: var(--color-primario);
  font-weight: 700;
  margin: 0 0 25px 0;
  padding-bottom: 15px;
  border-bottom: 3px solid var(--color-primario);
  position: relative;
  animation: slideInLeft 0.8s ease-out;
}

.deseo--socio-container .requisitos--container .deseo--socio-subtitulo::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--color-naranja);
  animation: expandLine 0.8s ease-out 0.5s both;
}

/* ===== CHECK ITEMS ===== */
.deseo--socio-container .requisitos--container .check--descripcion {
  display: flex;
  align-items: flex-start;
  margin: 20px 0;
  padding: 20px;
  background: rgba(248, 249, 250, 0.8);
  border-radius: 12px;
  border-left: 4px solid var(--color-primario);
  transition: all 0.3s ease;
  animation: itemFadeIn 0.6s ease-out;
  animation-fill-mode: both;
}

.deseo--socio-container .requisitos--container .check--descripcion:nth-child(even) {
  animation-delay: 0.1s;
}

.deseo--socio-container .requisitos--container .check--descripcion:nth-child(odd) {
  animation-delay: 0.2s;
}

.deseo--socio-container .requisitos--container .check--descripcion:hover {
  background: rgba(var(--color-primario-rgb, 51, 122, 183), 0.05);
  transform: translateX(10px);
  border-left-color: var(--color-naranja);
}

.deseo--socio-container .requisitos--container .check--descripcion img {
  flex-shrink: 0;
  width: 45px;
  height: 45px;
  filter: hue-rotate(210deg) saturate(1.5) brightness(1.2);
  transition: all 0.3s ease;
  margin-top: 2px;
}

.deseo--socio-container .requisitos--container .check--descripcion:hover img {
  transform: scale(1.1) rotate(5deg);
  filter: hue-rotate(30deg) saturate(1.5) brightness(1.3);
}

.deseo--socio-container .requisitos--container .check--descripcion .check--descripcion-text {
  margin-left: 20px;
  font-size: clamp(0.95rem, 1.5vw, 1.1rem);
  line-height: 1.6;
  color: #444;
  font-weight: 500;
}

/* ===== IMPORTANT NOTICE ===== */
.deseo--socio-desc[style*="brown"] {
  background: linear-gradient(135deg, rgba(165, 42, 42, 0.1), rgba(255, 140, 0, 0.1));
  border: 2px solid brown;
  border-radius: 12px;
  padding: 20px;
  font-weight: 600;
  font-size: 1.1rem !important;
  text-align: center !important;
  animation: pulseWarning 2s ease-in-out infinite;
}

/* ===== ANIMATIONS ===== */
@keyframes slideInDown {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardSlideIn {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes expandLine {
  from {
    width: 0;
  }
  to {
    width: 60px;
  }
}

@keyframes itemFadeIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulseWarning {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(165, 42, 42, 0.4);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(165, 42, 42, 0);
  }
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .deseo--socio-container {
    padding: 40px 10px;
  }
  
  .deseo--socio-container .requisitos--container {
    padding: 25px 20px;
    width: 98%;
  }
  
  .deseo--socio-container .requisitos--container .check--descripcion {
    flex-direction: column;
    text-align: center;
    padding: 15px;
  }
  
  .deseo--socio-container .requisitos--container .check--descripcion img {
    align-self: center;
    margin-bottom: 10px;
  }
  
  .deseo--socio-container .requisitos--container .check--descripcion .check--descripcion-text {
    margin-left: 0;
  }
}

@media (max-width: 576px) {
  .deseo--socio-container .requisitos--container {
    padding: 20px 15px;
    margin: 30px auto;
  }
  
  .deseo--socio-container .requisitos--container .deseo--socio-subtitulo {
    text-align: center;
    font-size: 1.2rem;
  }
}

/* ===== ACCESSIBILITY ===== */
@media (prefers-reduced-motion: reduce) {
  .deseo--socio-container .deseo--socio-titulo,
  .deseo--socio-container .deseo--socio-desc,
  .deseo--socio-container .requisitos--container,
  .deseo--socio-container .requisitos--container .check--descripcion {
    animation: none;
  }
  
  .deseo--socio-container .requisitos--container .check--descripcion:hover {
    transform: none;
  }
}

/* ===== LEGACY STYLES (PRESERVED) ===== */
header {
  position: relative;
  width: 100%;
  height: 80vh;
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
</style>
