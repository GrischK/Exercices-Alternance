import "./App.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./components/Card";
import WilderForm from "./components/WilderForm";
import SkillForm from "./components/SkillForm";

function App() {
  const [wilders, setWilders] = useState([]);

  const fetchWilders = async () => {
    const { data: wildersList } = await axios.get(
      "http://localhost:5000/wilders"
    );
    console.log(wilders);
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
        <div className="flex justify-around adding mt-6 p-6">
          <WilderForm fetchWilders={fetchWilders} />
          <SkillForm />
        </div>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
