"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { useQuery } from "@tanstack/react-query";
import Scissor from "@/public/events/Scissors.svg"
import PillBottle from "@/public/events/PillBottle.svg"
import Image from "next/image"

interface GoogleCalendarEvent {
  date: string
  title: string
  location: string
  description?: string
}

interface GoogleEventProps {
  start: {
    dateTime?: string
    date?: string
  }
  end: {
    dateTime?: string
    date?: string
  }
  location?: string
  description?: string
  summary: string
}

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  const { data: events = [], isLoading } = useQuery({
  queryKey: ["googleCalendarEvents"],

  queryFn: async () => {
    const timeMin = new Date(
      new Date().getTime() - 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString()

    const timeMax = new Date(
      new Date().getTime() + 60 * 60 * 24 * 7 * 10 * 1000
    ).toISOString()

    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${
        process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL
      }/events?key=${
        process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY
      }&singleEvents=true&orderBy=startTime&timeMin=${timeMin}&timeMax=${timeMax}`
    ).then((res) => res.json())

    const events: GoogleCalendarEvent[] =
      response.items.map(
        ({
          start,
          location,
          description,
          summary,
        }: GoogleEventProps) => {
          const rawDate =
            start.dateTime || start.date || ""

          return {
            date: rawDate.split("T")[0],
            title: summary,
            location,
            description,
          }
        }
      )

    return events
  },
})

  return (
    <div className="flex items-center justify-center py-10">
      <div className="absolute left-36 top-85 z-10 size-35">
        <Image src={Scissor} alt="Scissor" className="object-cover" />
      </div>
      <div className="absolute left-36  top-195 z-10 size-35">
        <Image src={Scissor} alt="Scissor" className="object-cover" />
      </div>
      <div className="absolute right-38 top-80 z-10 ">
        <Image src={PillBottle} alt="Pill Bottle" className="size-42 object-contain" />
      </div>
      <div className="bg-hohc-blue-700/78 px-14 pt-18 pb-12">
       {isLoading ? (
          <p className="text-white font-hohc-kanit">
            Loading...
          </p>
        ) : (
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="flex justify-center rounded-2xl"
          captionLayout="dropdown"
          events ={events}
        />)}
      </div>
    </div>
  )
}
export default CalendarDemo
