<template>
  <div class="alianza-card">
    <div class="card-image">
      <img :src="alianza.image" :alt="alianza.title" loading="lazy" />
      <div class="image-overlay"></div>
    </div>

    <div class="card-content">
      <h3 class="card-title">{{ alianza.title }}</h3>
      <p class="card-description">{{ alianza.description }}</p>

      <div class="social-links">
        <a v-for="socialLink in alianza.socialLinks"
           :key="socialLink.type"
           :href="socialLink.url"
           :target="socialLink.type === 'website' ? '_blank' : undefined"
           class="social-link"
           :class="`social-${socialLink.type}`"
           :aria-label="`${socialLink.type} link`">
          <img :src="getSocialIcon(socialLink.type)" :alt="socialLink.type" />
        </a>
      </div>

      <div class="card-actions">
        <a :href="alianza.pdfUrl" target="_blank" class="btn-read-more">
          <span>Leer más</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''

interface SocialLink {
  type: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'tiktok' | 'email' | 'phone' | 'website'
  url: string
}

interface Alianza {
  id: number
  title: string
  image: string
  description: string
  socialLinks: SocialLink[]
  pdfUrl: string
}

defineProps<{
  alianza: Alianza
}>()


const getSocialIcon = (type: string): string => {
  const iconMap: Record<string, string> = {
    facebook: `${assetPrefix}/assets/icon/facebook.png`,
    instagram: `${assetPrefix}/assets/icon/instagram.png`,
    twitter: `${assetPrefix}/assets/icon/x.png`,
    youtube: `${assetPrefix}/assets/icon/youtube.png`,
    tiktok: `${assetPrefix}/assets/icon/tik-tok.png`,
    email: `${assetPrefix}/assets/icon/email.png`,
    phone: `${assetPrefix}/assets/icon/telefono.png`,
    website: `${assetPrefix}/assets/icon/sitio-web.png`
  }
  return iconMap[type] || `${assetPrefix}/assets/icon/sitio-web.png`
}
</script>

<style lang="css" scoped>
.alianza-card {
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.alianza-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.alianza-card:hover .card-image img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(70, 162, 253, 0.1) 0%, rgba(46, 125, 207, 0.1) 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.alianza-card:hover .image-overlay {
  opacity: 1;
}

.card-content {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 12px;
  line-height: 1.3;
  min-height: 3.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: center;
}

.card-description {
  color: #4a5568;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 20px;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.social-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f7fafc;
  border: 2px solid #e2e8f0;
  transition: all 0.2s ease;
  text-decoration: none;
}

.social-link:hover {
  transform: scale(1.1);
  border-color: var(--color-primario);
  background: var(--color-primario);
}

.social-link img {
  width: 18px;
  height: 18px;
  filter: grayscale(1);
  transition: filter 0.2s ease;
}

.social-link:hover img {
  filter: grayscale(0) brightness(0) invert(1);
}

/* Specific social media colors on hover */
.social-facebook:hover {
  background: #1877f2;
  border-color: #1877f2;
}

.social-instagram:hover {
  background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
  border-color: #e6683c;
}

.social-twitter:hover {
  background: #1da1f2;
  border-color: #1da1f2;
}

.social-youtube:hover {
  background: #ff0000;
  border-color: #ff0000;
}

.social-tiktok:hover {
  background: #000000;
  border-color: #000000;
}

.social-email:hover {
  background: #34d399;
  border-color: #34d399;
}

.social-phone:hover {
  background: #10b981;
  border-color: #10b981;
}

.social-website:hover {
  background: #6366f1;
  border-color: #6366f1;
}

.card-actions {
  margin-top: auto;
}

.btn-read-more {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: linear-gradient(135deg, var(--color-primario) 0%, #2563eb 100%);
  color: white;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(70, 162, 253, 0.3);
}

.btn-read-more:hover {
  background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(70, 162, 253, 0.4);
  color: white;
}

.btn-read-more svg {
  transition: transform 0.2s ease;
}

.btn-read-more:hover svg {
  transform: translate(2px, -2px);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .card-content {
    padding: 20px;
  }

  .card-title {
    font-size: 1.1rem;
    min-height: auto;
  }

  .card-description {
    font-size: 0.85rem;
    -webkit-line-clamp: 3;
  }

  .social-links {
    gap: 6px;
  }

  .social-link {
    width: 32px;
    height: 32px;
  }

  .social-link img {
    width: 16px;
    height: 16px;
  }
}
</style>
