import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills";
import Footer from './components/Footer';
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <Skills />
      <Footer/>
      {/* 
      
      <Projects />
      <Contact />
       */}
    </div>
  );
}

export default App;
