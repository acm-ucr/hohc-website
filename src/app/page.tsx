import Landing from "../components/home/landing";
import Header from "@/components/header";
import CrossIcon from "@/public/cross-icon.svg";
import PillIcon from "@/public/pill-icon.svg";

const Home = () => {
  return (
    <div>
      <Landing />
      <Header icon1={CrossIcon} icon2={PillIcon} title="Our Mission" />
    </div>
  );
};

export default Home;
