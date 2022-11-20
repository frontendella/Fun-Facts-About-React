
import { NavBar } from "./NavBar";
import { MainContent } from './MainContent';
import { useState } from "react";


export
    const Page = () => {
        const [darkMode, setDarkMode] = useState(true)
        const toggleDarkMode = () => {
            setDarkMode(prevMode => !prevMode)
        }

        return (
            <div className="container">
                <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                <MainContent darkMode={darkMode} />
            </div>
        )
    }