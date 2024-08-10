import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './components/Home';
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills";
import Footer from './components/Footer';
import { Projects } from "./components/Projects";


function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
