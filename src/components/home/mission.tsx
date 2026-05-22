"use client";
import StarBackground from "@/public/star-background.svg";
import StarBackground2 from "@/public/star-background-2.svg";
import Image from "next/image";
import Header from "@/components/header";
import CrossIcon from "@/public/cross-icon.svg";
import PillIcon from "@/public/pill-icon.svg";
import { motion } from "motion/react";

const Mission = () => {
  return (
    <div className="flex flex-col sm:h-85 md:h-100">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative inline-block">
            <Header icon1={CrossIcon} icon2={PillIcon} title="Our Mission" />

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-hohc-blue-700 absolute left-1/2 mt-2 h-1 w-3/4 origin-center -translate-x-1/2 rounded-full"
            />
          </div>
        </motion.div>

      <div className="relative">
        <Image
          src={StarBackground}
          alt=""
          className="-translate-x--1/3 absolute top-0 left-0 w-1/3 -translate-y-1/4 opacity-80 sm:w-1/2 sm:-translate-y-1/8 md:w-1/3 md:-translate-y-1/4"
        />
        <Image
          src={StarBackground2}
          alt=""
          className="absolute top-0 right-0 w-1/3 translate-y-1/3 sm:w-1/2 sm:translate-y-1/2 md:w-1/3 md:translate-y-1/3"
        />
      </div>
      <div className="flex items-center justify-center sm:py-20 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="font-hohc-kanit w-full items-center text-center text-2xl sm:max-w-2xl sm:text-3xl md:max-w-6xl md:px-8 md:py-4 md:text-4xl"
        >
          To connect UCR undergraduate students interested in the healthcare
          field to various hands-on opportunities and help them explore
          different careers within healthcare!
        </motion.div>
      </div>
    </div>
  );
};

export default Mission;