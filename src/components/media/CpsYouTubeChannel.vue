<script setup lang="ts">
import VideoGrid from './CpsVideoGrid.vue'
// YouTube Channel component - displays channel information and video thumbnails
</script>

<template>
  <section class="youtube-channel-section">
    <div class="container-fluid">
      <!-- Main Grid Layout -->
      <div class="row g-4 align-items-center">
        
        <!-- Video Grid Section -->
        <div class="col-12">
          <div class="video-section-wrapper">
            
            <!-- Video Section Header -->
            <div class="row mb-3">
              <div class="col-12">
                <div class="section-header text-center">
                  <h3 class="section-title">Videos Destacados</h3>
                  <p class="section-subtitle">Descubre nuestros contenidos más populares</p>
                </div>
              </div>
            </div>

            <!-- Video Grid Container with Standard Card Widths -->
            <div class="row">
              <div class="col-12">
                <div class="video-cards-container">
                  <VideoGrid />
                </div>
              </div>
            </div>

            <!-- Video Section Footer -->
            <div class="row mt-4">
              <div class="col-12">
                <div class="video-section-footer text-center">
                  <a href="https://www.youtube.com/@cajapopularsanpablo9951" 
                     target="_blank"
                     aria-label="Ver todos los videos en nuestro canal de YouTube"
                     class="btn-video-footer">
                    <span class="btn-footer-text">Conocer más</span>
                    <svg class="btn-footer-icon" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* ===== MAIN SECTION ===== */
.youtube-channel-section {
  padding: 60px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e3f2fd 25%, #f1f8e9 50%, #fff3e0 75%, #f8f9fa 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.youtube-channel-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 20% 80%, rgba(255, 0, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 200, 150, 0.1) 0%, transparent 50%);
  z-index: 0;
  animation: backgroundShift 15s ease-in-out infinite;
}

@keyframes backgroundShift {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.1); }
}

/* ===== GRID CONTAINERS ===== */
.channel-info-wrapper,
.video-section-wrapper {
  position: relative;
  z-index: 2;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.channel-info-wrapper:hover,
.video-section-wrapper:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

/* ===== YOUTUBE LOGO GRID ===== */
.youtube-logo {
  display: inline-block;
  padding: 15px;
  background: linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 140, 0, 0.1));
  border-radius: 50%;
  animation: logoFloat 3s ease-in-out infinite;
}

.logo-icon {
  width: 60px;
  height: 60px;
  color: #ff0000;
  filter: drop-shadow(0 4px 8px rgba(255, 0, 0, 0.3));
  transition: all 0.3s ease;
}

.youtube-logo:hover .logo-icon {
  transform: scale(1.1);
  filter: drop-shadow(0 6px 12px rgba(255, 0, 0, 0.5));
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* ===== TITLE GRID ===== */
.channel-title {
  margin: 0;
}

.title-word {
  display: block;
  margin: 0;
  font-weight: 900;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  animation: titleReveal 0.8s ease-out both;
}

.title-word-1 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  color: var(--color-primario);
  animation-delay: 0.2s;
}

.title-word-2 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  background: linear-gradient(45deg, #ff0000, var(--color-naranja), #ff0000);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleReveal 0.8s ease-out both, gradientShift 3s ease-in-out infinite 1s;
  animation-delay: 0.4s, 1.4s;
}

@keyframes titleReveal {
  from {
    opacity: 0;
    transform: translateY(30px) rotateX(-90deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
  }
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* ===== BUTTON GRID ===== */
.btn-youtube {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 15px 30px;
  background: linear-gradient(135deg, #ff0000, var(--color-naranja));
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 8px 25px rgba(255, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
}

.btn-youtube::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
  transition: left 0.5s ease;
}

.btn-youtube:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 15px 35px rgba(255, 0, 0, 0.4);
  color: white;
}

.btn-youtube:hover::before {
  left: 100%;
}

.btn-text {
  position: relative;
  z-index: 2;
}

.btn-icon {
  width: 20px;
  height: 20px;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 2;
}

.btn-youtube:hover .btn-icon {
  transform: translateX(5px);
}

/* ===== VIDEO SECTION GRID ===== */
.section-header {
  margin-bottom: 20px;
}

.section-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--color-primario);
  margin: 0 0 10px 0;
  animation: slideInLeft 0.8s ease-out;
}

.section-subtitle {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: #666;
  margin: 0;
  animation: slideInLeft 0.8s ease-out 0.2s both;
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

/* ===== STANDARD CARD WIDTH STYLING ===== */
.video-cards-container {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
}

/* Global card width constraints for VideoThumbnail components */
.video-cards-container :deep(.video-card) {
  width: 100%;
  max-width: 350px;
  min-width: 280px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
}

.video-cards-container :deep(.video-card-link) {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.video-cards-container :deep(.video-card-body) {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.video-cards-container :deep(.video-content) {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.video-cards-container :deep(.video-card-footer) {
  margin-top: auto;
}

/* Responsive card width adjustments */
@media (min-width: 1400px) {
  .video-cards-container :deep(.video-card) {
    max-width: 380px;
    min-width: 320px;
  }
}

@media (max-width: 1199px) {
  .video-cards-container :deep(.video-card) {
    max-width: 320px;
    min-width: 260px;
  }
}

@media (max-width: 991px) {
  .video-cards-container :deep(.video-card) {
    max-width: 300px;
    min-width: 240px;
    min-height: 380px;
  }
  
  .video-cards-container {
    gap: 1rem;
  }
}

@media (max-width: 767px) {
  .video-cards-container :deep(.video-card) {
    max-width: 100%;
    min-width: 100%;
    min-height: 360px;
  }
  
  .video-cards-container {
    gap: 0.75rem;
  }
}

@media (max-width: 575px) {
  .video-cards-container :deep(.video-card) {
    min-height: 340px;
  }
  
  .video-cards-container {
    gap: 0.5rem;
  }
}

/* ===== VIDEO SECTION FOOTER ===== */
.video-section-footer {
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 10px;
}

.btn-video-footer {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 25px;
  background: var(--color-primario);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 1rem;
  border: 2px solid transparent;
}

.btn-video-footer:hover {
  background: var(--color-naranja);
  color: white;
}

.btn-footer-text {
  position: relative;
  z-index: 2;
}

.btn-footer-icon {
  width: 18px;
  height: 18px;
  position: relative;
  z-index: 2;
}

/* ===== RESPONSIVE GRID ADJUSTMENTS ===== */

/* Large screens */
@media (min-width: 1200px) {
  .youtube-channel-section {
    padding: 80px 0;
  }
  
  .channel-info-wrapper,
  .video-section-wrapper {
    padding: 40px;
  }
  
  .logo-icon {
    width: 80px;
    height: 80px;
  }
}

/* Medium screens */
@media (min-width: 768px) and (max-width: 1199px) {
  .youtube-channel-section {
    padding: 60px 0;
  }
  
  .channel-info-wrapper,
  .video-section-wrapper {
    padding: 25px;
  }
}

/* Small screens */
@media (max-width: 767px) {
  .youtube-channel-section {
    padding: 40px 0;
  }
  
  .channel-info-wrapper,
  .video-section-wrapper {
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .logo-icon {
    width: 50px;
    height: 50px;
  }
  
  .btn-youtube {
    padding: 12px 25px;
    font-size: 1rem;
  }
  
  .btn-video-footer {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .section-header {
    text-align: center !important;
  }
}

/* Extra small screens */
@media (max-width: 575px) {
  .youtube-channel-section {
    padding: 30px 0;
  }
  
  .channel-info-wrapper,
  .video-section-wrapper {
    padding: 15px;
  }
  
  .btn-youtube {
    padding: 10px 20px;
    font-size: 0.9rem;
    width: 100%;
    justify-content: center;
  }
  
  .btn-video-footer {
    padding: 8px 16px;
    font-size: 0.85rem;
    width: 100%;
    justify-content: center;
  }
}

/* ===== ACCESSIBILITY ===== */
@media (prefers-reduced-motion: reduce) {
  .youtube-channel-section::before,
  .youtube-logo,
  .title-word,
  .section-title,
  .section-subtitle {
    animation: none;
  }
  
  .channel-info-wrapper,
  .video-section-wrapper,
  .btn-youtube {
    transition: none;
  }
}

/* ===== PRINT STYLES ===== */
@media print {
  .youtube-channel-section {
    background: white;
    padding: 20px 0;
  }
  
  .youtube-channel-section::before {
    display: none;
  }
  
  .channel-info-wrapper,
  .video-section-wrapper {
    background: white;
    box-shadow: none;
    border: 1px solid #ccc;
  }
}
</style>
