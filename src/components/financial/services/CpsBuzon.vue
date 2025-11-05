<template>
  <main>
    <CpsPageHeader
      title="BUZÓN DE COMENTARIOS"
      :image-url="buzonImageUrl"
      image-alt="Mujer con laptop sentada sonriendo"
      color-text="text-white"
    />

    <section class="buzon-option">
      <div class="container">
        <div class="buzon-option-title">ELIJE UNA DE LAS OPCIONES</div>

        <!-- Tab Navigation -->
        <ul class="nav nav-tabs custom-nav-tabs justify-content-center" id="buzonTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="vigilancia-tab"
              data-bs-toggle="tab"
              data-bs-target="#vigilancia"
              type="button"
              role="tab"
              aria-controls="vigilancia"
              aria-selected="true"
            >
              <i class="mdi mdi-shield-account tab-icon"></i>
              Consejo de Vigilancia
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="administracion-tab"
              data-bs-toggle="tab"
              data-bs-target="#administracion"
              type="button"
              role="tab"
              aria-controls="administracion"
              aria-selected="false"
            >
              <i class="mdi mdi-account-group tab-icon"></i>
              Consejo de Administración
            </button>
          </li>
        </ul>
      </div>
    </section>

    <!-- Tab Content -->
    <div class="tab-content" id="buzonTabContent">
      <!-- Consejo de Vigilancia Tab -->
      <div class="tab-pane fade show active" id="vigilancia" role="tabpanel" aria-labelledby="vigilancia-tab">
        <section class="forml-vig">
          <div class="container">
            <div class="buzon-option-title">Formulario Consejo de Vigilancia</div>
            <div class="forml-vig-desc">Este buzón es exclusivo para seguimiento a temas de
              servicio y atención al Socio.</div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd5ZbxBwSmi8-aYWbJyyAhQpKNUqxdqdI8qJgO4qFuhcv080Q/viewform?embedded=true"
              width="100%"
              height="1678"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Formulario Consejo de Vigilancia"
            >
              Cargando…
            </iframe>
          </div>
        </section>
      </div>

      <!-- Consejo de Administración Tab -->
      <div class="tab-pane fade" id="administracion" role="tabpanel" aria-labelledby="administracion-tab">
        <section class="forml-vig admin">
          <div class="container">
            <div class="buzon-option-title" style="color: #dc9c48;">Formulario Consejo de
              Administración</div>
            <div class="forml-vig-desc">Este buzón es exclusivo para seguimiento a temas de
              servicio y atención al Socio.</div>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSf8Phw4VS8FINLNyLauQ9kqbilWJVsESS_qsvTG3R6cTmp1rg/viewform?embedded=true"
              width="100%"
              height="1678"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              title="Formulario Consejo de Administración"
            >
              Cargando…
            </iframe>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'
import buzonImageUrl from '@/assets/buzon_de_comentarios.webp'
</script>

<style lang="css" scoped>
/* =============================================================================
   COMPONENT STYLES
   ============================================================================= */

.buzon-option {
  padding: 50px 15px;
  background: linear-gradient(135deg, rgba(248, 249, 250, 0.8) 0%, rgba(255, 255, 255, 0.9) 100%);
  position: relative;
}

.buzon-option-title {
  font-size: 2rem;
  color: var(--color-primario);
  font-weight: 600;
  text-align: center;
  margin-bottom: 30px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* ===== TAB NAVIGATION STYLES ===== */
.custom-nav-tabs {
  border-bottom: none;
  justify-content: center;
  margin-bottom: 0;
  background: transparent;
}

.custom-nav-tabs .nav-item {
  margin: 0 15px;
}

.custom-nav-tabs .nav-link {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: white;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  min-width: 220px;
  box-shadow: 0 4px 15px rgba(48, 102, 190, 0.3);
}

.custom-nav-tabs .nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.custom-nav-tabs .nav-link:hover::before {
  left: 100%;
}

.custom-nav-tabs .nav-link:hover {
  background: linear-gradient(135deg, var(--color-naranja) 0%, #e6a852 100%);
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(220, 156, 72, 0.4);
  color: white;
}

.custom-nav-tabs .nav-link.active {
  background: linear-gradient(135deg, var(--color-naranja) 0%, #e6a852 100%);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(220, 156, 72, 0.4);
}

.custom-nav-tabs .nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 8px solid var(--color-naranja);
}

.tab-icon {
  margin-right: 8px;
  font-size: 1.2rem;
}

/* ===== TAB CONTENT STYLES ===== */
.tab-content {
  margin-top: 30px;
}

.tab-pane {
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s ease-in-out;
}

.tab-pane.show.active {
  opacity: 1;
  transform: translateY(0);
}

/* ===== FORM SECTION STYLES ===== */
.forml-vig {
  padding: 40px 15px;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 20px;
  margin: 20px 0;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.forml-vig::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primario) 0%, var(--color-secundario) 50%, var(--color-naranja) 100%);
}

.forml-vig.admin::before {
  background: linear-gradient(90deg, var(--color-naranja) 0%, #e6a852 50%, var(--color-primario) 100%);
}

.forml-vig .buzon-option-title {
  font-size: 1.8rem;
  color: var(--color-primario);
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  padding-top: 10px;
}

.forml-vig.admin .buzon-option-title {
  color: var(--color-naranja) !important;
}

.forml-vig-desc {
  font-size: 1.1rem;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 30px;
  color: #6c757d;
  background: linear-gradient(135deg, rgba(48, 102, 190, 0.05) 0%, rgba(109, 157, 197, 0.05) 100%);
  padding: 20px;
  border-radius: 10px;
  border-left: 4px solid var(--color-primario);
}

.forml-vig.admin .forml-vig-desc {
  border-left-color: var(--color-naranja);
  background: linear-gradient(135deg, rgba(220, 156, 72, 0.05) 0%, rgba(230, 168, 82, 0.05) 100%);
}

/* ===== IFRAME STYLES ===== */
iframe {
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

iframe:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
  .buzon-option {
    padding: 30px 10px;
  }

  .buzon-option-title {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .custom-nav-tabs .nav-item {
    margin: 5px;
  }

  .custom-nav-tabs .nav-link {
    padding: 12px 20px;
    font-size: 1rem;
    min-width: 180px;
  }

  .forml-vig {
    padding: 20px 10px;
    margin: 10px 0;
  }

  .forml-vig .buzon-option-title {
    font-size: 1.4rem;
  }

  .forml-vig-desc {
    font-size: 1rem;
    padding: 15px;
  }
}

@media (max-width: 576px) {
  .custom-nav-tabs {
    flex-direction: column;
    align-items: center;
  }

  .custom-nav-tabs .nav-item {
    margin: 5px 0;
  }

  .custom-nav-tabs .nav-link {
    min-width: 250px;
    text-align: center;
  }

  .buzon-option-title {
    font-size: 1.3rem;
  }

  .forml-vig .buzon-option-title {
    font-size: 1.2rem;
  }
}

/* ===== ACCESSIBILITY ENHANCEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

.custom-nav-tabs .nav-link:focus {
  box-shadow: 0 0 0 0.25rem rgba(48, 102, 190, 0.25);
  outline: none;
}

/* ===== ANIMATION KEYFRAMES ===== */
@keyframes slideInFromTop {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tab-pane.show.active {
  animation: slideInFromTop 0.4s ease-out;
}
</style>
