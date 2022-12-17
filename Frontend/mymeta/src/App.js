
import './App.css';
import Events from './components/Events';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Perks from './components/Perks';


function App() {
  return (
    <div className="App">
    <Header/>
      <HeroSection/>
      <Perks/>
      
      <Events/>
    </div>
  );
}

export default App;
