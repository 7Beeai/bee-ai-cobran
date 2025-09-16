// Type definitions for the Dashboard CT - Cobrança AI

export interface KPIMetric {
  value: number | string;
  percentage?: number;
  variant: "positive" | "negative" | "neutral" | "currency";
}

export interface DashboardFilters {
  dateRange: {
    start: Date;
    end: Date;
  };
  location: string;
  activeTab: string;
}

export interface CobrancaData {
  clientesContactados: KPIMetric;
  interacoes: KPIMetric;
  mediaPorCliente: KPIMetric;
  cartoescastrados: KPIMetric;
  valoresLinksAberto: KPIMetric;
  linksEnviados: KPIMetric;
  pagamentosRealizados: KPIMetric;
  mediaClientesDia: KPIMetric;
  whatsappErrados: KPIMetric;
  valoresRecebidos: KPIMetric;
}

export interface ReguaCobrancaData {
  etapa: string;
  recebido: number;
  emAberto: number;
}

export interface CobrancaDiariaData {
  dia: number;
  valor: number;
  clientes: number;
  data: string; // ISO date string
}

export interface Customer {
  id: string;
  nome: string;
  telefone: string;
  whatsappValido: boolean;
  cidade: string;
}

export interface Contact {
  id: string;
  customerId: string;
  canal: "whatsapp" | "email" | "sms";
  dataContato: Date;
  etapaRegua: 1 | 2 | 3 | 4 | 5 | 6;
  agente: string;
  respondeu?: boolean;
}

export interface PaymentLink {
  id: string;
  customerId: string;
  valor: number;
  dataEnvio: Date;
  status: "aberto" | "pago" | "cancelado";
  urlLink?: string;
}

export interface Payment {
  id: string;
  linkId: string;
  valorLiquido: number;
  dataPagamento: Date;
  metodo: "cartao" | "pix" | "boleto";
  cartaoCadastrado: boolean;
}