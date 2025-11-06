<template>
  <main>
    <section class="credito-contaner">
      <div class="alert alert-light" role="info" style="font-size: large;">
        <strong>AVISO IMPORTANTE:</strong> Todos los productos de crédito están sujetos a aprobación conforme a las
        políticas internas y requisitos vigentes. Consulta términos y condiciones en tu sucursal. La Cooperativa se
        reserva el derecho de solicitar la comprobación del destino del crédito en los casos que así lo determine.
      </div>
      <div class="credito-tipe">CONSUMO</div>
      <div class="card-container row justify-content-center">
        <CpsCreditCard v-for="credit in consumoCredits" :key="credit.id" :credit="credit" />
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import CpsCreditCard from '@/components/cards/CpsCreditCard.vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''


interface CreditSection {
  id: string
  title: string
  content: string[] | string
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

// Credit data for Consumo section
const consumoCredits: CreditData[] = [
  {
    id: 'creditAutomatic',
    name: 'CRÉDITO AUTOMÁTICO',
    icon: `${assetPrefix}/assets/icon/credits/automatico.png`,
    description: 'Ideal para imprevistos o necesidades personales, te ofrecemos un préstamo de hasta el 90% de tus ahorros.',
    simulatorUrl: '/inicio/simulador/automatico',
    sections: [
      {
        id: 'AutomaticOne',
        title: 'Montos y plazos',
        content: [
          'Desde $500 hasta $50,000 | Hasta 36 meses',
          'De $50,001 hasta el 3% del capital neto de la entidad| Hasta 60 meses'
        ]
      },
      {
        id: 'AutomaticTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.00%',
          'Anual 12.00%'
        ]
      },
      {
        id: 'AutomaticThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 3%',
          'Anual 36%'
        ]
      },
      {
        id: 'AutomaticFour',
        title: 'CAT promedio (sin IVA)',
        content: ['195.3%', 'CAT promedio para fines informativos y de comparación.']
      },
      {
        id: 'AutomaticFive',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna Comisión.']
      },
      {
        id: 'AutomaticEight',
        title: 'Pagos',
        content: ['Mensuales, sobre saldo insoluto']
      },
      {
        id: 'AutomaticSix',
        title: 'Requisitos',
        content: [
          'Ser Socio con parte social completa y expediente actualizado',
          'Identificación oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)'
        ]
      },
      {
        id: 'AutomaticNine',
        title: 'Beneficios',
        content: [
          'No es necesario un aval',
          'No necesitas justificar en qué gastas el crédito',
          'Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.',
        ]
      },
      {
        id: 'AutomaticSeven',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio'
        ]
      }
    ]
  },
  {
    id: 'creditLomio',
    name: 'Credilomio',
    icon: `${assetPrefix}/assets/icon/credits/credilomio.png`,
    description: 'Ideal para imprevistos o necesidades personales, te ofrecemos un préstamo de hasta el 90% de tus ahorros.',
    simulatorUrl: '/inicio/simulador/credilomio',
    sections: [
      {
        id: 'LomioOne',
        title: 'Montos y plazos',
        content: [
          'Desde $500 hasta $50,000 | Hasta 36 meses',
          'De $50,001 hasta el 3% del capital neto de la entidad| Hasta 60 meses'
        ]
      },
      {
        id: 'LomioTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.00%',
          'Anual 12.00%'
        ]
      },
      {
        id: 'LomioThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 3%',
          'Anual 36%'
        ]
      },
      {
        id: 'LomioFour',
        title: 'CAT promedio (sin IVA)',
        content: ['13.5%']
      },
      {
        id: 'LomioFive',
        title: 'Comisiones',
        content: ['Sin comisión por apertura']
      },
      {
        id: 'LomioSix',
        title: 'Requisitos',
        content: [
          'Llenar y firmar solicitud',
          'Comprobante de ingresos',
          'Identificación oficial vigente',
          'Comprobante de domicilio no mayor a 3 meses'
        ]
      },
      {
        id: 'LomioSeven',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio'
        ]
      }
    ]
  },
  {
    id: 'creditPrimero',
    name: 'Mi Primer Crédito',
    icon: `${assetPrefix}/assets/icon/credits/mi_primer_credito.png`,
    description: 'Crédito para nuestros Socios jóvenes que desean comenzar con su historial de crédito.',
    simulatorUrl: '/inicio/simulador/mi-primer-credito',
    sections: [
      {
        id: 'PrimeroOne',
        title: 'Montos y plazos',
        content: ['Desde $500 hasta $10,000 | Hasta 18 meses']
      },
      {
        id: 'PrimeroTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.5%',
          'Anual 18%'
        ]
      },
      {
        id: 'PrimeroThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 3%',
          'Anual 36%'
        ]
      },
      {
        id: 'PrimeroFour',
        title: 'CAT promedio (sin IVA)',
        content: ['20.1%']
      },
      {
        id: 'PrimeroFive',
        title: 'Comisiones',
        content: ['Sin comisión por apertura']
      },
      {
        id: 'PrimeroSix',
        title: 'Requisitos',
        content: [
          'Llenar y firmar solicitud',
          'Comprobante de ingresos mensual por los últimos 3 meses',
          'Identificación oficial vigente',
          'Comprobante de domicilio no mayor a 3 meses',
          'Ser mayor de 18 años y menor de 30 años'
        ]
      },
      {
        id: 'PrimeroSeven',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio'
        ]
      }
    ]
  },
  {
    id: 'creditGodin',
    name: 'Crédito Godín',
    icon: `${assetPrefix}/assets/icon/credits/credigodin.png`,
    description: 'Crédito pensado para nuestros asalariados, pensionados o jubilados que desean cubrir necesidades o gastos personales.',
    simulatorUrl: '/inicio/simulador/credilomio',
    sections: [
      {
        id: 'GodinOne',
        title: 'Montos y plazos',
        content: ['Desde $1,000 hasta $30,000 | Hasta 36 meses']
      },
      {
        id: 'GodinTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.35%',
          'Anual 16.2%'
        ]
      },
      {
        id: 'GodinThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 3%',
          'Anual 36%'
        ]
      },
      {
        id: 'GodinFour',
        title: 'CAT promedio (sin IVA)',
        content: ['18.0%']
      },
      {
        id: 'GodinFive',
        title: 'Comisiones',
        content: ['Sin comisión por apertura']
      },
      {
        id: 'GodinSix',
        title: 'Requisitos',
        content: [
          'Llenar y firmar solicitud',
          'Comprobante de ingresos mensual por los últimos 3 meses',
          'Identificación oficial vigente',
          'Comprobante de domicilio no mayor a 3 meses'
        ]
      },
      {
        id: 'GodinSeven',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio'
        ]
      }
    ]
  },
  {
    id: 'creditOrdinarioHipo',
    name: 'Crédito Ordinario Hipotecario',
    icon: `${assetPrefix}/assets/icon/credits/ordinario_hipotecario.png`,
    description: 'Crédito con garantía hipotecaria para que adquieras lo que necesitas sin complicaciones.',
    simulatorUrl: '/inicio/simulador/hipotecario',
    sections: [
      {
        id: 'OrdinarioHipoOne',
        title: 'Montos y plazos',
        content: ['Desde $300,001 hasta $5,000,000 | Hasta 240 meses']
      },
      {
        id: 'OrdinarioHipoTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 0.83%',
          'Anual 10%'
        ]
      },
      {
        id: 'OrdinarioHipoThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 3%',
          'Anual 36%'
        ]
      },
      {
        id: 'OrdinarioHipoFour',
        title: 'CAT promedio (sin IVA)',
        content: ['11.6%']
      },
      {
        id: 'OrdinarioHipoFive',
        title: 'Comisiones',
        content: ['1% + IVA']
      },
      {
        id: 'OrdinarioHipoSix',
        title: 'Requisitos',
        content: [
          'Llenar y firmar solicitud',
          'Comprobante de ingresos',
          'Identificación oficial vigente',
          'Comprobante de domicilio no mayor a 3 meses',
          'Estados de cuenta bancarios',
          'Documentos del inmueble'
        ]
      },
      {
        id: 'OrdinarioHipoSeven',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio'
        ]
      }
    ]
  },
  {
    id: 'creditConstruccion',
    name: 'Crédito Construcción',
    icon: `${assetPrefix}/assets/icon/credits/vivienda.png`,
    description: 'Crédito diseñado para desarrollar proyectos de construcción de vivienda, comercio o servicios.',
    simulatorUrl: '/inicio/simulador/construccion',
    sections: [
      {
        id: 'ConstruccionOne',
        title: 'Montos y plazos',
        content: ['Desde $10,000 hasta $1,000,000 | Hasta 120 meses']
      },
      {
        id: 'ConstruccionTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.00%',
          'Anual 12.00%'
        ]
      },
      {
        id: 'ConstruccionThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 3%',
          'Anual 36%'
        ]
      },
      {
        id: 'ConstruccionFour',
        title: 'CAT promedio (sin IVA)',
        content: ['13.5%']
      },
      {
        id: 'ConstruccionFive',
        title: 'Comisiones',
        content: ['Sin comisión por apertura']
      },
      {
        id: 'ConstruccionSix',
        title: 'Requisitos',
        content: [
          'Llenar y firmar solicitud',
          'Comprobante de ingresos',
          'Identificación oficial vigente',
          'Comprobante de domicilio no mayor a 3 meses',
          'Constancia de situación fiscal actualizada',
          'Estados de cuenta bancarios',
          'Documentos de la obra a construir'
        ]
      },
      {
        id: 'ConstruccionSeven',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio'
        ]
      }
    ]
  },
  {
    id: 'creditEducativo',
    name: 'Crédito Educativo',
    icon: `${assetPrefix}/assets/icon/credits/ordinario.png`,
    description: 'Financiamiento para estudios universitarios, posgrados y cursos de especialización.',
    simulatorUrl: '/inicio/simulador/educativo',
    sections: [
      {
        id: 'EducativoOne',
        title: 'Montos y plazos',
        content: ['Desde $5,000 hasta $200,000 | Hasta 60 meses']
      },
      {
        id: 'EducativoTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.20%',
          'Anual 14.4%'
        ]
      },
      {
        id: 'EducativoThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 3%',
          'Anual 36%'
        ]
      },
      {
        id: 'EducativoFour',
        title: 'CAT promedio (sin IVA)',
        content: ['16.2%']
      },
      {
        id: 'EducativoFive',
        title: 'Comisiones',
        content: ['Sin comisión por apertura']
      },
      {
        id: 'EducativoSix',
        title: 'Requisitos',
        content: [
          'Llenar y firmar solicitud',
          'Comprobante de ingresos',
          'Identificación oficial vigente',
          'Comprobante de domicilio no mayor a 3 meses',
          'Carta de aceptación de institución educativa',
          'Comprobante de costos educativos'
        ]
      },
      {
        id: 'EducativoSeven',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio'
        ]
      }
    ]
  },
  {
    id: 'creditEmergencia',
    name: 'Crédito de Emergencia',
    icon: `${assetPrefix}/assets/icon/credits/automatico.png`,
    description: 'Crédito rápido para situaciones de emergencia médica o familiar urgente.',
    simulatorUrl: '/inicio/simulador/emergencia',
    sections: [
      {
        id: 'EmergenciaOne',
        title: 'Montos y plazos',
        content: ['Desde $1,000 hasta $25,000 | Hasta 24 meses']
      },
      {
        id: 'EmergenciaTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.75%',
          'Anual 21%'
        ]
      },
      {
        id: 'EmergenciaThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 3%',
          'Anual 36%'
        ]
      },
      {
        id: 'EmergenciaFour',
        title: 'CAT promedio (sin IVA)',
        content: ['23.5%']
      },
      {
        id: 'EmergenciaFive',
        title: 'Comisiones',
        content: ['Sin comisión por apertura']
      },
      {
        id: 'EmergenciaSix',
        title: 'Requisitos',
        content: [
          'Llenar y firmar solicitud',
          'Identificación oficial vigente',
          'Comprobante de domicilio no mayor a 3 meses',
          'Comprobante de la emergencia (médica o familiar)'
        ]
      },
      {
        id: 'EmergenciaSeven',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio'
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
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.credito-contaner .card-container .card-credito img {
  width: 120px;
}

.credito-contaner .card-container .card-credito .card-credito-btn {
  background-color: var(--color-primario);
  border-radius: 30px;
  padding: 15px 0;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
}

.credito-contaner .card-container .card-credito .card-credito-btn:hover {
  background-color: var(--color-secundario);
  transform: scale(1.05);
}

.card-credito-info {
  grid-column: 1 / -1;
  background: rgba(200, 200, 200, 0.3);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  padding: 30px;
  margin: 20px 0 40px 0;
}

.card-credito-detalle {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.1rem;
  color: #333;
}

.card-credito-btn-simulador {
  display: block;
  background-color: var(--color-primario);
  color: white;
  padding: 15px;
  text-decoration: none;
  border-radius: 25px;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  transition: all 0.3s ease;
}

.card-credito-btn-simulador:hover {
  background-color: var(--color-secundario);
  color: white;
  transform: scale(1.02);
}

.accordion-button {
  background-color: var(--color-primario);
  color: white;
  border: none;
}

.accordion-button:not(.collapsed) {
  background-color: var(--color-secundario);
  color: white;
}

.accordion-button:focus {
  box-shadow: 0 0 0 0.25rem rgba(70, 162, 253, 0.25);
}

.accordion-body {
  background-color: white;
}

@media (max-width: 768px) {
  .credito-contaner {
    padding: 20px 5%;
  }

  .credito-contaner .credito-tipe {
    font-size: 2rem;
  }

  .credito-contaner .card-container {
    gap: 20px;
  }
}
</style>
