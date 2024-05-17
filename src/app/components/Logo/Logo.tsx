"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  const { theme } = useTheme();

  return (
    <>
      <Image
        src={theme == "light" ? "/logo_white.png" : "/logo_black.png"}
        width={width}
        height={height}
        alt="Danilo Gomes Logo Image"
      />
    </>
  );
};

export default Logo;
