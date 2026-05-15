import { socialsLinks } from "@/data/socials";
import Social from "./social";

const Socials = () => (
  <div className="flex flex-col items-start justify-center gap-10">
    {socialsLinks.map(({ link, title, icon }, index) => (
      <Social key={index} title={title} link={link} icon={icon} />
    ))}
  </div>
);
export default Socials;
