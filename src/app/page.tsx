import Image from "next/image";
import Apresentation from "./components/Apresentation/Apresentation";
import Header from "./components/Header/Header";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="w-[64rem] flex justify-center flex-col">
        <Header />
        <Apresentation />
      </div>
    </div>
  );
}
