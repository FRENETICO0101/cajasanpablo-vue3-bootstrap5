<script setup lang="ts">
import CpsNavBar from './CpsNavBar.vue';

</script>

<template>
  <div>
    <div _ngcontent-ng-c2531277376 class="avisos-importantes d-none d-md-block">
      <div _ngcontent-ng-c2531277376 class="row">
        <div _ngcontent-ng-c2531277376 class="col-6 d-flex align-items-center justify-content-center gap-2">
          CONOCE LOS
          <a _ngcontent-ng-c2531277376 href="/src/assets/pdf/dias inhabiles.pdf" target="_blank">DÍAS INHÁBILES
            2025</a>
        </div>
        <div _ngcontent-ng-c2531277376 class="col-6 d-flex align-items-center justify-content-center gap-2">
          CONTÁCTANOS EN NUESTRAS REDES SOCIALES:
          <a _ngcontent-ng-c2531277376 href="https://www.facebook.com/CajaSanPabloOficial/" target="_blank"
            aria-label="Visita nuestro pagina de facebook"><svg _ngcontent-ng-c2531277376=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="20" height="20"
              style="enable-background: new 0 0 24 24">
              <g _ngcontent-ng-c2531277376="">
                <path _ngcontent-ng-c2531277376=""
                  d="M24,12.073c0,5.989-4.394,10.954-10.13,11.855v-8.363h2.789l0.531-3.46H13.87V9.86c0-0.947,0.464-1.869,1.95-1.869h1.509   V5.045c0,0-1.37-0.234-2.679-0.234c-2.734,0-4.52,1.657-4.52,4.656v2.637H7.091v3.46h3.039v8.363C4.395,23.025,0,18.061,0,12.073   c0-6.627,5.373-12,12-12S24,5.445,24,12.073z" />
              </g>
            </svg></a><a _ngcontent-ng-c2531277376 href="https://twitter.com/cajasanpablo" target="_blank"
            aria-label="Visita nuestro perfil de twitter"><svg _ngcontent-ng-c2531277376=""
              xmlns="http://www.w3.org/2000/svg" id="Capa_1" data-name="Capa 1" viewBox="0 0 24 24">
              <polygon _ngcontent-ng-c2531277376=""
                points="6.861 6.159 15.737 17.764 17.097 17.764 8.322 6.159 6.861 6.159" />
              <path _ngcontent-ng-c2531277376=""
                d="m12,0C5.373,0,0,5.373,0,12s5.373,12,12,12,12-5.373,12-12S18.627,0,12,0Zm3.063,19.232l-3.87-5.055-4.422,5.055h-2.458l5.733-6.554-6.046-7.91h5.062l3.494,4.621,4.043-4.621h2.455l-5.361,6.126,6.307,8.337h-4.937Z" />
            </svg></a><a _ngcontent-ng-c2531277376 href="https://www.instagram.com/cajapopularsanpablo/" target="_blank"
            aria-label="Visita nuestro perfil de instagram"><svg _ngcontent-ng-c2531277376=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="20" height="20"
              style="enable-background: new 0 0 24 24">
              <g _ngcontent-ng-c2531277376="">
                <path _ngcontent-ng-c2531277376=""
                  d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
                <path _ngcontent-ng-c2531277376=""
                  d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
                <circle _ngcontent-ng-c2531277376="" cx="18.406" cy="5.594" r="1.44" />
              </g>
            </svg></a><a _ngcontent-ng-c2531277376 href="https://www.youtube.com/channel/UCyBT1Re7IC5AgO1p66AHmNA"
            target="_blank" aria-label="Visita nuestro canal de YouTube"><svg _ngcontent-ng-c2531277376=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="20" height="20"
              style="enable-background: new 0 0 24 24">
              <g _ngcontent-ng-c2531277376="" id="XMLID_184_">
                <path _ngcontent-ng-c2531277376=""
                  d="M23.498,6.186c-0.276-1.039-1.089-1.858-2.122-2.136C19.505,3.546,12,3.546,12,3.546s-7.505,0-9.377,0.504   C1.591,4.328,0.778,5.146,0.502,6.186C0,8.07,0,12,0,12s0,3.93,0.502,5.814c0.276,1.039,1.089,1.858,2.122,2.136   C4.495,20.454,12,20.454,12,20.454s7.505,0,9.377-0.504c1.032-0.278,1.845-1.096,2.122-2.136C24,15.93,24,12,24,12   S24,8.07,23.498,6.186z M9.546,15.569V8.431L15.818,12L9.546,15.569z" />
              </g>
            </svg></a><a _ngcontent-ng-c2531277376 href="https://www.tiktok.com/@cajasanpablo" target="_blank"
            aria-label="Visita nuestro perfil de tiktok"><svg _ngcontent-ng-c2531277376=""
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
              x="0px" y="0px" viewBox="0 0 24 24" xml:space="preserve" width="20" height="20"
              style="enable-background: new 0 0 24 24">
              <path _ngcontent-ng-c2531277376=""
                d="M22.465,9.866c-2.139,0-4.122-0.684-5.74-1.846v8.385c0,4.188-3.407,7.594-7.594,7.594c-1.618,0-3.119-0.51-4.352-1.376  c-1.958-1.375-3.242-3.649-3.242-6.218c0-4.188,3.407-7.595,7.595-7.595c0.348,0,0.688,0.029,1.023,0.074v0.977v3.235  c-0.324-0.101-0.666-0.16-1.023-0.16c-1.912,0-3.468,1.556-3.468,3.469c0,1.332,0.756,2.489,1.86,3.07  c0.481,0.253,1.028,0.398,1.609,0.398c1.868,0,3.392-1.486,3.462-3.338L12.598,0h4.126c0,0.358,0.035,0.707,0.097,1.047  c0.291,1.572,1.224,2.921,2.517,3.764c0.9,0.587,1.974,0.93,3.126,0.93V9.866z" />
            </svg></a>
        </div>
      </div>
    </div>
    <CpsNavBar />
    <a _ngcontent-ng-c2531277376 href="https://www.messenger.com/t/CajaSanPabloOficial" target="_blank"
      class="contactanos-flotante"><img _ngcontent-ng-c2531277376 width="50px" height="50px"
        src="/src/assets/icon/mensajero.webp" alt="icono-messenger-meta" /></a>
  </div>
</template>
