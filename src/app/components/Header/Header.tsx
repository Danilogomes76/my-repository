import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div
      id="home"
      className="items-center flex flex-row-reverse md:flex lg:flex-row lg:w-[64rem] lg:py-4 justify-between w-full shadow-md lg:shadow-none"
    >
      <Image
        alt="logo"
        width={100}
        height={100}
        src={"/daniloGomes.svg"}
        className="w-20"
        priority
      ></Image>
      <ul className="lg:flex hidden gap-10 lg:flex-row">
        <li className="text-my_gray  cursor-default">
          <a href="#home">
            #
            <span className="text-my_gray hover:text-my_white transition ease-in-out delay-150">
              Home
            </span>
          </a>
        </li>
        <li className="text-my_gray  cursor-default">
          <a href="#projetos">
            #
            <span className="text-my_gray hover:text-my_white transition ease-in-out delay-150">
              Projetos
            </span>
          </a>
        </li>
        <li className="text-my_gray  cursor-default">
          <a href="#conhecimentos">
            #
            <span className="text-my_gray hover:text-my_white transition ease-in-out delay-150">
              Conhecimentos
            </span>
          </a>
        </li>
        <li className="text-my_gray  cursor-default">
          <a href="#sobre">
            #
            <span className="text-my_gray hover:text-my_white transition ease-in-out delay-150">
              Sobre
            </span>
          </a>
        </li>
        <li className="text-my_gray  cursor-default">
          <a href="#social">
            #
            <span className="text-my_gray hover:text-my_white transition ease-in-out delay-150">
              Contato
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
