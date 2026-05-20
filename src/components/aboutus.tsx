import aubg from "@/public/about-us-bg.svg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="relative mt-25 w-full md:mt-50">
      <div className="absolute top-[6%] z-10 mt-3 flex flex-col gap-3 md:mt-7 lg:mt-15">
        <div className="text-hohc-blue-700 ml-5 text-xl font-bold md:ml-10 md:text-5xl lg:ml-15 lg:text-7xl">
          <p>About Us</p>
        </div>
        <div className="z-10 mx-10 flex-col gap-10 text-xs md:mx-20 md:text-lg lg:mx-25 lg:text-4xl">
          <p>
            Hands On Health Care (HOHC) aims to connect pre-health undergraduate
            students at UCR with opportunities and programs for hands-on
            clinical experience. Through workshops, panels, and guest speakers,
            members gain insight into various healthcare careers while
            developing practical skills.
          </p>
          <br />
          <p>
            Such activities include suturing, IV clinics, CPR, and EMT skills
            practice, among others. HOHC also serves as an outreach platform,
            keeping members informed about health programs, career
            opportunities, and volunteering throughout the Inland Empire.{" "}
          </p>
          <br />
          <p>
            By offering real-world experience, students can explore and confirm
            their passion for a career in healthcare through this club.
          </p>
        </div>
      </div>
      <Image src={aubg} alt="Light blue wave" className="z-10 w-full" />
      <div className="-z-20 -translate-y-[10%] sm:-mt-90 md:hidden">
        <Image src={aubg} alt="Light blue wave" className="z-10 w-full" />
      </div>
    </div>
  );
};

export default AboutUs;
