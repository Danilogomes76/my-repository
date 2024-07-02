import Image from "next/image";
import SkillCard from "../SkillsCard/SkillCard";
import { ComponentIcon } from "lucide-react";

const Skills: React.FC = () => {
  return (
    <section id="conhecimentos" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Conhecimentos
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Aqui estão algumas das principais tecnologias e ferramentas nas
              quais sou proficiente.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 lg:grid-cols-4">
          {technologies.map((technologie, index) => {
            return (
              <SkillCard
                key={index}
                technologie={technologie.title}
                icon={technologie.Icon}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const technologies = [
  { title: "Typescript", Icon: "/assets/technologies/Typescript.svg" },
  { title: "Javascript", Icon: "/assets/technologies/Javascript.svg" },
  { title: "MySQL", Icon: "/assets/technologies/MySql.svg" },
  { title: "MongoDB", Icon: "/assets/technologies/mongodb.svg" },
  { title: "Figma", Icon: "/assets/technologies/figma.svg" },
  { title: "Linux", Icon: "/assets/technologies/linux.svg" },
  { title: "VSCode", Icon: "/assets/technologies/vscode.svg" },
  { title: "Git", Icon: "/assets/technologies/git.svg" },
  { title: "React", Icon: "/assets/technologies/react.svg" },
  { title: "Express.js", Icon: "/assets/technologies/express.svg" },
  { title: "Next.js", Icon: "/assets/technologies/next.svg" },
  { title: "Electron.js", Icon: "/assets/technologies/electron.svg" },
  { title: "Tailwind", Icon: "/assets/technologies/tailwind.svg" },
  { title: "Node.js", Icon: "/assets/technologies/node.svg" },
  { title: "HTML", Icon: "/assets/technologies/html.svg" },
  { title: "CSS", Icon: "/assets/technologies/css.svg" },
  { title: "SASS", Icon: "/assets/technologies/sass.svg" },
  { title: "ESLint", Icon: "/assets/technologies/eslint.svg" },
  { title: "Jest", Icon: "/assets/technologies/jest.svg" },
  { title: "CRUD", Icon: "/assets/technologies/crud.svg" },
];

export default Skills;
