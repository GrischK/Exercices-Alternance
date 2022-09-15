import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "./Loader";
import SkillCard from "./Skills";

export default function SkillForm({ fetchWilders }) {
  const [skill, setSkill] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [skillsList, setSkillsList] = useState([]);

  const fetchSkills = async () => {
    const { data: skills } = await axios.get("http://localhost:5000/skills");
    setSkillsList(skills);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newSkill = await axios.post("http://localhost:5000/skills", {
      name: skill,
    });
    setIsLoading(false);
    fetchSkills();
    setSkill("");
  };

  useEffect(() => {
    fetchSkills();
    console.log(skillsList);
  }, []);

  return (
    <form className="flex flex-column justify-between" onSubmit={handleSubmit}>
      <h1>Nouvelle compétence</h1>
      <ul className="skills flex justify-around flex-wrap">
        {skillsList.map((skill, index) => (
          <SkillCard key={index} title={skill.name} votes={skill.votes} />
        ))}
      </ul>
      <label htmlFor="skillName">Compétence : </label>
      <input
        className="customedInput"
        type="text"
        id="skillName"
        onChange={(e) => setSkill(e.target.value)}
        value={skill}
      ></input>
      {isLoading && <Loader />}
      <button className="customedButton" disabled={isLoading} type="submit">
        Ajouter un nouvelle compétence
      </button>
    </form>
  );
}
