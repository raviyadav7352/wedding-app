import React from "react";
import './DesignCard.css'
const DesignCard = (props) => {
    let classes = "dgn-cardBody " + props.className;
    return (

        <div className={classes}>
            <img src={`images/${props.imgname}.jpg`} className="dgn-cardimage" alt="image card" />
            <div className="dgn-textbody">
                <h5 className="dgn-cardtitle">{props.title}</h5>
                <p className="dgn-cardtext opacity-75">{props.text}</p>
            </div>
            {/* this div is for page2 card */}
            <div className="page2-card">
                <div className="image_logo">
                    <div className="logoimage" style={{ backgroundImage: `url(images/${props.imagelogo}.jpg)` }}></div>
                    <span className="namehead">{props.titlename}</span>
                </div>
                <div className="price_sale">
                    <p className="forsale">{props.textsale}</p>
                    <p>{props.price}</p>
                </div>
            </div>
        </div>
    )
}
export default DesignCard;