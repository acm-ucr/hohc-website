import Header from "@/components/header";
import StarIcon from "@/public/star-icon.svg";
import CrossIcon from "@/public/cross-icon.svg";

const Page = () => {
  return (
    <div>
      <Header icon1={StarIcon} icon2={CrossIcon} title="Clinics" />
      page
    </div>
  );
};

export default Page;
