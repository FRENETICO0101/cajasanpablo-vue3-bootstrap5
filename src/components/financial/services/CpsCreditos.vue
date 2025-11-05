<template>
  <main>
    <CpsPageHeader
      title="CRÉDITOS"
      :image-url="`${assetPrefix}/assets/credito_fondo_liso.webp`"
      imageAlt="Hombre sonriente con fondo gris"
      colorText="text-black"
    />
    <CreditosConsumo />
    <CreditosComercial />
    <CreditosVivienda />
  </main>
</template>
<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'

import CreditosComercial from './CpsCreditosComercial.vue';

import CreditosConsumo from './CpsCreditosConsumo.vue'

import CreditosVivienda from './CpsCreditosVivienda.vue';

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


</script>
<style lang="css" scoped>
/* ===== MAIN CONTAINER ===== */
main {
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 25%, #f1f8e9 50%, #fff3e0 75%, #f8f9fa 100%);
  min-height: 100vh;
  position: relative;
}

main::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(var(--color-primario-rgb, 51, 122, 183), 0.05) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.05) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 200, 150, 0.03) 0%, transparent 50%);
  z-index: 0;
  animation: backgroundShift 20s ease-in-out infinite;
}

@keyframes backgroundShift {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

/* ===== CARD CREDIT STYLES ===== */
.card-credito {
  padding: 40px 25px 25px 25px;
  margin-bottom: 50px;
  border-radius: 25px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 420px;
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 8px 16px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 2;
  animation: cardSlideIn 0.8s ease-out;
}

.card-credito:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 
    0 30px 60px rgba(0, 0, 0, 0.15),
    0 12px 24px rgba(0, 0, 0, 0.1);
}

.card-credito::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primario), var(--color-naranja), var(--color-secundario));
  border-radius: 25px 25px 0 0;
}

.card-credito-details {
  margin: 25px 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  animation: fadeInUp 0.8s ease-out 0.3s both;
}

.cat-gat {
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 700;
  color: var(--color-primario);
  background: rgba(var(--color-primario-rgb, 51, 122, 183), 0.1);
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid var(--color-primario);
}

/* ===== CREDIT CONTAINER ===== */
.credito-contaner {
  width: 100%;
  padding: 60px 5%;
  margin: auto;
  position: relative;
  z-index: 2;
}

.credito-contaner .credito-tipe {
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  color: var(--color-primario);
  text-align: center;
  font-weight: 900;
  margin-bottom: 30px;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: titleReveal 1s ease-out;
}

.credito-contaner .credito-tipe::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primario), var(--color-naranja));
  border-radius: 2px;
  animation: expandLine 1s ease-out 0.5s both;
}

.credito-contaner .card-container {
  padding: 50px 0;
  gap: 40px;
  justify-content: space-evenly;
  display: flex;
  flex-wrap: wrap;
}

/* ===== INDIVIDUAL CREDIT CARDS ===== */
.credito-contaner .card-container .card-credito {
  text-align: center;
  padding: 30px 25px 25px;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 350px;
  min-width: 300px;
  flex: 1;
  background: rgba(255, 255, 255, 0.98);
  border-radius: 20px;
  overflow: hidden;
  position: relative;
}

.credito-contaner .card-container .card-credito img {
  text-align: center;
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 15px;
  transition: all 0.3s ease;
  animation: imageFloat 6s ease-in-out infinite;
}

.credito-contaner .card-container .card-credito:hover img {
  transform: scale(1.05);
  filter: brightness(1.1) contrast(1.05);
}

.credito-contaner .card-container .card-credito .card-credito-title {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  height: auto;
  min-height: 85px;
  color: var(--color-primario);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin: 20px 0;
  line-height: 1.4;
  animation: slideInLeft 0.8s ease-out 0.2s both;
}

.credito-contaner .card-container .card-credito .card-credito-btn {
  font-size: 1.1rem;
  background: linear-gradient(135deg, var(--color-primario), var(--color-secundario));
  color: var(--color-blanco);
  height: 45px;
  width: 130px;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  margin-top: auto;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  border: none;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.credito-contaner .card-container .card-credito .card-credito-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.credito-contaner .card-container .card-credito .card-credito-btn:hover {
  transform: translateY(-3px) scale(1.05);
  background: linear-gradient(135deg, var(--color-naranja), var(--color-primario));
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.credito-contaner .card-container .card-credito .card-credito-btn:hover::before {
  left: 100%;
}

/* ===== CREDIT INFO MODAL/EXPANDED VIEW ===== */
.credito-contaner .card-container .card-credito-info {
  width: 95%;
  max-width: 500px;
  padding: 40px 25px;
  height: auto;
  background: linear-gradient(135deg, var(--color-primario), var(--color-secundario));
  border-radius: 25px;
  display: block;
  min-width: 320px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.2),
    0 10px 20px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
  animation: modalSlideIn 0.8s ease-out;
}

.credito-contaner .card-container .card-credito-info::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  z-index: 0;
}

.credito-contaner .card-container .card-credito-info > * {
  position: relative;
  z-index: 1;
}

.credito-contaner .card-container .card-credito-info .accordion .accordion-item {
  margin-bottom: 20px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
}

.credito-contaner .card-container .card-credito-info .accordion .accordion-item .accordion-header .accordion-button {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  padding: 20px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.credito-contaner .card-container .card-credito-info .accordion .accordion-item .accordion-header .accordion-button:not(.collapsed) {
  background: rgba(var(--color-primario-rgb, 51, 122, 183), 0.1);
  color: var(--color-primario);
}

.credito-contaner .card-container .card-credito-info .accordion .accordion-item .accordion-header .accordion-button b {
  color: var(--color-primario);
}

.credito-contaner .card-container .card-credito-info .card-credito-detalle {
  margin-bottom: 35px;
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: var(--color-blanco);
  text-align: center;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.credito-contaner .card-container .card-credito-info .card-credito-btn-simulador {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  font-size: 1.2rem;
  padding: 18px 25px;
  margin: 0 auto 40px;
  color: var(--color-naranja);
  width: auto;
  max-width: 320px;
  min-width: 250px;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border: 2px solid transparent;
}

.credito-contaner .card-container .card-credito-info .card-credito-btn-simulador:hover {
  transform: translateY(-3px);
  background: var(--color-naranja);
  color: white;
  border-color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.credito-contaner .card-container .card-credito-info .card-credito-btn-simulador i {
  margin-left: 8px;
  transition: transform 0.3s ease;
}

.credito-contaner .card-container .card-credito-info .card-credito-btn-simulador:hover i {
  transform: translateX(3px);
}

.credito-contaner .card-container .card-credito-info .btnsinfo {
  width: 100%;
  margin-bottom: 15px;
  font-size: clamp(1.2rem, 2.5vw, 1.6rem);
  color: white;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background: rgba(255, 255, 255, 0.1);
  padding: 15px 20px;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.credito-contaner .card-container .card-credito-info .btnsinfo:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(5px);
}

/* ===== BACKGROUND SECTION ===== */
.back-black {
  background: linear-gradient(135deg, var(--color-gris), #2c3e50);
  position: relative;
}

.back-black::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    linear-gradient(45deg, transparent 49%, rgba(255, 255, 255, 0.05) 50%, transparent 51%);
  background-size: 30px 30px;
}

/* ===== ANIMATIONS ===== */
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

@keyframes titleReveal {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes expandLine {
  from {
    width: 0;
  }
  to {
    width: 100px;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
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

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes imageFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .credito-contaner {
    padding: 40px 3%;
  }
  
  .credito-contaner .card-container {
    flex-direction: column;
    gap: 30px;
    padding: 30px 0;
  }
  
  .credito-contaner .card-container .card-credito {
    max-width: 100%;
    min-width: 280px;
  }
  
  .credito-contaner .card-container .card-credito-info {
    width: 100%;
    min-width: 280px;
    padding: 30px 20px;
  }
}

@media (max-width: 576px) {
  .card-credito {
    padding: 25px 20px;
    min-height: 380px;
  }
  
  .credito-contaner .credito-tipe {
    font-size: 2.5rem;
  }
  
  .credito-contaner .card-container .card-credito .card-credito-btn {
    width: 100%;
    max-width: 200px;
  }
}

/* ===== ACCESSIBILITY ===== */
@media (prefers-reduced-motion: reduce) {
  main::before,
  .card-credito,
  .credito-contaner .credito-tipe,
  .credito-contaner .card-container .card-credito img {
    animation: none;
  }
  
  .card-credito:hover,
  .credito-contaner .card-container .card-credito .card-credito-btn:hover {
    transform: none;
  }
}

/* ===== LEGACY STYLES (PRESERVED) ===== */
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
  width: 60%;
}
</style>
