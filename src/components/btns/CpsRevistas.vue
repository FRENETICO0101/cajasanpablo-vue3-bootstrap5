<template>
  <main>
    <CpsPageHeader
      title="LIBERTADOR"
      :imageUrl="libertadorImageUrl"
      imageAlt="pareja joven disfrutando tiempo juntos casa"
      colorText="text-black"
    />
    <div id="app" class="container my-5">
      <div class="row justify-content-center content-header-row">
        <div class="col-lg-10">
          <h1 class="text-center mb-4">Conoce lo nuevo que tiene <span style="color: var(--color-primario);">Caja
              Popular San Pablo</span></h1>
          <!-- Tabs Component -->
          <div class="custom-tabs">
          </div>
        </div>
      </div>
      <!-- Tab Headers -->
      <ul class="nav nav-tabs custom-nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="magazine-2025-tab" data-bs-toggle="tab" data-bs-target="#magazine-2025" type="button"
            role="tab" aria-controls="magazine-2025" aria-selected="true">
            <i class="mdi mdi-calendar tab-icon"></i> 2025
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="magazine-2024-tab" data-bs-toggle="tab" data-bs-target="#magazine-2024" type="button"
            role="tab" aria-controls="magazine-2024" aria-selected="false">
            <i class="mdi mdi-calendar tab-icon"></i> 2024
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="magazine-2023-tab" data-bs-toggle="tab" data-bs-target="#magazine-2023" type="button"
            role="tab" aria-controls="magazine-2023" aria-selected="false">
            <i class="mdi mdi-calendar tab-icon"></i> 2023
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="magazine-2022-tab" data-bs-toggle="tab" data-bs-target="#magazine-2022" type="button"
            role="tab" aria-controls="magazine-2022" aria-selected="false">
            <i class="mdi mdi-calendar tab-icon"></i> 2022
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="magazine-2021-tab" data-bs-toggle="tab" data-bs-target="#magazine-2021" type="button"
            role="tab" aria-controls="magazine-2021" aria-selected="false">
            <i class="mdi mdi-calendar tab-icon"></i> 2021
          </button>
        </li>
      </ul>

      <!-- Tab Content -->
      <div class="tab-content" id="myTabContent">
        <!-- 20225 Tab -->
        <div class="tab-pane fade show active mt-5" id="magazine-2025" role="tabpanel" aria-labelledby="magazine-2025-tab">
          <Revistas2025 />
        </div>

        <!-- 2024 Tab -->
        <div class="tab-pane fade" id="magazine-2024" role="tabpanel" aria-labelledby="magazine-2024-tab">
          <Revistas2024 />
        </div>

        <!-- 2023 Tab -->
        <div class="tab-pane fade" id="magazine-2023" role="tabpanel" aria-labelledby="magazine-2023-tab">
          <Revistas2023 />
        </div>

        <!-- 2022 Tab -->
        <div class="tab-pane fade" id="magazine-2022" role="tabpanel" aria-labelledby="magazine-2022-tab">
          <Revistas2022 />
        </div>

        <!-- 2021 Tab -->
        <div class="tab-pane fade" id="magazine-2021" role="tabpanel" aria-labelledby="magazine-2021-tab">
          <Revistas2021 />
        </div>

      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
import Revistas2025 from './CpsRevistas2025.vue'
import Revistas2024 from './CpsRevistas2024.vue'
import Revistas2023 from './CpsRevistas2023.vue'
import Revistas2022 from './CpsRevistas2022.vue'
import Revistas2021 from './CpsRevistas2021.vue'
import libertadorImageUrl from '@/assets/libertador_oct_2025.webp'
</script>
<style lang="css" scoped>
button {
  font-size: xx-large;
}

/* Content Header Row Styling */
.content-header-row {
  position: relative;
  padding: 2rem 0;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%);
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInDown 0.8s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.content-header-row::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg,
    rgba(0, 123, 255, 0.03) 0%,
    rgba(255, 193, 7, 0.03) 25%,
    rgba(40, 167, 69, 0.03) 50%,
    rgba(220, 53, 69, 0.03) 75%,
    rgba(0, 123, 255, 0.03) 100%);
  border-radius: 16px;
  z-index: -1;
  animation: gradientShift 8s ease-in-out infinite;
}

@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.content-header-row h1 {
  position: relative;
  z-index: 2;
  font-weight: 700;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.content-header-row .col-lg-10 {
  position: relative;
  z-index: 2;
}

/* Custom Nav Tabs Styling */
.custom-nav-tabs {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  border: none;
  border-radius: 12px 12px 0 0;
  padding: 8px 8px 0 8px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  flex-wrap: nowrap;
}

.custom-nav-tabs .nav-item {
  margin-right: 4px;
  margin-bottom: -1px;
}

.custom-nav-tabs .nav-link {
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: 2px solid transparent;
  border-radius: 8px 8px 0 0;
  color: #6c757d;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 12px 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-width: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.custom-nav-tabs .nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s;
}

.custom-nav-tabs .nav-link:hover::before {
  left: 100%;
}

.custom-nav-tabs .nav-link:hover {
  background: linear-gradient(135deg, #ffffff 0%, #f1f3f5 100%);
  color: var(--color-primario, #007bff);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 123, 255, 0.15);
  border-color: var(--color-primario, #007bff);
}

.custom-nav-tabs .nav-link.active {
  background: linear-gradient(135deg, var(--color-primario, #007bff) 0%, #0056b3 100%);
  color: #ffffff;
  border-color: var(--color-primario, #007bff);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3);
  z-index: 2;
}

.custom-nav-tabs .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 4px;
  background: #ffffff;
  border-radius: 2px;
}

.custom-nav-tabs .nav-link:focus {
  outline: 2px solid var(--color-primario, #007bff);
  outline-offset: 2px;
}

.custom-nav-tabs .nav-link:active {
  transform: translateY(-1px);
}

.custom-tabs {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  background: #ffffff;
}

.tab-content {
  padding: 32px 24px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border: none;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.tab-pane {
  display: none;
  animation: fadeInUp 0.4s ease-out;
}

.tab-pane.active {
  display: block;
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

.tab-icon {
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.custom-nav-tabs .nav-link:hover .tab-icon {
  transform: scale(1.1) rotate(5deg);
}

.custom-nav-tabs .nav-link.active .tab-icon {
  transform: scale(1.2);
  filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3));
}

.card {
  border: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.card-header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
}

.boxed {
  transition: all 0.3s;
}

.boxed:hover {
  transform: scale(1.15);
}

a {
  text-decoration: none;
}

.revistas-subtitle {
  font-size: 2rem;
}

.card-revista {
  height: 430px;
  width: 260px;
  background-color: #f9f9f9;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
}

.card-revista .card-img {
  width: 100%;
  height: auto;
}

.card-revista .card-title {
  font-size: 1.5rem;
  color: #777;
}

.btn-leer-mas {
  border: 2px solid var(--color-secundario);
  height: 40px;
  width: 100px;
  margin: 0 auto;
  padding: 7px 0;
  font-size: 1rem;
  border-radius: 25px;
  font-weight: 700;
  color: var(--color-secundario);
}

.card-revista .btn-leer-mas:hover {
  background-color: var(--color-secundario);
  color: #fff;
  transition: 0.55s;
}

.tiulo-a\f1o {
  color: var(--color-blanco);
  background-color: var(--color-azul-oscuro);
  font-size: 3rem;
}

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

/* Responsive Design for Nav Tabs */
@media (max-width: 768px) {
  .content-header-row {
    padding: 1.5rem 0;
    margin-bottom: 1.5rem;
    border-radius: 12px;
  }

  .content-header-row h1 {
    font-size: 1.8rem;
    line-height: 1.3;
  }

  .custom-nav-tabs {
    padding: 4px;
    border-radius: 8px 8px 0 0;
  }

  .custom-nav-tabs .nav-link {
    font-size: 0.95rem;
    padding: 10px 12px;
    min-width: 80px;
  }

  .tab-content {
    padding: 20px 16px;
  }

  .tab-icon {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .content-header-row {
    padding: 1rem 0;
    margin-bottom: 1rem;
    border-radius: 8px;
  }

  .content-header-row h1 {
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }

  .custom-nav-tabs {
    padding: 2px;
  }

  .custom-nav-tabs .nav-link {
    font-size: 0.85rem;
    padding: 8px 10px;
    min-width: 70px;
    flex-direction: column;
    gap: 4px;
  }

  .tab-content {
    padding: 16px 12px;
  }
}

/* Accessibility improvements */
@media (prefers-reduced-motion: reduce) {
  .custom-nav-tabs .nav-link,
  .tab-pane,
  .tab-icon {
    animation: none;
    transition: none;
  }

  .custom-nav-tabs .nav-link::before {
    display: none;
  }
}
</style>
