import Image from "next/image";
import SkillCard from "../SkillsCard/SkillCard";

const Skills: React.FC = () => {
  return (
    <section id="conhecimentos" className="w-full">
      <p className="text-primary text-3xl after:content-['_‎']">
        #<span className="text-my_gray">Conhecimentos</span>
      </p>
      <section className="flex flex-col lg:flex-row items-center  gap-12 mt-12">
        <div className="w-1/2 relative lg:block hidden">
          <div className="w-96 h-72">
            <Image
              alt="img"
              src={"/assets/Dots.png"}
              width={63}
              height={63}
              className="absolute select-none top-[15%] left-[1%]"
            />
            <Image
              alt="img"
              src={"/assets/Dots.png"}
              width={63}
              height={63}
              className="absolute select-none top-[50%] left-[50%]"
            />
            <Image
              alt="img"
              src={"/assets/Style=Outline.svg"}
              width={113}
              height={113}
              className="absolute select-none top-[60%] left-[8%]"
            />
            <div className="border w-20 h-20 border-primary absolute select-none top-[10%] left-[70%]"></div>
            <div className="border w-14 h-14 border-primary absolute select-none top-[75%] left-[80%]"></div>
          </div>
        </div>
        <div className="lg:w-1/2 w-[90%] lg:flex gap-4 grid grid-rows-2 grid-cols-2 flex-wrap justify-end">
          <SkillCard title="Languages" technologies="Typescript Javascript" />
          <SkillCard title="Databases" technologies="MySql MongoDb" />
          <SkillCard title="Tools" technologies="Figma Linux VSCode Git" />
          <SkillCard
            title="Frameworks"
            technologies="React Express.js Next Electron.js Tailwind Node.js"
          />
          <SkillCard
            title="Others"
            technologies="HTML CSS SASS ESLint Jest CRUD"
          />
        </div>
      </section>
    </section>
  );
};

export default Skills;
