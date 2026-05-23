"use client";

import * as React from "react";

import { Calendar } from "@/components/ui/calendar";
import { useQuery } from "@tanstack/react-query";
import Scissor from "@/public/events/Scissors.svg";
import PillBottle from "@/public/events/Pill.svg";
import ScissorNail from "@/public/events/ScissorNail.svg";
import GauzeRoll from "@/public/events/GauzeRoll.svg";
import Props from "@/public/events/Props.svg";
import Image from "next/image";

interface GoogleCalendarEvent {
  date: string;
  time?: string;
  title: string;
  location: string;
  description?: string;
}

interface GoogleEventProps {
  start: {
    dateTime?: string;
    date?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
  };
  location?: string;
  description?: string;
  summary: string;
}

export function FullCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const { data: events = [], isLoading } = useQuery<GoogleCalendarEvent[]>({
    queryKey: ["googleCalendarEvents"],

    queryFn: async () => {
      const timeMin = new Date(
        new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const timeMax = new Date(
        new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000,
      ).toISOString();

      const response = await fetch(
        `https://www.googleapis.com/calendar/v3/calendars/${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
        }/events?key=${
          process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
        }&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&timeMax=${timeMax}`,
      ).then((res) => res.json());

      const events: GoogleCalendarEvent[] = response.items.map(
        ({ start, location, description, summary }: GoogleEventProps) => {
          const rawDate = start.dateTime || start.date || "";

          return {
            date: rawDate.split("T")[0],
            title: summary,
            location,
            description,
            time: start.dateTime
              ? new Date(start.dateTime).toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "2-digit",
                })
              : "All Day",
          };
        },
      );

      return events;
    },
  });

  // const upcomingEvents = events
  //   .filter((event) => new Date(`${event.date}T00:00:00`) >= new Date())
  //   .slice(0, 3);

  return (
    <div className="flex flex-col items-center justify-center overflow-hidden py-2 md:py-4 xl:py-6">
      {isLoading ? (
        ""
      ) : (
        <>
          <div className="md:bg-hohc-blue-700/78 relative border-black md:border-b-4 md:px-12 md:pt-14 md:pb-8 lg:px-15 lg:pt-16 lg:pb-10 xl:border-b-6 xl:px-16 xl:pt-18 xl:pb-12">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="flex justify-center rounded-2xl"
              captionLayout="dropdown"
              events={events}
            />
            <div className="absolute top-0 left-0 z-10 hidden size-24 -translate-x-1/5 translate-y-1/5 md:block lg:size-28 xl:size-35">
              <Image src={Scissor} alt="Scissor" className="object-cover" />
            </div>
            <div className="absolute bottom-0 left-0 z-10 hidden size-24 -translate-x-1/5 -translate-y-9/4 md:block lg:size-28 xl:size-35">
              <Image src={Scissor} alt="Scissor" className="object-cover" />
            </div>
            <div className="absolute top-0 left-0 z-12 hidden translate-x-1/2 translate-y-7/4 md:block xl:translate-x-3/5 xl:translate-y-5/3">
              <Image
                src={ScissorNail}
                alt=""
                className="size-2/5 object-cover lg:size-3/5 xl:size-4/5"
              />
            </div>
            <div className="absolute bottom-0 left-0 z-12 hidden translate-x-1/2 -translate-y-3/2 md:block xl:translate-x-3/5 xl:-translate-y-5/4">
              <Image
                src={ScissorNail}
                alt=""
                className="size-2/5 object-cover lg:size-3/5 xl:size-4/5"
              />
            </div>
            <div className="absolute top-0 right-0 z-10 hidden translate-x-1/8 md:block">
              <Image
                src={PillBottle}
                alt="Pill Bottle"
                className="size-32 object-contain lg:size-38 xl:size-42"
              />
            </div>

            <div className="absolute right-0 bottom-0 z-10 hidden translate-x-3/7 translate-y-2/5 md:block xl:translate-y-3/7">
              <Image
                src={GauzeRoll}
                alt="Gauze Roll"
                className="size-80 object-contain lg:size-100 xl:size-120"
              />
            </div>
          </div>
          <div className="bg-hohc-blue-900 relative hidden h-6 w-full max-w-2xl md:block lg:max-w-3xl xl:h-8 xl:max-w-4xl" />
          <div className="relative hidden w-full max-w-sm md:block xl:max-w-lg">
            <Image src={Props} alt="" className="h-full w-full" />
          </div>
          <div></div>
        </>
      )}
    </div>
  );
}
export default FullCalendar;
