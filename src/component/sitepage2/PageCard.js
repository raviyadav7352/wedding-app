import React from "react";
import './PageCard.css'
const PageCard = (props) => {
    return (
    
        <div className="cardBody">
            <img src={`images/${props.imgname}.jpg`}  className="cardimage" alt="image card" />
            <div className="cardbody">
                <h5 className="cardtitle">{props.title}</h5>
                <p className="cardtext opacity-75">{props.text}</p>
            </div>
        </div>
    )
}
export default PageCard;