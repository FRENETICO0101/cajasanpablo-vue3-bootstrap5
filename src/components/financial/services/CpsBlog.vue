<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'

// Blog card data
interface BlogCard {
  id: number
  title: string
  description: string
  image: string
  url: string
  alt: string
}

const blogCards: BlogCard[] = [
  {
    id: 1,
    title: "Año Internacional de las Cooperativas",
    description: "Las Cooperativas construyen un mundo mejor.",
    image: "/src/assets/img-blog/ano_cooperativas.webp",
    url: "assets/pdf/ano_cooperativas.pdf",
    alt: "Año Internacional de las Cooperativas"
  },
  {
    id: 2,
    title: "¿Sabes que es el Phishing?",
    description: "Existen formas ilegales de obtener tus datos personales y los de tus cuentas para estafarte. El Phishing es un tipo de fraude telefónico que pone en riesgo tu seguridad financiera.",
    image: "/src/assets/img-blog/VISHING.webp",
    url: "assets/pdf/VISHING.pdf",
    alt: "Ofertas de credito enganosas"
  },
  {
    id: 3,
    title: "Cuidado con ofertas de crédito engañosas",
    description: "Es común que algunas empresas no reguladas ofrezcan préstamos con condiciones que parecen demasiado buenas para ser verdad",
    image: "/src/assets/img-blog/ofertas-de-credito-enganosas.webp",
    url: "assets/pdf/Ofertas de credito enganosas.pdf",
    alt: "Ofertas de credito enganosas"
  },
  {
    id: 4,
    title: "7 tips de ahorro",
    description: "Conoce los 7 tips de ahorro que te ayudarán a mejorar tus finanzas personales.",
    image: "/src/assets/img-blog/7 tips de ahorro.webp",
    url: "assets/pdf/7 tips de ahorro.pdf",
    alt: "7 tips de ahorro"
  },
  {
    id: 5,
    title: "Los créditos nos facilitan el manejo de los recursos",
    description: "Conoce cómo los créditos nos facilitan el manejo de los recursos y cómo puedes utilizarlos a tu favor.",
    image: "/src/assets/img-blog/creditos.webp",
    url: "assets/pdf/creditos.pdf",
    alt: "creditos"
  },
  {
    id: 6,
    title: "Presupuesto",
    description: "Conoce la importancia de tener un presupuesto y cómo puedes hacer uno para mejorar tus finanzas personales.",
    image: "/src/assets/img-blog/Presupuesto.webp",
    url: "assets/pdf/Presupuesto.pdf",
    alt: "Presupuesto"
  },
  {
    id: 7,
    title: "5 tips ecologicos",
    description: "Conoce los 5 tips ecológicos que te ayudarán a cuidar el medio ambiente y a mejorar tu calidad de vida.",
    image: "/src/assets/img-blog/tips ecologicos.webp",
    url: "assets/pdf/tips ecologicos.pdf",
    alt: "tips ecologicos"
  },
  {
    id: 8,
    title: "Vacaciones sin estrés",
    description: "Conoce cómo puedes disfrutar de unas vacaciones sin estrés y cómo puedes planearlas para que sean inolvidables.",
    image: "/src/assets/img-blog/Vacaciones sin estres.webp",
    url: "assets/pdf/Vacaciones sin estres.pdf",
    alt: "Vacaciones sin estres"
  },
  {
    id: 9,
    title: "Ventajas de ahorra en Caja Pupular San Pablo",
    description: "Conoce las ventajas de ahorrar en Caja Popular San Pablo y cómo puedes mejorar tus finanzas personales.",
    image: "/src/assets/img-blog/ventajasdeahorrarencajapopularsanpablo.webp",
    url: "assets/pdf/ventajasdeahorrarencajapopularsanpablo.pdf",
    alt: "Ventajas de ahorra en Caja Popular San Pablo"
  },
  {
    id: 10,
    title: "Historia de Mariana",
    description: "Conoce la historia de Mariana, una mujer que se enfrentó al COVID-19 y logró vencerlo.",
    image: "/src/assets/img-blog/covid-historia-de-mariana-506x486.webp",
    url: "https://www.mentelaboral.com/",
    alt: "Vacuna"
  },
  {
    id: 11,
    title: "Cooperativas de éxito",
    description: "Conoce las cooperativas de éxito que han logrado sobresalir en el mercado.",
    image: "/src/assets/img-blog/cooperativas-de-exito-1250x1196.webp",
    url: "https://www.elsoldeleon.com.mx/local/son-cooperativas-alternativa-para-economia-social-exitosa-6640928.html",
    alt: "ImgCooExito"
  },
  {
    id: 12,
    title: "Coopertivismo a nivel mundial",
    description: "Conoce el cooperativismo a nivel mundial y cómo ha logrado sobresalir en el mercado.",
    image: "/src/assets/img-blog/cooperativismo-a-nivel-mundial-1250x1200.webp",
    url: "https://www.concamex.coop/media/cooperativismo/cooperativismo-a-nivel-mundial.html",
    alt: "AnivelMundial"
  },
  {
    id: 13,
    title: "Tipos de cooperativas",
    description: "Conoce los tipos de cooperativas que existen y cómo puedes ser parte de una de ellas.",
    image: "/src/assets/img-blog/tipos-de-cooperativas-1250x1200.webp",
    url: "https://www.concamex.coop/media/cooperativismo/tipos-de-cooperativas.html",
    alt: "AnivelMundial"
  },
  {
    id: 14,
    title: "Tips para ahorrar",
    description: "Conoce los tips para ahorrar y cómo puedes mejorar tus finanzas personales.",
    image: "/src/assets/img-blog/educa-tu-cartera-1250x1200.webp",
    url: "https://webappsos.condusef.gob.mx/EducaTuCartera/index.html",
    alt: "AnivelMundial"
  },
  {
    id: 15,
    title: "Diseños actuales de los billetes mexicanos",
    description: "Conoce los diseños actuales de los billetes mexicanos y cómo han evolucionado a lo largo de los años.",
    image: "/src/assets/img-blog/disenos-actuales-1253x1201.webp",
    url: "https://www.banxico.org.mx/billetes-y-monedas/disenos-actuales-circulacion-.html",
    alt: "AnivelMundial"
  },
  {
    id: 16,
    title: "Validez de piezas (billetes)",
    description: "Conoce la validez de tus billetes y cómo puedes identificar si son falsos o verdaderos.",
    image: "/src/assets/img-blog/validez-de-tus-piezas-1253x1203.webp",
    url: "https://www.banxico.org.mx/billetes-y-monedas/validez-piezas-validez-banco-.html",
    alt: "AnivelMundial"
  },
  {
    id: 17,
    title: "Para cuando crezcas",
    description: "Conoce el sitio infantil de la CONDUSEF y cómo puedes aprender a cuidar tus finanzas personales desde pequeño.",
    image: "/src/assets/img-blog/sitio-infantil-condusef-1258x1205.webp",
    url: "https://webappsos.condusef.gob.mx/EducaTuCartera/ni%C3%B1os.html",
    alt: "AnivelMundial"
  },
  {
    id: 18,
    title: "Haz más con tu dinero",
    description: "Conoce cómo puedes hacer más con tu dinero y cómo puedes mejorar tus finanzas personales.",
    image: "/src/assets/img-blog/dinero-condusef-1250x1200.webp",
    url: "https://webappsos.condusef.gob.mx/EducaTuCartera/inversion.html",
    alt: "AnivelMundial"
  }
]

// Function to handle opening links in new tab
function openLink(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <main>
    <div class="blog-container">
      <CpsPageHeader
        title="LIGAS DE INTERÉS"
        image-url="/src/assets/family-spending-time-together.webp"
        image-alt="familia leyendo algo interesante"
        color-text="text-white"
      />
      <div class="container">
        <div class="row py-5">
          <div class="tar col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
               v-for="card in blogCards"
               :key="card.id">
            <div class="card" @click="openLink(card.url)">
              <img :src="card.image" :alt="card.alt" :loading="card.id > 8 ? 'lazy' : undefined" />
              <div class="card-body">
                <h5 class="card-title blog-2025">
                  {{ card.title }}
                </h5>
                <p class="card-text blog-2025">
                  {{ card.description }}
                </p>
                <a :href="card.url" target="_blank"
                   class="btn btn-primary" @click.stop>Leer más</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="css" scoped>
/* Container styles */
.blog-container {
  width: 100%;
}

/* Blog cards container */
.container {
  max-width: 1400px;
}

.row {
  margin: 0 -10px;
}

/* Blog card styles */
.tar {
  padding: 0 10px;
  margin-bottom: 30px;
}

.card {
  border: none;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  color: inherit;
  height: 100%;
  background: #fff;
  position: relative;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 48, 99, 0.05), rgba(255, 140, 0, 0.05));
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.card:hover::before {
  opacity: 1;
}

.card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: inherit;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.4s ease;
}

.card:hover img {
  transform: scale(1.1);
}

.card-body {
  padding: 20px;
  position: relative;
  z-index: 2;
  background: #fff;
  display: flex;
  flex-direction: column;
  height: calc(100% - 200px);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-primario);
  margin-bottom: 15px;
  line-height: 1.3;
  transition: color 0.3s ease;
  min-height: 2.6em;
}

.card:hover .card-title {
  color: var(--color-naranja);
}

.card-text {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.5;
  margin-bottom: 20px;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.btn-primary {
  background: linear-gradient(135deg, var(--color-primario), var(--color-azul-oscuro));
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: auto;
  align-self: flex-start;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  color: white;
  user-select: none;
}

.btn-primary:hover {
  background: linear-gradient(135deg, var(--color-naranja), #ff6b00);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(255, 140, 0, 0.4);
  color: white;
}

.btn-primary:active {
  transform: translateY(0);
}

/* Responsive improvements */
@media (max-width: 768px) {
  .card img {
    height: 180px;
  }

  .card-body {
    padding: 15px;
  }

  .card-title {
    font-size: 1rem;
  }

  .card-text {
    font-size: 0.9rem;
    -webkit-line-clamp: 3;
    line-clamp: 3;
  }
}

@media (max-width: 576px) {
  .row {
    margin: 0 -5px;
  }

  .tar {
    padding: 0 5px;
    margin-bottom: 20px;
  }

  .card img {
    height: 160px;
  }
}

/* Focus styles for accessibility */
.card:focus,
.btn:focus {
  outline: 2px solid var(--color-naranja);
  outline-offset: 2px;
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  .card {
    border: 2px solid #000;
  }

  .card-title {
    color: #000;
  }

  .card-text {
    color: #333;
  }
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
