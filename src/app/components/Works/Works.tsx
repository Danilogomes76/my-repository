import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface WorksProps {}

const Works: React.FC<WorksProps> = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-secondary">
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
          <div className="mx-auto grid max-w-5xl gap-6 py-12">
            <Card>
              <CardContent className="flex flex-col items-start justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Frontend Developer</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Acme Inc, 2020 - Present
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>
                      Developed and maintained responsive web applications using
                      React, Next.js, and Tailwind CSS.
                    </li>
                    <li>
                      Collaborated with designers and backend developers to
                      deliver high-quality features.
                    </li>
                    <li>
                      Implemented performance optimization techniques and
                      accessibility best practices.
                    </li>
                  </ul>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-start justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold">Frontend Intern</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Globex Corp, 2019 - 2020
                  </p>
                  <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                    <li>
                      Assisted in the development of a Vue.js-based e-commerce
                      platform.
                    </li>
                    <li>
                      Implemented responsive design and integrated with a
                      headless CMS.
                    </li>
                    <li>
                      Gained experience in agile development and version control
                      using Git.
                    </li>
                  </ul>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">Responsive</Badge>
                  <Badge variant="secondary">Headless CMS</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
