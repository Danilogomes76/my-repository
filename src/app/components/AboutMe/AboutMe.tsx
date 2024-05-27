import { LinkedinIcon, MailIcon } from "lucide-react";
import Image from "next/image";
import { GithubIconTwo } from "../SVGS/Svgs";

const AboutMe: React.FC = () => {
  return (
    <>
      <main id="sobre" className="flex flex-col gap-12 py-12 md:py-24 lg:py-32">
        <section className="container px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sobre mim
              </h2>
              <p className="text-gray-500 dark:text-gray-400">
                Olá, meu nome é Danilo! Sou um desenvolvedor front-end
                autodidata. Posso desenvolver sites responsivos do zero e
                transformá-los em experiências web modernas e fáceis de usar.
                Transformar minha criatividade e conhecimento em sites tem sido
                minha paixão há mais de um ano. Eu sempre me esforço para
                aprender sobre as mais novas tecnologias e estruturas.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Social
              </h2>
              <div className="grid gap-4">
                <a
                  className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-secondary dark:text-gray-50 dark:hover:bg-gray-700"
                  href="https://www.linkedin.com/in/danilo-gomes76/"
                  rel="noopener noreferrer"
                  target="_blank"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <LinkedinIcon className="h-6 w-6" />
                  LinkedIn
                </a>
                <a
                  className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-secondary dark:text-gray-50 dark:hover:bg-gray-700"
                  href="https://github.com/Danilogomes76/"
                  rel="noopener noreferrer"
                  target="_blank"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <GithubIconTwo className="h-6 w-6" />
                  GitHub
                </a>
                <a
                  className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-gray-900 transition-colors hover:bg-gray-200 dark:bg-secondary dark:text-gray-50 dark:hover:bg-gray-700"
                  href="mailto:danilo.gomes.job@gmail.com"
                  data-aos="fade-up"
                  data-aos-duration="500"
                >
                  <MailIcon className="h-6 w-6" />
                  danilo.gomes.job@gmail.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutMe;
