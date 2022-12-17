
import './App.css';
import Events from './components/Events';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Perks from './components/Perks';
import RegisterModal from './components/RegisterModal';


function App() {
  return (
    <div className="App">
    <Header/>
      <RegisterModal />
      <HeroSection/>
      <Perks/>
      
      <Events/>
    </div>
  );
}

export default App;
