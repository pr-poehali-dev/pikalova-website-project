import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface TheaterHeaderProps {
  adminMode: boolean;
  onToggleAdmin: () => void;
}

const TheaterHeader = ({ adminMode, onToggleAdmin }: TheaterHeaderProps) => {
  return (
    <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
      <div className="container mx-auto px-6 lg:px-8 py-6 lg:py-8 max-w-7xl">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-primary tracking-wider">PIKALOVA 5</h1>
          <Button 
            variant={adminMode ? "default" : "outline"}
            onClick={onToggleAdmin}
            className="gap-2"
          >
            <Icon name={adminMode ? "Lock" : "LockOpen"} size={18} />
            {adminMode ? "Режим просмотра" : "Админ-панель"}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TheaterHeader;