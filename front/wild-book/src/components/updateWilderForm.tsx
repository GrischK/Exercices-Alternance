import axios from "axios";
import { FormEvent, useState } from "react";

export interface IWilderFormProps {
  fetchWilders: () => Promise<void>;
}
export default function UpdateWilderForm({ fetchWilders }: IWilderFormProps) {
  const [newName, setNewName] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newImg, setNewImg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const newWilder = await axios.put("http://localhost:5000/wilders", {
      name: newName,
      city: newCity,
      img: newImg,
    });
    console.log(newWilder);
    fetchWilders();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Nouveau Wilder</h1>
      <label htmlFor="name">Nom : </label>
      <input
        type="text"
        id="name"
        onChange={(e) => setNewName(e.target.value)}
        value={newName}
      ></input>
      <label htmlFor="city">Ville : </label>
      <input
        type="text"
        id="city"
        onChange={(e) => setNewCity(e.target.value)}
        value={newCity}
      ></input>
      <label htmlFor="image">Avatar : </label>
      <input
        type="text"
        id="image"
        onChange={(e) => setNewImg(e.target.value)}
        value={newImg}
      ></input>
      <button type="submit">Mettre à jour un nouveau Wilder</button>
    </form>
  );
}
