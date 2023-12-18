import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <section className="bg-bg_color flex-col lg:flex-row content-center border border-l-0 border-r-0 border-b-0 flex lg:justify-between justify-center flex-wrap items-center border-t-my_white w-full px-44 py-8">
      <section className="flex gap-2 flex-col lg:block">
        <section className="flex lg:gap-2 items-center flex-col lg:flex-row">
          <p className="text-my_white">Danilo Gomes</p>
          <p className="text-my_gray">Front-end developer</p>
        </section>
        <section>
          <p className="text-my_white">danilo762410@gmail.com</p>
        </section>
      </section>
      <section>
        <Image
          alt="logo"
          width={100}
          height={100}
          src={"/daniloGomes.png"}
          className="w-20 lg:w-auto"
        ></Image>
      </section>
    </section>
  );
};

export default Footer;
