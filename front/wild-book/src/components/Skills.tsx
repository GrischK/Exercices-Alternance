export interface ISkillCardProps {
  title: string;
  votes: string | number;
}

export default function SkillCard({ title, votes }: ISkillCardProps) {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}
