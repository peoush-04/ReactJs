import { useState } from "react";

//taking paramyers directly , no need of props.obj.id , props.obj.image
function Card({id,image,info,price,name,removeTour}){

    const [readMore,setreadMore] = useState(false);
    //initially in UI, only first 200 chars are visible then we have a Read more span tag
    // if readmore is true then show full info , else show only first 200 chars 
    const description = readMore ? info : `${info.substring(0,200)} ... `;
    

    function readMoreHandler(){
        //if false then make true , if true then make it false
        setreadMore(!readMore);
    }

    return(
        <div className="card">
            <img src={image} alt="error" className="image"></img>
            
            <div className="tour-details">
                <h4 className="tour-price">₹{price}</h4>
                <h4 className="tour-name">{name}</h4>
            </div>
            
            <div className="description">
                {description}
                <span className="readMore" onClick={readMoreHandler}>
                    {readMore ? " show less" : "read more"}
                </span>
            </div>

            {/* removeTourHandler will take the id of the card to be removed , it will remove the object of that id from data.js and re render it on the UI . so we need to change/delete in the data object and re render it using map function again . But the data object and setTourData is in App.js so write the function of removeTourHandler in App.js   */}
            <button className="btn" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;