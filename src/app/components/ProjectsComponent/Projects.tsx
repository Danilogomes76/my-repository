import ProjectsCard from "../ProjectsCard/ProjectsCard";
import { Reveal } from "../Reveal/Reveal";

const Projects: React.FC = () => {
  const projectsData = [
    {
      description:
        "Aplicação para organizar seus livros que consome a API Google Books.",
      projectTitle: "Books Libry",
      technologies: "Vite, Axios, Redux, Stitches",
      imgSrc: "https://book-organize.vercel.app/assets/book.c3651569.png",
      projectLink: "https://book-organize.vercel.app",
      codeLink: "https://github.com/Danilogomes76/books_app",
    },
    {
      description:
        "Loja fake usando a Fake Store API onde você pode adicionar e remover do carrinho/curtidos. Possui rotas dinâmicas.",
      projectTitle: "Peregrin Store",
      technologies: "NextJS, Sass Axios, Reduxjs/toolkit, Typescript",
      imgSrc:
        "https://peregin-store.vercel.app/_next/static/media/logo.b037c7b9.svg",
      projectLink: "https://peregin-store.vercel.app/",
      codeLink: "https://github.com/Danilogomes76/peregrin-e-comerce-page",
    },
    {
      description:
        "Projeto criado com intuito de colocar em código um template que fiz com Figma.",
      projectTitle: "Plantation School",
      technologies: "Vite, Figma, Styled-components, Typescript",
      imgSrc: "/assets/plant.png",
      projectLink: "https://plantation-school-danilogomes76.vercel.app/",
      codeLink: "https://github.com/Danilogomes76/plantation-school",
      padding: true,
    },
    {
      description: "Mapeador de Rede feito em Javascript com Electron.js",
      projectTitle: "Mapeador de Rede",
      technologies: "ElectronJS, Tailwind",
      imgSrc: "/assets/rede.png",
      projectLink: "",
      codeLink: "https://github.com/Danilogomes76/network-map-electron",
      padding: true,
    },
  ];

  return (
    <section id="projetos" className="w-full">
      <Reveal>
        <div className="text-primary flex text-3xl after:content-['_‎']">
          #
          <div className="flex gap-2">
            <span className="text-my_gray">Projetos</span>
            <span className="cursor-default hidden lg:block">-----------</span>
          </div>
        </div>
      </Reveal>

      <section className="mt-12 flex lg:grid-cols-3 lg:grid-rows-2 lg:grid justify-center flex-wrap md:flex-row items-center lg:flex-row flex-col gap-4">
        {projectsData.map((project, index) =>
          index == 3 ? (
            <div className="col-start-2 row-start-2">
              <Reveal key={index}>
                <ProjectsCard {...project} />
              </Reveal>
            </div>
          ) : (
            <Reveal key={index}>
              <ProjectsCard {...project} />
            </Reveal>
          )
        )}
      </section>
    </section>
  );
};

export default Projects;
