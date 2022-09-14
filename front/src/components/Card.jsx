import blank_profile from "../assets/images/blank_profile.png";
import SkillCard from "./Skills";

export default function Card({ name, skills }) {
  console.log(skills);
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill.title} votes={skill.votes} />
        ))}
      </ul>
    </article>
  );
}
