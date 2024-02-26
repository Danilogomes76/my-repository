import Image from "next/image";

interface ProjectsCardProps {
  bg: string;
  imgSrc: string;
  topRem: string;
  rightRem: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  bg,
  imgSrc,
  topRem,
  rightRem,
}) => {
  return (
    <section className="">
      <Image
        alt="img"
        src={"/assets/tablet.svg"}
        width={330}
        height={201}
        className={`${bg} rounded-3xl bg-center bg-contain`}
        priority
      />

      <Image
        alt="img"
        src={imgSrc}
        width={330}
        height={201}
        priority
        className={` bg-my_black rounded-full w-40 h-w-40 absolute ${topRem}  ${rightRem} `}
      />
    </section>
  );
};

export default ProjectsCard;
