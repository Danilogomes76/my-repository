import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="items-center flex flex-row-reverse lg:flex lg:flex-row lg:py-4 justify-between w-full shadow-md lg:shadow-none">
      <Image
        alt="logo"
        width={100}
        height={100}
        src={"/daniloGomes.png"}
        className="w-20 lg:w-auto"
      ></Image>
      <ul className="lg:flex hidden gap-10 lg:flex-row">
        <li className="text-primary cursor-default">
          #<span className="text-my_gray hover:text-my_white">Home</span>
        </li>
        <li className="text-primary cursor-default">
          #<span className="text-my_gray hover:text-my_white">Projetos</span>
        </li>
        <li className="text-primary cursor-default">
          #
          <span className="text-my_gray hover:text-my_white">
            Conhecimentos
          </span>
        </li>
        <li className="text-primary cursor-default">
          #<span className="text-my_gray hover:text-my_white">Sobre</span>
        </li>
        <li className="text-primary cursor-default">
          #<span className="text-my_gray hover:text-my_white">Contato</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
