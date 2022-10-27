import React from "react";
import './DesignCard.css'
const DesignCard = (props) => {
    return (
    
        // <div className="dgn-cardBody">
        //     <img src={`images/${props.imgname}.jpg`}  className="dgn-cardimage" alt="image card" />
        //     <div className="dgn-cardbody">
        //         <h5 className="dgn-cardtitle">{props.title}</h5>
        //         <p className="dgn-cardtext opacity-75">{props.text}</p>
        //     </div>
        // </div>
         <div className="dgn-cardBody">
         <img src="images/wedding1.jpg"  className="dgn-cardimage" alt="image card" />
         <div className="dgn-textbody">
             <h5 className="dgn-cardtitle">Wedding Mandap</h5>
             <p className="dgn-cardtext opacity-75">Contemporary, Traditional</p>
         </div>
     </div>
    )
}
export default DesignCard;