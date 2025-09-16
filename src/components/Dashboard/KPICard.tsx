import { cn } from "@/lib/utils";

interface KPICardProps {
  title: string;
  value: string;
  percentage?: number;
  variant: "positive" | "negative" | "neutral" | "currency";
  showProgressBar?: boolean;
  onClick?: () => void;
}

export const KPICard = ({ 
  title, 
  value, 
  percentage, 
  variant, 
  showProgressBar = false,
  onClick 
}: KPICardProps) => {
  const getValueColor = () => {
    switch (variant) {
      case "positive":
        return "text-dashboard-metric-positive";
      case "negative":
        return "text-dashboard-metric-negative";
      case "currency":
        return "text-dashboard-metric-positive";
      default:
        return "text-dashboard-metric-neutral";
    }
  };

  const getProgressColor = () => {
    switch (variant) {
      case "positive":
        return "bg-dashboard-metric-positive";
      case "negative":
        return "bg-dashboard-metric-negative";
      case "currency":
        return "bg-dashboard-metric-positive";
      default:
        return "bg-dashboard-nav-active";
    }
  };

  return (
    <div 
      className={cn(
        "bg-card rounded-lg p-4 shadow-sm border transition-all duration-200",
        onClick && "cursor-pointer hover:shadow-md hover:scale-[1.02]"
      )}
      onClick={onClick}
    >
      <h3 className="text-xs font-medium text-muted-foreground mb-2 leading-tight">
        {title}
      </h3>
      
      <div className="space-y-2">
        <div className={cn("text-2xl font-bold", getValueColor())}>
          {value}
        </div>
        
        {percentage !== undefined && (
          <div className="text-sm text-muted-foreground">
            {percentage.toFixed(1)}%
          </div>
        )}
        
        {showProgressBar && percentage !== undefined && (
          <div className="w-full bg-muted rounded-full h-1.5">
            <div 
              className={cn("h-1.5 rounded-full transition-all duration-300", getProgressColor())}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};