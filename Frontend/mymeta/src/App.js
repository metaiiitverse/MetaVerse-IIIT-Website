import "./App.css";
import Events from "./components/Events";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Perks from "./components/Perks";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Perks />
      <Events />
    </div>
  );
}

export default App;
