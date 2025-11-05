<template>
  <main>
    <CpsPageHeader title="ALIANZAS ESTRATÉGICAS" :image-url="`${assetPrefix}/assets/pago_de_servicios_black.webp`"
      imageAlt="apreton manos socios comerciales reunion grupo que hace inversion proyecto primer"
      colorText="text-black" />

    <section class="alianzas-section">
      <div class="container">
        <div class="alianzas-intro">
          <h2>Descubre Nuestras Alianzas Estratégicas</h2>
          <p>Aprovecha descuentos exclusivos y beneficios especiales con nuestros socios comerciales</p>
        </div>

        <div class="alianzas-grid">
          <CpsAlianzaCard
            v-for="alianza in alianzas"
            :key="alianza.id"
            :alianza="alianza"
            class="alianza-item"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'

import CpsAlianzaCard from '@/components/cards/CpsAlianzaCard.vue'

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

const alianzas: Alianza[] = [
  {
    id: 1,
    title: 'Hotel Sierra Tigre Mazamitla',
    image: `${assetPrefix}/assets/hotel_sierra_tigre_mazamitla.png`,
    description: 'Descuento: 10% de descuento',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/SIERRATIGREHOTEL' },
      { type: 'instagram', url: 'https://www.instagram.com/hotelsierratigre/' },
      { type: 'phone', url: '33 2493 5912' },
      { type: 'website', url: 'https://hotelsierratigre.com/reservar?gad_source=1&gad_campaignid=18198284093&gbraid=0AAAAAofPBTH759JBQ8YzA017B0Bcc1hwD&gclid=CjwKCAjw89jGBhB0EiwA2o1On7vvwLg0iNRpinNS3r8sWbKHxwOLLXqWdydY2yF_hl9IGgxb9_ySJxoCjYcQAvD_BwE' }
    ],
    pdfUrl: '/assets/pdf/HOTEL_SIERRA_TIGRE_MAZAMITLA.pdf'
  },
  {
    id: 2,
    title: 'Escuela de Personalidad y Belleza (Clase y Estilo)',
    image: `${assetPrefix}/assets/Clase y estilo.webp`,
    description: 'Descuento: 10% de descuento',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/claseyestilomx/?locale=es_LA' },
      { type: 'instagram', url: 'https://www.instagram.com/escuelaclaseyestilo/?hl=es' },
      { type: 'phone', url: '33 2208 0114' }
    ],
    pdfUrl: '/assets/pdf/Clase y Estilo.pdf'
  },
  {
    id: 3,
    title: 'Hotel Balneario San Juan Cosala',
    image: `${assetPrefix}/assets/san juan cosala.webp`,
    description: 'LUNES A SABADO- ADULTO $340/ NIÑOS MENORES A 130CM DE ALTURA $170.00 (MAXIMO 5 PERSONAS POR SOCIO O COLABORADOR)',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/Hotel.Balneario.SanJuan.Cosala/?locale=es_LA' },
      { type: 'instagram', url: 'https://www.facebook.com/Hotel.Balneario.SanJuan.Cosala/?locale=es_LA' },
      { type: 'tiktok', url: 'https://www.facebook.com/Hotel.Balneario.SanJuan.Cosala/?locale=es_LA' },
      { type: 'phone', url: '33 1599 3781' },
      { type: 'website', url: 'https://www.hotelspacosala.com/' }
    ],
    pdfUrl: '/assets/pdf/SAN JUAN COSALA.pdf'
  },
  {
    id: 4,
    title: 'Consultorio Dental Rey Quintil Guadalajara',
    image: `${assetPrefix}/assets/Consultorio Dental Rey Quintil Guadalajara.webp`,
    description: '25% de descuento a Socios. • 30% de descuento a colaboradores de la Cooperativa.',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/ConsultorioQuintil/?locale=es_LA' },
      { type: 'instagram', url: 'https://www.instagram.com/reyquintil/?hl=es' },
      { type: 'email', url: 'consultorio_quintil@hotmail.com' },
      { type: 'phone', url: '33 4052 3305' },
      { type: 'website', url: 'https://consultorio-dental-rey-quintil.my.canva.site/' }
    ],
    pdfUrl: '/assets/pdf/CONSULTORIO_REY_QUINTILL_PGINA_WEB.pdf'
  },
  {
    id: 5,
    title: 'CEP (Centro de Estudios Profesionales)',
    image: `${assetPrefix}/assets/CEO (Centro de Estudios Profecionales).webp`,
    description: 'Inscripción gratuita y descuento de 25% en colegiaturas',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/p/Cep-Centro-de-Estudios-Profesionales-100063491893674/' },
      { type: 'email', url: 'Jaliscoavanza@hotmail.com' },
      { type: 'phone', url: '33 1147 1877' },
      { type: 'website', url: 'https://cepuniversitario.edu.mx/' }
    ],
    pdfUrl: '/assets/pdf/(CEP) Centro de Estudios Profecionales.pdf'
  },
  {
    id: 6,
    title: 'CECATI 15',
    image: `${assetPrefix}/assets/CECATI 15.webp`,
    description: 'Descuento: 50% cursos presenciales de lunes a viernes',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/Cecati15CapacitacionyCursos/?locale=es_LA' },
      { type: 'email', url: 'cecati15.vinc@dgcft.sems.gob.mx' },
      { type: 'phone', url: '33 3618 6043' },
      { type: 'website', url: 'dgcft.sems.gob.mx' }
    ],
    pdfUrl: '/assets/pdf/cecati.pdf'
  },
  {
    id: 7,
    title: 'CECATI 16',
    image: `${assetPrefix}/assets/CECATI 16.webp`,
    description: 'Descuento: 60% cursos presenciales de lunes a viernes',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/p/Cecati-16-100063910751195/?locale=es_LA' },
      { type: 'phone', url: '33 3643 0990' },
      { type: 'website', url: 'cecati15.vinc@dgcft.sems.gob.mx' }
    ],
    pdfUrl: '/assets/pdf/cecati.pdf'
  },
  {
    id: 8,
    title: 'CECATI 161',
    image: `${assetPrefix}/assets/CECATI 161.webp`,
    description: 'Todos los cursos presenciales de lunes a viernes: 50% (Excepto Salud Visual)',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/cecati161/?locale=es_LA' },
      { type: 'email', url: 'cecati161.vinc@dgcft.sems.gob.mx' },
      { type: 'phone', url: '33 3638 9882' },
      { type: 'website', url: 'cecati15.vinc@dgcft.sems.gob.mx' }
    ],
    pdfUrl: '/assets/pdf/cecati.pdf'
  },
  {
    id: 9,
    title: 'CECATI 190',
    image: `${assetPrefix}/assets/CECATI 190.webp`,
    description: 'Descuento: 25% cursos presenciales de lunes a viernes',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/Cecati190CursosYCapacitaciones/?locale=es_LA' },
      { type: 'email', url: 'cecati190.dir@dgcft.sems.gob.mx' },
      { type: 'phone', url: '33 3608 0264' },
      { type: 'website', url: 'cecati15.vinc@dgcft.sems.gob.mx' }
    ],
    pdfUrl: '/assets/pdf/cecati.pdf'
  },
  {
    id: 10,
    title: 'SELVA MAGICA',
    image: `${assetPrefix}/assets/SELVA MAGICA.webp`,
    description: 'Descuento: Cupones 2x1 en pase platino.',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/SelvaMagicaOficial/' },
      { type: 'instagram', url: 'https://www.instagram.com/selvamagica/' },
      { type: 'youtube', url: 'https://www.youtube.com/user/SelvaMagicaGDL' },
      { type: 'twitter', url: 'https://x.com/selvamagicagdl' },
      { type: 'phone', url: '33 3821 7813' },
      { type: 'website', url: 'https://www.selvamagica.com.mx/' }
    ],
    pdfUrl: '/assets/pdf/selvaMagica.pdf'
  },
  {
    id: 11,
    title: 'DISTRING',
    image: `${assetPrefix}/assets/distring.webp`,
    description: 'Descuento: 5% para el Socio.',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/Distring' },
      { type: 'email', url: 'ventas@equipossolares.com' },
      { type: 'phone', url: '33 2223 6993DASH' },
      { type: 'website', url: 'https://equipossolares.com/' }
    ],
    pdfUrl: '/assets/pdf/Distring.pdf'
  },
  {
    id: 12,
    title: 'VIAJES ALONDRA',
    image: `${assetPrefix}/assets/VIAJES ALONDRA.webp`,
    description: 'Descuento de 7% al socio',
    socialLinks: [
      { type: 'facebook', url: 'https://www.facebook.com/p/Viajes-Alondra-100064162056949/?locale=es_LA' },
      { type: 'instagram', url: 'https://www.instagram.com/viajes.alondra' },
      { type: 'email', url: 'viajesalondra@hotmail.com' },
      { type: 'phone', url: '33 1833 2733' }
    ],
    pdfUrl: '/assets/pdf/viajes-alondra.pdf'
  }
]
</script>

<style lang="css" scoped>
.alianzas-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  min-height: 100vh;
}

.alianzas-intro {
  text-align: center;
  margin-bottom: 60px;
}

.alianzas-intro h2 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 16px;
  background: linear-gradient(135deg, var(--color-primario) 0%, #2563eb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.alianzas-intro p {
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.alianzas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  max-width: 1400px;
  margin: 0 auto;
}

.alianza-item {
  animation: fadeInUp 0.6s ease-out;
}

.alianza-item:nth-child(1) { animation-delay: 0.1s; }
.alianza-item:nth-child(2) { animation-delay: 0.2s; }
.alianza-item:nth-child(3) { animation-delay: 0.3s; }
.alianza-item:nth-child(4) { animation-delay: 0.4s; }
.alianza-item:nth-child(5) { animation-delay: 0.5s; }
.alianza-item:nth-child(6) { animation-delay: 0.6s; }

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

/* Responsive adjustments */
@media (max-width: 768px) {
  .alianzas-section {
    padding: 60px 0;
  }

  .alianzas-intro h2 {
    font-size: 2rem;
  }

  .alianzas-intro p {
    font-size: 1rem;
    padding: 0 20px;
  }

  .alianzas-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 20px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .alianzas-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1025px) {
  .alianzas-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1400px) {
  .alianzas-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
