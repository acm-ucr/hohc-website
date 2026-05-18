import Landing from "../components/home/landing";
import Mission from "@/components/home/mission";
import AboutUs from "@/components/aboutus";
import JoinWidget from "@/components/home/joinWidget";
const Home = () => {
  return (
    <div>
      <Landing />
      <Mission />
      <AboutUs />
      <JoinWidget />
    </div>
  );
};

export default Home;
