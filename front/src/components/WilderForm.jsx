import axios from "axios";
import { useState } from "react";

export default function WilderForm({ fetchWilders }) {
  const [name, setName] = useState();
  const [city, setCity] = useState();

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newWilder = await axios.post("http://localhost:5000/wilders", {
      name: name,
      city: city,
    });
    console.log(newWilder);
    fetchWilders();
  };

  return (
    <form onSubmit={handleSubmit}>
      Nouveau Wilder
      <label htmlFor="name">Nom : </label>
      <input
        type="text"
        id="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      ></input>
      <label htmlFor="city">Ville : </label>
      <input
        type="text"
        id="city"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      ></input>
      <button type="submit">Ajouter</button>
    </form>
  );
}
