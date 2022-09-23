import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { IGrade } from "./components/Card";
import WilderForm from "./components/WilderForm";
import SkillForm from "./components/SkillForm";
import UpdateWilderForm from "./components/UpdateWilderForm";
import Home from "./Home";
import Index from "./components/Index";

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
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skill-form" element={<SkillForm />} />
        <Route
          path="/wilder-form"
          element={<WilderForm fetchWilders={fetchWilders} />}
        />
        <Route
          path={`/wilder-update/:userId`}
          element={<UpdateWilderForm fetchWilders={fetchWilders} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
