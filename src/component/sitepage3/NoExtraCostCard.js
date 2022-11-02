import React from "react";
import './NoExtraCostCard.css'
const NoExtraCostCard = (props) => {
    return (
    
        <div className="noextra-cardBody">
            <div className="noextra-image-body">
                <img src='images/wedding1.jpg'  className="noextra-cardimage" alt="image card" />
            </div>
            <div className="noextra-cardbody">
                <h5 className="noextra-cardtitle">{props.title} <span className="noextra-day"><b className="lvertical-line">|</b> 2 Day</span></h5>
                <p className="noextra-cardtext opacity-75">
                    <span className="xtrcardtext1">decor, </span>
                    <span className="xtrcardtext2">photography, </span>
                    <span className="xtrcardtext3">makeup </span>
                    {/* <span className="xtrcardtext4">music</span> */}
                </p>
                <div className="xtrcard-cash-like">
                <h5 className="xtrcardcash">₹{props.price}<small>Total</small></h5>
                <span className="material-symbols-rounded xtrfavorite">
                <span className="material-symbols-rounded payment-logo">payments</span>
                    <span className="fav-box-text">No Extra <b>Cost</b></span>
                    </span>
                </div>
            </div>
        </div>
    )
}
export default NoExtraCostCard;