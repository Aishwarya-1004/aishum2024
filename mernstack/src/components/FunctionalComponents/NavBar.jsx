import '../../assets/css/NavBar.css';

const NavBar = () => {
    const styling = {
        fontSize: "30px",
        color: "blue",
        textDecoration: "underline" // Corrected camelCase
    };
    return (
        <header>
            <h1 style={styling}>KONGU ENGINEERING COLLEGE,PERUNDURAI</h1>
            <h2 id="idSEsg">DEPARTMENT OF CSE</h2>
            <p className='box-model'>
                ishhutaraa - 22CSR91
            </p>
        </header>
    );
}

export default NavBar;