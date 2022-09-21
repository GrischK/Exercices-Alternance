import axios from "axios";
import { useState, FormEvent } from "react";
import Loader from "./Loader";
import { ICardProps } from "./Card";

export interface IWilderFormProps {
  fetchWilders: () => Promise<void>;
}

export default function WilderForm({ fetchWilders }: IWilderFormProps) {
  const [name, setName] = useState<ICardProps["name"]>();
  const [city, setCity] = useState<ICardProps["city"]>();
  const [img, setImg] = useState<ICardProps["img"]>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newWilder = await axios.post("http://localhost:5000/wilders", {
      name: name,
      city: city,
      img: img,
    });
    console.log(newWilder);
    setIsLoading(false);

    fetchWilders();
    setName("");
    setCity("");
    setImg("");
  };

  return (
    <form className="flex flex-column justify-between" onSubmit={handleSubmit}>
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
  );
}