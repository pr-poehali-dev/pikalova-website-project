import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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

interface ScheduleCardProps {
  ticket: Ticket;
}

const ScheduleCard = ({ ticket }: ScheduleCardProps) => {
  return (
    <Card className="hover:border-primary/50 transition-all">
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
  );
};

export default ScheduleCard;
