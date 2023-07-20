import './App.css';
import Navigation from './components/Navbar/Navbar.js';
import Banner from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css'
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import AboutMe from './components/AboutMe/AboutMe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <Banner />
      <AboutMe />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
