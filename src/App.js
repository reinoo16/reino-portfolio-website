import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <div className='block'></div>
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
