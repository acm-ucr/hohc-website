import Header from "@/components/header";
import HeartIcon from "@/public/heart-icon.svg";
import CrossIcon from "@/public/cross-icon.svg";

import FullCalendar from "@/components/events/calendarCall";
const Page = () => {
  return (
    <div>
      <Header icon1={HeartIcon} icon2={CrossIcon} title="Event Calendar" />
      <FullCalendar />
    </div>
  );
};

export default Page;
