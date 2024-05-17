import Apresentation from "./components/Apresentation/Apresentation";
import Header from "./components/Header/Header";
import Projects from "./components/ProjectsComponent/Projects";
import Skills from "./components/Skills/Skills";
import Works from "./components/Works/Works";

export default function Home() {
  return (
    <main>
      <Header />
      <Apresentation />
      <Projects />
      <Skills />
      <Works />
    </main>
  );
}
