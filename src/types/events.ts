
export type EventType = "upcoming" | "past" | "spotlight";
export type ImagePosition = "object-center" | "object-top" | "object-bottom" | "object-left" | "object-right" | "object-left-top" | "object-right-top" | "object-left-bottom" | "object-right-bottom";

export interface EventProps {
  id: number;
  title: string;
  description: string;
  type: EventType;
  date: string;
  time?: string;
  location: string;
  image?: string;
  imagePosition?: ImagePosition;
  link?: string;
  tags?: string[];
}
