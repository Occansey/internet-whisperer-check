
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Event {
  id: number;
  title: string;
  date: string;
  type: string;
}

interface MiniCalendarProps {
  events: Event[];
  onDateSelect: (date: Date, events: Event[]) => void;
}

const parseDate = (dateStr: string) => {
  if (!dateStr) return new Date();
  
  if (dateStr.includes('-')) {
    dateStr = dateStr.split('-')[0].trim() + ' ' + dateStr.split(' ').slice(1).join(' ');
  }
  
  try {
    const parts = dateStr.split(' ');
    
    if (parts.length >= 3) {
      const day = parseInt(parts[0]);
      const monthName = parts[1];
      const year = parseInt(parts[2]);
      
      const months: { [key: string]: number } = {
        'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
        'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11,
        'Janvier': 0, 'Février': 1, 'Mars': 2, 'Avril': 3, 'Mai': 4, 'Juin': 5,
        'Juillet': 6, 'Août': 7, 'Septembre': 8, 'Octobre': 9, 'Novembre': 10, 'Décembre': 11
      };
      
      if (!isNaN(day) && months[monthName] !== undefined && !isNaN(year)) {
        return new Date(year, months[monthName], day);
      }
    }
    
    return new Date();
  } catch (error) {
    return new Date();
  }
};

const MiniCalendar: React.FC<MiniCalendarProps> = ({ events, onDateSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const parsedEvents = events.map(event => ({
    ...event,
    dateObj: parseDate(event.date)
  }));
  
  const monthEvents = parsedEvents.filter(event => {
    const eventDate = event.dateObj;
    return eventDate >= monthStart && eventDate <= monthEnd;
  });
  
  const hasEvents = (date: Date) => {
    return monthEvents.some(event => isSameDay(date, event.dateObj));
  };
  
  const getEventsForDate = (date: Date) => {
    return monthEvents.filter(event => isSameDay(date, event.dateObj));
  };

  return (
    <Card className="w-full max-w-sm">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-solio-blue">
            {format(currentMonth, 'MMMM yyyy', { locale: fr })}
          </h3>
          <div className="flex space-x-1">
            <Button variant="ghost" size="sm" onClick={prevMonth} className="h-8 w-8 p-0">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={nextMonth} className="h-8 w-8 p-0">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium mb-2">
          {['D', 'L', 'M', 'M', 'J', 'V', 'S'].map(day => (
            <div key={day} className="p-1 text-gray-500">{day}</div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: monthStart.getDay() }).map((_, i) => (
            <div key={`empty-${i}`} className="h-8"></div>
          ))}
          
          {daysInMonth.map(date => {
            const dayEvents = getEventsForDate(date);
            const hasEventToday = hasEvents(date);
            const isToday = isSameDay(date, new Date());
            
            return (
              <button
                key={date.toString()}
                onClick={() => onDateSelect(date, dayEvents)}
                className={`h-8 w-8 text-xs rounded-md transition-colors ${
                  isToday 
                    ? 'bg-solio-blue text-white' 
                    : hasEventToday
                    ? 'bg-green-100 text-green-800 hover:bg-green-200'
                    : 'hover:bg-gray-100'
                }`}
              >
                {date.getDate()}
                {hasEventToday && (
                  <div className="w-1 h-1 bg-green-500 rounded-full mx-auto mt-0.5"></div>
                )}
              </button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default MiniCalendar;
