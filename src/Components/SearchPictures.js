import React from "react";
import "./CSS/SearchPictures.css"
import { useEffect, useState } from "react";
import InfoButton from "./InfoButton";

function SearchPictures(){
    const [imageOne, setImageOne] = useState();
    const [imageTwo, setImageTwo] = useState();
    const [imageReturned, setImageReturned] = useState(false);
    const [is_there_error, setIsThereError] = useState(false);
    const [descriptionOne, setDescriptonOne] = useState();
    const [descriptionTwo, setDescriptonTwo] = useState();
    const [titleOne, setTitleOne] = useState();
    const [titleTwo, setTitleTwo] = useState();
    const [searchChange, setSearchChange] = useState();

    const handleSearchChange = (event) => {
        setSearchChange(event.target.value)
    }

    const handleClose = () => {
        setIsThereError(false);
    }

    const callApi = async (event) => {
        event.preventDefault();

        try{
            const api_call= await fetch (`https://images-api.nasa.gov/search?q=${searchChange}&media_type=image`); //making the api call
            const data_json=  await api_call.json(); //storing data from api in json format
            const len = data_json.collection.items.length;
            if (len !== 0){
                const info_for_first_image = data_json.collection.items[0].data[0];
                const info_for_second_image = data_json.collection.items[len-1].data[0]

                setImageOne(data_json.collection.items[0].links[0].href);
                setImageTwo(data_json.collection.items[len-1].links[0].href);
                

                if (info_for_first_image.description != ""){
                    const sentences_for_first_image = info_for_first_image.description.split(".");
                    const five_sentences = sentences_for_first_image.slice(0,5);
                    const final = five_sentences.join(".")
                    setDescriptonOne(final);
                    console.log(data_json.collection.items[0].data[0].description);
                }
                else{
                    setDescriptonOne("No description for this image :(")
                }

                if (info_for_second_image.description != ""){
                    const sentences_for_second_image = info_for_second_image.description.split(".");
                    const five_sentences = sentences_for_second_image.slice(0,5);
                    const final = five_sentences.join(".")
                    setDescriptonTwo(final);
                }
                else{
                    setDescriptonOne("No description for this image :(")
                }

                if (info_for_first_image.title != ""){
                    setTitleOne(data_json.collection.items[0].data[0].title);
                }
                else{
                    setTitleOne("No description for this image :(")
                }

                if (info_for_second_image.title != ""){
                    setTitleTwo(data_json.collection.items[len-1].data[0].title);
                }
                else{
                    setTitleTwo("No description for this image :(")
                }
                setImageReturned(true);
            }
            else{
                setIsThereError (true);
            }
            console.log(len);
        }catch(error){
            console.log(error);
        }
    }

    return (
        <div className = "container">
            {!is_there_error && (
                <div className="container">
                    <div className = "input-container">
                        <h4 className="text">Enter any space-term and we will show you pictures of it!</h4>
                        <InfoButton info="Try 'Apollo 11' or 'Moon landing'. Hover over the image for a description!" />
                        <form onSubmit = {callApi}>
                            <input className="user-input" value = {searchChange} placeholder = "Enter year" onChange = {handleSearchChange}/>
                            <br/>
                            <button className="submit-button"  type = "submit">Submit</button>
                        </form>
                    </div> 
                    {imageReturned && (
                        <div className="image-container">
                            <div className = "first-image"> {/*flip-card */}
                                <div class = "flip-card-inner">
                                    <div class = "flip-card-front">
                                        <img className="image-one" src = {imageOne}/> 
                                    </div>
                                    <div class="flip-card-back-1">
                                        <div className="card-text-container">
                                            <h3 style = {{textDecoration: "underline"}}>{titleOne}</h3> 
                                            <p className="description">{descriptionOne}</p> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="second-image"> {/*flip-card */}
                                <div class = "flip-card-inner">
                                    <div class = "flip-card-front">
                                        <img className="image-two" src = {imageTwo}/> 
                                    </div>               
                                    <div class="flip-card-back-2">
                                        <div className="card-text-container">
                                            <h3 style = {{textDecoration: "underline"}}>{titleTwo}</h3> 
                                            <p className="description">{descriptionTwo}</p>  
                                        </div>
                                    </div>                 
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
                            <p>Unfortunately, we were not able to find an image for "{searchChange}". Sorry for the inconvenience!</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SearchPictures;