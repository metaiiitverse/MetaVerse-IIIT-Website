
import './App.css';
import Events from './components/Events';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Perks from './components/Perks';
import Teams from './components/Teams';

function App() {
  return (
    <div className="App">
    <Header/>
      <HeroSection/>
      <Perks/>
      <Teams/>
      <Events/>
    </div>
  );
}

export default App;
