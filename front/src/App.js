import "./App.css";
import { motion } from "framer-motion";

import Card from "./components/Card";
import Junior from "./assets/images/dog1.webp";
import Galipette from "./assets/images/dog2.jpg";
import Chacha from "./assets/images/dog3.jpg";
import Gabelou from "./assets/images/dog4.jpg";
import Mylo from "./assets/images/dog5.jpg";
import Wesley from "./assets/images/dog6.jpg";
import Bossa from "./assets/images/dog7.jpg";

function App() {
  const wildersData = [
    {
      name: "Junior",
      city: "Tadoussac",
      id: 1,
      img: Junior,
      skills: [
        { title: "JS", votes: 10 },
        { title: "React", votes: 8 },
      ],
    },
    {
      name: "Chacha",
      city: "Saguenay",
      id: 2,
      img: Chacha,
      skills: [
        { title: "PHP", votes: 9 },
        { title: "Symfony", votes: 9 },
      ],
    },
    {
      name: "Chicoutimi",
      city: "Shawinigan",
      id: 3,
      img: Galipette,
      skills: [
        { title: "Ruby", votes: 10 },
        { title: "JS", votes: 8 },
      ],
    },
    {
      name: "Galipette",
      city: "Trois Rivières",
      id: 4,
      img: Gabelou,
      skills: [
        { title: "C++", votes: 10 },
        { title: "Rust", votes: 8 },
      ],
    },
    {
      name: "Mylo",
      city: "Plessisville",
      id: 5,
      img: Mylo,
      skills: [
        { title: "JAVA", votes: 10 },
        { title: "NextJS", votes: 8 },
      ],
    },
    {
      name: "Wesley",
      city: "Montreal",
      id: 6,
      img: Wesley,
      skills: [
        { title: "JAVA", votes: 10 },
        { title: "NextJS", votes: 8 },
      ],
    },
    {
      name: "Bossa",
      city: "Quebec",
      id: 7,
      img: Bossa,
      skills: [
        { title: "JAVA", votes: 10 },
        { title: "NextJS", votes: 8 },
      ],
    },
  ];
  return (
    <div className="App">
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <motion.div animate={{ x: [0, 100, -100, 0]}}>
          <h2>Wilders</h2>
        </motion.div>
        <section className="card-row">
          {wildersData.map((wilder) => (
            <Card
              key={wilder.id}
              name={wilder.name}
              skills={wilder.skills}
              city={wilder.city}
              avatar={wilder.img}
            />
          ))}
        </section>
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
