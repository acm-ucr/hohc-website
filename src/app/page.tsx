//import Example from "@/components/example";
import Social from "@/components/home/social";
import imageIcon from "@/public/hohc-logo.svg";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Social
        title="HighlanderLink:"
        link="https://www.figma.com/design/pwH8wChMSkvdmPz7PDxKzX/Winter--26-HOHC?node-id=0-1&p=f"
        icon={imageIcon}
      />
    </div>
  );
};

export default Home;
