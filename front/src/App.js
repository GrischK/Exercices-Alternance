import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const wildersData = [
    {
      name: "Ringo",
      city: "London",
      id: 1,
      skills: [
        { title: "JS", votes: 10 },
        { title: "React", votes: 8 },
      ],
    },
    {
      name: "John",
      city: "Paris",
      id: 2,
      skills: [
        { title: "PHP", votes: 9 },
        { title: "Symfony", votes: 9 },
      ],
    },
    {
      name: "George",
      city: "Berlin",
      id: 3,
      skills: [
        { title: "Ruby", votes: 10 },
        { title: "JS", votes: 8 },
      ],
    },
    {
      name: "Paul",
      city: "Reims",
      id: 4,
      skills: [
        { title: "C++", votes: 10 },
        { title: "Rust", votes: 8 },
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
        <h2>Wilders</h2>
        <section className="card-row">
          {wildersData.map((wilder) => (
            <Card
              key={wilder.id}
              name={wilder.name}
              skills={wilder.skills}
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
