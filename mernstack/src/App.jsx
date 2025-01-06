import './App.css';

import Home from "./components/FunctionalComponents/Home";
import About from "./components/FunctionalComponents/About";
import Gallery from "./components/FunctionalComponents/Gallery";
import NavBar from "./components/FunctionalComponents/NavBar";
import "./assets/css/Home.css";
import "./assets/css/NavBar.css";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UseEffect from "./components/FunctionalComponents/UseEffect";
import UseRef from "./components/FunctionalComponents/UseRef";
import UseContext from "./components/FunctionalComponents/UseContext";
import UseMemo from "./components/FunctionalComponents/UseMemo";
import Footer from './components/FunctionalComponents/footer';
import SignUp from './components/FunctionalComponents/signup';
import Login from './components/FunctionalComponents/login';


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={ <About college="KONGU ENGINEERING COLLEGE" clg1="naturopathy" />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/useEffect" element={<UseEffect />} />
        <Route path="/useRef" element={<UseRef />} />
        <Route path="/useContext" element={<UseContext />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;