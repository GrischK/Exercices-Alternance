export default function SkillCard({ title, votes }) {
  return (
    <li>
      {title}
      <span className="votes">{votes}</span>
    </li>
  );
}
