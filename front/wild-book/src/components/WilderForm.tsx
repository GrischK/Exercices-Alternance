import axios from "axios";
import { useState, FormEvent } from "react";
import { NavLink } from "react-router-dom";

import Loader from "./Loader";
import { ICardProps } from "./Card";

export interface IWilderFormProps {
  fetchWilders: () => Promise<void>;
}

export default function WilderForm({ fetchWilders }: IWilderFormProps) {
  const [name, setName] = useState<ICardProps["name"]>();
  const [city, setCity] = useState<ICardProps["city"]>();
  const [bio, setBio] = useState<ICardProps["bio"]>();
  const [img, setImg] = useState<ICardProps["img"]>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newWilder = await axios.post("http://localhost:5000/wilders", {
      name: name,
      city: city,
      img: img,
      bio: bio,
    });
    console.log(newWilder);
    setIsLoading(false);

    fetchWilders();
    setName("");
    setCity("");
    setImg("");
    setBio("");
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
          <h1>Nouveau Wilder</h1>
          <label htmlFor="name">Nom : </label>
          <input
            className="customedInput"
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <label htmlFor="city">Ville : </label>
          <input
            className="customedInput"
            type="text"
            id="city"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          ></input>
          <label htmlFor="image">Biographie : </label>
          <input
            className="customedInput"
            type="text"
            id="bio"
            onChange={(e) => setImg(e.target.value)}
            value={bio}
          ></input>
          <label htmlFor="image">Avatar : </label>
          <input
            className="customedInput"
            type="text"
            id="image"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          ></input>
          {isLoading && <Loader />}
          <button className="customedButton" disabled={isLoading} type="submit">
            Ajouter un nouveau Wilder
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
