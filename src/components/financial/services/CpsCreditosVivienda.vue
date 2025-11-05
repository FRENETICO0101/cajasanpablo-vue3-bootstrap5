<template>
  <main>
    <section class="credito-contaner">
      <div class="credito-tipe">VIVIENDA</div>
      <div class="card-container row justify-content-center">
        <!-- Data-driven credit cards using CpsCreditCard component with modal -->
        <CpsCreditCard
          v-for="credit in viviendaCredits"
          :key="credit.id"
          :credit="credit"
          button-text="Ver detalles"
        />
      </div>
    </section>
  </main>
</template> 
<script setup lang="ts">
import CpsCreditCard from '@/components/cards/CpsCreditCard.vue'

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

// Housing credit data
const viviendaCredits: CreditData[] = [
  {
    id: 'prestamoVivienda',
    name: 'Crédito Vivienda',
    icon: '/src/assets/icon/credits/vivienda.png',
    description: 'Diseñado para construir, remodelar o ampliar tu casa. Ideal para mejorar tu patrimonio.',
    simulatorUrl: '/inicio/simulador/vivienda',
    sections: [
      {
        id: 'montos-plazos',
        title: 'Montos y plazos',
        content: ['Desde $300,001 hasta $8,000,000 | Hasta 240 meses']
      },
      {
        id: 'tasa-ordinaria',
        title: 'Tasa Ordinaria',
        content: ['Mensual 0.8%', 'Anual 9.60 %']
      },
      {
        id: 'tasa-moratoria',
        title: 'Tasa Moratoria',
        content: ['Mensual 3%', 'Anual 36%']
      },
      {
        id: 'cat',
        title: 'CAT promedio (sin IVA)',
        content: ['<span class="cat-gat">11.1%</span>', 'CAT promedio para fines informativos y de comparación.']
      },
      {
        id: 'comisiones',
        title: 'Comisiones',
        content: ['Este producto no genera ninguna Comisión.']
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
          'Identificación oficial vigente',
          'Comprobante de domicilio (no mayor a 60 días)',
          'Comprobante de ingresos (no mayor a 30 días)',
          'Garantía hipotecaria: se financiará hasta un máximo del 90% del valor del avalúo de la garantía.',
          'Documentación de la garantía: escritura, comprobante de pago de predial, Para más detalles, acércate a tu asesor.',
          'Avaluó de propiedad a hipotecar.',
          'Cotización de las pólizas de seguros de vida y daños',
          'Autorización para consulta de buró de crédito (SIC) del solicitante.'
        ]
      },
      {
        id: 'beneficios',
        title: 'Beneficios',
        content: [
          'No necesitas aval.',
          'Tasa de interés competitiva.',
          'Acompañamiento legal para la formalización de la hipoteca.'
        ]
      },
      {
        id: 'nota',
        title: 'Nota',
        content: [
          'Incumplir tus obligaciones te puede generar comisiones e intereses moratorios',
          'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio',
          'El avalista, obligado solidario o coacreditado responderá como obligado principal por el total del pago frente a la Institución Financiera',
          'Los gastos de escrituración y avalúos corren por cuenta del socio'
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
  cursor: pointer;
}

.credito-contaner .card-container .card-credito .card-credito-btn:hover {
  background-color: var(--color-naranja);
}

.center-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
</style>
