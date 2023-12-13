import Image from "next/image";

interface ProjectsCardProps {
  imgSrc: string;
  technologies: string;
  projectTitle: string;
  description: string;
  projectLink: string;
  codeLink: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  imgSrc,
  technologies,
  projectTitle,
  description,
  projectLink,
  codeLink,
}) => {
  return (
    <section className="border max-w-[330px]  bg-bg_color border-my_gray">
      <Image
        alt="img"
        src={imgSrc}
        width={330}
        height={201}
        className="border"
      />
      <p className="border border-my_gray text-my_gray">{technologies}</p>
      <div className="border p-4 flex flex-col items-start gap-4">
        <p className="text-2xl text-my_white">{projectTitle}</p>
        <p className="text-my_gray">{description}</p>
        <div className="flex gap-4">
          <a target="_blank" href={projectLink}>
            <button className="outline outline-1 after:content-['_<~>'] px-4 text-primary">
              Ver!
            </button>
          </a>
          <a target="_blank" href={codeLink}>
            <button className="outline outline-1 px-4 text-my_gray">
              Code!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCard;
