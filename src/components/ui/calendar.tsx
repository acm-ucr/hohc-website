"use client"

import * as React from "react"
import {
  DayPicker,
  getDefaultClassNames,
} from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { ChevronLeftIcon, ChevronRightIcon, ChevronDownIcon } from "lucide-react"

import CalendarCard from "@/public/events/CalendarCard.svg";
import Image from "next/image";

interface GoogleCalendarEvent {
  date: string
  title: string
  location?: string
  description?: string
}

const EventDialog: React.FC<GoogleCalendarEvent> = ({ date, title, location, description }) => {
  return (
    <Dialog>
      <DialogTrigger className="bg-hohc-blue-700 font-hohc-kanit text-white text-xs rounded-md p-1">
        <p  className="truncate whitespace-nowrap overflow-hidden">{title}</p>
      </DialogTrigger>
      <DialogContent className="border-none bg-transparent">
          <Image
            src={CalendarCard}
            alt="Event Card"
            className="h-full w-full"
          />
        <DialogHeader className="absolute flex flex-col w-full font-hohc-kanit top-0 left-0 gap-8 px-10 py-12">
          <DialogTitle className="text-hohc-blue-700/78 text-xl">{title}</DialogTitle>
          <DialogDescription className="text-hohc-blue-600/78 text-xs flex flex-col gap-8">
            <p>{new Date(date).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
            </p>
            <p>{location}</p>
            <p className="pt-4">{description}</p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

const CalendarDay = ({ dayNum, events, isOutside,isToday }: { 
  dayNum: number, 
  events: GoogleCalendarEvent[],
  isOutside: boolean,
  isToday: boolean,
}) => {
  return (
    <div 
      className={cn(
        "relative h-22 w-22 border border-hohc-grey-300 px-1 overflow-y-scroll hide-scrollbar",
        isOutside && "bg-hohc-grey-200 text-muted-foreground",
        isToday && "bg-hohc-blue-700 text-white"
      )}
    >
      <span className="block text-right font-hohc-kanit font-thin text-lg">{dayNum}</span>
      <div className="flex flex-col pt-1 gap-1">
        {events.map((event, i) => (
          <EventDialog key={i} {...event} />
        ))}
      </div>
    </div>
  );
};

function Calendar({
  events = [],
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  locale,
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & { events?: GoogleCalendarEvent[] }) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      captionLayout="label"
      locale={locale}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString(locale?.code, { month: "short" }),
        ...formatters,
      }}
      classNames={{
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "relative flex flex-col rounded-2xl gap-4 py-10 px-12 bg-hohc-yellow-200 md:flex-row",
          defaultClassNames.months
        ),
        month: cn("flex w-full flex-col gap-4", defaultClassNames.month),
        nav: cn(
          "absolute inset-x-0 top-16 pr-14 flex w-full items-center justify-end gap-12",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: "ghost" }),
          "p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: "ghost" }),
          "p-0 select-none aria-disabled:opacity-50",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex w-full items-center justify-start py-6",
          defaultClassNames.month_caption
        ),
        caption_label: cn(
          "font-black select-none ",
          captionLayout === "label"
            ? "text-sm"
            : "flex items-center gap-1 font-hohc-kanit text-hohc-blue-700 text-4xl",
          defaultClassNames.caption_label
        ),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 font-bold text-black pt-4 pb-8 text-lg select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full h-full", defaultClassNames.week),
        week_number: cn(
          "text-muted-foreground select-none",
          defaultClassNames.week_number
        ),
        outside: cn(
          "text-muted-foreground bg-hohc-grey-200 aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames,
        
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <ChevronLeftIcon className={cn("size-10 text-hohc-blue-700", className)} {...props} />
            )
          }

          if (orientation === "right") {
            return (
              <ChevronRightIcon className={cn("size-10 text-hohc-blue-700", className)} {...props} />
            )
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          )
        },
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        Day: (props) => {

          const { date, displayMonth } = props.day;
          const isOutside = date.getMonth() !== displayMonth.getMonth();
          const dateString = date.toISOString().split('T')[0];
          const dayEvents = events.filter((e) => e.date === dateString);
          const today = new Date();
          const isToday = 
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();

          return (
            <CalendarDay 
              dayNum={date.getDate()}
              events={dayEvents}
              isOutside={isOutside}
              isToday={isToday}
            />
          );
        },
        ...components,
      }}
      {...props}
    />
  )
}



export { Calendar }
