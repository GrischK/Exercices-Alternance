import axios from "axios";
import { useEffect, useState, FormEvent } from "react";
import { NavLink } from "react-router-dom";

import { IGrade } from "./Card";
import Loader from "./Loader";
import SkillCard from "./SkillCard";

export default function SkillForm() {
  const [skill, setSkill] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [skillsList, setSkillsList] = useState<IGrade[]>([]);

  const fetchSkills = async () => {
    const { data: skills } = await axios.get("http://localhost:5000/skills");
    setSkillsList(skills);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await axios.post("http://localhost:5000/skills", {
      name: skill,
    });
    setIsLoading(false);
    fetchSkills();
    setSkill("");
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1 className="coloredTitle">Wilders Golden Book</h1>
        </div>
        <ul className="flex gap-2 justify-center pb-2 items-center">
          <NavLink
            end
            to="/home"
            style={({ isActive }) => ({
              color: isActive ? "#EEB902" : "#fff",
              border: isActive ? "1px solid #EEB902" : "",
              padding: isActive ? "5px" : "",
              borderRadius: isActive ? "12px" : "",
            })}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/wilder-form"
            style={({ isActive }) => ({
              color: isActive ? "#EEB902" : "#fff",
              border: isActive ? "1px solid #EEB902" : "",
              padding: isActive ? "5px" : "",
              borderRadius: isActive ? "12px" : "",
            })}
          >
            Ajouter un wilder
          </NavLink>
          <NavLink
            to="/skill-form"
            style={({ isActive }) => ({
              color: isActive ? "#EEB902" : "#fff",
              border: isActive ? "1px solid #EEB902" : "",
              padding: isActive ? "5px" : "",
              borderRadius: isActive ? "12px" : "",
            })}
          >
            G??rer les comp??tences
          </NavLink>
        </ul>{" "}
      </header>
      <main className="container">
        <form
          className="flex flex-column justify-between mx-auto"
          onSubmit={handleSubmit}
        >
          <h1 className="coloredTitle">Nouvelle comp??tence</h1>
          <input
            className="customedInput"
            type="text"
            id="skillName"
            onChange={(e) => setSkill(e.target.value)}
            value={skill}
          ></input>

          <ul className="skills flex justify-around flex-wrap">
            {skillsList.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.name}
                votes={skill.votes}
                skillId={skill.id}
                fetchSkills={fetchSkills}
              />
            ))}
          </ul>
          {isLoading && <Loader />}
          <button className="customedButton" disabled={isLoading} type="submit">
            Ajouter un nouvelle comp??tence
          </button>
        </form>
      </main>
      <footer>
        <div className="container">
          <p className="copyright">&copy; 2022 GrischK</p>
        </div>
      </footer>
    </div>
  );
}
