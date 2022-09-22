import axios from "axios";
import { useEffect, useState, ChangeEvent } from "react";

import Skill from "./Skill";
import SkillCard, { ISkillCardProps } from "./SkillCard";

export interface ICardProps {
  id?: number;
  name: string;
  skills: IGrade[];
  city: string;
  img?: string;
  avatar: string;
  fetchWilders: () => Promise<void>;
  wilderId: number;
}

export interface ISkill {
  name: string;
  id: number;
}

export interface IGrade extends ISkill {
  votes: number;
}

export default function Card({
  name,
  skills,
  city,
  avatar,
  fetchWilders,
  wilderId,
}: ICardProps) {
  const [skillsList, setSkillsList] = useState<ISkill[]>([]);
  const [skillId, setSkillId] = useState<string>("");

  const handleDelete = async (wilderId: number) => {
    await axios.delete(`http://localhost:5000/wilders/${wilderId}`);
    fetchWilders();
  };

  const handleAddSkill = async (wilderId: number, skillId: number) => {
    await axios.post(
      `http://localhost:5000/wilders/${wilderId}/skills/${skillId}`
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
          <Skill
            key={index}
            title={skill.name}
            votes={skill.votes}
            skillId={skill.id}
            fetchSkills={fetchSkills}
            wilderId={wilderId}
            fetchWilders={fetchWilders}
          />
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
            <option value="">Choisir une compétence</option>
            {skillsList.map((skill, index) => (
              <option key={index} value={skill.id}>
                {skill.name}
              </option>
            ))}
          </select>
          <button
            className="customedButton mt-0 addSkillBtn"
            type="button"
            onClick={() => handleAddSkill(wilderId, parseInt(skillId))}
          >
            OK
          </button>
        </div>
      </div>
      <button
        className="customedButton"
        type="button"
        onClick={() => handleDelete(wilderId)}
      >
        Effacer ce wilder
      </button>
    </article>
  );
}
