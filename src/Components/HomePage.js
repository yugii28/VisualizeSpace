import React from "react";
import "./HomePage.css"
import { useState } from "react";

function HomePage(){

    const [isOpen, setisOpen] = useState(false);

    const handleClick = () => {
        document.body.style.overflow = "hidden";
        setisOpen(true);
    }

    const handleClose = () => {
        document.body.style.overflow = "auto";
        setisOpen(false);
    }

    return (
        <div className = "container">
            {!isOpen && (
                <div>
            <h1 className = 'title'>SPACE</h1>
            <h2 className = 'description'>All your information about space. Right here.</h2>

            <div className = "three-cards-container">
                <div className = "first-card">
                    <h4>Asteroid locations</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className = "second-card">
                    <h4>Rocket speeds</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                </div> 
                <div className = "third-card">
                    <h4>The Fireball</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <button onClick = {handleClick} className = "get-started-button">Get Started Here</button>
        </div>
            )}
            {isOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span class="material-symbols-outlined" onClick={handleClose}>close</span>
                        <div className = "text-container">
                            <p>Hi! Welcome to Space Visualizer. If you'd like to know more about all the information we offer, please click here.</p>
                            <br></br>
                            <p>Otherwise, feel free to browse through the following links:</p>
                            <p>Lorem</p>
                            <p>Lorem</p>
                            <p>Lorem</p>
                            <p>Lorem</p>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomePage;