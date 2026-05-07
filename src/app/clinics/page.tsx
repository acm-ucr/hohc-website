import Header from "@/components/header";
import StarIcon from "@/public/star-icon.svg";
import CrossIcon from "@/public/cross-icon.svg";
import ApplyNow from "@/components/clinic/applyNow";

const Page = () => {
  return (
    <div>
      <Header icon1={StarIcon} icon2={CrossIcon} title="Clinics" />
      page
      <ApplyNow />
    </div>
  );
};

export default Page;
