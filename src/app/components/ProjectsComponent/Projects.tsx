import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { Reveal } from "../Reveal/Reveal";

export interface Project {
  description: string;
  projectTitle: string;
  technologies: string;
  imgSrc: string;
  projectLink: string;
  codeLink: string;
  bg: string;
  topRem: string;
  rightRem: string;
}

const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      description:
        "Loja fake usando a Fake Store API onde você pode adicionar e remover do carrinho/curtidos. Possui rotas dinâmicas.",
      projectTitle: "Peregrin Store",
      technologies: "NextJS, Sass Axios, Reduxjs/toolkit, Typescript",
      imgSrc:
        "https://peregin-store.vercel.app/_next/static/media/logo.b037c7b9.svg",
      projectLink: "https://peregin-store.vercel.app/",
      codeLink: "https://github.com/Danilogomes76/peregrin-e-comerce-page",
      bg: "bg-peregrin",
      topRem: "top-[24rem]",
      rightRem: "right-[52rem]",
    },
    {
      description:
        "Projeto criado com intuito de colocar em código um template que fiz com Figma.",
      projectTitle: "Plantation School",
      technologies: "Vite, Figma, Styled-components, Typescript",
      imgSrc: "/assets/plant.png",
      projectLink: "https://plantation-school-danilogomes76.vercel.app/",
      codeLink: "https://github.com/Danilogomes76/plantation-school",

      bg: "bg-plantation",
      topRem: "top-[24rem]",
      rightRem: "right-[19rem]",
    },
  ];

  return (
    <section id="projetos" className="w-full">
      <Reveal>
        <div className="text-my_white flex text-3xl after:content-['_‎']">
          #
          <div className="flex gap-2 relative">
            <span className="text-my_white">Projetos</span>
            <span className="cursor-default hidden lg:block">-----------</span>
          </div>
        </div>
      </Reveal>

      <section className="mt-12 flex  relative  justify-around flex-wrap md:flex-row items-center lg:flex-row flex-col gap-4">
        {projectsData.map((project, index) => (
          <div key={index} className="col-start-2 row-start-2">
            <Reveal key={index}>
              <ProjectsCard project={project} />
            </Reveal>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Projects;
