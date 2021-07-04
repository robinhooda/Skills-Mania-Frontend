import { useEffect } from 'react'
import TestSVG from "../../assets/images/test.svg"
import {Link} from "react-router-dom"
import "./Home.css"
import { useData } from '../../contexts/DataContext';
function Home() {
    const { dispatch } = useData();

    useEffect(() => {
      dispatch({ type: "RESET_STATE" });
    }, []);
    return (
        <header className="header">
            <div>
                <img src={TestSVG} alt="test-pic" className="hero-image" />
            </div>
            <div className="header-content">
                <h2>Test your programming skills</h2>
                <Link to="/category">
                    <button className="primary-button large-button">
                        Explore categories 
                        <i className="fas fa-arrow-right pad-l-sm"></i>
                    </button>
                </Link>
            </div>
        </header>
    )
}

export default Home
