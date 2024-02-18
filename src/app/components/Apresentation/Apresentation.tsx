import Header from "../Header/Header";
import { LinkedinIcon, GithubIcon, CurriculumIcon } from "../SVGS/Svgs";

const Apresentation: React.FC = () => {
  return (
    <section className="myGradient  w-full h-[890px]  gap-32 flex flex-col items-center">
      <Header />
      <section className="w-[64rem]">
        <div>
          <p className="text-my_white  text-base">OI 🖐️ EU SOU O DANILO</p>
          <div className="text-my_white text-9xl font-bold">
            <div className="text-my_white text-9xl font-bold flex items-center gap-10">
              <p>FRONTEND</p>
              <div className=" flex gap-5">
                <LinkedinIcon
                  fillHex="#B5AB99"
                  className="w-9 h-9 hover:translate-y-[-8px] transition"
                  href="https://www.linkedin.com/in/danilo-gomes76/"
                />
                <GithubIcon
                  fillHex="#B5AB99"
                  className="w-9 h-9 hover:translate-y-[-8px] transition"
                  href="https://github.com/Danilogomes76/"
                />
                <CurriculumIcon
                  fillHex="#B5AB99"
                  className="w-9 h-9 hover:translate-y-[-8px] transition"
                  href="https://www.calameo.com/read/0075673562034eaec4621"
                />
              </div>
            </div>
            DEVELOPER
          </div>
        </div>
        <p className="text-my_white text-right ">
          TENHO 20 ANOS, POSSUO 2 ANOS DE EXPÊRIENCIA COMO DESENVOLVEDOR
        </p>
      </section>
    </section>
  );
};

export default Apresentation;
