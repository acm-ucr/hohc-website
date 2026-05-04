import Landing from "../components/home/landing";
import Mission from "@/components/home/mission";
import FollowUs from "../components/home/followUs";
import AboutUs from "@/components/aboutus";

const Home = () => {
  return (
    <div>
      <Landing />
      <Mission />
      <AboutUs />
      <FollowUs />
    </div>
  );
};

export default Home;
