
import '../../assets/css/NavBar.css';
import { Link } from "react-router-dom";
const NavBar=()=>{
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/gallery">gallery</Link></li>
                    <li><Link to="/useRef">UseRef</Link></li>
                    <li><Link to="/useContext">UseContext</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/useEffect">UseEffect</Link></li>
                    <li><Link to="/useMemo">UseMemo</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
       

                </ul>
            </nav>
        </header>
    )
}
export default NavBar;