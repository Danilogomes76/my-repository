import Image from "next/image";
import Logo from "../Logo/Logo";

const Footer: React.FC = () => {
  return (
    <section className="flex-col mt-6 lg:flex-row content-center border border-l-0 border-r-0 border-b-0 flex lg:justify-between justify-center flex-wrap items-center border-t-my_white w-full px-44 py-8">
      <section className="flex gap-2 flex-col lg:block">
        <section className="flex lg:gap-2 items-center flex-col lg:flex-row">
          <p className="text-my_white">Danilo Gomes - </p>
          <p className="text-my_white">Front-end developer</p>
        </section>
        <section>
          <a
            href="mailto:danilo.gomes.job@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-my_white"
          >
            danilo.gomes.job@gmail.com
          </a>
        </section>
      </section>
      <section>
        <Logo height={100} width={100} />
      </section>
    </section>
  );
};

export default Footer;
