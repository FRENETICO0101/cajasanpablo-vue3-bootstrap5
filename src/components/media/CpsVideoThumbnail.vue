<script setup lang="ts">
interface Props {
  videoUrl: string
  imageUrl: string
  altText: string
  animationDelay?: string
  title?: string
  description?: string
  duration?: string
}

withDefaults(defineProps<Props>(), {
  animationDelay: '3s',
  title: 'Video de YouTube',
  description: 'Descubre nuestro contenido en nuestro canal oficial',
  duration: '5:00'
})
</script>

<template>
  <div class="video-card" :style="{ '--animation-delay': animationDelay }">
    <a :href="videoUrl" target="_blank" aria-label="Ver video en YouTube" class="video-card-link">
      <!-- Video Thumbnail -->
      <div class="video-card-header">
        <div class="video-thumbnail-wrapper">
          <img loading="lazy" :src="imageUrl" :alt="altText" class="video-thumbnail-image" />
          
          <!-- Play Button Overlay -->
          <div class="play-overlay">
            <div class="play-button">
              <svg class="play-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          
          <!-- Duration Badge -->
          <div class="duration-badge">{{ duration }}</div>
        </div>
      </div>

      <!-- Video Content -->
      <div class="video-card-body">
        <div class="video-content">
          <h3 class="video-title">{{ title }}</h3>
          <p class="video-description">{{ description }}</p>
          
          <!-- Watch Button -->
          <div class="video-card-footer">
            <div class="watch-button">
              <span class="watch-text">Ver ahora</span>
              <svg class="arrow-icon" viewBox="0 0 24 24">
                <path fill="currentColor" d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>
/* Video Card Container */
.video-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: cardFadeIn 0.8s ease-out both;
  animation-delay: var(--animation-delay, 3s);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.video-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12), 0 8px 16px rgba(0, 0, 0, 0.08);
}

.video-card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

@keyframes cardFadeIn {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Video Header */
.video-card-header {
  position: relative;
  overflow: hidden;
  background: #f8f9fa;
}

.video-thumbnail-wrapper {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.video-thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s ease;
}

.video-card:hover .video-thumbnail-image {
  transform: scale(1.1);
  filter: brightness(1.1) contrast(1.05);
}

/* Play Overlay */
.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
  backdrop-filter: blur(2px);
}

.video-card:hover .play-overlay {
  opacity: 1;
}

.play-button {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0.8);
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.video-card:hover .play-button {
  transform: scale(1);
  background: #fff;
}

.play-icon {
  width: 24px;
  height: 24px;
  color: #ff0000;
  margin-left: 2px;
}

/* Duration Badge */
.duration-badge {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 600;
  backdrop-filter: blur(4px);
}

/* Video Content */
.video-card-body {
  padding: 20px;
  background: #fff;
}

.video-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.video-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 8px 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: color 0.3s ease;
}

.video-card:hover .video-title {
  color: var(--color-primario);
}

.video-description {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 16px 0;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

/* Watch Button */
.video-card-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
}

.watch-button {
  display: flex;
  align-items: center;
  gap: 6px;
  background: var(--color-primario);
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.watch-button:hover {
  background: var(--color-naranja);
}

.watch-text {
  white-space: nowrap;
}

.arrow-icon {
  width: 12px;
  height: 12px;
}

.video-card:hover .arrow-icon {
  transform: translateX(2px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .video-thumbnail-wrapper {
    height: 160px;
  }
  
  .video-card-body {
    padding: 16px;
  }
  
  .video-title {
    font-size: 1rem;
  }
  
  .video-description {
    font-size: 0.85rem;
    -webkit-line-clamp: 1;
    line-clamp: 1;
  }
  
  .play-button {
    width: 50px;
    height: 50px;
  }
  
  .play-icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 576px) {
  .video-thumbnail-wrapper {
    height: 140px;
  }
  
  .video-card-body {
    padding: 12px;
  }
  
  .video-card-footer {
    justify-content: center;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .video-card,
  .video-thumbnail-image,
  .play-overlay,
  .play-button {
    animation: none;
    transition: none;
  }
  
  .video-card:hover {
    transform: none;
  }
}

.video-card-link:focus {
  outline: none;
}

.video-card-link:focus .video-card {
  outline: 2px solid var(--color-primario);
  outline-offset: 2px;
}
</style>
