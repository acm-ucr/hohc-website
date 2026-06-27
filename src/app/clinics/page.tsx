import Header from "@/components/header";
import StarIcon from "@/public/star-icon.svg";
import CrossIcon from "@/public/cross-icon.svg";
import ApplyNow from "@/components/clinic/applyNow";
import Description from "@/components/clinic/description";

const Page = () => {
  return (
    <div>
      <Header icon1={StarIcon} icon2={CrossIcon} title="Clinics" />
      <Description />
      <ApplyNow />
    </div>
  );
};

export default Page;
