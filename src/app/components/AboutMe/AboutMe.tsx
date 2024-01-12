import Image from "next/image";

const AboutMe: React.FC = () => {
  return (
    <section id="sobre" className="text-my_gray  flex flex-col">
      <div className="text-primary flex text-3xl after:content-['_‎']">
        #
        <div className="flex gap-2 relative">
          <span className="text-my_gray">Sobre-mim</span>
          <span className="border-b border-solid absolute bottom-[35%] left-[100%] ml-2 border-black bg-primary h-[2px] w-48 cursor-default hidden lg:block"></span>
        </div>
      </div>
      <section className="flex gap-12 mt-12 items-center">
        <div className="lg:w-1/2">
          <p>
            Olá, meu nome é Danilo! Sou um desenvolvedor front-end autodidata.
            Posso desenvolver sites responsivos do zero e transformá-los em
            experiências web modernas e fáceis de usar. Transformar minha
            criatividade e conhecimento em sites tem sido minha paixão há mais
            de um ano. Eu sempre me esforço para aprender sobre as mais novas
            tecnologias e estruturas.
          </p>
        </div>
        <div className="w-1/2 relative lg:block hidden">
          <div className="w-96 h-72">
            <Image
              alt="img"
              src={"/assets/Dots.png"}
              width={63}
              height={63}
              className="absolute select-none top-[15%] left-[1%]"
            />
            <Image
              alt="img"
              src={"/assets/Dots.png"}
              width={63}
              height={63}
              className="absolute select-none top-[50%] left-[50%]"
            />
            <Image
              alt="img"
              src={"/assets/Style=Outline.svg"}
              width={113}
              height={113}
              className="absolute select-none top-[60%] left-[8%]"
            />
            <div className="border w-20 h-20 border-primary absolute select-none top-[10%] left-[70%]"></div>
            <div className="border w-14 h-14 border-primary absolute select-none top-[75%] left-[80%]"></div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutMe;
