import axios from "axios";
import SkillCard from "./Skills";

export default function Card({ name, skills, city, avatar, fetchWilders, wilderID }) {
  console.log(skills)

  const handleDelete = async (wilderID) => {
    const newWilder = await axios.delete(`http://localhost:5000/wilders/${wilderID}`);
    console.log(newWilder);
    fetchWilders();
  };

  return (
    <article className="card">
      <img src={avatar} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <h4>{city}</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill.name} votes={skill.votes} />
        ))}
      </ul>
      <button type="button" onClick={()=>handleDelete(wilderID)}>Effacer ce wilder</button>
    </article>
  );
}
