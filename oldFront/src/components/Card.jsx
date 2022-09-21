import axios from "axios";
import { useEffect, useState } from "react";
import SkillCard from "./Skills";

export default function Card({
  name,
  skills,
  city,
  avatar,
  fetchWilders,
  wilderID,
}) {
  const [skillsList, setSkillsList] = useState([]);
  const [skillId, setSkillId] = useState([]);

  console.log(avatar);

  const handleDelete = async (wilderID) => {
    const newWilder = await axios.delete(
      `http://localhost:5000/wilders/${wilderID}`
    );
    fetchWilders();
  };

  const handleAddSkill = async (wilderID, skillId) => {
    const newSkillToAdd = await axios.post(
      `http://localhost:5000/wilders/${wilderID}/skills/${skillId}`
    );
    fetchWilders();
    fetchSkills();
  };

  const fetchSkills = async () => {
    const { data: skills } = await axios.get("http://localhost:5000/skills");
    setSkillsList(skills);
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <article className="card">
      <img src={avatar} alt={name} />
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
      <div className="skillBorder">
        <label
          htmlFor="skills"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Ajouter une compétence
        </label>
        <div className="flex justify-center skillToAddBlock">
          <select
            onChange={(e) => setSkillId(e.target.value)}
            id="skills"
            className="text-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue>Choisir une compétence</option>
            {skillsList.map((skill, index) => (
              <option key={index} value={skill.id}>
                {skill.name}
              </option>
            ))}
          </select>
          <button
            className="customedButton mt-0 addSkillBtn"
            type="button"
            onClick={() => handleAddSkill(wilderID, skillId)}
          >
            OK
          </button>
        </div>
      </div>
      <button
        className="customedButton"
        type="button"
        onClick={() => handleDelete(wilderID)}
      >
        Effacer ce wilder
      </button>
    </article>
  );
}
