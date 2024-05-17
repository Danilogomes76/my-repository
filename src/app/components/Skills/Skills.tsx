import Image from "next/image";
import SkillCard from "../SkillsCard/SkillCard";
import { ComponentIcon } from "lucide-react";

const Skills: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
          <SkillCard technologie="Typescript" Icon={ComponentIcon} />
          {technologies.map((technologie) => {
            return (
              <>
                <SkillCard
                  technologie={technologie.title}
                  Icon={ComponentIcon}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const technologies = [
  { title: "Typescript", Icon: "typescript-icon" },
  { title: "Javascript", Icon: "javascript-icon" },
  { title: "MySQL", Icon: "mysql-icon" },
  { title: "MongoDB", Icon: "mongodb-icon" },
  { title: "Figma", Icon: "figma-icon" },
  { title: "Linux", Icon: "linux-icon" },
  { title: "VSCode", Icon: "vscode-icon" },
  { title: "Git", Icon: "git-icon" },
  { title: "React", Icon: "react-icon" },
  { title: "Express.js", Icon: "expressjs-icon" },
  { title: "Next.js", Icon: "nextjs-icon" },
  { title: "Electron.js", Icon: "electronjs-icon" },
  { title: "Tailwind", Icon: "tailwind-icon" },
  { title: "Node.js", Icon: "nodejs-icon" },
  { title: "HTML", Icon: "html-icon" },
  { title: "CSS", Icon: "css-icon" },
  { title: "SASS", Icon: "sass-icon" },
  { title: "ESLint", Icon: "eslint-icon" },
  { title: "Jest", Icon: "jest-icon" },
  { title: "CRUD", Icon: "crud-icon" },
];

export default Skills;
