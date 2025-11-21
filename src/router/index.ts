import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/components/content/CpsIndex.vue'
import AppMovil from '@/components/financial/services/CpsAppMovil.vue'
import Socio from '@/components/financial/services/CpsSocio.vue'
import Creditos from '@/components/financial/services/CpsCreditos.vue'
import Sucursales from '@/components/financial/services/CpsSucursales.vue'
import CuentasDeposito from '@/components/financial/services/CpsCuentasDeposito.vue'
import ServicioApoyoFunerario from '@/components/financial/benefits/CpsServicioApoyoFunerario.vue'
import Asesoria from '@/components/financial/benefits/CpsAsesoria.vue'
import Protección from '@/components/financial/benefits/CpsProtección.vue'
import Medico from '@/components/financial/benefits/CpsMedico.vue'
import Servicios from '@/components/financial/benefits/CpsServicios.vue'
import Educoof from '@/components/financial/services/CpsEducoof.vue'
import Alianzas from '@/components/btns/CpsAlianzas.vue'
import Revistas from '@/components/btns/CpsRevistas.vue'
import Aviso from '@/components/pages/info/CpsAviso.vue'
import DespachosCobranza from '@/components/pages/info/CpsDespachosCobranza.vue'
import Historia from '@/components/pages/info/CpsHistoria.vue'
import Trabajo from '@/components/pages/info/CpsTrabajo.vue'
import NovEventos from '@/components/financial/services/CpsNovEventos.vue'
import Mantenimiento from '@/components/financial/services/CpsMantenimiento.vue'
import Blog from '@/components/financial/services/CpsBlog.vue'
import Buzon from '@/components/financial/services/CpsBuzon.vue'
import Buro from '@/components/pages/info/CpsBuro.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Index,
    },
    {
      path: '/servicio/app-movil',
      name: 'app-movil',
      component: AppMovil,
    },
    {
      path: '/servicio/socio',
      name: 'socio',
      component: Socio,
    },
    {
      path: '/servicio/creditos',
      name: 'creditos',
      component: Creditos,
    },
    {
      path: '/servicio/sucursales',
      name: 'sucursale',
      component: Sucursales,
    },
    {
      path: '/servicio/cuentas-deposito',
      name: 'cuentas-deposito',
      component: CuentasDeposito,
    },
    {
      path: '/beneficios/servicio-apoyo-funerario',
      name: 'servicio-apoyo-funerario',
      component: ServicioApoyoFunerario,
    },
    {
      path: '/beneficios/asesoria',
      name: 'asesoria',
      component: Asesoria,
    },
    {
      path: '/beneficios/proteccion',
      name: 'protección',
      component: Protección,
    },
    {
      path: '/beneficios/medico',
      name: 'medico',
      component: Medico,
    },
    {
      path: '/beneficios/servicios',
      name: 'servicios',
      component: Servicios,
    },
    {
      path: '/servicio/educoof',
      name: 'educoof',
      component: Educoof,
    },
    {
      path: '/btns/alianzas',
      name: 'alianzas',
      component: Alianzas,
    },
    {
      path: '/btns/revistas',
      name: 'revistas',
      component: Revistas,
    },
    {
      path: '/info/aviso',
      name: 'aviso',
      component: Aviso,
    },
    {
      path: '/info/despachos-cobranza',
      name: 'despachos-cobranza',
      component: DespachosCobranza,
    },
    {
      path: '/info/historia',
      name: 'historia',
      component: Historia,
    },
    {
      path: '/info/trabajo',
      name: 'trabajo',
      component: Trabajo,
    },
    {
      path: '/servicio/nov-event',
      name: 'nove-event',
      component: NovEventos,
    },
    {
      path: '/servicio/mantenimiento',
      name: 'mantenimiento',
      component: Mantenimiento,
    },
    {
      path: '/servicio/blog',
      name: 'blog',
      component: Blog,
    },
    {
      path: '/servicio/buzon',
      name: 'buzon',
      component: Buzon,
    },
    {
      path: '/info/buro',
      name: 'buro',
      component: Buro,
    },
  ],
})

export default router
