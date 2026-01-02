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
        content: ['193.3%', 'CAT promedio para fines informativos y de comparación.']
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
    name: 'CREDILOMIO',
    icon: `${assetPrefix}/assets/icon/credits/credilomio.png`,
    description: 'Ideal para imprevistos o necesidades personales, te ofrecemos un préstamo de hasta el 90% de tus ahorros.',
    simulatorUrl: '/inicio/simulador/credilomio',
    sections: [
      {
        id: 'LomioOne',
        title: 'Montos y plazos',
        content: [
          'Desde $500 hasta $50,000 | Hasta 36 meses',
          'De $50,001 hasta el 3% del capital neto de la entidad | Hasta 60 meses',
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
        content: ['201.6%', 'CAT promedio para fines informativos y de comparación.']
      },
      {
        id: 'LomioFive',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna Comisión.']
      },
      {
        id: 'LomioNine',
        title: 'Pagos',
        content: ['Mensuales, sobre saldo insoluto']
      },
      {
        id: 'LomioSix',
        title: 'Requisitos',
        content: [
          'Ser Socio con parte social completa y expediente actualizado',
          'Identificación oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)'
        ]
      },
      {
        id: 'LomioTen',
        title: 'Beneficios',
        content: [
          'No es necesario un aval',
          'No necesitas justificar en qué gastas el crédito',
          'Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.'
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
    name: 'MI PRIMER CRÉDITO',
    icon: `${assetPrefix}/assets/icon/credits/mi_primer_credito.png`,
    description: 'Crédito para nuestros Socios jóvenes que desean comenzar con su historial de crédito.',
    simulatorUrl: '/inicio/simulador/mi-primer-credito',
    sections: [
      {
        id: 'PrimeroOne',
        title: 'Montos y plazos',
        content: ['Desde $5,000 hasta $25,000 | Hasta 36 meses']
      },
      {
        id: 'PrimeroTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 2',
          'Anual 24%'
        ]
      },
      {
        id: 'PrimeroThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'PrimeroFour',
        title: 'CAT promedio (sin IVA)',
        content: ['26.8%', 'CAT promedio para fines informativos y de comparación.']
      },
      {
        id: 'PrimeroFive',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna Comisión.']
      },
      {
        id: 'PrimeroNine',
        title: 'Pagos',
        content: ['Mensuales, sobre saldo insoluto']
      },
      {
        id: 'PrimeroSix',
        title: 'Requisitos',
        content: [
          'Edad de 18 a 20 años',
          'Ser Socio con parte social completa y expediente actualizado',
          '10% de garantía financiera en tu cuenta de ahorro.',
          'Identificación oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.',
          'Aval con buen historial crediticio.',
          'Autorización para consulta de buró de crédito (SIC) del aval.'
        ]
      },
      {
        id: 'PrimeroNine',
        title: 'Beneficios',
        content: [
          'Comienza a generar historial crediticio.',
          'Flexibilidad en tu primer crédito.'
        ]
      },
      {
        id: 'PrimeroSeven',
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
    id: 'creditGodin',
    name: 'CRÉDITO CREDI GODÍN',
    icon: `${assetPrefix}/assets/icon/credits/credigodin.png`,
    description: 'Crédito pensado para nuestros asalariados, pensionados o jubilados que desean cubrir necesidades o gastos personales.',
    simulatorUrl: '/inicio/simulador/credilomio',
    sections: [
      {
        id: 'GodinOne',
        title: 'Montos y plazos',
        content: ['Desde $5,000 hasta $100,000 | Hasta 72 meses']
      },
      {
        id: 'GodinTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 2%',
          'Anual 24%'
        ]
      },
      {
        id: 'GodinThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'GodinFour',
        title: 'CAT promedio (sin IVA)',
        content: [
          '26.8%',
          'CAT promedio para fines informativos y de comparación.'
        ]
      },
      {
        id: 'GodinFive',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna Comisión.']
      },
      {
        id: 'GodinNine',
        title: 'Pagos',
        content: ['Mensuales, sobre saldo insoluto']
      },
      {
        id: 'GodinSix',
        title: 'Requisitos',
        content: [
          '18 años en adelante',
          'Ser Socio con parte social completa y expediente actualizado',
          '10% de garantía financiera en tu cuenta de ahorro.',
          'Identificación oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (Estado de cuenta bancaria y/o nómina timbrada de los últimos 30 días) En caso de asalariado, contar con 6 meses de antigüedad comprobable en el empleo.',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.',
          'Aval con buen historial crediticio.',
          'Autorización para consulta de buró de crédito (SIC) del aval.'
        ]
      },
      {
        id: 'GodinTen',
        title: 'Beneficios',
        content: [
          'Especial para quienes reciben nómina o pensión',
          'Puedes acceder incluso si ya estás jubilado',
          'Si pagas de manera puntal capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.'
        ]
      },
      {
        id: 'GodinSeven',
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
    id: 'creditOrdinario',
    name: 'PRÉSTAMO ORDINARIO',
    icon: `${assetPrefix}/assets/icon/credits/ordinario.png`,
    description: 'Crédito personal de Caja Popular San Pablo, para que tú decidas en qué usarlo.',
    simulatorUrl: '/inicio/simulador/ordinario',
    sections: [
      {
        id: 'OrdinarioOne',
        title: 'Montos y plazos',
        content: ['Desde $5,000 hasta $300,000 | Hasta 72 meses']
      },
      {
        id: 'OrdinarioTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.8%',
          'Anual 21.60%'
        ]
      },
      {
        id: 'OrdinarioThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'OrdinarioFour',
        title: 'CAT promedio (sin IVA)',
        content: [
          '18.6%',
          'CAT promedio para fines informativos y de comparación.'
        ]
      },
      {
        id: 'OrdinarioFive',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna Comisión.']
      },
      {
        id: 'OrdinarioFive',
        title: 'Pagos',
        content: ['Mensuales, sobre saldo insoluto']
      },
      {
        id: 'OrdinarioSix',
        title: 'Requisitos',
        content: [
          '18 años en adelante',
          'Ser Socio con parte social completa y expediente actualizado',
          '10% de garantía financiera en tu cuenta de ahorro.',
          'Identificación oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (de los últimos 30 días)',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.',
          'Aval con buen historial crediticio.',
          'Autorización para consulta de buró de crédito (SIC) del aval.'
        ]
      },
      {
        id: 'OrdinarioTen',
        title: 'Beneficios',
        content: [
          'Se podrá exentar el requisito de aval.',
          'Si pagas de manera puntual capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.'
        ]
      },
      {
        id: 'OrdinarioSeven',
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
    id: 'creditLeal',
    name: 'PRÉSTAMO CREDILEAL',
    icon: `${assetPrefix}/assets/icon/credits/credileal.png`,
    description: 'Crédito de consumo exclusivo para Socios con una sólida trayectoria en la cooperativa.',
    simulatorUrl: '/inicio/simulador/credileal',
    sections: [
      {
        id: 'CreditLealOne',
        title: 'Montos y plazos',
        content: [
          'Desde $5,000 hasta $100,000 | Hasta 72 meses',
          'De $100,001 hasta $200,000| Hasta 60 meses'
        ]
      },
      {
        id: 'CreditLealTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.5%',
          'Anual 18%'
        ]
      },
      {
        id: 'CreditLealThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'CreditLealFour',
        title: 'CAT promedio (sin IVA)',
        content: [
          '14%',
          'CAT promedio para fines informativos y de comparación.'
        ]
      },
      {
        id: 'CreditLealFive',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna Comisión.']
      },
      {
        id: 'CreditLealNine',
        title: 'Pagos',
        content: ['Mensuales, sobre saldo insoluto']
      },
      {
        id: 'CreditLealSix',
        title: 'Requisitos',
        content: [
          '18 años en adelante',
          'Ser Socio con parte social completa y expediente actualizado',
          'Identificación oficial vigente',
          '10% de garantía financiera en tu cuenta de ahorro.',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)',
          'Antigüedad mínima de 3 años como Socio',
          'Ahorro mensual mínimo de 10 meses',
          'Historial crediticio dentro de Caja San Pablo mínimo de 12 meses.',
          'autorización para consulta de buró de crédito (SIC) del solicitante.',
          'Aval con buen historial crediticio.',
          'Autorización para consulta de buró de crédito (SIC) del aval.'
        ]
      },
      {
        id: 'CreditLealTen',
        title: 'Beneficios',
        content: [
          'Reconocimiento a tu trayectoria como socio en Caja San Pablo.',
          'Se podrá exentar el requisito de aval.',
          'Si pagas de manera puntual capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.'
        ]
      },
      {
        id: 'CreditLealSeven',
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
    id: 'creditAutomovil',
    name: 'PRÉSTAMO AUTOMOVIL',
    icon: `${assetPrefix}/assets/icon/credits/automovil.png`,
    description: 'Adquiere tu auto nuevo o seminuevo (hasta 5 años de antigüedad) para uso personal, disponible en agencias distribuidoras autorizadas o en lotes registrados ante ANCA o AMDA.',
    simulatorUrl: '/inicio/simulador/crediAutomovil',
    sections: [
      {
        id: 'CreditAutomovilOne',
        title: 'Montos y plazos',
        content: [
          'AUTO NUEVO: desde $50,000 hasta $700,000 | Hasta 72 meses',
          'AUTO SEMINUEVO: desde $50,000 hasta $300,000 | Hasta 60 meses'
        ]
      },
      {
        id: 'CreditAutomovilTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.20%',
          'Anual 14.40%'
        ]
      },
      {
        id: 'CreditAutomovilThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'CreditAutomovilFour',
        title: 'CAT promedio (sin IVA)',
        content: [
          '15.3%',
          'CAT promedio para fines informativos y de comparación.'
        ]
      },
      {
        id: 'CreditAutomovilFive',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna Comisión.']
      },
      {
        id: 'CreditAutomovilNine',
        title: 'Pagos',
        content: ['Mensuales, sobre saldo insoluto']
      },
      {
        id: 'CreditAutomovilSix',
        title: 'Requisitos',
        content: [
          '18 años en adelante',
          'Ser Socio con parte social completa y expediente actualizado',
          '10% de garantía financiera en tu cuenta de ahorro.',
          'Identificación oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)',
          'Cotización del auto',
          'Cotización de Póliza de seguro vehicular',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.',
          'Aval con buen historial crediticio.',
          'Autorización para consulta de buró de crédito (SIC) del aval.'
        ]
      },
      {
        id: 'CreditAutomovilTen',
        title: 'Beneficios',
        content: [
          'Se podrá exentar el requisito de aval.',
          'Si pagas de manera puntual capital e interés, puedes acceder a un descuento en la tasa de interés ordinaria.',
          'Este tipo de préstamo podrá otorgarse al acreditado independientemente si cuenta con otro u otros préstamos con saldo a favor de la Cooperativa.'
        ]
      },
      {
        id: 'CreditAutomovilSeven',
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
    id: 'creditOrdinarioHipotecario',
    name: 'PRÉSTAMO ORDINARIO HIPOTECARIO',
    icon: `${assetPrefix}/assets/icon/credits/ordinario_hipotecario.png`,
    description: 'Crédito con garantía hipotecaria para que adquieras lo que necesitas sin complicaciones. Montos y plazos',
    simulatorUrl: '/inicio/simulador/creditOrdinarioHipotecario',
    sections: [
      {
        id: 'CreditOrdinarioHipoOne',
        title: 'Montos y plazos',
        content: [
          'Desde $300,001 hasta $5,000,000 | Hasta 240 meses',
        ]
      },
      {
        id: 'CreditOrdinarioHipoTwo',
        title: 'Tasa Ordinaria',
        content: [
          'Mensual 1.00%',
          'Anual 12.00%'
        ]
      },
      {
        id: 'CreditOrdinarioHipoThree',
        title: 'Tasa Moratoria',
        content: [
          'Mensual 4%',
          'Anual 48%'
        ]
      },
      {
        id: 'CreditOrdinarioHipoFour',
        title: 'CAT promedio (sin IVA)',
        content: [
          '13.2%',
          'CAT promedio para fines informativos y de comparación.'
        ]
      },
      {
        id: 'CreditOrdinarioHipoFive',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna Comisión.']
      },
      {
        id: 'CreditOrdinarioHipoNine',
        title: 'Pagos',
        content: ['Mensuales']
      },
      {
        id: 'CreditOrdinarioHipoSix',
        title: 'Requisitos',
        content: [
          '18 años en adelante',
          'Ser Socio con parte social completa y expediente actualizado',
          '$20,000 pesos de garantía financiera en tu cuenta de ahorro.',
          'Identificación oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)',
          'Garantía hipotecaria: se financiará hasta un máximo del 50% del valor del avalúo de la garantía. Documentación de la garantía: escritura, comprobante de pago de predial, Para más detalles, acércate a tu asesor.',
          'Avaluó de propiedad a hipotecar.',
          'Cotización de las pólizas de seguros de vida y daños',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.'
        ]
      },
      {
        id: 'CreditOrdinarioHipoTen',
        title: 'Beneficios',
        content: [
          'No necesitas un aval',
          'Tasa de interés competitiva',
          'Acompañamiento legal para la formalización de la hipoteca'
        ]
      },
      {
        id: 'CreditOrdinarioHipoSeven',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio',
          'El avalista, obligado solidario o coacreditado responderá como obligado principal por el total del pago frente a la Institución Financiera',
          'Los gastos de escrituración y avalúos corren por cuenta del socio'
        ]
      }
    ]
  },
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
