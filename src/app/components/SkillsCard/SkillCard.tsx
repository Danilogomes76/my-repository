interface SkillCardProps {
  title: string;
  technologies: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, technologies }) => {
  return (
    <section className="lg:w-48 h-min border-my_gray border text-my_white">
      <p className="border-b border-my_gray p-2">{title}</p>
      <p className="p-2">{technologies}</p>
    </section>
  );
};

export default SkillCard;
