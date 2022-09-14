import Card from "./components/Card";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";
import profile1 from "./images/profile1.jpg";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Card
        img={profile1}
        rating="5.0"
        reviewCount="6"
        country="USA"
        title="Life Lessons with OJ Simpsons"
        price="136"
      />
    </div>
  );
}

export default App;
