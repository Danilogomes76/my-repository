import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="flex">
      <Image
        alt="logo"
        width={100}
        height={100}
        src={"/daniloGomes.png"}
      ></Image>
      <h1>Hello from Header!</h1>
    </div>
  );
};

export default Header;
