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
    <div className="p-6 bg-dashboard-bg min-h-screen">
      {/* Section Header */}
      <div className="flex items-center mb-6 animate-slideInUp">
        <div className="w-1 h-8 bg-gradient-to-b from-dashboard-section-accent to-dashboard-section-accent/60 mr-4 rounded-full"></div>
        <h2 className="text-2xl font-bold text-muted-foreground tracking-tight">Cobrança</h2>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        {/* Row 1 */}
        <div className="animate-fadeInScale" style={{ animationDelay: "0.1s" }}>
          <KPICard
            title="Clientes Contactados"
            value="4.321"
            percentage={kpiData.clientesContactados.percentage}
            variant="neutral"
            showProgressBar={true}
            onClick={() => onKPIClick?.("clientesContactados")}
          />
        </div>
        
        <div className="animate-fadeInScale" style={{ animationDelay: "0.2s" }}>
          <KPICard
            title="Interações"
            value="762"
            percentage={kpiData.interacoes.percentage}
            variant="positive"
            showProgressBar={true}
            onClick={() => onKPIClick?.("interacoes")}
          />
        </div>
        
        <div className="animate-fadeInScale" style={{ animationDelay: "0.3s" }}>
          <KPICard
            title="Média por Cliente"
            value={kpiData.mediaPorCliente.value}
            variant="currency"
            onClick={() => onKPIClick?.("mediaPorCliente")}
          />
        </div>
        
        <div className="animate-fadeInScale" style={{ animationDelay: "0.4s" }}>
          <KPICard
            title="Cartões Cadastrados"
            value="12"
            variant="positive"
            onClick={() => onKPIClick?.("cartoescastrados")}
          />
        </div>
        
        <div className="animate-fadeInScale" style={{ animationDelay: "0.5s" }}>
          <KPICard
            title="Valores de Links Gerados em Aberto"
            value={kpiData.valoresLinksAberto.value}
            variant="negative"
            onClick={() => onKPIClick?.("valoresLinksAberto")}
          />
        </div>

        {/* Row 2 */}
        <div className="animate-fadeInScale" style={{ animationDelay: "0.6s" }}>
          <KPICard
            title="Links Enviados"
            value="405"
            percentage={kpiData.linksEnviados.percentage}
            variant="positive"
            showProgressBar={true}
            onClick={() => onKPIClick?.("linksEnviados")}
          />
        </div>
        
        <div className="animate-fadeInScale" style={{ animationDelay: "0.7s" }}>
          <KPICard
            title="Pagamentos Realizados Mês"
            value="108"
            percentage={kpiData.pagamentosRealizados.percentage}
            variant="positive"
            showProgressBar={true}
            onClick={() => onKPIClick?.("pagamentosRealizados")}
          />
        </div>
        
        <div className="animate-fadeInScale" style={{ animationDelay: "0.8s" }}>
          <KPICard
            title="Média de Clientes / Dia"
            value={kpiData.mediaClientesDia.value}
            variant="neutral"
            onClick={() => onKPIClick?.("mediaClientesDia")}
          />
        </div>
        
        <div className="animate-fadeInScale" style={{ animationDelay: "0.9s" }}>
          <KPICard
            title="WhatsApp Errados"
            value="7"
            variant="negative"
            onClick={() => onKPIClick?.("whatsappErrados")}
          />
        </div>
        
        <div className="animate-fadeInScale" style={{ animationDelay: "1.0s" }}>
          <KPICard
            title="Valores Recebidos"
            value={kpiData.valoresRecebidos.value}
            variant="positive"
            onClick={() => onKPIClick?.("valoresRecebidos")}
          />
        </div>
      </div>

      {/* Charts */}
      <div className="animate-slideInUp" style={{ animationDelay: "0.5s" }}>
        <CobrancaCharts onReguaClick={onReguaClick} onDailyClick={onDailyClick} />
      </div>
    </div>
  );
};