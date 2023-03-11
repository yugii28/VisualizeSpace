import React from "react";
import "./CSS/HomePage.css"
import { useState } from "react";
import { Link } from 'react-router-dom';

function HomePage(){

    const [isOpen, setisOpen] = useState(false);

    const handleClick = () => {
        setisOpen(true);
    }

    const handleClose = () => {
        setisOpen(false);
    }

    return (
        <div className = "i-container">
            {!isOpen && (
                <div>
            <h1 className = 'title'>SPACE</h1>
            <h2 className = 'description'>All your information about space. Right here.</h2>

            <div className = "three-cards-container">
                <div className = "first-card">
                    <h4>Picture of the day</h4>
                    <p>Enter any date and we will provide you NASA's astronomy picture of the day from that date as well as a description</p>
                </div>
                <div className = "second-card">
                    <h4>Search pictures</h4>
                    <p>Want to know how the Apollo 11 mission or a supernova looks? Enter a term and we'll show you how it looks!</p>
                </div> 
                <div className = "third-card">
                    <h4>Asteroid locations</h4>
                    <p>Want to know how objects in space are moving? We have all the information and can visualize it!</p>
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
                            <p>Hi! Welcome to Space Visualizer. Feel free to browse through the following links:</p>
                            <br></br>
                            <Link to = "/apod">Find the astronomy picture of the day of any day since 1996!</Link>
                            <br></br>
                            <br></br>
                            <Link to = "/search-pictures">Enter any space term and we will show you how it looks!</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HomePage;