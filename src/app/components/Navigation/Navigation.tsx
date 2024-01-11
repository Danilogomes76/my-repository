"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Navigation: React.FC = () => {
  const ref = useRef(null);

  const [isClipPathVisible, setIsClipPathVisible] = useState(false);
  const clipPathControls = useAnimation();
  const buttonControls = useAnimation();

  const toggleClipPath = async () => {
    await clipPathControls.start({
      clipPath: isClipPathVisible
        ? "inset(100% 0% 0% 0%)"
        : "inset(0% 0% 0% 0%)",
    });
    setIsClipPathVisible(!isClipPathVisible);
    buttonControls.start(isClipPathVisible ? "border" : "noBorder");
  };

  useEffect(() => {
    clipPathControls.start({
      clipPath: isClipPathVisible
        ? "inset(100% 0% 0% 0%)"
        : "inset(0% 0% 0% 0%)",
    });
    buttonControls.start(isClipPathVisible ? "border" : "noBorder");
  }, [isClipPathVisible, clipPathControls, buttonControls]);

  return (
    <section
      ref={ref}
      className="fixed z-20  m-6 bottom-0 right-0 flex flex-col items-center lg:hidden justify-end"
    >
      <motion.ul
        variants={{
          hidden: { clipPath: "inset(100% 0% 0% 0%)" },
          visible: {
            clipPath: "inset(0% 0% 0% 0%)",
          },
        }}
        initial="hidden"
        animate={clipPathControls}
        transition={{ duration: 0.3, delay: 0.25 }}
        className=" gap-4 py-3 bg-my_white w-full rounded-tr-2xl rounded-tl-2xl flex items-center flex-col"
      >
        <li className="">
          <a href="#home">
            <Image
              alt="logo"
              width={30}
              height={30}
              src={"/assets/home.png"}
              className="opacity-50"
              priority
              onClick={toggleClipPath}
            ></Image>
          </a>
        </li>
        <li className="">
          <a href="#projetos">
            <Image
              alt="logo"
              width={30}
              height={30}
              src={"/assets/projects.png"}
              className="opacity-50"
              priority
              onClick={toggleClipPath}
            ></Image>
          </a>
        </li>
        <li className="">
          <a href="#conhecimentos">
            <Image
              alt="logo"
              width={30}
              height={30}
              src={"/assets/lamp.png"}
              className="opacity-50"
              onClick={toggleClipPath}
            ></Image>
          </a>
        </li>
        <li className="">
          <a href="#sobre">
            <Image
              alt="logo"
              width={30}
              height={30}
              src={"/assets/about.png"}
              className="opacity-50"
              onClick={toggleClipPath}
            ></Image>
          </a>
        </li>
        <li className="">
          <a href="#social">
            <Image
              alt="logo"
              width={30}
              height={30}
              src={"/assets/phone.png"}
              className="opacity-50"
              onClick={toggleClipPath}
            ></Image>
          </a>
        </li>
      </motion.ul>

      <motion.button
        // animate={buttonControls}
        variants={{
          noBorder: { borderTopLeftRadius: "50%", borderTopRightRadius: "50%" },
          border: { borderTopLeftRadius: "none", borderTopRightRadius: "none" },
        }}
        onClick={toggleClipPath}
        className="md:w-14 md:h-14 w-12 h-12 z-20 flex items-center justify-center rounded bg-my_white"
      >
        <Image
          alt="logo"
          width={30}
          height={30}
          src={"/assets/hamburgues.png"}
          className=""
          priority={true}
        ></Image>
      </motion.button>
    </section>
  );
};

export default Navigation;
