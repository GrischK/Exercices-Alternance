export interface ISkillCardProps {
  title: string;
  votes: string;
  name: string;
}

export default function SkillCard({ title, votes }: ISkillCardProps) {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}
