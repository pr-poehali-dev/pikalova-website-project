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
      <CardHeader className="py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex-grow">
            <CardTitle className="text-2xl lg:text-4xl mb-3">{ticket.event_name}</CardTitle>
            <CardDescription className="text-base lg:text-lg flex flex-wrap items-center gap-3 lg:gap-6">
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
            <div className="text-left lg:text-right shrink-0">
              <p className="text-sm text-muted-foreground">Билеты</p>
              <p className="text-2xl lg:text-3xl font-bold text-primary">{ticket.price}</p>
            </div>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default ScheduleCard;