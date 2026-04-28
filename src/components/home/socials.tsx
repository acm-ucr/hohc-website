import { socialsLinks } from "@/data/socials";
import Social from "./social";

const Socials = () => (
  <div>
    {socialsLinks.map(({ link, title, icon}, index) => (
      <Social
        key={index}
        title={title}
        link={link}
        icon={icon}
        />
    ))}
  </div>
);
export default Socials
