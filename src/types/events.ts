
export type EventType = "upcoming" | "past" | "spotlight";

export interface EventProps {
  id: number;
  title: string;
  description: string;
  type: EventType;
  date: string;
  time?: string;
  location: string;
  image?: string;
  link?: string;
  tags?: string[];
}
