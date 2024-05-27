import Image from "next/image";
import { ElementType } from "react";

interface SkillCardProps {
  technologie: string;
  icon: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ technologie, icon }) => {
  return (
    <div
      data-aos="flip-left"
      className="flex flex-col items-center justify-center space-y-2"
    >
      <Image
        width={40}
        height={40}
        src={icon}
        alt={technologie}
        className="dark:bg-primary bg-white rounded-2xl p-2"
      />
      <p className="text-sm font-medium">{technologie}</p>
    </div>
  );
};

export default SkillCard;
