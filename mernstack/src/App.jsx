import "./App.css";
import ClassCompEg from "./components/ClassComponents/ClassCompEg";
import About from "./components/FunctionalComponents/About";
import Home from "./components/FunctionalComponents/Home";
import Gallery from "./components/FunctionalComponents/Gallery";
import NavBar from "./components/FunctionalComponents/NavBar"

function App(){
    
  return (
    <div>
      <NavBar />
      <ClassCompEg />
      <About />
      <Home />
      <Gallery />
    </div>
  );
}
export default App;