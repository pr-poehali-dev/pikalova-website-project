import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface CreateNewsFormProps {
  formData: {
    title: string;
    description: string;
    content: string;
    image_url: string;
  };
  onFormChange: (data: any) => void;
  onSubmit: () => void;
}

const CreateNewsForm = ({ formData, onFormChange, onSubmit }: CreateNewsFormProps) => {
  return (
    <Card className="border-primary/50 bg-card/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon name="PlusCircle" size={24} />
          Добавить новость
        </CardTitle>
        <CardDescription>Создайте новую публикацию для сайта театра</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Заголовок</Label>
          <Input
            id="title"
            placeholder="Премьера: Лебединое озеро"
            value={formData.title}
            onChange={(e) => onFormChange({...formData, title: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Краткое описание</Label>
          <Input
            id="description"
            placeholder="Грандиозная постановка классического балета"
            value={formData.description}
            onChange={(e) => onFormChange({...formData, description: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="content">Полный текст</Label>
          <Textarea
            id="content"
            placeholder="Подробное описание новости..."
            rows={6}
            value={formData.content}
            onChange={(e) => onFormChange({...formData, content: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="image_url">URL изображения</Label>
          <Input
            id="image_url"
            placeholder="https://..."
            value={formData.image_url}
            onChange={(e) => onFormChange({...formData, image_url: e.target.value})}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onSubmit} className="w-full">
          <Icon name="Plus" className="mr-2" size={18} />
          Опубликовать новость
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateNewsForm;
