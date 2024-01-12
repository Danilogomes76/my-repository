"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";

import { loadSlim } from "@tsparticles/slim";
import { options } from "./options";
import Image from "next/image";

const MyImage: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      <section className="relative mt-8 lg:mt-0">
        {init ? (
          <div>
            <Particles
              className="absolute h-full [&>canvas]:rounded-full lg:rounded-none lg:w-screen"
              id="tsparticles"
              options={options}
            />
            <Image
              alt="logo"
              width={386}
              height={386}
              src={"/dGomes.png"}
              className={`select-none relative z-10 rounded-full lg:rounded-none lg:rounded-bl-[50%]  animate-fade-left animate-delay-1000`}
            ></Image>
          </div>
        ) : (
          <div className="select-none relative z-10 w-[22rem] lg:rounded-none  lg:rounded-bl-[50%] h-[22rem]  rounded-full animate-fade-left animate-delay-1000"></div>
        )}
        <Image
          alt="dots"
          width={100}
          height={100}
          src={"/assets/Dots.png"}
          className="absolute select-none top-[20%] "
        ></Image>

        <Image
          alt="styleOutline"
          width={100}
          height={100}
          src={"/assets/Style=Outline.svg"}
          className="absolute select-none top-[60%] left-[70%]"
        ></Image>
      </section>
    </>
  );
};

export default MyImage;
