<template>
  <main>
    <section class="credito-contaner back-black">
      <div class="credito-tipe">COMERCIAL</div>
      <div class="card-container row justify-content-center">
        <!-- Data-driven credit cards using CpsCreditCard component -->
        <CpsCreditCard v-for="credit in commercialCredits" :key="credit.id" :credit="credit" />
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import CpsCreditCard from '@/components/cards/CpsCreditCard.vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


// Define types locally
interface CreditSection {
  id: string
  title: string
  content: string[]
}

interface CreditData {
  id: string
  name: string
  icon: string
  description: string
  detailedDescription?: string
  simulatorUrl?: string
  sections: CreditSection[]
}

// Commercial credit data
const commercialCredits: CreditData[] = [
  {
    id: 'creditComertialAvio',
    name: 'PRÉSTAMO COMERCIAL AVÍO',
    icon: `${assetPrefix}/assets/icon/credits/comercial_avio.png`,
    description: 'Impulsa tu negocio, crédito pensado para actividades comerciales, agrícolas, ganaderas o empresariales.',
    simulatorUrl: '/inicio/simulador/comercial-avio',
    sections: [
      {
        id: 'montos-y-plazos',
        title: 'Montos y Plazos',
        content: [
          'AVÍO COMERCIAL con giro y/o actividad menor a un año de antigüedad: desde $5,000 hasta $50,000 | Hasta 24 meses',
          'AVÍO COMERCIAL con giro y/o actividad mayor a un año de antigüedad: desde $5,000 hasta $300,000 | Hasta 60 meses',
          'AVÍO AGRO/GANADERO (sector primario) con giro y/o actividad mayor a un año de antigüedad: desde $5,000 hasta $300,000 | Hasta 12 meses'
        ]
      },
      {
        id: 'tasa-ordinaria',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.80%',
          'Anual 21.60%'
        ]
      },
      {
        id: 'tasa-moratoria',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'cat',
        title: 'CAT promedio (sin IVA)',
        content: [
          '14%',
          'CAT promedio para fines informativos y de comparación.'
        ]
      },
      {
        id: 'comisiones',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna comisión.']
      },
      {
        id: 'pagos',
        title: 'Pagos',
        content: ['Mensuales o de acuerdo con tu ciclo productivo']
      },
      {
        id: 'requisitos',
        title: 'Requisitos',
        content: [
          '18 años en adelante',
          'Ser Socio con parte social completa y expediente actualizado',
          '10% de garantía financiera en tu cuenta de ahorros',
          'Identificación Oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)',
          'Constancia de situación fiscal que coincidan con la actividad comercial declarada.',
          'Opinión de cumplimiento en positivo',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.',
          'Auval con buen historial crediticio.',
          'Autorización para consulta de buró de crédito (SIC) del aval.'
        ]
      },
      {
        id: 'beneficios',
        title: 'Beneficios',
        content: [
          'Crédito exento de IVA.',
          'Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.'
        ]
      },
      {
        id: 'nota',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio',
          'El avalista, obligado solidario o coacreditado responderá como obligado principal por el total del pago frente a la Institución Financiera'
        ]
      }
    ]
  },
  {
    id: 'creditComertialRefacc',
    name: 'PRÉSTAMO COMERCIAL REFACCIONARIO',
    icon: `${assetPrefix}/assets/icon/credits/comercial_refaccionario.png`,
    description: 'Crédito a largo plazo destinado a impulsar tu negocio o actividad agropecuaria, ideal para    invertir en la compra, instalación de maquinarias o refacciones que fortalezcan y desarrollen tu producción.',
    simulatorUrl: '/inicio/simulador/comercial-refaccionario',
    sections: [
      {
        id: 'moontos-y-plazos',
        title: 'Montos y Plazos',
        content: [
          'REFACCIONARIO COMERCIAL Y AGRO/GANADERO con giro y/o actividad menor a un año de antigüedad: Desde $5,000 hasta $50,000 | Hasta 24 meses',
          'REFACCIONARIO COMERCIAL Y AGRO/GANADERO (con giro y/o actividad mayor a un año de antigüedad): Desde $5,000 hasta $300,000 | Hasta 48 meses'
        ]
      },
      {
        id: 'tasa-ordinaria',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.80%',
          'Anual 21.60%'
        ]
      },
      {
        id: 'tasa-moratoria',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'cat',
        title: 'CAT promedio (sin IVA)',
        content: [
          '13.5%',
          'CAT promedio para fines informativos y de comparación.'
        ]
      },
      {
        id: 'comisiones',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna comisión.']
      },
      {
        id: 'pagos',
        title: 'Pagos',
        content: ['Mensual o conforme a tu giro de negocio']
      },
      {
        id: 'requisitos',
        title: 'Requisitos',
        content: [
          '18 años en adelante',
          'Ser Socio con parte social completa y expediente actualizado',
          '10% de garantía financiera en tu cuenta de ahorros',
          'Identificación Oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)',
          'Constancia de situación fiscal que coincidan con la actividad comercial declarada.',
          'Opinión de cumplimiento en positivo',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.',
          'Auval con buen historial crediticio.',
          'Autorización para consulta de buró de crédito (SIC) del aval.',
          'Comprobación del destino del crédito'
        ]
      },
      {
        id: 'beneficios',
        title: 'Beneficios',
        content: [
          '          Crédito exento de IVA',
          'Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.'
        ]
      },
      {
        id: 'nota',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio',
          'El avalista, obligado solidario o coacreditado responderá como obligado principal por el total del pago frente a la Institución Financiera'
        ]
      }
    ]
  },
  {
    id: 'creditPrestaMovil',
    name: 'PRÉSTAMO PRESTA-MÓVIL ',
    icon: `${assetPrefix}/assets/icon/credits/prestamovil.png`,
    description: 'Financiamiento diseñado especialmente para vehículos de transporte, plataformas digitales, taxis y unidades utilitarias',
    simulatorUrl: '/inicio/simulador/prestamovil',
    sections: [
      {
        id: 'montos-y-plazos',
        title: 'Montos y Plazos',
        content: ['Desde $50,000 hasta $1,400,000 | Hasta 72 meses']
      },
      {
        id: 'tasa-ordinaria',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.20%',
          'Anual 14.40%'
        ]
      },
      {
        id: 'tasa-moratoria',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'cat',
        title: 'CAT promedio (sin IVA)',
        content: [
          '15.3%',
          'CAT promedio para fines informativos y de comparación.'
        ]
      },
      {
        id: 'comisiones',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna comisión.']
      },
      {
        id: 'pagos',
        title: 'Pagos',
        content: ['Mensuales, sobre saldo insoluto']
      },
      {
        id: 'requisitos',
        title: 'Requisitos',
        content: [
          '18 años en adelante',
          'Ser Socio con parte social completa y expediente actualizado',
          '10% de garantía financiera en tu cuenta de ahorros',
          'Identificación Oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)',
          'Permiso vigente para la prestación del servicio de transporte.',
          'Cotización del auto.',
          'Cotización de Póliza de seguro vehicular.',
          'Constancia de situación fiscal que coincidan con la actividad comercial declarada.',
          'Opinión de cumplimiento en positivo',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.',
          'Auval con buen historial crediticio.',
          'Autorización para consulta de buró de crédito (SIC) del aval.'
        ]
      },
      {
        id: 'beneficios',
        title: 'Beneficios',
        content: [
          'Crédito exento de IVA.',
          'Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.'
        ]
      },
      {
        id: 'nota',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio',
          'El avalista, obligado solidario o coacreditado responderá como obligado principal por el total del pago frente a la Institución Financiera'
        ]
      }
    ]
  },
  {
    id: 'creditComertialRefaccHipo',
    name: 'PRÉSTAMO COMERCIAL REFACCIONARIO HIPOTECARIO',
    icon: `${assetPrefix}/assets/icon/credits/refaccionario_hipotecario.png`,
    description: 'Crédito a largo plazo con garantía hipotecaria para hacer crecer tu negocio o actividad agropecuaria. Invierte, equípate y fortalece tu producción.',
    simulatorUrl: '/inicio/simulador/comercial-refaccionario-hipotecario',
    sections: [
      {
        id: 'montos-y-plazos',
        title: 'Montos y Plazos',
        content: [
          'REFACCIONARIO HIPOTECARIO NEGOCIO: Desde $300,001 hasta $5,000,000 | Hasta 120 meses',
          'REFACCIONARIO HIPOTECARIO AGROGANAERO: Desde $300,001 hasta $5,000,000 | Hasta 48 meses'
        ]
      },
      {
        id: 'tasa-ordinaria',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.8%',
          'Anual 21.6%'
        ]
      },
      {
        id: 'tasa-moratoria',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'cat',
        title: 'CAT promedio (sin IVA)',
        content: [
          '13.4',
          'CAT promedio para fines informativos y de comparación.'
        ]
      },
      {
        id: 'comisiones',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna comisión.']
      },
      {
        id: 'pagos',
        title: 'Pagos',
        content: ['Mensual sobre saldos insolutos']
      },
      {
        id: 'requisitos',
        title: 'Requisitos',
        content: [
          '18 años en adelante',
          'Ser Socio con parte social completa y expediente actualizado',
          '$20,000 pesos de garantía financiera en tu cuenta de ahorro.',
          'Identificación Oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)',
          'Constancia de situación fiscal que coincidan con la actividad comercial declarada.',
          'Opinión de cumplimiento en positivo',
          'Avaluó de propiedad a hipotecar.',
          'Garantía hipotecaria: se financiará hasta un máximo del 80% del valor del avalúo de la garantía.',
          'Documentación de la garantía: escritura, comprobante de pago de predial, Para más detalles, acércate a tu asesor.',
          'Cotización de las pólizas de seguros de vida y daños',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.'
        ]
      },
      {
        id: 'beneficios',
        title: 'Beneficios',
        content: [
          'Crédito exento de IVA',
          'Acompañamiento legal para la formalización de la hipoteca.',
          'Si pagas de manera puntual capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.'
        ]
      },
      {
        id: 'nota',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio',
          'El avalista, obligado solidario o coacreditado responderá como obligado principal por el total del pago frente a la Institución Financiera',
          'Los gastos de escrituración y avalúos corren por cuenta del socio.'
        ]
      }
    ]
  }
]
</script>
<style lang="css" scoped>
.card-credito-details {
  margin: 20px 0;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
}

.card-credito {
  padding: 40px 20px 20px 20px;
  margin-bottom: 50px;
  border-radius: 25px;
  background-color: #e9ecef;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 400px;
}

.cat-gat {
  font-size: large;
  font-weight: bold;
}

.back-black {
  background-color: var(--color-gris);
}

.credito-contaner {
  width: 100%;
  padding: 40px 10%;
  margin: auto;
}

.credito-contaner .credito-tipe {
  font-size: 3rem;
  color: var(--color-negro);
  text-align: center;
}

.credito-contaner .card-container {
  padding: 40px 0;
  gap: 0px 80px;
  justify-content: space-evenly;
}

.credito-contaner .card-container .card-credito {
  text-align: center;
  padding-bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.credito-contaner .card-container .card-credito img {
  text-align: center;
  width: 100%;
  /* max-width: 300px; */
}

.credito-contaner .card-container .card-credito .card-credito-title {
  font-size: 1.2rem;
  height: 85px;
  color: var(--color-negro);
  display: flex;
  align-items: center;
  justify-content: center;
}

.credito-contaner .card-container .card-credito .card-credito-btn {
  font-size: 1.1rem;
  background-color: var(--color-primario);
  color: var(--color-blanco);
  height: 40px;
  width: 110px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto 20px auto;
  margin-top: auto;
  transition: all 0.3s ease-out;
  cursor: pointer;
}

.credito-contaner .card-container .card-credito-info {
  width: 80%;
  padding: 30px 15px;
  height: auto;
  background-color: var(--color-primario);
  border-radius: 20px;
  display: block;
  width: 92%;
  min-width: 300px;
}

.credito-contaner .card-container .card-credito-info .accordion .accordion-item {
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.credito-contaner .card-container .card-credito-info .accordion .accordion-item .accordion-header .accordion-button b {
  color: var(--color-primario);
}

.credito-contaner .card-container .card-credito-info .card-credito-detalle {
  margin-bottom: 30px;
  font-size: 20px;
  color: var(--color-blanco);
  text-align: center;
}

.credito-contaner .card-container .card-credito-info .card-credito-btn-simulador {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-weight: 700;
  background-color: var(--color-gris);
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 15px;
  margin: auto auto 35px;
  color: var(--color-naranja);
  width: 65%;
  max-width: 320px;
}

.credito-contaner .card-container .card-credito-info .card-credito-btn-simulador i {
  margin-left: 5px;
}

.credito-contaner .card-container .card-credito-info .btnsinfo {
  width: 100%;
  margin-bottom: 10px;
  font-size: 1.5rem;
  color: var(--color-azul-oscuro);
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

.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  /* Optional: Set a width for the image if it's not full width */
  width: 60%;
}
</style>
