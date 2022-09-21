import Card from "./components/Card";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const cards = data.map((items) => {
    return <Card key={items.id} item={items} />;
  });
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <section className="card-list">{cards}</section>
    </div>
  );
}

export default App;
