
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EventProps } from '@/types/events';

interface MiniCalendarProps {
  events: EventProps[];
  onDateSelect: (date: Date | undefined) => void;
  selectedDate?: Date;
  wpEvents?: any[];
}

const parseEventDate = (dateStr: string): Date => {
  console.log('MiniCalendar parsing date:', dateStr);
  
  if (!dateStr) return new Date();
  
  // Handle WordPress ACF date format (DD/MM/YYYY)
  if (dateStr.includes('/')) {
    const [day, month, year] = dateStr.split('/');
    const parsedDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
    console.log('MiniCalendar parsed ACF date:', parsedDate);
    return parsedDate;
  }
  
  // Handle date ranges like "5-7 septembre 2025"
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
        const parsedDate = new Date(year, months[monthName], day);
        console.log('MiniCalendar parsed French date:', parsedDate);
        return parsedDate;
      }
    }
    
    return new Date();
  } catch (error) {
    console.error('MiniCalendar error parsing date:', dateStr, error);
    return new Date();
  }
};

const MiniCalendar: React.FC<MiniCalendarProps> = ({ events, onDateSelect, selectedDate, wpEvents = [] }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];

  // Get event dates from ACF date field or fallback to event date
  const eventDates = events.map(event => {
    const wpEvent = wpEvents.find(wp => wp.id === event.id);
    const acfDate = wpEvent?.date || event.date;
    return parseEventDate(acfDate);
  });

  const isDayWithEvent = (date: Date) => {
    return eventDates.some(eventDate => 
      eventDate.toDateString() === date.toDateString()
    );
  };

  return (
    <Card className="w-full max-w-sm border-blue-500 border-2">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-center">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </span>
          <Button variant="ghost" size="icon" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-3">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateSelect}
          month={currentMonth}
          onMonthChange={setCurrentMonth}
          className="w-full"
          classNames={{
            month: "space-y-4",
            caption: "hidden",
            table: "w-full border-collapse space-y-1",
            head_row: "flex",
            head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
            day: `h-8 w-8 p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md`,
            day_selected: "bg-blue-600 text-white hover:bg-blue-700 hover:text-white focus:bg-blue-600 focus:text-white border-2 border-blue-800",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "text-muted-foreground opacity-50",
            day_disabled: "text-muted-foreground opacity-50",
          }}
          modifiers={{
            eventDay: isDayWithEvent
          }}
          modifiersClassNames={{
            eventDay: "bg-blue-100 text-blue-800 border-2 border-blue-500 font-bold hover:bg-blue-200"
          }}
        />
      </CardContent>
    </Card>
  );
};

export default MiniCalendar;
