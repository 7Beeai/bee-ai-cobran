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
    <header className="bg-dashboard-header text-white">
      {/* Main Header */}
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img 
              src="/src/assets/7bee-logo-white.png" 
              alt="7Bee Logo" 
              className="h-8 w-auto"
            />
          </div>
          <div className="ml-8">
            <h1 className="text-xl font-semibold">Dashboard CT – Cobrança AI</h1>
            <p className="text-sm text-white/80">Métricas em tempo Real</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center space-y-2">
          <div className="flex items-center text-sm">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{location}</span>
          </div>
          <div className="flex items-center bg-dashboard-date-box-bg px-3 py-1.5 rounded-md">
            <Calendar className="w-4 h-4 mr-2 text-dashboard-date-box-text" />
            <span className="text-sm font-medium text-dashboard-date-box-text">
              {format(dateRange.start, "dd/MM/yyyy", { locale: ptBR })} – {format(dateRange.end, "dd/MM/yyyy", { locale: ptBR })}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <nav className="px-6 pb-4">
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant="ghost"
              onClick={() => onTabChange(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                selectedTab === tab
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
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