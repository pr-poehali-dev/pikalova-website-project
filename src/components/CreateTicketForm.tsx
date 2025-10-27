import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface CreateTicketFormProps {
  formData: {
    event_name: string;
    event_date: string;
    venue: string;
    price: string;
    category: string;
    image_url: string;
  };
  onFormChange: (data: any) => void;
  onSubmit: () => void;
}

const CreateTicketForm = ({ formData, onFormChange, onSubmit }: CreateTicketFormProps) => {
  return (
    <Card className="border-primary/50 bg-card/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="PlusCircle" size={24} />
          Создать новый билет
        </CardTitle>
        <CardDescription>Добавьте событие в афишу театра</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="event_name">Название события</Label>
            <Input
              id="event_name"
              placeholder="Лебединое озеро"
              value={formData.event_name}
              onChange={(e) => onFormChange({...formData, event_name: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="event_date">Дата и время</Label>
            <Input
              id="event_date"
              placeholder="15 декабря 2024, 19:00"
              value={formData.event_date}
              onChange={(e) => onFormChange({...formData, event_date: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="venue">Зал</Label>
            <Input
              id="venue"
              placeholder="Большой зал"
              value={formData.venue}
              onChange={(e) => onFormChange({...formData, venue: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Цена</Label>
            <Input
              id="price"
              placeholder="от 3500₽"
              value={formData.price}
              onChange={(e) => onFormChange({...formData, price: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Категория</Label>
            <Input
              id="category"
              placeholder="Балет"
              value={formData.category}
              onChange={(e) => onFormChange({...formData, category: e.target.value})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ticket_image">URL изображения</Label>
            <Input
              id="ticket_image"
              placeholder="https://..."
              value={formData.image_url}
              onChange={(e) => onFormChange({...formData, image_url: e.target.value})}
            />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onSubmit} className="w-full">
          <Icon name="Plus" className="mr-2" size={18} />
          Создать билет
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateTicketForm;
