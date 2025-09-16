import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
  Cell
} from "recharts";

// Mock data for Réguas de Cobrança (collection stages)
const reguaData = [
  { etapa: "1", recebido: 9000, emAberto: 2000 },
  { etapa: "2", recebido: 7500, emAberto: 500 },
  { etapa: "3", recebido: 6000, emAberto: 1000 },
  { etapa: "4", recebido: 4000, emAberto: 300 },
  { etapa: "5", recebido: 5000, emAberto: 200 },
  { etapa: "6", recebido: 3000, emAberto: 800 },
];

// Mock data for daily collection
const dailyData = Array.from({ length: 30 }, (_, i) => ({
  dia: i + 1,
  valor: Math.floor(Math.random() * 200) + 50,
  clientes: Math.floor(Math.random() * 8) + 2
}));

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

const CustomTooltip = ({ active, payload, label, chartType }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border/50 rounded-lg shadow-lg p-3 backdrop-blur-sm">
        <p className="font-medium text-card-foreground mb-2">
          {chartType === 'regua' ? `Etapa ${label}` : `Dia ${label}`}
        </p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            <span className="font-medium">{entry.name}:</span> {' '}
            {chartType === 'regua' ? formatCurrency(entry.value) : entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

interface CobrancaChartsProps {
  onReguaClick?: (etapa: string) => void;
  onDailyClick?: (day: number) => void;
}

export const CobrancaCharts = ({ onReguaClick, onDailyClick }: CobrancaChartsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Réguas de Cobrança Chart */}
      <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 backdrop-blur-sm">
        <h3 className="text-lg font-semibold mb-6 text-card-foreground flex items-center">
          <div className="w-1 h-5 bg-chart-primary rounded-full mr-3"></div>
          Réguas de Cobrança
        </h3>
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={reguaData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="etapa" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              fontWeight={500}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickFormatter={formatCurrency}
              fontWeight={500}
            />
            <Tooltip 
              content={<CustomTooltip chartType="regua" />}
            />
            <Bar 
              dataKey="recebido" 
              fill="hsl(var(--chart-primary))" 
              radius={[4, 4, 0, 0]}
              onClick={(data) => onReguaClick?.(data.etapa)}
              style={{ cursor: onReguaClick ? 'pointer' : 'default' }}
            />
            <Bar 
              dataKey="emAberto" 
              fill="hsl(var(--chart-secondary))" 
              radius={[4, 4, 0, 0]}
              onClick={(data) => onReguaClick?.(data.etapa)}
              style={{ cursor: onReguaClick ? 'pointer' : 'default' }}
            />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="flex justify-center mt-6 space-x-8">
          <div className="flex items-center bg-dashboard-metric-positive-light px-3 py-1.5 rounded-lg">
            <div className="w-3 h-3 bg-chart-primary rounded-sm mr-2"></div>
            <span className="text-sm font-medium text-dashboard-metric-positive">Recebido</span>
          </div>
          <div className="flex items-center bg-secondary/50 px-3 py-1.5 rounded-lg">
            <div className="w-3 h-3 bg-chart-secondary rounded-sm mr-2"></div>
            <span className="text-sm font-medium text-secondary-foreground">Em Aberto</span>
          </div>
        </div>
      </div>

      {/* Cobrança Diária Chart */}
      <div className="bg-card rounded-xl p-6 shadow-md border border-border/50 backdrop-blur-sm">
        <h3 className="text-lg font-semibold mb-6 text-card-foreground flex items-center">
          <div className="w-1 h-5 bg-chart-accent rounded-full mr-3"></div>
          Cobrança Diária
        </h3>
        <ResponsiveContainer width="100%" height={320}>
          <LineChart data={dailyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
            <XAxis 
              dataKey="dia" 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              fontWeight={500}
            />
            <YAxis 
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              fontWeight={500}
            />
            <Tooltip 
              content={<CustomTooltip chartType="daily" />}
            />
            <Line 
              type="monotone" 
              dataKey="valor" 
              stroke="hsl(var(--chart-accent))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--chart-accent))", strokeWidth: 0, r: 5 }}
              activeDot={{ 
                r: 7, 
                fill: "hsl(var(--chart-accent))",
                stroke: "hsl(var(--card))",
                strokeWidth: 2,
                onClick: (data) => onDailyClick?.(data.payload.dia)
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};