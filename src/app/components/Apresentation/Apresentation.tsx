import Image from "next/image";

const Apresentation: React.FC = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center">
      <section className="flex flex-col gap-8 items-center lg:items-start lg:ml-8">
        <p className="text-my_white text-3xl text-center lg:text-left">
          Danilo Gomes{" "}
          <span className="text-primary block">
            front-end
            <br /> developer
          </span>
        </p>
        <p className="text-my_gray text-center lg:text-left">
          Criando sites responsivos onde a tecnologia encontra a criatividade.
        </p>
        <button className="outline outline-1 py-2 px-4 text-primary">
          Contato!
        </button>
      </section>
      <section className="relative mt-8 lg:mt-0">
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
          className="absolute select-none top-[20%] "
        ></Image>

        <Image
          alt="styleOutline"
          width={100}
          height={100}
          src={"/assets/Style=Outline.svg"}
          className="absolute select-none top-[60%] left-[70%]"
        ></Image>
      </section>
    </section>
  );
};

export default Apresentation;
