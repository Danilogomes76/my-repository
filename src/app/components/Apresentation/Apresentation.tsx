import Image from "next/image";
import Header from "../Header/Header";
import { LinkedinIcon, GithubIcon, CurriculumIcon } from "../SVGS/Svgs";
import Meteors from "@/components/custom/meteors";

const Apresentation: React.FC = () => {
  return (
    <section className="w-full relative  overflow-hidden  py-12 md:py-24 lg:py-32">
      <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Danilo Gomes
          </h1>
          <h2 className="text-2xl font-semibold text-gray-500 dark:text-gray-400">
            Frontend Developer
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Criando sites responsivos onde a tecnologia encontra a criatividade.
          </p>
        </div>

        <Meteors number={30} />

        <Image
          data-aos="fade-left"
          alt="Danilo Gomes Profile Image"
          width={400}
          height={400}
          className="mx-auto bg-muted rounded-full"
          src={"/dGomes.png"}
        />
      </div>
    </section>
  );
};

export default Apresentation;
