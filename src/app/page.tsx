import AboutMe from "./components/AboutMe/AboutMe";
import Apresentation from "./components/Apresentation/Apresentation";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import Navigation from "./components/Navigation/Navigation";
import NavigationTwo from "./components/NavigationTwo/NavigationTwo";
import Projects from "./components/ProjectsComponent/Projects";
import { Reveal } from "./components/Reveal/Reveal";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <>
      <div className="flex justify-center overflow-hidden">
        <div className=" items-center w-full lg:p-0 flex  flex-col">
          <section className="w-full">
            <Apresentation />
            <section className="w-full flex justify-center myMainGradient">
              <section className="p-5 lg:p-0 mt-5 gap-28 items-center flex flex-col lg:m-0 w-[64rem] ">
                <Reveal>
                  <Message />
                </Reveal>

                <Projects />

                <Reveal>
                  <Skills />
                </Reveal>

                <Reveal>
                  <AboutMe />
                </Reveal>
                <Reveal>
                  <Contacts />
                </Reveal>
                <NavigationTwo />
              </section>
            </section>
          </section>
        </div>
      </div>
      <Reveal width="100%">
        <Footer />
      </Reveal>
    </>
  );
}
