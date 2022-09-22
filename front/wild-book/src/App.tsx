import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { IGrade } from "./components/Card";
import WilderForm from "./components/WilderForm";
import SkillForm from "./components/SkillForm";
import Home from "./Home";

export interface IWilder {
  id: number;
  name: string;
  city: string;
  img: string;
  bio: string;
  grades: [];
  skills: IGrade[];
}

function App() {
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skill-form" element={<SkillForm />} />
        <Route
          path="/wilder-form"
          element={<WilderForm fetchWilders={fetchWilders} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
