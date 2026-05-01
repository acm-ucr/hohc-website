import Landing from "../components/home/landing";
import FollowUs from "../components/home/followUs";
import Header from "@/components/header";
import CrossIcon from "@/public/cross-icon.svg";
import PillIcon from "@/public/pill-icon.svg";
import AboutUs from "@/components/aboutus";

const Home = () => {
  return (
    <div>
      <Landing />
      <Header icon1={CrossIcon} icon2={PillIcon} title="Our Mission" />
      <AboutUs />
      <FollowUs />
    </div>
  );
};

export default Home;
