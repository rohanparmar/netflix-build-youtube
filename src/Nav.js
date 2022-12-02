import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Nav.css"

function Nav() {
    const [show, handleShow] = useState(false);

    const Navigate = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_content">

                <img 
                onClick={() => Navigate("/")}
                className="nav_logo" src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix Logo' />

                <img 
                onClick={() => Navigate("/profile")}
                className="nav_avatar" src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Netflix Avatar' />

            </div>
        </div>
    )
}

export default Nav