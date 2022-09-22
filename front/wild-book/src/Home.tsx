import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import Card, { ICardProps, IGrade } from "./components/Card";
import WilderForm from "./components/WilderForm";
import SkillForm from "./components/SkillForm";

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
          <h1>Wilders Golden Book</h1>
        </div>
        <ul className="flex gap-2 justify-center">
          <NavLink
            end
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#545e6f" : "#fff",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/wilder-form"
            style={({ isActive }) => ({
              color: isActive ? "#545e6f" : "#fff",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            Ajouter un wilder
          </NavLink>
          <NavLink
            to="/skill-form"
            style={({ isActive }) => ({
              color: isActive ? "#545e6f" : "#fff",
              textDecoration: isActive ? "underline" : "",
            })}
          >
            Gérer les compétences
          </NavLink>
        </ul>
      </header>
      <main className="container">
        <motion.div animate={{ x: [0, 100, -100, 0] }}>
          <h2>Wild potes</h2>
        </motion.div>
        <section className="card-row">
          {wilders.map((wilder) => (
            <Card
              key={wilder.id}
              name={wilder.name}
              skills={wilder.skills}
              city={wilder.city}
              avatar={wilder.img}
              fetchWilders={fetchWilders}
              wilderID={wilder.id}
            />
          ))}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 GrischK</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
