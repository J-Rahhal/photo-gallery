import React from "react";
import "../index.css";
import { NavLinks } from "../constants";
import { animate, delay, motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const MobileNav = () => {
  return (
    <div className="h-screen bg-black aboslute w-full text-white flex justify-center text-2xl items-center">
      <ul className="text-center mobile-link">
        {NavLinks.map((link, index) => {
          return (
            <motion.li
              key={link.id}
              className="mobile-link"
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: false }}
              custom={index}
            >
              {link.name}
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileNav;
