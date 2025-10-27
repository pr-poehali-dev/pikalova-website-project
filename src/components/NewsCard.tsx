import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface News {
  id: number;
  title: string;
  description: string;
  content: string;
  image_url: string;
  published_date: string;
}

interface NewsCardProps {
  news: News;
  onClick: () => void;
}

const NewsCard = ({ news, onClick }: NewsCardProps) => {
  return (
    <Card 
      className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer group h-full flex flex-col"
      onClick={onClick}
    >
      {news.image_url && (
        <div className="h-64 lg:h-80 overflow-hidden">
          <img 
            src={news.image_url} 
            alt={news.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader className="flex-grow">
        <CardTitle className="text-xl lg:text-2xl group-hover:text-primary transition-colors">{news.title}</CardTitle>
        <CardDescription>{news.description}</CardDescription>
      </CardHeader>
      <CardFooter className="text-sm text-muted-foreground flex items-center gap-2">
        <Icon name="Clock" size={16} />
        {new Date(news.published_date).toLocaleDateString('ru-RU', { 
          day: 'numeric', 
          month: 'long', 
          year: 'numeric' 
        })}
      </CardFooter>
    </Card>
  );
};

export default NewsCard;