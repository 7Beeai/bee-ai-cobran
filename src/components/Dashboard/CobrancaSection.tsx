import { KPICard } from "./KPICard";
import { CobrancaCharts } from "./CobrancaCharts";

interface CobrancaSectionProps {
  onKPIClick?: (kpi: string) => void;
  onReguaClick?: (etapa: string) => void;
  onDailyClick?: (day: number) => void;
}

// Mock data based on the image
const kpiData = {
  clientesContactados: { value: 4321, percentage: 100 },
  interacoes: { value: 762, percentage: 17.6 },
  mediaPorCliente: { value: "R$ 35,76" },
  cartoescadastrados: { value: 12 },
  valoresLinksAberto: { value: "R$ 17.580,90" },
  linksEnviados: { value: 405, percentage: 53.1 },
  pagamentosRealizados: { value: 108, percentage: 26.7 },
  mediaClientesDia: { value: "9,53" },
  whatsappErrados: { value: 7 },
  valoresRecebidos: { value: "R$ 3.862,50" }
};

export const CobrancaSection = ({ onKPIClick, onReguaClick, onDailyClick }: CobrancaSectionProps) => {
  return (
    <div className="p-6 bg-dashboard-bg">
      {/* Section Header */}
      <div className="flex items-center mb-6">
        <div className="w-1 h-6 bg-dashboard-section-accent mr-3 rounded-full"></div>
        <h2 className="text-xl font-semibold text-foreground">Cobrança</h2>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {/* Row 1 */}
        <KPICard
          title="Clientes Contactados"
          value="4.321"
          percentage={kpiData.clientesContactados.percentage}
          variant="neutral"
          showProgressBar={true}
          onClick={() => onKPIClick?.("clientesContactados")}
        />
        
        <KPICard
          title="Interações"
          value="762"
          percentage={kpiData.interacoes.percentage}
          variant="positive"
          showProgressBar={true}
          onClick={() => onKPIClick?.("interacoes")}
        />
        
        <KPICard
          title="Média por Cliente"
          value={kpiData.mediaPorCliente.value}
          variant="currency"
          onClick={() => onKPIClick?.("mediaPorCliente")}
        />
        
        <KPICard
          title="Cartões Cadastrados"
          value="12"
          variant="positive"
          onClick={() => onKPIClick?.("cartoescastrados")}
        />
        
        <KPICard
          title="Valores de Links Gerados em Aberto"
          value={kpiData.valoresLinksAberto.value}
          variant="negative"
          onClick={() => onKPIClick?.("valoresLinksAberto")}
        />

        {/* Row 2 */}
        <KPICard
          title="Links Enviados"
          value="405"
          percentage={kpiData.linksEnviados.percentage}
          variant="positive"
          showProgressBar={true}
          onClick={() => onKPIClick?.("linksEnviados")}
        />
        
        <KPICard
          title="Pagamentos Realizados Mês"
          value="108"
          percentage={kpiData.pagamentosRealizados.percentage}
          variant="positive"
          showProgressBar={true}
          onClick={() => onKPIClick?.("pagamentosRealizados")}
        />
        
        <KPICard
          title="Média de Clientes / Dia"
          value={kpiData.mediaClientesDia.value}
          variant="neutral"
          onClick={() => onKPIClick?.("mediaClientesDia")}
        />
        
        <KPICard
          title="WhatsApp Errados"
          value="7"
          variant="negative"
          onClick={() => onKPIClick?.("whatsappErrados")}
        />
        
        <KPICard
          title="Valores Recebidos"
          value={kpiData.valoresRecebidos.value}
          variant="positive"
          onClick={() => onKPIClick?.("valoresRecebidos")}
        />
      </div>

      {/* Charts */}
      <CobrancaCharts onReguaClick={onReguaClick} onDailyClick={onDailyClick} />
    </div>
  );
};