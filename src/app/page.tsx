import Apresentation from "./components/Apresentation/Apresentation";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-[64rem] p-5 lg:p-0 flex justify-center flex-col">
        <Header />
        <Apresentation />
      </div>
    </div>
  );
}
