import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const HeroSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent"></div>
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-7xl font-bold mb-6 text-foreground">Театр будущего</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Величественные постановки. Незабываемые впечатления. Искусство, которое трогает душу.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            <Icon name="Calendar" className="mr-2" size={20} />
            Посмотреть афишу
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8">
            <Icon name="Info" className="mr-2" size={20} />
            О театре
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
