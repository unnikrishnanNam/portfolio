"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { activeSection, setActiveSection } = useActiveSectionContext();
  useEffect(() => {
    if (inView) {
      setActiveSection("Skills");
    }
  }, [inView]);
  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-white border border-black/[0.1] rounded-xl py-3 px-5 flex items-center gap-2"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: index * 0.1 },
            }}
            viewport={{
              once: true,
            }}
          >
            {skill.icon}
            {skill.name}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
