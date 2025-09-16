import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer, Cell } from "recharts";

// Mock data for Réguas de Cobrança (collection stages)
const reguaData = [{
  etapa: "1",
  recebido: 9000,
  emAberto: 2000
}, {
  etapa: "2",
  recebido: 7500,
  emAberto: 500
}, {
  etapa: "3",
  recebido: 6000,
  emAberto: 1000
}, {
  etapa: "4",
  recebido: 4000,
  emAberto: 300
}, {
  etapa: "5",
  recebido: 5000,
  emAberto: 200
}, {
  etapa: "6",
  recebido: 3000,
  emAberto: 800
}];

// Mock data for daily collection
const dailyData = Array.from({
  length: 30
}, (_, i) => ({
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
interface CobrancaChartsProps {
  onReguaClick?: (etapa: string) => void;
  onDailyClick?: (day: number) => void;
}
export const CobrancaCharts = ({
  onReguaClick,
  onDailyClick
}: CobrancaChartsProps) => {
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      {/* Réguas de Cobrança Chart */}
      <div className="bg-card rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg font-semibold mb-4 text-gray-600">Réguas de Cobrança</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={reguaData} margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="etapa" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} tickFormatter={formatCurrency} />
            <Tooltip formatter={(value: number, name: string) => [formatCurrency(value), name === 'recebido' ? 'Recebido' : 'Em Aberto']} labelFormatter={label => `Etapa ${label}`} contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            fontSize: '12px'
          }} />
            <Bar dataKey="recebido" fill="hsl(var(--chart-primary))" radius={[2, 2, 0, 0]} onClick={data => onReguaClick?.(data.etapa)} style={{
            cursor: onReguaClick ? 'pointer' : 'default'
          }} />
            <Bar dataKey="emAberto" fill="hsl(var(--chart-secondary))" radius={[2, 2, 0, 0]} onClick={data => onReguaClick?.(data.etapa)} style={{
            cursor: onReguaClick ? 'pointer' : 'default'
          }} />
          </BarChart>
        </ResponsiveContainer>
        
        <div className="flex justify-center mt-4 space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-chart-primary rounded mr-2"></div>
            <span className="text-sm text-muted-foreground">Recebido</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-chart-secondary rounded mr-2"></div>
            <span className="text-sm text-muted-foreground">Em Aberto</span>
          </div>
        </div>
      </div>

      {/* Cobrança Diária Chart */}
      <div className="bg-card rounded-lg p-6 shadow-sm border">
        <h3 className="text-lg mb-4 font-semibold text-slate-600">Cobrança Diária</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dailyData} margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }} className="rounded-sm">
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="dia" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip formatter={(value: number) => [value, 'Valor Recebido']} labelFormatter={label => `Dia ${label}`} contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            fontSize: '12px'
          }} />
            <Line type="monotone" dataKey="valor" stroke="hsl(var(--chart-accent))" strokeWidth={3} dot={{
            fill: "hsl(var(--chart-accent))",
            strokeWidth: 0,
            r: 4
          }} activeDot={{
            r: 6,
            fill: "hsl(var(--chart-accent))",
            onClick: data => onDailyClick?.(data.payload.dia)
          }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>;
};