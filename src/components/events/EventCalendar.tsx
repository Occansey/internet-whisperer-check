import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, parse } from 'date-fns';
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
  if (!dateStr) return new Date();
  
  // Handle date ranges like "5-7 septembre 2025"
  if (dateStr.includes('-')) {
    // Just use the start date for display
    dateStr = dateStr.split('-')[0].trim() + ' ' + dateStr.split(' ').slice(1).join(' ');
  }
  
  try {
    // For formats like "10 juin 2025"
    const parts = dateStr.split(' ');
    
    if (parts.length >= 3) {
      const day = parseInt(parts[0]);
      const monthName = parts[1];
      const year = parseInt(parts[2]);
      
      const months: { [key: string]: number } = {
        'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
        'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11,
        // Capitalized versions
        'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
        'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
      };
      
      if (isNaN(day) || !(monthName.toLowerCase() in months) || isNaN(year)) {
        console.error(`Could not parse date: ${dateStr}`);
        return new Date();
      }
      
      return new Date(year, months[monthName], day);
    }
    
    console.error(`Unknown date format: ${dateStr}`);
    return new Date();
  } catch (error) {
    console.error(`Error parsing date: ${dateStr}`, error);
    return new Date();
  }
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
  const parsedEvents = events.map(event => {
    const dateObj = parseDate(event.date);
    return {
      ...event,
      dateObj
    };
  });
  
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
  
  const getEventColor = (type: string) => {
    switch (type) {
      case 'upcoming':
        return 'bg-green-500';
      case 'spotlight':
        return 'bg-yellow-500';
      default:
        return 'bg-blue-500';
    }
  };
  
  const hasEvents = (date: Date) => {
    return monthEvents.some(event => isSameDay(date, event.dateObj));
  };
  
  return (
    <div className="mb-10 max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg md:text-xl font-bold text-solio-blue">Calendrier des événements</h2>
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
          <h3 className="text-sm md:text-lg font-medium px-2 md:px-4">
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
      
      <Card className="overflow-hidden shadow-sm">
        <CardContent className="p-0">
          {/* Calendar grid */}
          <div className="grid grid-cols-7 text-center font-medium border-b text-xs md:text-sm">
            {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day => (
              <div key={day} className="py-1 border-r last:border-r-0">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7">
            {/* Empty cells for days before the month starts */}
            {Array.from({ length: monthStart.getDay() }).map((_, i) => (
              <div key={`empty-start-${i}`} className="h-12 md:h-16 border-r border-b bg-gray-50"></div>
            ))}
            
            {/* Days of the month */}
            {eventsByDay.map(({ date, events }) => (
              <div 
                key={date.toString()} 
                className={`h-12 md:h-16 border-r border-b last:border-r-0 relative ${
                  isSameDay(date, new Date()) ? 'bg-blue-50' : ''
                } ${hasEvents(date) ? 'bg-green-50 hover:bg-green-100 transition-colors cursor-pointer' : ''}`}
                onClick={() => {
                  if (events.length === 1) {
                    window.location.href = `/actualites/evenements/${events[0].id}`;
                  } else if (events.length > 1) {
                    // Show all events for this day
                    console.log(`Multiple events on ${date}:`, events);
                  }
                }}
              >
                <div className="text-center p-1">
                  <div className="flex flex-col items-center">
                    <span className={`inline-flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full text-xs md:text-sm ${
                      isSameDay(date, new Date()) 
                        ? 'bg-solio-blue text-white' 
                        : hasEvents(date)
                        ? 'font-medium text-green-700' 
                        : ''
                    }`}>
                      {date.getDate()}
                    </span>
                    
                    {events.length > 0 && (
                      <div className="mt-0.5 md:mt-1 flex space-x-0.5 md:space-x-1 justify-center">
                        {events.slice(0, 2).map((event) => (
                          <div 
                            key={event.id}
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full ${getEventColor(event.type)}`}
                          />
                        ))}
                        {events.length > 2 && (
                          <span className="text-xs text-gray-500 hidden md:inline">+{events.length - 2}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                {events.length > 0 && (
                  <div className="absolute bottom-0.5 left-0.5 right-0.5 flex justify-center md:bottom-1 md:left-1 md:right-1">
                    <div className="text-xs text-green-700 hover:underline cursor-pointer hidden md:block">
                      {events.length === 1 ? (
                        <span className="truncate block max-w-[60px] md:max-w-[80px]">
                          {events[0].title}
                        </span>
                      ) : (
                        <span>{events.length} événements</span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Empty cells for days after the month ends */}
            {Array.from({ length: 6 - monthEnd.getDay() }).map((_, i) => (
              <div key={`empty-end-${i}`} className="h-12 md:h-16 border-r border-b bg-gray-50 last:border-r-0"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventCalendar;
