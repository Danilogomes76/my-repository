import AboutMe from "./components/AboutMe/AboutMe";
import Apresentation from "./components/Apresentation/Apresentation";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import Navigation from "./components/Navigation/Navigation";
import Projects from "./components/ProjectsComponent/Projects";
import { Reveal } from "./components/Reveal/Reveal";
import Skills from "./components/Skills/Skills";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-[64rem] items-center lg:p-0 flex justify-center flex-col">
        <Header />
        <section className="p-5 mt-5 gap-28 items-center flex flex-col lg:m-0">
          <Apresentation />
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
          <Navigation />
        </section>
        <Reveal width="100%">
          <Footer />
        </Reveal>
      </div>
    </div>
  );
}
