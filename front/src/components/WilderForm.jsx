import axios from "axios";
import { useState } from "react";
import Loader from "./Loader";

export default function WilderForm({ fetchWilders }) {
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [img, setImg] = useState();
  const [isLoading, setIsLoading] = useState(false)

  console.log(name);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const newWilder = await axios.post("http://localhost:5000/wilders", {
      name: name,
      city: city,
      img: img,
    });
    console.log(newWilder);
    setIsLoading(false)

    fetchWilders();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Nouveau Wilder</h1>
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
      <label htmlFor="image">Avatar : </label>
      <input
        type="text"
        id="image"
        onChange={(e) => setImg(e.target.value)}
        value={img}
      ></input>
      {isLoading && (
        <Loader/>
      )}
      <button disabled={isLoading} type="submit" >Ajouter un nouveau Wilder</button>
    </form>
  );
}
