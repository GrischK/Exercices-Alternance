import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export interface IWilderFormProps {
  fetchWilders: () => Promise<void>;
}
export default function UpdateWilderForm({ fetchWilders }: IWilderFormProps) {
  const [newName, setNewName] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newImg, setNewImg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const userId = useParams();

  const updateWilder = async () => {
    const { data: wilder } = await axios.put(
      `http://localhost:5000/wilders/${userId},`
    );
  };

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
    <div className="App">
      <header>
        <div className="container">
          <h1>Wilders Golden Book</h1>
        </div>
        <ul className="flex gap-2 justify-center pb-2 items-center">
          <NavLink
            end
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "#545e6f" : "#fff",
              textDecoration: isActive ? "underline" : "",
              border: isActive ? "1px solid #545e6f" : "",
              padding: isActive ? "5px" : "",
              borderRadius: isActive ? "12px" : "",
            })}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/wilder-form"
            style={({ isActive }) => ({
              color: isActive ? "#545e6f" : "#fff",
              textDecoration: isActive ? "underline" : "",
              border: isActive ? "1px solid #545e6f" : "",
              padding: isActive ? "5px" : "",
              borderRadius: isActive ? "12px" : "",
            })}
          >
            Ajouter un wilder
          </NavLink>
          <NavLink
            to="/skill-form"
            style={({ isActive }) => ({
              color: isActive ? "#545e6f" : "#fff",
              textDecoration: isActive ? "underline" : "",
              border: isActive ? "1px solid #545e6f" : "",
              padding: isActive ? "5px" : "",
              borderRadius: isActive ? "12px" : "",
            })}
          >
            Gérer les compétences
          </NavLink>
        </ul>{" "}
      </header>
      <main className="container">
        <form
          className="flex flex-column justify-between mx-auto"
          onSubmit={handleSubmit}
        >
          <h1>Modifier Wilder</h1>
          <label htmlFor="name">Nom : </label>
          <input
            className="customedInput"
            type="text"
            id="name"
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
          ></input>
          <label htmlFor="city">Ville : </label>
          <input
            className="customedInput"
            type="text"
            id="city"
            onChange={(e) => setNewCity(e.target.value)}
            value={newCity}
          ></input>
          <label htmlFor="image">Avatar : </label>
          <input
            className="customedInput"
            type="text"
            id="image"
            onChange={(e) => setNewImg(e.target.value)}
            value={newImg}
          ></input>
          <button className="customedButton" disabled={isLoading} type="submit">
            Mettre à jour
          </button>
        </form>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 GrischK</p>
        </div>
      </footer>
    </div>
  );
}
