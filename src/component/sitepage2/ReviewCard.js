import React from "react";
import './ReviewCard.css'
const ReviewCard = (props) => {
    return (

        // <div className="dgn-cardBody">
        //     <img src={`images/${props.imgname}.jpg`}  className="dgn-cardimage" alt="image card" />
        //     <div className="dgn-cardbody">
        //         <h5 className="dgn-cardtitle">{props.title}</h5>
        //         <p className="dgn-cardtext opacity-75">{props.text}</p>
        //     </div>
        // </div>
        <div className="rev-cardBody">
            <img src={`images/${props.imgname}.jpg`} className="rev-cardimage" alt="image card" />
            <div className="review-body">
                <div className="rating-star">
                    <i className="star material-symbols-rounded">star</i>
                    <i className="star material-symbols-rounded">star</i>
                    <i className="star material-symbols-rounded">star</i>
                    <i className="star material-symbols-rounded">star</i>
                    <i className="star material-symbols-rounded">star</i>
                </div>
                <p className="review-text">{props.text}
                </p>
                <div className="rev-textbody">
                    <h5 className="rev-cardtitle">{props.user}</h5>
                    <p className="rev-cardtext opacity-75">{props.location}</p>
                </div>
            </div>
        </div>
    )
}
export default ReviewCard;