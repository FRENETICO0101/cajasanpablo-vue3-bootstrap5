<template>
  <main>
    <CpsPageHeader
      title="CUENTAS DE DEPÓSITO"
      :image-url="`${assetPrefix}/assets/cuentas_deposito_resized.webp`"
      imageAlt="familia-mexicana-sonriente-tiro-medio"
      colorText="text-black"
    />

    <div class="container mb-5 mt-5 px-3">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 g-lg-4">
        <div class="col card-deposito">
          <div class="card h-100 shadow-lg">
            <div class="card-img-top ahorro-adulto-bg" role="img" aria-label="Ahorro Adulto"></div>
            <div class="card-body">
              <p class="card-text text-center text-cards-description">
                Cuenta dónde se realizan depósitos en moneda nacional cuyo saldo recibe un interés anual fijo.
              </p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-cards" data-bs-toggle="modal" data-bs-target="#modalAhorroAdulto">
                <span>Ver detalles</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col card-deposito">
          <div class="card h-100 shadow-lg">
            <div class="card-img-top ahorro-menores-bg" role="img" aria-label="Cuenta de Ahorro de Menores de Edad"></div>
            <div class="card-body">
              <p class="card-text text-center text-cards-description">
                Cuenta dónde se realizan depósitos en moneda nacional, cuyo propósito es inculcar el hábito del ahorro
                a los menores de edad de 1 a 17 años.
              </p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-cards" data-bs-toggle="modal" data-bs-target="#modalAhorroMenores">
                <span>Ver detalles</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col card-deposito">
          <div class="card h-100 shadow-lg">
            <div class="card-img-top cuenta-corriente-bg" role="img" aria-label="Cuenta Corriente"></div>
            <div class="card-body">
              <p class="card-text text-center text-cards-description">
                Cuenta dónde se realizan depósitos en moneda nacional, con disponibilidad inmediata.
              </p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-cards" data-bs-toggle="modal" data-bs-target="#modalCuentaCorriente">
                <span>Ver detalles</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col card-deposito">
          <div class="card h-100 shadow-lg">
            <div class="card-img-top plazo-fijo-bg" role="img" aria-label="Plazo Fijo"></div>
            <div class="card-body">
              <p class="card-text text-center text-cards-description">
                Cuenta de inversión que te permite depositar dinero en moneda nacional, durante el plazo único de 28
                días, generando rendimientos al término del plazo contratado.
              </p>
            </div>
            <div class="card-footer text-center">
              <button class="btn btn-cards" data-bs-toggle="modal" data-bs-target="#modalPlazoFijo">
                <span>Ver detalles</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>

  <!-- Modals -->
  <CpsDepositAccountModal
    :modal-id="'modalAhorroAdulto'"
    :title="ahorroAdultoData.title"
    :description="ahorroAdultoData.description"
    :accordion-sections="ahorroAdultoData.accordionSections"
  />

  <CpsDepositAccountModal
    :modal-id="'modalAhorroMenores'"
    :title="ahorroMenoresData.title"
    :description="ahorroMenoresData.description"
    :accordion-sections="ahorroMenoresData.accordionSections"
  />

  <CpsDepositAccountModal
    :modal-id="'modalCuentaCorriente'"
    :title="cuentaCorrienteData.title"
    :description="cuentaCorrienteData.description"
    :accordion-sections="cuentaCorrienteData.accordionSections"
  />

  <CpsDepositAccountModal
    :modal-id="'modalPlazoFijo'"
    :title="plazoFijoData.title"
    :description="plazoFijoData.description"
    :accordion-sections="plazoFijoData.accordionSections"
  />
</template>
<script setup lang="ts">
import CpsPageHeader from '@/components/layout/CpsPageHeader.vue'

import CpsDepositAccountModal from '@/components/modals/CpsDepositAccountModal.vue'

// Get asset prefix from environment
const assetPrefix = import.meta.env.VITE_ASSET_PREFIX || ''

// Data for Ahorro Adulto modal
const ahorroAdultoData = {
  title: 'Cuenta de Ahorro Adulto',
  description: 'Cuenta dónde se realizan depósitos en moneda nacional cuyo saldo recibe un interés anual fijo.',
  accordionSections: [
    {
      title: 'CARACTERÍSTICAS',
      type: 'list' as const,
      content: [
        'Es una cuenta de depósito a la vista que genera rendimientos anuales fijos.',
        'Cuenta destinada a fomentar en el Socio el hábito y cultura del ahorro mediante depósitos sistemáticos y de la permanencia de sus saldos.',
        'Se pueden realizar depósitos y retiros sin ningún tipo de restricción o aviso previo.',
        'La disposición del saldo total o parcial será a la vista mientras no mantengas un compromiso de reciprocidad por un préstamo otorgado.',
        'Los depósitos y retiros de dinero podrán efectuarse en cualquier sucursal de la Cooperativa.',
        'Sin cobro de comisiones.',
        'Apertura de cuenta en cualquiera de nuestras sucursales.',
        'Operaciones en Moneda Nacional.'
      ]
    },
    {
      title: 'VENTAJAS Y BENEFICIOS',
      type: 'list' as const,
      content: [
        'El saldo de tu ahorro podrá ser considerado como reciprocidad para solicitar un préstamo.',
        'No existe cobro por apertura de cuenta.',
        'Te permite elegir la periodicidad de depósitos que más se adapte a tus posibilidades: diario, semanal, quincenal o mensual.',
        'Participar en diferentes promociones durante el año.*',
        'En caso de fallecimiento al beneficiario se le otorgara un monto adicional al saldo del ahorro registrado al momento del deceso. **',
        'Así mismo, en caso de fallecimiento, Caja San Pablo te proporciona apoyo para gastos funerarios.***'
      ],
      notes: [
        { text: '*Aplican restricciones y sujeto al cumplimiento de políticas que se darán a conocer mediante las vías de comunicación oficiales de la Cooperativa.', break: true },
        { text: '**Los detalles de estos montos están sujetos a los términos y condiciones que se dan a conocer al momento de la contratación del producto.', break: true },
        { text: '***Aplican restricciones y sujeto al cumplimiento de políticas que se darán a conocer mediante los medios de avisos oficiales de la Cooperativa.', break: true },
        { text: 'Producto garantizado por el Fideicomiso Fondo de Supervisión Auxiliar de Sociedades Cooperativas de Ahorro y Préstamo y de Protección a sus Ahorradores por 25,000 UDIS (Unidades de Inversión) por persona.' }
      ]
    },
    {
      title: 'REQUISITOS',
      type: 'list' as const,
      content: [
        'Ser Socio de la Cooperativa',
        'Tener cubierta la parte social de $1,000.00 (un mil pesos 00/100 m.n.)',
        'Monto mínimo de apertura: $1.00 (un peso moneda nacional 00/100 m.n.).',
        'Para mayor información consulta en tu sucursal más cercana o llámanos.'
      ]
    },
    {
      title: 'CONSIDERACIONES',
      type: 'text' as const,
      content: [
        { text: '(Ganancia Anual Total Neta) GAT Real', bold: true, break: true },
        { text: '-2.24%', break: true },
        { text: 'Antes de impuestos', bold: true, break: true },
        { text: '"La GAT Real es el rendimiento que obtendría después de descontar la inflación estimada". "Para fines informativos y de comparación" Monto mínimo requerido para obtener la tasa de interés anual es de $100.00 (Cien Pesos 00/100 M/N).', break: true },
        { text: 'Tasa de interés ordinaria anual fija', bold: true, break: true },
        { text: '1.50% Tasas de interés expresadas antes de impuestos.', break: true },
        { text: 'GAT Nominal', bold: true, break: true },
        { text: '1.51% "Antes de impuestos" "Para fines informativos y de comparación" GAT: Ganancia Anual Total Neta. Monto mínimo requerido para obtener la tasa de interés anual es de $100.00 (Cien Pesos 00/100 M/N).', break: true },
        { text: 'Fecha de cálculo: 15 de Diciembre de 2025', bold: true, break: true },
        { text: 'Vigencia: Enero – Junio 2026', bold: true }
      ]
    },
    {
      title: 'RECOMENDACIONES',
      type: 'list' as const,
      content: [
        'Destina al menos el 10% de tus ingresos mensuales al ahorro: verás que luego de algunos meses, contarás con un dinero extra que te caerá muy bien para afrontar algún imprevisto o darte un gusto.',
        'Es importante que tengas asignados a los beneficiarios de tu cuenta.',
        'Recuerda que el plazo máximo para aclaraciones o reclamaciones es de 90 días.',
        'Revisa tú comprobante de depósito cada que realices un movimiento (depósito y/o retiro).'
      ]
    },
    {
      title: 'COMISIONES',
      type: 'simple' as const,
      content: 'ESTE PRODUCTO NO COBRA COMISIÓN ALGUNA POR SU CONTRATACIÓN O USO'
    }
  ]
}

// Data for other modals (abbreviated for brevity - you can add the full data)
const ahorroMenoresData = {
  title: 'Cuenta de Ahorro de Menores de Edad',
  description: 'Cuenta dónde se realizan depósitos en moneda nacional, cuyo propósito es inculcar el hábito del ahorro a los menores de edad de 1 a 17 años.',
  accordionSections: [
    {
      title: 'CARACTERÍSTICAS',
      type: 'list' as const,
      content: [
        'Es una cuenta de depósito a la vista que genera rendimientos anuales fijos.',
        'La cuenta quedará a nombre de menor, quedando como responsable madre, padre o tutor legalmente reconocido.',
        'Se pueden realizar depósitos y retiros sin ningún tipo de restricción o aviso previo, en cualquiera de nuestras sucursales.',
        'Los retiros de la cuenta se efectuarán bajo la firma e identificación del padre o tutor del menor hasta la edad de 18 años.',
        'Apertura en cualquiera de nuestras sucursales en el Estado de Jalisco.',
        'Operaciones en Moneda nacional.',
        'Sin cobro de comisiones.',
        'Los beneficiarios de esta cuenta serán los que designe el padre o tutor.'
      ]
    },
    {
      title: 'VENTAJAS Y BENEFICIOS',
      type: 'list' as const,
      content: [
        'Podrás consultar tu saldo o disponer de tu efectivo mediante tu madre, padre o tutor legalmente reconocido.',
        'No existe cobro por apertura.',
        'Al mantener un ahorro constante, tienes la oportunidad de participar en las promociones especiales que preparamos especialmente para ti.*',
        'Así mismo, en caso de fallecimiento, Caja San Pablo proporciona apoyo para gastos funerarios. **'
      ],
      notes: [
        { text: '*Aplican restricciones y sujeto al cumplimiento de políticas que se darán a conocer mediante las vías de comunicación oficiales de la Cooperativa.', break: true },
        { text: '**Los detalles de este plan de protecciones y apoyos funerarios, están sujetos a los términos y condiciones que se dan a conocer al momento de la contratación del producto.', break: true },
        { text: 'Producto garantizado por el Fideicomiso Fondo de Supervisión Auxiliar de Sociedades Cooperativas de Ahorro y Préstamo y de Protección a sus Ahorradores por 25,000 UDIS (Unidades de Inversión) por persona.' }
      ]
    },
    {
      title: 'REQUISITOS',
      type: 'list' as const,
      content: [
        'Monto mínimo de apertura: $1.00 (un peso moneda nacional 00/100 m.n.).',
        'La cuenta deberá ser contratada por el padre o tutor legal del Ahorrador Menor.',
        'Presentar original del acta de nacimiento y CURP del menor, un comprobante de domicilio y la identificación oficial del padre o tutor.',
        'Para mayor información consulta en tu sucursal más cercana o llámanos.'
      ]
    },
    {
      title: 'CONSIDERACIONES',
      type: 'text' as const,
      content: [
        { text: '(Ganancia Anual Total Neta) GAT Real', bold: true, break: true },
        { text: '-2.2%', break: true },
        { text: 'Antes de impuestos', bold: true, break: true },
        { text: '"La GAT Real es el rendimiento que obtendría después de descontar la inflación estimada". "Para fines informativos y de comparación" Monto mínimo requerido para obtener la tasa de interés anual es de $100.00 (Cien Pesos 00/100 M/N).', break: true },
        { text: 'Tasa de interés ordinaria anual fija', bold: true, break: true },
        { text: '1.50% Tasas de interés expresadas antes de impuestos.', break: true },
        { text: 'GAT Nominal', bold: true, break: true },
        { text: '1.5% "Antes de impuestos" "Para fines informativos y de comparación" GAT: Ganancia Anual Total Neta. Monto mínimo requerido para obtener la tasa de interés anual es de $100.00 (Cien Pesos 00/100 M/N).', break: true },
        { text: 'Fecha de cálculo: 15 de Diciembre de 2025', bold: true, break: true },
        { text: 'Vigencia: Enero – Junio 2026', bold: true }
      ]
    },
    {
      title: 'RECOMENDACIONES',
      type: 'list' as const,
      content: [
        'Fomentar a los menores el hábito del ahorro como parte de su formación personal, para alcanzar sus metas a corto, mediano o largo plazo. Es importante que tengas asignados a los beneficiarios de tu cuenta.',
        'Revisa tú comprobante de depósito cada que realices un movimiento.',
        'Recuerda que el plazo máximo para aclaraciones o reclamaciones es de 90 días.'
      ]
    },
    {
      title: 'COMISIONES',
      type: 'simple' as const,
      content: 'ESTE PRODUCTO NO COBRA COMISIÓN ALGUNA POR SU CONTRATACIÓN O USO'
    }
  ]
}

const cuentaCorrienteData = {
  title: 'CUENTA CORRIENTE',
  description: 'Cuenta dónde se realizan depósitos en moneda nacional, con disponibilidad inmediata.',
  accordionSections: [
    {
      title: 'CARACTERÍSTICAS',
      type: 'list' as const,
      content: [
        'Es una cuenta de depósito a la vista.',
        'Se pueden realizar depósitos y retiros sin ningún tipo de restricción o aviso previo en cualquiera de nuestras sucursales.',
        'Operaciones en moneda nacional.',
        'Sin cobro de comisiones.',
        'Para efectuar retiros solo deberás presentar tu identificación oficial vigente con fotografía.'
      ]
    },
    {
      title: 'VENTAJAS Y BENEFICIOS',
      type: 'list' as const,
      content: [
        'Depósitos y retiros ilimitados a través de cualquiera de nuestras sucursales.',
        'Disponibilidad inmediata de tu dinero.',
        'No requiere un saldo mínimo a mantener.'
      ],
      notes: [
        { text: 'Producto garantizado por el Fideicomiso Fondo de Supervisión Auxiliar de Sociedades Cooperativas de Ahorro y Préstamo y de Protección a sus Ahorradores por 25,000 UDIS (Unidades de Inversión) por persona.' }
      ]
    },
    {
      title: 'REQUISITOS',
      type: 'list' as const,
      content: [
        'Monto mínimo de apertura: $1.00 (un peso moneda nacional 00/100 m.n.).',
        'Ser Socio de la Cooperativa.',
        'Para mayor información consulta en tu sucursal más cercana o llámanos.'
      ]
    },
    {
      title: 'CONSIDERACIONES',
      type: 'text' as const,
      content: [
        { text: '(Ganancia Anual Total Neta) GAT Real', bold: true, break: true },
        { text: '-3.70%', break: true },
        { text: 'Antes de impuestos', bold: true, break: true },
        { text: '"La GAT Real es el rendimiento que obtendría después de descontar la inflación estimada". "Para fines informativos y de comparación" Monto mínimo requerido para obtener la tasa de interés anual es de $100.00 (Cien Pesos 00/100 M/N).', break: true },
        { text: 'Tasa de interés ordinaria anual fija', bold: true, break: true },
        { text: '0.00% Tasas de interés expresadas antes de impuestos.', break: true },
        { text: 'GAT Nominal', bold: true, break: true },
        { text: '0.00% "Antes de impuestos" "Para fines informativos y de comparación" GAT: Ganancia Anual Total Neta.', break: true },
        { text: 'Fecha de cálculo: 15 de Diciembre de 2025', bold: true, break: true },
        { text: 'Vigencia: Enero – Junio 2026', bold: true }
      ]
    },
    {
      title: 'RECOMENDACIONES',
      type: 'text' as const,
      content: [
        { text: 'Revisa tú comprobante de depósito cada que realices un movimiento.', break: true },
        { text: 'Recuerda que el plazo máximo para aclaraciones o reclamaciones es de 90 días.' }
      ]
    },
    {
      title: 'RIESGOS',
      type: 'list' as const,
      content: [
        'Incumplir tus obligaciones te puede generar cargos por intereses moratorios.',
        'Contratar créditos que excedan tu capacidad de pago afecta tu historial crediticio.',
        'El avalista, obligado solidario o coacreditado responderá como obligado principal por el total del pago frente a la Institución Financiera'
      ]
    },
    {
      title: 'COMISIONES',
      type: 'simple' as const,
      content: 'ESTE PRODUCTO NO COBRA COMISIÓN ALGUNA POR SU CONTRATACIÓN O USO'
    }
  ]
}

const plazoFijoData = {
  title: 'PLAZO FIJO',
  description: 'Cuenta de inversión que te permite depositar dinero en moneda nacional, durante el plazo único de 28 días, generando rendimientos al término del plazo contratado.',
  accordionSections: [
    {
      title: 'CARACTERÍSTICAS',
      type: 'list' as const,
      content: [
        'Cuenta de depósito a plazo fijo en la cual el capital se liquida únicamente al vencimiento del plazo pactado, y los intereses serán pagaderos al término del plazo de la inversión (28 días).',
        'Plazo único de 28 días.',
        'Tasa de interés anual fija, el rendimiento depende del monto depositado.',
        'Contratación en cualquiera de nuestras sucursales.',
        'Puedes contratar varias inversiones, por diferentes cantidades y en diferentes fechas de vencimiento.',
        'Operaciones en Moneda Nacional.'
      ]
    },
    {
      title: 'VENTAJAS Y BENEFICIOS',
      type: 'list' as const,
      content: [
        'Reinversión automática.',
        'Al vencimiento, podrás disponer de tu inversión, transferir a tu cuenta de depósito de ahorro y/o cuenta corriente.',
        'Tasa de rendimiento fija durante el plazo de tu inversión.',
        'Tienes una opción accesible que te permite comenzar a invertir con tan solo $5,000.00 (Cinco mil pesos 00/100 m.n.)'
      ],
      notes: [
        { text: 'Producto garantizado por el Fideicomiso Fondo de Supervisión Auxiliar de Sociedades Cooperativas de Ahorro y Préstamo y de Protección a sus Ahorradores por 25,000 UDIS (Unidades de Inversión) por persona.' }
      ]
    },
    {
      title: 'REQUISITOS',
      type: 'list' as const,
      content: [
        'Ser Socio de la Cooperativa.',
        'Monto mínimo de apertura: $5,000.00 (Cinco mil pesos 00/100 m.n.).',
        'Firma del contrato correspondiente.',
        'Contrata en cualquier Sucursal de la Cooperativa.',
        'Para mayor información consulta en tu sucursal más cercana o llámanos.'
      ]
    },
    {
      title: 'CONSIDERACIONES',
      type: 'table' as const,
      content: [
        { text: 'Tasa de interés ordinaria anual fija:', bold: true, break: true },
        { text: 'ver tabla ya que depende de los montos en inversión (Tasas de interés expresadas antes de impuestos).', break: true },
        { text: 'GAT Nominal "Antes de impuestos"', bold: true, break: true },
        { text: '"Para fines informativos y de comparación". GAT: Ganancia Anual Total Neta. GAT Nominal Calculado sobre un monto de inversión de $5,000.00 (Cinco mil Pesos 00/100 M/N).', break: true },
        { text: 'Ganancia Anual Total Neta GAT', bold: true, break: true },
        { text: '"Antes de impuestos".', bold: true, break: true },
        { text: '"La GAT Real es el rendimiento que obtendría después de descontar la inflación estimada".', bold: true, break: true },
        { text: '"Para fines informativos y de comparación".', bold: true, break: true },
        { text: 'GAT REAL Calculado sobre un monto de inversión de $5,000.00 (Cinco mil pesos 00/100 M/N).', bold: true, break: true },
        { text: 'Fecha de cálculo: 15 de Diciembre de 2025', bold: true, break: true },
        { text: 'Vigencia: Enero – Junio 2026', bold: true }
      ],
      headers: ['RANGOS', 'PLAZO', 'TASA DE INTERES FIJA', 'GAT NOMINAL', 'GAT REAL'],
      rows: [
        [
          { text: 'De $5,000 a $10,999.99' },
          { text: '28 Días' },
          { text: '3.75%' },
          { text: '3.82%', bold: true },
          { text: '0.02%', bold: true }
        ],
        [
          { text: 'De $11,000 a $30,999.99' },
          { text: '28 Días' },
          { text: '3.95%' },
          { text: '4.02%', bold: true },
          { text: '0.18%', bold: true }
        ],
        [
          { text: 'De $31,000 a $99,999.99' },
          { text: '28 Días' },
          { text: '4.25%' },
          { text: '4.33%', bold: true },
          { text: '0.48%', bold: true }
        ],
        [
          { text: 'De $100,000 o más' },
          { text: '28 Días' },
          { text: '4.75%' },
          { text: '4.86%', bold: true },
          { text: '0.98%', bold: true }
        ]
      ]
    },
    {
      title: 'COMISIONES',
      type: 'simple' as const,
      content: 'ESTE PRODUCTO NO COBRA COMISIÓN ALGUNA POR SU CONTRATACIÓN O USO'
    }
  ]
}
</script>
<style lang="css" scoped>
/* ===== CONTAINER AND LAYOUT ===== */
.container {
  max-width: 1200px;
  padding: 0 20px;
}

/* ===== CARD CONTAINER ===== */
.card-deposito {
  margin-bottom: 30px;
  padding: 0 10px;
}

.card-deposito .card {
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: none;
  border-radius: 20px;
  overflow: hidden;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  box-shadow: 0 4px 20px rgba(48, 102, 190, 0.1);
  position: relative;
}

.card-deposito .card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primario) 0%, var(--color-secundario) 50%, var(--color-naranja) 100%);
  border-radius: 20px 20px 0 0;
}

.card-deposito .card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(48, 102, 190, 0.2);
}

/* ===== CARD IMAGE ===== */
.card-deposito .card-img-top {
  height: 240px;
  width: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin: 20px 0 15px 0;
  position: relative;
  border-radius: 15px;
  background-color: #f8f9fa;
  transition: all 0.3s ease;
}

.card-deposito .card:hover .card-img-top {
  transform: scale(1.05);
}

/* ===== IMAGE BACKGROUNDS ===== */
.ahorro-adulto-bg {
  background-image: url('/src/assets/media/ahorro_adulto_2026.webp');
}

.ahorro-menores-bg {
  background-image: url('/src/assets/media/ahorro_menores_20261.webp');
}

.cuenta-corriente-bg {
  background-image: url('/src/assets/media/cuenta_corriente_300x.webp');
}

.plazo-fijo-bg {
  background-image: url('/src/assets/media/plazo_fijo_300x.webp');
}

/* ===== CARD BODY ===== */
.card-deposito .card-body {
  padding: 25px 20px;
  background: linear-gradient(135deg, #ffffff 0%, #fafafa 100%);
}

.text-cards-description {
  color: var(--color-primario);
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin: 0;
  padding: 0 10px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* ===== CARD FOOTER ===== */
.card-deposito .card-footer {
  padding: 25px 20px 30px;
  border-top: none;
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  text-align: center;
}

/* ===== BUTTON STYLING ===== */
.btn-cards {
  background: linear-gradient(135deg, var(--color-primario) 0%, var(--color-secundario) 100%);
  color: var(--color-blanco);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: none;
  padding: 14px 30px;
  border-radius: 30px;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 4px 15px rgba(48, 102, 190, 0.3);
  position: relative;
  overflow: hidden;
  min-width: 140px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-cards::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--color-naranja) 0%, #e6a852 100%);
  transition: left 0.4s ease;
  z-index: 0;
}

.btn-cards:hover::before {
  left: 0;
}

.btn-cards:hover {
  color: var(--color-blanco);
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(220, 156, 72, 0.4);
}

.btn-cards:active {
  transform: translateY(-1px);
  box-shadow: 0 4px 15px rgba(220, 156, 72, 0.3);
}

.btn-cards span {
  position: relative;
  z-index: 1;
}

/* ===== RESPONSIVE DESIGN ===== */
/* Mobile Devices */
@media (max-width: 576px) {
  .container {
    padding: 0 15px;
  }

  .card-deposito {
    margin-bottom: 25px;
    padding: 0 5px;
  }

  .card-deposito .card-img-top {
    height: 200px;
    margin: 15px 0 10px 0;
  }

  .card-deposito .card-body {
    padding: 20px 15px;
  }

  .card-deposito .card-footer {
    padding: 20px 15px 25px;
  }

  .text-cards-description {
    font-size: 0.9rem;
    line-height: 1.5;
    padding: 0 5px;
  }

  .btn-cards {
    padding: 12px 24px;
    font-size: 0.9rem;
    min-width: 120px;
  }
}

/* Tablet Devices */
@media (min-width: 577px) and (max-width: 991px) {
  .card-deposito .card-img-top {
    height: 220px;
    margin: 18px 0 12px 0;
  }

  .text-cards-description {
    font-size: 0.95rem;
    line-height: 1.55;
  }

  .btn-cards {
    padding: 13px 27px;
    font-size: 0.95rem;
    min-width: 130px;
  }
}

/* Large Desktop */
@media (min-width: 1200px) {
  .card-deposito .card-img-top {
    height: 260px;
    margin: 25px 0 20px 0;
  }

  .text-cards-description {
    font-size: 1.05rem;
    line-height: 1.65;
  }

  .btn-cards {
    padding: 16px 35px;
    font-size: 1.05rem;
    min-width: 150px;
  }
}

/* ===== ACCESSIBILITY IMPROVEMENTS ===== */
@media (prefers-reduced-motion: reduce) {
  .card-deposito .card,
  .card-deposito .card-img-top,
  .btn-cards {
    transition: none;
  }

  .card-deposito .card:hover {
    transform: none;
  }
}

/* ===== FOCUS STATES FOR ACCESSIBILITY ===== */
.btn-cards:focus {
  outline: 3px solid rgba(48, 102, 190, 0.5);
  outline-offset: 2px;
}

.card-deposito .card:focus-within {
  box-shadow: 0 0 0 3px rgba(48, 102, 190, 0.3);
}

/* ===== PRINT STYLES ===== */
@media print {
  .card-deposito .card {
    box-shadow: none;
    border: 1px solid #ddd;
  }

  .btn-cards {
    background: var(--color-primario) !important;
    color: white !important;
  }
}
</style>
