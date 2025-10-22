<script setup lang="ts">
const events = [
  {
    src: "/assets/img-inauguracion-el-salto/salto_1.jpeg",
    alt: 'Inauguración de la sucursal “El Salto"',
    title: 'Inauguración de la sucursal “El Salto"',
    description: 'Imagenes de la Inauguración de la sucursal “El Salto"',
    images: [
      {
        src: "/assets/img-inauguracion-el-salto/salto_1.jpeg",
      },
      {
        src: "/assets/img-inauguracion-el-salto/salto_2.jpeg",
      }
    ]
  },
  {
    src: "/assets/img-madres-2025-event/madre_1.webp",
    alt: "Día de las Madres 2025",
    title: "Día de las Madres 2025",
    description: 'Imagenes Día de las Madres 2025',
    images: [
      {
        src: "/assets/img-madres-2025-event/madre_1.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_2.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_3.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_4.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_5.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_6.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_7.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_8.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_9.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_10.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_11.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_12.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_13.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_14.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_15.webp",
      },
      {
        src: "/assets/img-madres-2025-event/madre_16.webp",
      }
    ]
  },
  {
    src: "/assets/img-nino-2025-event/nino_1.webp",
    alt: "Evento día del niño 2025",
    title: "Evento día del niño 2025",
    description: 'Imagenes del evento día del niño 2025',
    images: [
      {
        src: "/assets/img-nino-2025-event/nino_1.webp",
      },
      {
        src: "/assets/img-nino-2025-event/nino_2.webp",
      },
      {
        src: "/assets/img-nino-2025-event/nino_3.webp",
      },
      {
        src: "/assets/img-nino-2025-event/nino_4.webp",
      },
      {
        src: "/assets/img-nino-2025-event/nino_5.webp",
      },
      {
        src: "/assets/img-nino-2025-event/nino_6.webp",
      },
      {
        src: "/assets/img-nino-2025-event/nino_7.webp",
      },
      {
        src: "/assets/img-nino-2025-event/nino_8.webp",
      },
      {
        src: "/assets/img-nino-2025-event/nino_9.webp",
      },
    ]
  },
  {
    src: "/assets/img-nov-event/191.webp",
    alt: 'Aurelio Lozano - Ocotlan 2024',
    title: 'Aurelio Lozano - Ocotlan 2024',
    description: 'Curso de Personalidad y Automaquillaje',
    images: [
      {
        src: "/assets/img-nov-event/182.webp",
      },
      {
        src: "/assets/img-nov-event/183.webp",
      },
      {
        src: "/assets/img-nov-event/184.webp",
      },
      {
        src: "/assets/img-nov-event/185.webp",
      },
      {
        src: "/assets/img-nov-event/186.webp",
      },
      {
        src: "/assets/img-nov-event/187.webp",
      },
      {
        src: "/assets/img-nov-event/188.webp",
      },
      {
        src: "/assets/img-nov-event/189.webp",
      },
      {
        src: "/assets/img-nov-event/190.webp",
      },
      {
        src: "/assets/img-nov-event/181.webp",
      },
      {
        src: "/assets/img-nov-event/192.webp",
      },
    ]
  },
  {
    src: "/assets/img-nov-event/167.webp",
    alt: 'Aurelio Lozano - Matriz 2024',
    title: 'Aurelio Lozano - Matriz 2024',
    description: 'Curso de Personalidad y Automaquillaje',
    images: [
      {
        src: "/assets/img-nov-event/156.webp",
      },
      {
        src: "/assets/img-nov-event/157.webp",
      },
      {
        src: "/assets/img-nov-event/158.webp",
      },
      {
        src: "/assets/img-nov-event/159.webp",
      },
      {
        src: "/assets/img-nov-event/160.webp",
      },
      {
        src: "/assets/img-nov-event/161.webp",
      },
      {
        src: "/assets/img-nov-event/162.webp",
      },
      {
        src: "/assets/img-nov-event/163.webp",
      }, {
        src: "/assets/img-nov-event/164.webp",
      },
      {
        src: "/assets/img-nov-event/165.webp",
      },
      {
        src: "/assets/img-nov-event/166.webp",
      },
      {
        src: "/assets/img-nov-event/167.webp",
      },
    ]
  },
  {
    src: "/assets/img-nov-event/150.webp",
    alt: 'Aurelio Lozano - Chapala 2024',
    title: 'Aurelio Lozano - Chapala 2024',
    description: 'Curso de la importancia de la imagen para ser líder',
    images: [
      {
        src: "/assets/img-nov-event/150.webp",
      },
      {
        src: "/assets/img-nov-event/152.webp",
      },
      {
        src: "/assets/img-nov-event/153.webp",
      },
      {
        src: "/assets/img-nov-event/154.webp",
      },
    ]
  },
  {
    src: "/assets/img-nov-event/140.webp",
    alt: 'Evento día del Padre',
    title: 'Evento día del Padre',
    description: 'Imagenes del evento día del Padre en Salon La Piedra',
    images: [
      {
        src: "/assets/img-nov-event/140.webp",
      },
      {
        src: "/assets/img-nov-event/141.webp",
      },
      {
        src: "/assets/img-nov-event/142.webp",
      },
      {
        src: "/assets/img-nov-event/143.webp",
      },
      {
        src: "/assets/img-nov-event/144.webp",
      },
      {
        src: "/assets/img-nov-event/145.webp",
      },
      {
        src: "/assets/img-nov-event/146.webp",
      },
      {
        src: "/assets/img-nov-event/147.webp",
      },
      {
        src: "/assets/img-nov-event/148.webp",
      },
      {
        src: "/assets/img-nov-event/149.webp",
      },
    ]
  },
  {
    src: "/assets/img-nov-event/129.webp",
    alt: 'Evento día del niño 2024',
    title: 'Evento día del niño 2024',
    description: 'Imagenes del evento día del Padre en Salon La Piedra',
    images: [
      {
        src: "/assets/img-nov-event/126.webp",
      },
      {
        src: "/assets/img-nov-event/127.webp",
      },
      {
        src: "/assets/img-nov-event/128.webp",
      },
      {
        src: "/assets/img-nov-event/129.webp",
      },
      {
        src: "/assets/img-nov-event/130.webp",
      },
      {
        src: "/assets/img-nov-event/131.webp",
      },
      {
        src: "/assets/img-nov-event/132.webp",
      },
      {
        src: "/assets/img-nov-event/133.webp",
      },
      {
        src: "/assets/img-nov-event/134.webp",
      },
      {
        src: "/assets/img-nov-event/135.webp",
      },
      {
        src: "/assets/img-nov-event/136.webp",
      },
      {
        src: "/assets/img-nov-event/137.webp",
      },
      {
        src: "/assets/img-nov-event/138.webp",
      },
      {
        src: "/assets/img-nov-event/139.webp",
      },
    ]
  },
  {
    src: "/assets/img-nov-event/111.webp",
    alt: 'Evento día de las madres 2024',
    title: 'Evento día de las madres 2024',
    description: 'Imagenes del evento día de las madres',
    images: [
      {
        src: "/assets/img-nov-event/112.webp",
      },
      {
        src: "/assets/img-nov-event/113.webp",
      },
      {
        src: "/assets/img-nov-event/114.webp",
      },
      {
        src: "/assets/img-nov-event/115.webp",
      },
      {
        src: "/assets/img-nov-event/116.webp",
      },
      {
        src: "/assets/img-nov-event/117.webp",
      },
      {
        src: "/assets/img-nov-event/118.webp",
      },
      {
        src: "/assets/img-nov-event/119.webp",
      },
      {
        src: "/assets/img-nov-event/120.webp",
      },
      {
        src: "/assets/img-nov-event/121.webp",
      },
      {
        src: "/assets/img-nov-event/122.webp",
      },
      {
        src: "/assets/img-nov-event/123.webp",
      },
      {
        src: "/assets/img-nov-event/124.webp",
      },
    ]
  },
  {
    src: "/assets/img-nov-event/99.webp",
    alt: 'Inaguración Sucursal Centro Sur 2023',
    title: 'Inaguración Sucursal Centro Sur 2023',
    description: 'Imagenes Inaguración Sucursal Centro Sur',
    images: [
      {
        src: "/assets/img-nov-event/99.webp",
      },
      {
        src: "/assets/img-nov-event/100.webp",
      },
      {
        src: "/assets/img-nov-event/101.webp",
      },
      {
        src: "/assets/img-nov-event/102.webp",
      },
      {
        src: "/assets/img-nov-event/103.webp",
      },
      {
        src: "/assets/img-nov-event/104.webp",
      },
      {
        src: "/assets/img-nov-event/105.webp",
      },
      {
        src: "/assets/img-nov-event/106.webp",
      },
      {
        src: "/assets/img-nov-event/107.webp",
      },
      {
        src: "/assets/img-nov-event/108.webp",
      },
      {
        src: "/assets/img-nov-event/109.webp",
      },
      {
        src: "/assets/img-nov-event/110.webp",
      }
    ]
  },
  {
    src: "/assets/img-nov-event/91.webp",
    alt: 'Competencias Directivas 2023',
    title: 'Competencias Directivas 2023',
    description: 'Imagenes Competencias Directivas',
    images: [
      {
        src: "/assets/img-nov-event/89.webp",
      },
      {
        src: "/assets/img-nov-event/90.webp",
      },
      {
        src: "/assets/img-nov-event/91.webp",
      },
      {
        src: "/assets/img-nov-event/92.webp",
      },
      {
        src: "/assets/img-nov-event/93.webp",
      },
      {
        src: "/assets/img-nov-event/94.webp",
      },
      {
        src: "/assets/img-nov-event/95.webp",
      },
      {
        src: "/assets/img-nov-event/96.webp",
      },
      {
        src: "/assets/img-nov-event/97.webp",
      },
      {
        src: "/assets/img-nov-event/98.webp",
      },
    ]
  },
  {
    src: "/assets/img-nov-event/83.webp",
    alt: 'Inauguración de Sucursal Aleria',
    title: 'Inauguración de Sucursal Aleria',
    description: 'Imagenes Aleira 2023',
    images: [
      {
        src: "/assets/img-nov-event/76.webp",
      },
      {
        src: "/assets/img-nov-event/77.webp",
      },
      {
        src: "/assets/img-nov-event/78.webp",
      },
      {
        src: "/assets/img-nov-event/79.webp",
      },
      {
        src: "/assets/img-nov-event/80.webp",
      },
      {
        src: "/assets/img-nov-event/81.webp",
      },
      {
        src: "/assets/img-nov-event/82.webp",
      },
      {
        src: "/assets/img-nov-event/83.webp",
      },
      {
        src: "/assets/img-nov-event/84.webp",
      },
      {
        src: "/assets/img-nov-event/85.webp",
      },
      {
        src: "/assets/img-nov-event/86.webp",
      },
      {
        src: "/assets/img-nov-event/87.webp",
      },
    ]
  },
  {
    src: "/assets/img-nov-event/51.webp",
    alt: 'Foro Coopertivo y Financiero 2023',
    title: 'Foro Coopertivo y Financiero 2023',
    description: 'Imagenes Foro Coopertivo y Financiero',
    images: [
      {
        src: "/assets/img-nov-event/52.webp",
      },
      {
        src: "/assets/img-nov-event/53.webp",
      },
      {
        src: "/assets/img-nov-event/54.webp",
      },
      {
        src: "/assets/img-nov-event/55.webp",
      },
      {
        src: "/assets/img-nov-event/56.webp",
      },
      {
        src: "/assets/img-nov-event/57.webp",
      },
      {
        src: "/assets/img-nov-event/58.webp",
      },
      {
        src: "/assets/img-nov-event/59.webp",
      },
      {
        src: "/assets/img-nov-event/60.webp",
      },
      {
        src: "/assets/img-nov-event/61.webp",
      },
      {
        src: "/assets/img-nov-event/62.webp",
      },
      {
        src: "/assets/img-nov-event/63.webp",
      },
      {
        src: "/assets/img-nov-event/64.webp",
      },
      {
        src: "/assets/img-nov-event/65.webp",
      },
      {
        src: "/assets/img-nov-event/66.webp",
      },
      {
        src: "/assets/img-nov-event/67.webp",
      },
      {
        src: "/assets/img-nov-event/68.webp",
      },
      {
        src: "/assets/img-nov-event/69.webp",
      },
      {
        src: "/assets/img-nov-event/70.webp",
      }
    ]
  },
  {
    src: "/assets/img-nov-event/37.webp",
    alt: 'Rally Coop 2023',
    title: 'Rally Coop 2023',
    description: 'Imagenes de Rally Coop 2023',
    images: [
      {
        src: "/assets/img-nov-event/26.webp",
      },
      {
        src: "/assets/img-nov-event/27.webp",
      },
      {
        src: "/assets/img-nov-event/28.webp",
      },
      {
        src: "/assets/img-nov-event/29.webp",
      },
      {
        src: "/assets/img-nov-event/30.webp",
      },
      {
        src: "/assets/img-nov-event/31.webp",
      },
      {
        src: "/assets/img-nov-event/32.webp",
      },
      {
        src: "/assets/img-nov-event/33.webp",
      },
      {
        src: "/assets/img-nov-event/34.webp",
      },
      {
        src: "/assets/img-nov-event/35.webp",
      },
      {
        src: "/assets/img-nov-event/36.webp",
      },
      {
        src: "/assets/img-nov-event/37.webp",
      },
      {
        src: "/assets/img-nov-event/38.webp",
      },
      {
        src: "/assets/img-nov-event/39.webp",
      },
      {
        src: "/assets/img-nov-event/40.webp",
      },
      {
        src: "/assets/img-nov-event/41.webp",
      },
      {
        src: "/assets/img-nov-event/42.webp",
      },
      {
        src: "/assets/img-nov-event/43.webp",
      },
      {
        src: "/assets/img-nov-event/44.webp",
      },
      {
        src: "/assets/img-nov-event/45.webp",
      },
      {
        src: "/assets/img-nov-event/46.webp",
      },
      {
        src: "/assets/img-nov-event/47.webp",
      },
      {
        src: "/assets/img-nov-event/48.webp",
      },
      {
        src: "/assets/img-nov-event/49.webp",
      },
      {
        src: "/assets/img-nov-event/50.webp",
      }
    ]
  }
]
</script>
<template>
  <main>
    <header _ngcontent-ng-c1565954773 class="header--nov-event">
      <div _ngcontent-ng-c1565954773 class="content">
        <h2 _ngcontent-ng-c1565954773 class="text-center text-white">NOVEDADES Y EVENTOS</h2>
        <div _ngcontent-ng-c472793725 class="redes-sociales"><a _ngcontent-ng-c472793725
            href="https://www.facebook.com/CajaSanPabloOficial/" target="_blank"
            aria-label="Visita nuestro pagina de facebook"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="50" height="50"
              style="enable-background: new 0 0 24 24;">
              <g _ngcontent-ng-c472793725="">
                <path _ngcontent-ng-c472793725=""
                  d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
              </g>
            </svg></a><a _ngcontent-ng-c472793725 href="https://twitter.com/cajasanpablo" target="_blank"
            aria-label="Visita nuestro perfil de twitter"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 24 24">
              <polygon _ngcontent-ng-c472793725=""
                points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159" />
              <path _ngcontent-ng-c472793725=""
                d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z" />
            </svg></a><a _ngcontent-ng-c472793725 href="https://www.instagram.com/cajapopularsanpablo/" target="_blank"
            aria-label="Visita nuestro perfil de instagram"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="50" height="50"
              style="enable-background: new 0 0 24 24;">
              <g _ngcontent-ng-c472793725="">
                <path _ngcontent-ng-c472793725=""
                  d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
                <path _ngcontent-ng-c472793725=""
                  d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
                <circle _ngcontent-ng-c472793725="" cx="18.406" cy="5.594" r="1.44" />
              </g>
            </svg></a><a _ngcontent-ng-c472793725 href="https://www.youtube.com/channel/UCyBT1Re7IC5AgO1p66AHmNA"
            target="_blank" aria-label="Visita nuestro canal de YouTube"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="50" height="50"
              style="enable-background: new 0 0 24 24;">
              <g _ngcontent-ng-c472793725="" id="XMLID_184_">
                <path _ngcontent-ng-c472793725=""
                  d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z" />
              </g>
            </svg></a><a _ngcontent-ng-c472793725 href="https://www.tiktok.com/@cajasanpablo" target="_blank"
            aria-label="Visita nuestro perfil de tiktok"><svg _ngcontent-ng-c472793725=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="50" height="50"
              style="enable-background: new 0 0 24 24;">
              <path _ngcontent-ng-c472793725=""
                d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594c-1.618,0-3.119-0.51-4.352-1.376  c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235  c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469c0,1.332,0.756,2.489,1.86,3.07  c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126c0,0.358,0.035,0.707,0.097,1.047  c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z" />
            </svg></a></div>
        <div _ngcontent-ng-c472793725 class="contactanos">
          <p _ngcontent-ng-c472793725>¡CONTÁCTANOS!</p>
        </div>
      </div>
      <div _ngcontent-ng-c1565954773 class="video-container"><video _ngcontent-ng-c1565954773 id="miVideo" autoplay loop
          playsinline>
          <source _ngcontent-ng-c1565954773 src="/src/assets/nov-event-web4.mp4" muted type="video/mp4">
        </video></div>
    </header>
    <div class="container mb-3 mt-5">
      <div class="row row-cols-1 row-cols-lg-4 g-4">
        <div v-for="(item, index) in events" :key="index" class="col-12 col-md-4 col-xl-3">
          <div>
            <div class="card h-100 shadow-lg"><img class="card-img-top" :src="item.src" :alt="item.alt">
              <div class="card-body">
                <h5 class="card-title text-center">{{ item.title }}</h5>
                <p class="card-text text-center text-cards-description">{{ item.description }}</p>
              </div>
              <div class="card-footer">
                <div class="text-center">
                  <a data-bs-toggle="modal" class="btn btn-primary" :href="'#modalToggle' + index">VER
                    MAS</a>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" tabindex="-1" class="modal fade" :aria-labelledby="'#modalToggle' + index"
            :id="'modalToggle' + index">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" :id="'modalToggleLabel' + index">{{ item.title }}</h5><button type="button"
                    data-bs-dismiss="modal" aria-label="Close" class="btn-close"></button>
                </div>
                <div class="modal-body">
                  <div data-bs-ride="carousel" class="carousel slide carousel-fade" :id="'carouselControls' + index">
                    <div class="carousel-inner">
                      <div v-for="(image, imgIndex) in item.images" :class="imgIndex == 0 ? 'active' : ''"
                        class="carousel-item" :key="imgIndex">
                        <img class="d-block w-100" :src="image.src" :alt="item.title">
                      </div>
                      <!---->
                    </div><button type="button" data-bs-slide="prev" class="carousel-control-prev"
                      :data-bs-target="'#carouselControls' + index"><span aria-hidden="true"
                        class="carousel-control-prev-icon"></span><span
                        class="visually-hidden">Previous</span></button><button type="button" data-bs-slide="next"
                      class="carousel-control-next" :data-bs-target="'#carouselControls' + index"><span
                        aria-hidden="true" class="carousel-control-next-icon"></span><span
                        class="visually-hidden">Next</span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="css" scoped>
.redes-sociales[_ngcontent-ng-c472793725] {
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap
}

.redes-sociales[_ngcontent-ng-c472793725] a[_ngcontent-ng-c472793725] {
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
  transition: .55s
}

.redes-sociales[_ngcontent-ng-c472793725] a[_ngcontent-ng-c472793725]:hover {
  background-color: #fff;
  fill: #000
}

.redes-sociales[_ngcontent-ng-c472793725] a[_ngcontent-ng-c472793725] svg[_ngcontent-ng-c472793725] {
  width: 30px
}

.contactanos[_ngcontent-ng-c472793725] {
  font-size: 2rem;
  color: #fff;
  text-shadow: 1px 1px 20px black;
  text-align: center;
  padding: 15px 0 0;
  overflow: hidden
}

.contactanos[_ngcontent-ng-c472793725] p[_ngcontent-ng-c472793725] {
  animation: fadeInRight;
  animation-duration: 1.5s
}

.header--nov-event[_ngcontent-ng-c1565954773] {
  position: relative
}

.header--nov-event[_ngcontent-ng-c1565954773] .content[_ngcontent-ng-c1565954773] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1
}

.header--nov-event[_ngcontent-ng-c1565954773] .content[_ngcontent-ng-c1565954773] h2[_ngcontent-ng-c1565954773] {
  text-shadow: 0px 0px 10px white
}

.header--nov-event[_ngcontent-ng-c1565954773] .video-container[_ngcontent-ng-c1565954773] video[_ngcontent-ng-c1565954773] {
  width: 100%;
  max-height: 700px;
  min-height: 600px;
  object-fit: cover;
  filter: brightness(.5)
}

app-header[_ngcontent-ng-c582792440] {
  height: 107px
}

@media (max-width: 768px) {
  app-header[_ngcontent-ng-c582792440] {
    height: 70px
  }
}

app-footer[_ngcontent-ng-c582792440] {
  height: 412px
}

@media (max-width: 768px) {
  app-footer[_ngcontent-ng-c582792440] {
    height: 606px
  }
}

.card {
  transition: transform 0.3s ease;
}

.card:hover {
  background-color: #333;
  /* Change background on hover */
  color: #fff;
  /* Change text color on hover */
  /* Scale up the card by 5% on hover */
}

.card-img-top {
  max-height: 200px;
}

.header--nov-event {
  position: relative
}

.header--nov-event .content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1
}

.header--nov-event .content h2 {
  text-shadow: 0px 0px 10px white
}

.header--nov-event .video-container video {
  width: 100%;
  max-height: 700px;
  min-height: 600px;
  object-fit: cover;
  filter: brightness(.5)
}
</style>
