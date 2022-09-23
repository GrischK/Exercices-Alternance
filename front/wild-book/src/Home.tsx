import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Card, { ICardProps, IGrade } from "./components/Card";
import WilderForm from "./components/WilderForm";
import SkillForm from "./components/SkillForm";
import { SymbolDisplayPartKind } from "typescript";

export interface IWilder {
  id: number;
  name: string;
  city: string;
  img: string;
  bio: string;
  grades: [];
  skills: IGrade[];
}

function Home() {
  const [wilders, setWilders] = useState<IWilder[]>([]);
  console.log(wilders);
  const fetchWilders = async () => {
    const { data: wildersList } = await axios.get(
      "http://localhost:5000/wilders"
    );
    setWilders(wildersList);
  };

  useEffect(() => {
    fetchWilders();
  }, []);

  return (
    <div className="App">
      <header>
        <div className="container">
          <h1 className="coloredTitle">Wilders Golden Book</h1>
        </div>
        <ul className="flex gap-4 justify-center pb-2 items-center">
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
            Gérer les compétences
          </NavLink>
        </ul>
      </header>
      <main className="container">
        <motion.div animate={{ x: [0, 100, -100, 0] }}>
          <h2 className="coloredTitle">Wild potes</h2>
        </motion.div>
        <section className="card-row">
          {wilders.map((wilder) => (
            <Card
              key={wilder.id}
              id={wilder.id}
              name={wilder.name}
              skills={wilder.skills}
              city={wilder.city}
              avatar={wilder.img}
              fetchWilders={fetchWilders}
              wilderId={wilder.id}
              bio={wilder.bio}
            />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p className="copyright">&copy; 2022 GrischK</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
