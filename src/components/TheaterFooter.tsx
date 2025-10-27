import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const TheaterFooter = () => {
  return (
    <footer className="border-t border-border mt-20 py-16 bg-card">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">PIKALOVA 5</h3>
            <p className="text-muted-foreground">Театр мирового уровня в самом сердце города</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Контакты</h4>
            <div className="space-y-2 text-muted-foreground">
              <p className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                +7 (495) 123-45-67
              </p>
              <p className="flex items-center gap-2">
                <Icon name="Mail" size={16} />
                info@pikalova5.ru
              </p>
              <p className="flex items-center gap-2">
                <Icon name="MapPin" size={16} />
                Москва, Театральная площадь
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-lg">Следите за нами</h4>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>© 2024 PIKALOVA 5. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default TheaterFooter;