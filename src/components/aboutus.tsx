import aubg from "@/public/about-us-bg.svg";
import Image from "next/image";

// interface AboutUsProps {
//   textBlock1 : string;
//   textBlock2 : string;
//   textBlock3 : string;
// }
//{textBlock1, textBlock2, textBlock3}: AboutUsProps

const AboutUs = () => {
  return (
    <div className="mt-50 w-full">
      <div className="absolute mt-15">
        <div className="text-hohc-blue-700 ml-15 text-7xl font-bold">
          <p>About Us</p>
        </div>
        <div className="mx-25 mt-10 flex-col gap-10 text-4xl">
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
      <div>
        <Image src={aubg} alt="HOHC Logo" />
      </div>
    </div>
  );
};

export default AboutUs;
