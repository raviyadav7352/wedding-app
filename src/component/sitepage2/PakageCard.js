import React from "react";
import './PakageCard.css'
const PakageCard = (props) => {
    return (
    
        <div className="pkg-cardBody">
            <div className="pkg-image-body">
                <img src='images/wedding1.jpg'  className="pkg-cardimage" alt="image card" />
                <img src='images/wedding2.jpg'  className="pkg-cardimage" alt="image card" />
                <img src='images/wedding3.jpg'  className="pkg-cardimage" alt="image card" />
                <img src='images/wedding4.jpg'  className="pkg-cardimage" alt="image card" />
            </div>
            <div className="pkg-cardbody">
                <h5 className="pkg-cardtitle">{props.title}<span className="pkg-day">| 1 Day</span></h5>
                <p className="pkg-cardtext opacity-75">
                    <span className="cardtext1">decor, </span>
                    <span className="cardtext2">photography, </span>
                    <span className="cardtext3">makeup, </span>
                    <span className="cardtext4">music</span>
                </p>
                <div className="card-cash-like">
                <h5 className="cardcash">₹{props.price}</h5>
                <i className="material-symbols-rounded favorite">favorite</i>
                </div>
            </div>
        </div>
    )
}
export default PakageCard;