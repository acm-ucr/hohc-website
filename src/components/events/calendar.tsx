"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import Scissor from "@/public/events/Scissors.svg"
import PillBottle from "@/public/events/PillBottle.svg"
import Image from "next/image"

export function CalendarDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <div className="flex items-center justify-center py-10">
      <div className="absolute left-36 top-36 z-10 size-35">
        <Image src={Scissor} alt="Scissor" className="object-cover" />
      </div>
      <div className="absolute left-36  top-140 z-10 size-35">
        <Image src={Scissor} alt="Scissor" className="object-cover" />
      </div>
      <div className="absolute right-38 top-34 z-10 ">
        <Image src={PillBottle} alt="Pill Bottle" className="size-42 object-contain" />
      </div>
      <div className="bg-hohc-blue-700/78 px-14 pt-18 pb-12">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="flex justify-center rounded-2xl"
          captionLayout="dropdown"
        />
      </div>
    </div>
  )
}
export default CalendarDemo
