import Image from "next/image";

const Apresentation: React.FC = () => {
  return (
    <section className="flex justify-center items-center">
      <section className="flex flex-col gap-8 items-start">
        <p className="text-my_white text-3xl">
          Danilo Gomes{" "}
          <span className="text-primary">
            front-end
            <br /> developer
          </span>
        </p>
        <p className="text-my_gray">
          Criando sites responsivos onde a tecnologia encontra a criatividade.
        </p>
        <button className="outline outline-1 py-2 px-4 text-primary">
          Contato!
        </button>
      </section>
      <section className="relative">
        <Image
          alt="logo"
          width={386}
          height={386}
          src={"/daniloGomes.png"}
          className="select-none"
        ></Image>

        <Image
          alt="dots"
          width={100}
          height={100}
          src={"/assets/Dots.png"}
          className="absolute select-none top-[20%]"
        ></Image>

        <Image
          alt="styleOutline"
          width={100}
          height={100}
          src={"/assets/Style=Outline.svg"}
          className="absolute select-none top-[60%] right-[15%]"
        ></Image>
      </section>
    </section>
  );
};

export default Apresentation;
