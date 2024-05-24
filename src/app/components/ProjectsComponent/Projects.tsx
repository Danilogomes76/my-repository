import ProjectsCard from "../ProjectsCard/ProjectsCard";

export interface Project {
  description: string;
  projectTitle: string;
  technologies: string[];
  imgSrc: string;
  projectLink: string;
  codeLink: string;
}

const Projects: React.FC = () => {
  const projectsData = [
    {
      description:
        "Aplicação para organizar seus livros que consome a API Google Books.",
      projectTitle: "Books Libry",
      technologies: ["Vite", "Axios", "Redux", "Stitches"],
      imgSrc: "https://book-organize.vercel.app/assets/book.c3651569.png",
      projectLink: "https://book-organize.vercel.app",
      codeLink: "https://github.com/Danilogomes76/books_app",
    },
    {
      description:
        "Loja fake usando a Fake Store API onde você pode adicionar e remover do carrinho/curtidos. Possui rotas dinâmicas.",
      projectTitle: "Peregrin Store",
      technologies: [
        "NextJS",
        "Sass",
        "Axios",
        "Reduxjs/toolkit",
        "Typescript",
      ],
      imgSrc:
        "https://peregin-store.vercel.app/_next/static/media/logo.b037c7b9.svg",
      projectLink: "https://peregin-store.vercel.app/",
      codeLink: "https://github.com/Danilogomes76/peregrin-e-comerce-page",
    },
    {
      description:
        "Projeto criado com intuito de colocar em código um template que fiz com Figma.",
      projectTitle: "Plantation School",
      technologies: ["Vite", "Figma", "Styled-components", "Typescript"],
      imgSrc: "/assets/plant.png",
      projectLink: "https://plantation-school-danilogomes76.vercel.app/",
      codeLink: "https://github.com/Danilogomes76/plantation-school",
      padding: true,
    },
    {
      description: "Mapeador de Rede feito em Javascript com Electron.js",
      projectTitle: "Mapeador de Rede",
      technologies: ["ElectronJS", "Tailwind"],
      imgSrc: "/assets/rede.png",
      projectLink: "",
      codeLink: "https://github.com/Danilogomes76/network-map-electron",
      padding: true,
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Projetos
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Confira alguns de meus projetos recentes que mostram minhas
              habilidades e experiência.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => {
            return <ProjectsCard key={index} project={project} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
// import ProjectsCard from "../ProjectsCard/ProjectsCard";
// import { Reveal } from "../Reveal/Reveal";

// export interface Project {
//   description: string;
//   projectTitle: string;
//   technologies: string;
//   imgSrc: string;
//   projectLink: string;
//   codeLink: string;
//   bg: string;
//   topRem: string;
//   rightRem: string;
// }

// const Projects: React.FC = () => {
//   const projectsData: Project[] = [
//     {
//       description:
//         "Loja fake usando a Fake Store API onde você pode adicionar e remover do carrinho/curtidos. Possui rotas dinâmicas.",
//       projectTitle: "Peregrin Store",
//       technologies: "NextJS, Sass Axios, Reduxjs/toolkit, Typescript",
//       imgSrc:
//         "https://peregin-store.vercel.app/_next/static/media/logo.b037c7b9.svg",
//       projectLink: "https://peregin-store.vercel.app/",
//       codeLink: "https://github.com/Danilogomes76/peregrin-e-comerce-page",
//       bg: "bg-peregrin",
//       topRem: "top-[24rem]",
//       rightRem: "right-[52rem]",
//     },
//     {
//       description:
//         "Projeto criado com intuito de colocar em código um template que fiz com Figma.",
//       projectTitle: "Plantation School",
//       technologies: "Vite, Figma, Styled-components, Typescript",
//       imgSrc: "/assets/plant.png",
//       projectLink: "https://plantation-school-danilogomes76.vercel.app/",
//       codeLink: "https://github.com/Danilogomes76/plantation-school",

//       bg: "bg-plantation",
//       topRem: "top-[24rem]",
//       rightRem: "right-[19rem]",
//     },
//   ];

//   return (
//     <section id="projetos" className="w-full">
//       <Reveal>
//         <div className="text-my_white flex text-3xl after:content-['_‎']">
//           #
//           <div className="flex gap-2 relative">
//             <span className="text-my_white">Projetos</span>
//             <span className="cursor-default hidden lg:block">-----------</span>
//           </div>
//         </div>
//       </Reveal>

//       <section className="mt-12 flex  relative  justify-around flex-wrap md:flex-row items-center lg:flex-row flex-col gap-4">
//         {projectsData.map((project, index) => (
//           <div key={index} className="col-start-2 row-start-2">
//             <Reveal key={index}>
//               <ProjectsCard project={project} />
//             </Reveal>
//           </div>
//         ))}
//       </section>
//     </section>
//   );
// };

// export default Projects;
