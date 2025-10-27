import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';
import TheaterHeader from '@/components/TheaterHeader';
import HeroSection from '@/components/HeroSection';
import TheaterFooter from '@/components/TheaterFooter';
import CreateTicketForm from '@/components/CreateTicketForm';
import CreateNewsForm from '@/components/CreateNewsForm';
import TicketCard from '@/components/TicketCard';
import NewsCard from '@/components/NewsCard';
import NewsDialog from '@/components/NewsDialog';
import ScheduleCard from '@/components/ScheduleCard';

interface News {
  id: number;
  title: string;
  description: string;
  content: string;
  image_url: string;
  published_date: string;
}

interface Ticket {
  id: number;
  event_name: string;
  event_date: string;
  venue: string;
  price: string;
  image_url: string;
  category: string;
}

const Index = () => {
  const [news, setNews] = useState<News[]>([]);
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedNews, setSelectedNews] = useState<News | null>(null);
  const [adminMode, setAdminMode] = useState(false);
  const { toast } = useToast();

  const [newNewsForm, setNewNewsForm] = useState({
    title: '',
    description: '',
    content: '',
    image_url: ''
  });

  const [newTicketForm, setNewTicketForm] = useState({
    event_name: '',
    event_date: '',
    venue: '',
    price: '',
    category: '',
    image_url: ''
  });

  useEffect(() => {
    fetchNews();
    fetchTickets();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/a711d560-ba30-4b95-b20c-17fd0ee11075');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      toast({
        title: "Ошибка загрузки",
        description: "Не удалось загрузить новости",
        variant: "destructive"
      });
    }
  };

  const fetchTickets = async () => {
    try {
      const response = await fetch('https://functions.poehali.dev/860772ab-0f6f-475c-95c8-7c244d8daab5');
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      toast({
        title: "Ошибка загрузки",
        description: "Не удалось загрузить афишу",
        variant: "destructive"
      });
    }
  };

  const handleAddNews = async () => {
    if (!newNewsForm.title || !newNewsForm.content) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/a711d560-ba30-4b95-b20c-17fd0ee11075', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newNewsForm)
      });

      if (response.ok) {
        await fetchNews();
        setNewNewsForm({ title: '', description: '', content: '', image_url: '' });
        toast({
          title: "Новость добавлена!",
          description: "Новость появится на главной странице"
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось добавить новость",
        variant: "destructive"
      });
    }
  };

  const handleAddTicket = async () => {
    if (!newTicketForm.event_name || !newTicketForm.event_date) {
      toast({
        title: "Ошибка",
        description: "Заполните все обязательные поля",
        variant: "destructive"
      });
      return;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/860772ab-0f6f-475c-95c8-7c244d8daab5', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTicketForm)
      });

      if (response.ok) {
        await fetchTickets();
        setNewTicketForm({ event_name: '', event_date: '', venue: '', price: '', category: '', image_url: '' });
        toast({
          title: "Билет создан!",
          description: "Билет добавлен в афишу"
        });
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось создать билет",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TheaterHeader adminMode={adminMode} onToggleAdmin={() => setAdminMode(!adminMode)} />
      <HeroSection />

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="tickets" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12">
            <TabsTrigger value="tickets" className="text-lg">
              <Icon name="Ticket" className="mr-2" size={18} />
              Билеты
            </TabsTrigger>
            <TabsTrigger value="schedule" className="text-lg">
              <Icon name="CalendarDays" className="mr-2" size={18} />
              Афиша
            </TabsTrigger>
            <TabsTrigger value="news" className="text-lg">
              <Icon name="Newspaper" className="mr-2" size={18} />
              Новости
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tickets" className="space-y-8">
            {adminMode && (
              <CreateTicketForm 
                formData={newTicketForm}
                onFormChange={setNewTicketForm}
                onSubmit={handleAddTicket}
              />
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tickets.map((ticket) => (
                <TicketCard key={ticket.id} ticket={ticket} />
              ))}
            </div>

            {tickets.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <Icon name="Ticket" size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-xl">Билеты появятся здесь</p>
                <p className="text-sm mt-2">Создайте первый билет в админ-панели</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="schedule" className="space-y-6">
            <div className="grid gap-4">
              {tickets.map((ticket) => (
                <ScheduleCard key={ticket.id} ticket={ticket} />
              ))}
            </div>

            {tickets.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <Icon name="CalendarDays" size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-xl">Афиша пока пуста</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="news" className="space-y-8">
            {adminMode && (
              <CreateNewsForm 
                formData={newNewsForm}
                onFormChange={setNewNewsForm}
                onSubmit={handleAddNews}
              />
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {news.map((item) => (
                <NewsCard 
                  key={item.id} 
                  news={item}
                  onClick={() => setSelectedNews(item)}
                />
              ))}
            </div>

            {news.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <Icon name="Newspaper" size={48} className="mx-auto mb-4 opacity-50" />
                <p className="text-xl">Новостей пока нет</p>
                <p className="text-sm mt-2">Добавьте первую новость в админ-панели</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>

      <NewsDialog news={selectedNews} onClose={() => setSelectedNews(null)} />
      <TheaterFooter />
    </div>
  );
};

export default Index;
