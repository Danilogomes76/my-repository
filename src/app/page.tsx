import Apresentation from "./components/Apresentation/Apresentation";
import Header from "./components/Header/Header";
import Message from "./components/Message/Message";
import Projects from "./components/ProjectsComponent/Projects";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-[64rem] items-center lg:p-0 flex justify-center flex-col">
        <Header />
        <section className="p-5 mt-5 items-center flex flex-col lg:m-0">
          <Apresentation />
          <Message />
          <Projects />
        </section>
      </div>
    </div>
  );
}
