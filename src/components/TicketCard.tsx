import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Ticket {
  id: number;
  event_name: string;
  event_date: string;
  venue: string;
  price: string;
  image_url: string;
  category: string;
}

interface TicketCardProps {
  ticket: Ticket;
}

const TicketCard = ({ ticket }: TicketCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 group">
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
  );
};

export default TicketCard;
