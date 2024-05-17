import { ElementType } from "react";

interface SkillCardProps {
  technologie: string;
  Icon: ElementType;
}

const SkillCard: React.FC<SkillCardProps> = ({ technologie, Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <Icon className="h-10 w-10" />
      <p className="text-sm font-medium">{technologie}</p>
    </div>
  );
};

export default SkillCard;
