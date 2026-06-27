"use client";

import { socialsLinks } from "@/data/socials";
import Social from "./social";
import { motion } from "motion/react";

const Socials = () => (
  <div className="flex flex-col items-start justify-center gap-4 sm:gap-6 md:items-start md:gap-10">
    {socialsLinks.map(({ link, title, icon }, index) => (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        viewport={{ once: true }}
        key={index}
      >
        <Social title={title} link={link} icon={icon} />
      </motion.div>
    ))}
  </div>
);
export default Socials;
