import { useState } from "react";
import { DashboardHeader } from "@/components/Dashboard/DashboardHeader";
import { CobrancaSection } from "@/components/Dashboard/CobrancaSection";
import { startOfMonth, endOfDay } from "date-fns";
import { useToast } from "@/hooks/use-toast";

export default function Dashboard() {
  const { toast } = useToast();
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  const [dateRange] = useState({
    start: startOfMonth(new Date()),
    end: endOfDay(new Date())
  });
  const [location] = useState("Ibirité – MG");

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    
    if (tab !== "Dashboard") {
      toast({
        title: "Funcionalidade em Desenvolvimento",
        description: `A aba "${tab}" será implementada em breve.`,
        variant: "default"
      });
    }
  };

  const handleKPIClick = (kpi: string) => {
    toast({
      title: "Filtro Aplicado",
      description: `Filtrando dados por: ${kpi}`,
      variant: "default"
    });
  };

  const handleReguaClick = (etapa: string) => {
    toast({
      title: "Régua de Cobrança",
      description: `Filtrando por Etapa ${etapa}`,
      variant: "default"
    });
  };

  const handleDailyClick = (day: number) => {
    toast({
      title: "Cobrança Diária",
      description: `Visualizando dados do dia ${day}`,
      variant: "default"
    });
  };

  return (
    <div className="min-h-screen bg-dashboard-bg">
      <DashboardHeader
        selectedTab={selectedTab}
        onTabChange={handleTabChange}
        dateRange={dateRange}
        location={location}
      />
      
      {selectedTab === "Dashboard" && (
        <CobrancaSection
          onKPIClick={handleKPIClick}
          onReguaClick={handleReguaClick}
          onDailyClick={handleDailyClick}
        />
      )}
    </div>
  );
}