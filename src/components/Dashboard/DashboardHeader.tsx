import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format, startOfMonth } from "date-fns";
import { ptBR } from "date-fns/locale";

interface DashboardHeaderProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
  dateRange: {
    start: Date;
    end: Date;
  };
  location: string;
}

const tabs = [
  "Dashboard",
  "Pagamentos", 
  "Cobrança Time",
  "WhatsApp Errado",
  "Dashboard Vendas",
  "Vendas"
];

export const DashboardHeader = ({ 
  selectedTab, 
  onTabChange, 
  dateRange, 
  location 
}: DashboardHeaderProps) => {
  return (
    <header className="bg-dashboard-header shadow-lg">
      {/* Main Header */}
      <div className="px-6 py-4 flex items-center justify-between bg-header-gradient">
        <div className="flex items-center space-x-4">
          <div className="font-bold text-xl tracking-wide text-white">
            <span className="bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Bee.AI
            </span>
            <span className="text-white/90 font-normal"> | Intelligent Sales</span>
          </div>
          <div className="ml-8">
            <h1 className="text-xl font-semibold text-white">Dashboard CT – Cobrança AI</h1>
            <p className="text-sm text-white/70">Métricas em tempo Real</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
            <Calendar className="w-4 h-4 mr-2 text-white/80" />
            <span className="text-sm font-medium text-white">
              {format(dateRange.start, "dd/MM/yyyy", { locale: ptBR })} – {format(dateRange.end, "dd/MM/yyyy", { locale: ptBR })}
            </span>
          </div>
          <div className="flex items-center text-sm bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
            <MapPin className="w-4 h-4 mr-1 text-white/80" />
            <span className="text-white">{location}</span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="px-6 pb-4 bg-dashboard-header">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                selectedTab === tab
                  ? "bg-dashboard-nav-active text-white shadow-md hover:bg-dashboard-nav-hover"
                  : "text-white/70 hover:text-white hover:bg-white/10 hover:backdrop-blur-sm"
              }`}
            >
              {tab}
            </Button>
          ))}
        </div>
      </nav>
    </header>
  );
};