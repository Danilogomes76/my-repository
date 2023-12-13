import ProjectsCard from "../ProjectsCard/ProjectsCard";

const Projects: React.FC = () => {
  return (
    <section className="w-full">
      <p className="text-primary text-3xl after:content-['_‎']">
        #<span className="text-my_gray">Projetos</span>
      </p>

      <section className="mt-12 flex justify-center flex-wrap md:flex-row items-center lg:flex-row flex-col gap-4">
        <ProjectsCard
          description="Aplicação para organizar seus livros que consome a API Google Books."
          projectTitle="Books Libry"
          technologies="Vite, Axios, Redux, Stitches"
          imgSrc="https://book-organize.vercel.app/assets/book.c3651569.png"
          projectLink="https://book-organize.vercel.app"
          codeLink="https://github.com/Danilogomes76/books_app"
        />
        <ProjectsCard
          description="Loja fake usando a Fake Store API onde você pode adicionar e remover do carrinho/curtidos. Possui rotas dinâmicas."
          projectTitle="Peregrin Store"
          technologies="NextJS, Sass Axios, Reduxjs/toolkit, Typescript"
          imgSrc="https://peregin-store.vercel.app/_next/static/media/logo.b037c7b9.svg"
          projectLink="https://peregin-store.vercel.app/"
          codeLink="https://github.com/Danilogomes76/peregrin-e-comerce-page"
        />
      </section>
    </section>
  );
};

export default Projects;
