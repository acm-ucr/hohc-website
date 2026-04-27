import Header from "@/components/header";
import HeartIcon from "@/public/heart-icon.svg";
import CrossIcon from "@/public/cross-icon.svg";
import Event from "@/components/events/event";

const Page = () => {
  return (
    <div>
      <Header icon1={HeartIcon} icon2={CrossIcon} title="Event Calendar" />
      page
      <div className="flex w-full justify-center pb-10">
        <div className="h-1/5 w-1/5">
          <Event
            title="Event Name"
            date="MM/DD/YY"
            location="building"
            description="A description"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
