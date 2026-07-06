import { GoogleCalendarEvent } from "@/components/events/calendarCall";
import EventCard from "@/components/events/event";
import Header from "@/components/header";
import HeartIcon from "@/public/heart-icon.svg";
import CrossIcon from "@/public/cross-icon.svg";

interface UpcomingEventsProps {
  events: GoogleCalendarEvent[];
}

const Events = ({ events }: UpcomingEventsProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <Header icon1={HeartIcon} icon2={CrossIcon} title="Upcoming Events" />
      {events.length > 0 ? (
        <div className="flex w-full flex-col items-center justify-center gap-4 md:flex-row">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              location={event.location}
              description={event.description}
            />
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-500">No upcoming events.</p>
      )}
    </div>
  );
};

export default Events;
