"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: (typeof projectsData)[number]) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.article
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      ref={ref}
      className=" group relative bg-gray-200 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-300 rounded-lg transition-colors"
    >
      <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2  sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
        <h3 className="text-2xl">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        src={imageUrl}
        alt={`Image of ${title} that i have worked on`}
        quality={100}
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl 
                  group-even:right-[initial]
                  group-even:-left-40
                  group-hover:-translate-x-3 
                  group-hover:translate-y-3 
                  group-hover:-rotate-2 
  
                  group-even:group-hover:translate-x-3 
                  group-even:group-hover:translate-y-3 
                  group-even:group-hover:rotate-2 
  
                  group-hover:scale-[1.04] 
                  transition"
      />
    </motion.article>
  );
}
