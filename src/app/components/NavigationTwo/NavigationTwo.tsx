"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { LuBook as FaBook } from "react-icons/lu";
import { RiProfileLine } from "react-icons/ri";
import { IoShareSocialOutline } from "react-icons/io5";

const NavigationTwo: React.FC = () => {
  const [isClipPathVisible, setIsClipPathVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollTop =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsClipPathVisible(false);
      } else {
        setIsClipPathVisible(true);
      }

      setLastScrollTop(currentScrollTop);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <section className="fixed z-20 bottom-4 w-4/5 flex items-center lg:hidden justify-end">
      <motion.ul
        initial={{ y: isClipPathVisible ? 0 : 100 }}
        animate={{ y: isClipPathVisible ? 0 : 100 }}
        transition={{ duration: 0.3 }}
        className="gap-4 justify-evenly py-3 bg-bg_color rounded-2xl   w-full flex items-center  bg-opacity-60  backdrop-blur-md"
      >
        <li>
          <a href="#home">
            <IoHomeOutline color="#C778DD" className="  p-1 w-9 h-9" />
          </a>
        </li>
        <li>
          <a href="#projetos">
            <GoProjectSymlink color="#C778DD" className="  p-1 w-9 h-9" />
          </a>
        </li>
        <li>
          <a href="#conhecimentos">
            <FaBook color="#C778DD" className="  p-1 w-9 h-9" />
          </a>
        </li>
        <li>
          <a href="#sobre">
            <RiProfileLine color="#C778DD" className="  p-1 w-9 h-9" />
          </a>
        </li>
        <li>
          <a href="#social">
            <IoShareSocialOutline color="#C778DD" className="  p-1 w-9 h-9" />
          </a>
        </li>
      </motion.ul>
    </section>
  );
};

export default NavigationTwo;
