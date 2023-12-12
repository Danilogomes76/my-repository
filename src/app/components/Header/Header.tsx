import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="items-center flex-col hidden lg:flex lg:flex-row lg:py-4 justify-between w-full">
      <Image
        alt="logo"
        width={100}
        height={100}
        src={"/daniloGomes.png"}
      ></Image>
      <ul className="flex flex-col gap-10 lg:flex-row">
        <li className="text-primary cursor-default">
          #<span className="text-my_gray hover:text-my_white">Home</span>
        </li>
        <li className="text-primary cursor-default">
          #<span className="text-my_gray hover:text-my_white">Sobre</span>
        </li>
        <li className="text-primary cursor-default">
          #
          <span className="text-my_gray hover:text-my_white">
            Conhecimentos
          </span>
        </li>
        <li className="text-primary cursor-default">
          #<span className="text-my_gray hover:text-my_white">Projetos</span>
        </li>
        <li className="text-primary cursor-default">
          #<span className="text-my_gray hover:text-my_white">Contato</span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
