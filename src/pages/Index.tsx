import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

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
    toast({
      title: "Загрузка новостей...",
      description: "Получаем актуальную информацию"
    });
  };

  const fetchTickets = async () => {
    toast({
      title: "Загрузка афиши...",
      description: "Получаем доступные билеты"
    });
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

    const newItem: News = {
      id: Date.now(),
      ...newNewsForm,
      published_date: new Date().toISOString()
    };

    setNews([newItem, ...news]);
    setNewNewsForm({ title: '', description: '', content: '', image_url: '' });
    
    toast({
      title: "Новость добавлена!",
      description: "Новость появится на главной странице"
    });
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

    const newItem: Ticket = {
      id: Date.now(),
      ...newTicketForm
    };

    setTickets([newItem, ...tickets]);
    setNewTicketForm({ event_name: '', event_date: '', venue: '', price: '', category: '', image_url: '' });
    
    toast({
      title: "Билет создан!",
      description: "Билет добавлен в афишу"
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-5xl font-bold text-primary tracking-wider">PIKALOVA 5</h1>
            <Button 
              variant={adminMode ? "default" : "outline"}
              onClick={() => setAdminMode(!adminMode)}
              className="gap-2"
            >
              <Icon name={adminMode ? "Lock" : "LockOpen"} size={18} />
              {adminMode ? "Режим просмотра" : "Админ-панель"}
            </Button>
          </div>
        </div>
      </header>

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
                        value={newTicketForm.event_name}
                        onChange={(e) => setNewTicketForm({...newTicketForm, event_name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event_date">Дата и время</Label>
                      <Input
                        id="event_date"
                        placeholder="15 декабря 2024, 19:00"
                        value={newTicketForm.event_date}
                        onChange={(e) => setNewTicketForm({...newTicketForm, event_date: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="venue">Зал</Label>
                      <Input
                        id="venue"
                        placeholder="Большой зал"
                        value={newTicketForm.venue}
                        onChange={(e) => setNewTicketForm({...newTicketForm, venue: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Цена</Label>
                      <Input
                        id="price"
                        placeholder="от 3500₽"
                        value={newTicketForm.price}
                        onChange={(e) => setNewTicketForm({...newTicketForm, price: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="category">Категория</Label>
                      <Input
                        id="category"
                        placeholder="Балет"
                        value={newTicketForm.category}
                        onChange={(e) => setNewTicketForm({...newTicketForm, category: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ticket_image">URL изображения</Label>
                      <Input
                        id="ticket_image"
                        placeholder="https://..."
                        value={newTicketForm.image_url}
                        onChange={(e) => setNewTicketForm({...newTicketForm, image_url: e.target.value})}
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleAddTicket} className="w-full">
                    <Icon name="Plus" className="mr-2" size={18} />
                    Создать билет
                  </Button>
                </CardFooter>
              </Card>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tickets.map((ticket) => (
                <Card key={ticket.id} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
                  {ticket.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={ticket.image_url} 
                        alt={ticket.event_name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-2xl">{ticket.event_name}</CardTitle>
                      {ticket.category && (
                        <span className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full">
                          {ticket.category}
                        </span>
                      )}
                    </div>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Icon name="Calendar" size={16} />
                        <span>{ticket.event_date}</span>
                      </div>
                      {ticket.venue && (
                        <div className="flex items-center gap-2">
                          <Icon name="MapPin" size={16} />
                          <span>{ticket.venue}</span>
                        </div>
                      )}
                      {ticket.price && (
                        <div className="flex items-center gap-2">
                          <Icon name="Wallet" size={16} />
                          <span className="font-semibold text-primary">{ticket.price}</span>
                        </div>
                      )}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <div className="w-full p-4 bg-muted rounded-lg text-center cursor-not-allowed opacity-70">
                      <Icon name="Ticket" className="mx-auto mb-2" size={24} />
                      <p className="text-sm">Декоративный билет</p>
                    </div>
                  </CardFooter>
                </Card>
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
                <Card key={ticket.id} className="hover:border-primary/50 transition-all">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-3xl mb-2">{ticket.event_name}</CardTitle>
                        <CardDescription className="text-lg flex items-center gap-4">
                          <span className="flex items-center gap-2">
                            <Icon name="Calendar" size={18} />
                            {ticket.event_date}
                          </span>
                          {ticket.venue && (
                            <span className="flex items-center gap-2">
                              <Icon name="MapPin" size={18} />
                              {ticket.venue}
                            </span>
                          )}
                        </CardDescription>
                      </div>
                      {ticket.price && (
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Билеты</p>
                          <p className="text-2xl font-bold text-primary">{ticket.price}</p>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                </Card>
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
                      value={newNewsForm.title}
                      onChange={(e) => setNewNewsForm({...newNewsForm, title: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Краткое описание</Label>
                    <Input
                      id="description"
                      placeholder="Грандиозная постановка классического балета"
                      value={newNewsForm.description}
                      onChange={(e) => setNewNewsForm({...newNewsForm, description: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">Полный текст</Label>
                    <Textarea
                      id="content"
                      placeholder="Подробное описание новости..."
                      rows={6}
                      value={newNewsForm.content}
                      onChange={(e) => setNewNewsForm({...newNewsForm, content: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="image_url">URL изображения</Label>
                    <Input
                      id="image_url"
                      placeholder="https://..."
                      value={newNewsForm.image_url}
                      onChange={(e) => setNewNewsForm({...newNewsForm, image_url: e.target.value})}
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleAddNews} className="w-full">
                    <Icon name="Plus" className="mr-2" size={18} />
                    Опубликовать новость
                  </Button>
                </CardFooter>
              </Card>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {news.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 cursor-pointer group"
                  onClick={() => setSelectedNews(item)}>
                  {item.image_url && (
                    <div className="h-64 overflow-hidden">
                      <img 
                        src={item.image_url} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon name="Clock" size={16} />
                    {new Date(item.published_date).toLocaleDateString('ru-RU', { 
                      day: 'numeric', 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </CardFooter>
                </Card>
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

      <Dialog open={selectedNews !== null} onOpenChange={() => setSelectedNews(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedNews && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl">{selectedNews.title}</DialogTitle>
                <DialogDescription className="text-lg">{selectedNews.description}</DialogDescription>
              </DialogHeader>
              {selectedNews.image_url && (
                <img 
                  src={selectedNews.image_url} 
                  alt={selectedNews.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              )}
              <div className="prose prose-invert max-w-none">
                <p className="text-foreground whitespace-pre-wrap">{selectedNews.content}</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <footer className="border-t border-border mt-20 py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
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
    </div>
  );
};

export default Index;
