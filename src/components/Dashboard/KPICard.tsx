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
        "bg-card rounded-xl p-5 shadow-sm border border-border/50 transition-all duration-300 hover:shadow-md",
        "backdrop-blur-sm bg-gradient-card",
        onClick && "cursor-pointer hover:shadow-lg hover:scale-[1.02] hover:border-primary/20"
      )}
      onClick={onClick}
    >
      <h3 className="text-xs font-medium text-muted-foreground mb-3 leading-tight uppercase tracking-wide">
        {title}
      </h3>
      
      <div className="space-y-3">
        <div className={cn("text-3xl font-bold tracking-tight", getValueColor())}>
          {value}
        </div>
        
        {percentage !== undefined && (
          <div className="flex items-center space-x-2">
            <div className="text-sm font-medium text-muted-foreground">
              {percentage.toFixed(1)}%
            </div>
            {showProgressBar && (
              <div className="flex-1 bg-muted rounded-full h-2 overflow-hidden">
                <div 
                  className={cn("h-2 rounded-full transition-all duration-500 ease-out", getProgressColor())}
                  style={{ width: `${Math.min(percentage, 100)}%` }}
                />
              </div>
            )}
          </div>
        )}
        
        {!showProgressBar && percentage !== undefined && (
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className={cn("h-2 rounded-full transition-all duration-500 ease-out", getProgressColor())}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        )}
      </div>
    </div>
  );
};