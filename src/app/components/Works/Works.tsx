import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import WorkCard from "../WorksCard/WorkCard";
import { works } from "./WorksArr";

interface WorksProps {}

const Works: React.FC<WorksProps> = () => {
  return (
    <>
      <section
        id="experiencia"
        className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-secondary"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Experiências de Trabalho
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Confira meu histórico de trabalho e os projetos em que estive
                envolvido.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 mt-2">
            {works.map((work, index) => {
              return (
                <>
                  <WorkCard work={work} key={index} />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
