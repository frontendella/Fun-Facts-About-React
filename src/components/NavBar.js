
import logo from "../images/react-logo.png"


export const NavBar = ({ darkMode, toggleDarkMode }) => {
    return (<nav className={darkMode ? "dark" : "light"}>
        <img src={logo} className="nav--logo_icon" alt="logo" />
        <h3 className="nav--logo_text"> ReactFacts</h3>
        <div
            className="toggler"
        >
            <p className="toggler--light">Light</p>
            <div
                className="toggler--slider"
                onClick={toggleDarkMode}
            >
                <div className="toggler--slider--circle">

                </div>
            </div>
            <p className="toggler--dark">Dark</p>
        </div>



    </nav >)

}