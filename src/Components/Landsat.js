import React from "react";
import "./CSS/Landsat.css"
import { useEffect, useState } from "react";
import InfoButton from "./InfoButton";

function Landsat(){
    const [image, setImage] = useState();
    const [imageReturned, setImageReturned] = useState(false);
    const [year, setYear] = useState();
    const [month, setMonth] = useState();
    const [day, setDay] = useState();
    const [is_there_error, setIsThereError] = useState(false);
    const [description, setDescripton] = useState();
    const [showInfo, setShowInfo] = useState(false);
    const toggleInfo = () => setShowInfo(!showInfo);

    const handleYearChange = (event) => {
        setYear(event.target.value)
    }

    const handleMonthChange = (event) => {
        setMonth(event.target.value)
    }

    const handleDayChange = (event) => {
        setDay(event.target.value)
    }

    const handleClose = () => {
        setIsThereError(false);
    }

    const callApi = async (event) => {
        event.preventDefault();

        try{
            const api_call= await fetch (`https://api.nasa.gov/planetary/apod?date=${year}-${month}-${day}&api_key=UI9oflFj5Ue8d9sIEXFh2xvuqwUdZeCrBFaMCV5W`); //making the api call
            const data_json=  await api_call.json(); //storing data from api in json format
            console.log(data_json);
            setImage(data_json.url);
            if (data_json.explanation != ""){
                setDescripton(data_json.explanation);
            }
            else{
                setDescripton("No description for this image :(")
            }
            console.log(description);
            setImageReturned(true);
            if(data_json.msg){
                setIsThereError (true);
            }
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className = "container">
            {!is_there_error && (
                <div className="container">
                    <div className = "input-container">
                        <h4 className="text">Enter any date and we will show you NASA's astronomy picture of the day from that date!</h4>
                        <InfoButton info="Note to AggieWorks: This API only contains images from 1995 and onwards. Try entering in 1995 to see an error message :)" />
                        <form onSubmit = {callApi}>
                            <input className="year-input" value = {year} placeholder = "Enter year" onChange = {handleYearChange}/>
                            <input className="month-input" value = {month} placeholder = "Enter month" onChange = {handleMonthChange}/>
                            <input className="day-input" value = {day} placeholder = "Enter day" onChange = {handleDayChange}/>
                            <br/>
                            <button className="submit-button"  type = "submit">Submit</button>
                        </form>
                    </div> 
                    {imageReturned && (
                        <div className="image-container">
                            <img className="s-image" src = {image}/>   
                            <div className="q">
                                <div className="description-container">
                                    {description}
                                </div>
                            </div>
                         </div> 
                    )}
                </div>
            )}
            {is_there_error && (
                <div className="modal">
                    <div className="modal-content">
                        <span class="material-symbols-outlined" onClick={handleClose}>close</span>
                        <div className = "text-container">
                            <p>Unfortunately, we were not able to find an image for date you entered, {year}-{month}-{day}. This might be because no image exists for the date you entered, or because it was entered the wrong way. Please enter a date in the form year, month, date. For example, 2023, 01, 05</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Landsat;