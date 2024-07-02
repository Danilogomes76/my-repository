import React, { useState } from "react";
import Image from "next/image";
import ReactCardFlip from "react-card-flip";
import { Project } from "../ProjectsComponent/Projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface ProjectsCardProps extends React.HTMLProps<HTMLDivElement> {
  project: Project;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ project }) => {
  return (
    <Card className="" data-aos="fade-up" data-aos-duration="500">
      <CardContent className="flex flex-col h-full items-start justify-between space-y-4 p-2">
        <div>
          <h3 className="text-xl font-bold">{project.projectTitle}</h3>
          <p className="text-gray-500 text-sm dark:text-gray-400">
            {project.description}
          </p>
        </div>
        <div className="flex items-center space-x-2 flex-wrap gap-1">
          {project.technologies.map((technologie, index) => {
            return (
              <Badge key={index} className="m-0" variant="secondary">
                {technologie}
              </Badge>
            );
          })}
        </div>
        <div className="flex space-x-2">
          {project.projectLink && (
            <Link
              target="_blank"
              href={project.projectLink}
              className={buttonVariants({ size: "sm", variant: "outline" })}
            >
              Ver
            </Link>
          )}
          <Link
            href={project.codeLink}
            target="_blank"
            className={buttonVariants({ size: "sm", variant: "outline" })}
          >
            Code
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectsCard;
