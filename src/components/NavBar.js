
import logo from "../images/react-logo.png"


export const NavBar = () => {
    return (<nav>
        <img src={logo} className="logo" alt="logo" />
        <h3 className="logo-text"> ReactFacts</h3>
        <h4 className="nav--title">React Course - Project 1</h4>
    </nav>)

}