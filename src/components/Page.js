
import { NavBar } from "./NavBar";
import { MainContent } from './MainContent';


export
    const Page = () => {
        return (
            <div className="container">
                <NavBar />
                <MainContent />
            </div>
        )
    }