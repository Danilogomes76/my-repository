"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { Project } from "../ProjectsComponent/Projects";

interface ProjectsCardProps extends React.HTMLProps<HTMLDivElement> {
  project: Project;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const {
    bg,
    codeLink,
    description,
    imgSrc,
    projectLink,
    projectTitle,
    rightRem,
    technologies,
    topRem,
  } = project;

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="" onClick={flipCard}>
      <ReactCardFlip isFlipped={isFlipped}>
        <Image
          key="front"
          alt="img"
          src={"/assets/tablet.svg"}
          width={330}
          height={201}
          className={`${bg} rounded-3xl bg-center bg-contain`}
          priority
        />

        <div
          key="back"
          className="w-[330px] p-4 h-[506px] rounded-3xl transition-all ease-out duration-500 bg-my_black"
          onClick={flipCard}
        >
          <div>
            <p className="text-my_white mb-5 font-bold text-center text-2xl">
              {projectTitle}
            </p>
            <div className="flex flex-col gap-4 mb-5">
              <p className="text-my_white">{description}</p>
              <p className="text-my_white">{technologies}</p>
            </div>
            <div className="flex gap-4">
              <a target="_blank" href={projectLink}>
                <button className="outline outline-1 after:content-['_<~>'] px-4 text-my_white">
                  Ver!
                </button>
              </a>
              <a
                target="_blank"
                href="https://github.com/Danilogomes76/books_app"
              >
                <button className="outline outline-1 px-4 text-my_white">
                  Code!
                </button>
              </a>
            </div>
          </div>
        </div>
      </ReactCardFlip>

      <div className={`  w-40 h-w-40 absolute ${topRem}  ${rightRem} `}>
        <Image
          alt="img"
          className="bg-my_black rounded-full"
          src={imgSrc}
          width={330}
          height={201}
          priority
        />
      </div>
    </section>
  );
};

export default ProjectsCard;
