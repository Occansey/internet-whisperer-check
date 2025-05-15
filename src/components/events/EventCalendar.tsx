
import { useState } from 'react';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Link } from 'react-router-dom';

interface Event {
  id: number;
  title: string;
  date: string;
  type: string;
}

interface EventCalendarProps {
  events: Event[];
  onEventClick: (eventId: number) => void;
}

const parseDate = (dateStr: string) => {
  const [day, month, year] = dateStr.split(' ');
  const months: { [key: string]: number } = {
    'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
    'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
  };
  return new Date(parseInt(year), months[month], parseInt(day));
};

const EventCalendar: React.FC<EventCalendarProps> = ({ events, onEventClick }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  
  // Get all days in current month
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  // Parse events to have Date objects
  const parsedEvents = events.map(event => ({
    ...event,
    dateObj: parseDate(event.date)
  }));
  
  // Get events for the current month
  const monthEvents = parsedEvents.filter(event => {
    const eventDate = event.dateObj;
    return eventDate >= monthStart && eventDate <= monthEnd;
  });
  
  // Group events by day
  const eventsByDay = daysInMonth.map(day => {
    const dayEvents = monthEvents.filter(event => isSameDay(day, event.dateObj));
    return {
      date: day,
      events: dayEvents
    };
  });
  
  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'upcoming':
        return 'bg-green-500';
      case 'spotlight':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };
  
  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-solio-blue">Calendrier des événements</h2>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={prevMonth}
            className="h-8 w-8 p-0"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Mois précédent</span>
          </Button>
          <h3 className="text-lg font-medium px-4">
            {format(currentMonth, 'MMMM yyyy', { locale: fr })}
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={nextMonth}
            className="h-8 w-8 p-0"
          >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Mois suivant</span>
          </Button>
        </div>
      </div>
      
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Calendar grid */}
          <div className="grid grid-cols-7 text-center font-medium border-b">
            {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day => (
              <div key={day} className="py-2 border-r last:border-r-0">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7">
            {/* Empty cells for days before the month starts */}
            {Array.from({ length: monthStart.getDay() }).map((_, i) => (
              <div key={`empty-start-${i}`} className="h-28 border-r border-b bg-gray-50"></div>
            ))}
            
            {/* Days of the month */}
            {eventsByDay.map(({ date, events }) => (
              <div 
                key={date.toString()} 
                className={`min-h-28 p-1 border-r border-b last:border-r-0 ${
                  isSameDay(date, new Date()) ? 'bg-blue-50' : ''
                } relative`}
              >
                <div className="text-right p-1">
                  <span className={`inline-block w-6 h-6 rounded-full text-center text-sm leading-6 ${
                    isSameDay(date, new Date()) 
                      ? 'bg-solio-blue text-white' 
                      : ''
                  }`}>
                    {date.getDate()}
                  </span>
                </div>
                
                {/* Events for this day */}
                <div className="space-y-1">
                  {events.map(event => (
                    <div 
                      key={event.id}
                      className="flex flex-col gap-1"
                    >
                      <div 
                        className="cursor-pointer text-xs p-1 rounded truncate hover:bg-gray-100"
                        onClick={() => onEventClick(event.id)}
                      >
                        <div className="flex items-center">
                          <span 
                            className={`w-2 h-2 rounded-full mr-1 ${getEventTypeColor(event.type)}`}
                          ></span>
                          {event.title}
                        </div>
                      </div>
                      <Link to={`/actualites/evenements/${event.id}`} className="text-xs px-1 text-solio-blue hover:underline">
                        En savoir plus
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Empty cells for days after the month ends */}
            {Array.from({ length: 6 - monthEnd.getDay() }).map((_, i) => (
              <div key={`empty-end-${i}`} className="h-28 border-r border-b bg-gray-50 last:border-r-0"></div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-4 flex justify-center">
        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
            <span className="text-sm text-gray-600">À venir</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
            <span className="text-sm text-gray-600">Spotlight</span>
          </div>
          <div className="flex items-center">
            <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
            <span className="text-sm text-gray-600">Passé</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
