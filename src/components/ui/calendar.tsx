"use client";

import * as React from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";

import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "lucide-react";

import { motion } from "motion/react";

import CalendarCard from "@/public/events/CalendarCard.svg";
import Image from "next/image";

interface GoogleCalendarEvent {
  date: string;
  time?: string;
  title: string;
  location?: string;
  description?: string;
}

interface EventDialogProps extends GoogleCalendarEvent {
  isToday: boolean;
}

const EventDialog: React.FC<EventDialogProps> = ({
  date,
  time,
  title,
  location,
  description,
  isToday,
}) => {
  return (
    <Dialog>
      <motion.div
        className="box-border w-full max-w-full min-w-0 whitespace-normal"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <DialogTrigger
          className={cn(
            "font-hohc-kanit w-full rounded-sm px-1 text-xs text-white md:rounded-md md:p-1",
            isToday ? "bg-hohc-blue-500" : "bg-hohc-blue-700",
          )}
        >
          <p className="truncate overflow-hidden whitespace-nowrap">{title}</p>
        </DialogTrigger>
      </motion.div>
      <DialogContent className="border-none bg-transparent">
        <Image src={CalendarCard} alt="Event Card" className="h-full w-full" />
        <DialogHeader className="font-hohc-kanit absolute top-0 left-0 flex w-full flex-col px-4 py-4 sm:gap-4 sm:px-8 sm:py-12 md:gap-6 xl:gap-8 xl:px-10 xl:py-14">
          <DialogTitle className="text-hohc-blue-700/78 text-sm sm:text-lg md:text-xl xl:text-2xl">
            {title}
          </DialogTitle>
          <DialogDescription className="text-hohc-blue-600/78 flex flex-col gap-2 text-xs md:gap-4 lg:gap-6 xl:gap-8 xl:text-sm">
            <p>
              {new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              at {time}
            </p>
            <p className="hide-scrollbar-bg max-h-10 overflow-x-hidden overflow-y-scroll break-words sm:max-h-full sm:overflow-hidden">
              {location}
            </p>
            <p className="hide-scrollbar-bg max-h-12 overflow-x-hidden overflow-y-scroll pr-1 break-words sm:max-h-22 sm:pt-1 md:max-h-30 md:pt-2 lg:max-h-36 lg:pt-3 xl:max-h-40 xl:pt-4 xl:pr-2">
              {description}
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

const CalendarDay = ({
  dayNum,
  events,
  isOutside,
  isToday,
}: {
  dayNum: number;
  events: GoogleCalendarEvent[];
  isOutside: boolean;
  isToday: boolean;
}) => {
  return (
    <div
      className={cn(
        "border-hohc-grey-300 hide-scrollbar relative h-10 w-10 overflow-y-scroll border px-1 sm:h-12 sm:w-12 md:h-18 md:w-18 lg:h-20 lg:w-20 xl:h-24 xl:w-24",
        isOutside && "bg-hohc-grey-200 text-muted-foreground",
        isToday && "bg-hohc-blue-700 text-white",
      )}
    >
      <span className="font-hohc-kanit block text-right text-xs font-thin md:text-sm lg:text-base xl:text-lg">
        {dayNum}
      </span>
      <div className="flex w-7/8 flex-col gap-1 justify-self-center pt-1">
        {events.map((event, i) => (
          <EventDialog key={i} {...event} isToday={isToday} />
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
}: React.ComponentProps<typeof DayPicker> & {
  events?: GoogleCalendarEvent[];
}) {
  const defaultClassNames = getDefaultClassNames();

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
          "relative flex flex-col border-hohc-blue-700/78 border rounded-2xl gap-4 pt-2 pb-6 px-6 md:py-6 lg:py-8 xl:py-10 md:px-9 lg:px-11 xl:px-12 bg-hohc-yellow-200 md:flex-row",
          defaultClassNames.months,
        ),
        month: cn(
          "flex w-full flex-col gap-3 xl:gap-4",
          defaultClassNames.month,
        ),
        nav: cn(
          "absolute inset-x-0 top-5 md:top-8 lg:top-13 xl:top-16 pr-8 md:pr-18 lg:pr-20 xl:pr-22 flex w-full items-center justify-end gap-6 md:gap-8 lg:gap-10 xl:gap-12",
          defaultClassNames.nav,
        ),

        month_caption: cn(
          "flex w-full items-center justify-start py-2 lg:py-4 xl:py-6",
          defaultClassNames.month_caption,
        ),
        caption_label: cn(
          "font-black select-none ",
          captionLayout === "label"
            ? "text-sm"
            : "flex items-center gap-1 font-hohc-kanit text-hohc-blue-700 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl",
          defaultClassNames.caption_label,
        ),
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "flex-1 font-bold text-black pb-4 md:pt-2 md:pb-6 xl:pt-4 xl:pb-8 text-xs md:text-base lg:text-lg select-none",
          defaultClassNames.weekday,
        ),
        week: cn("flex w-full h-full", defaultClassNames.week),
        week_number: cn(
          "text-muted-foreground select-none",
          defaultClassNames.week_number,
        ),
        outside: cn(
          "text-muted-foreground bg-hohc-grey-200 aria-selected:text-muted-foreground",
          defaultClassNames.outside,
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled,
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
          );
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === "left") {
            return (
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ y: 0.7 }}
              >
                <ChevronLeftIcon
                  className={cn(
                    "text-hohc-blue-700 size-4 sm:size-5 md:size-8 xl:size-10",
                    className,
                  )}
                  {...props}
                />
              </motion.div>
            );
          }

          if (orientation === "right") {
            return (
              <motion.div
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                whileTap={{ y: 0.7 }}
              >
                <ChevronRightIcon
                  className={cn(
                    "text-hohc-blue-700 size-4 sm:size-5 md:size-8 xl:size-10",
                    className,
                  )}
                  {...props}
                />
              </motion.div>
            );
          }

          return (
            <ChevronDownIcon className={cn("size-4", className)} {...props} />
          );
        },
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex items-center justify-center text-center">
                {children}
              </div>
            </td>
          );
        },
        Day: (props) => {
          const { date, displayMonth } = props.day;
          const isOutside = date.getMonth() !== displayMonth.getMonth();
          const dateString = date.toISOString().split("T")[0];
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
  );
}

export { Calendar };
