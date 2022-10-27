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
            <img src="images/wedding3.jpg" className="rev-cardimage" alt="image card" />
            <div className="review-body">
                <div className="rating-star">
                    <i className="star material-symbols-rounded">star</i>
                    <i className="star material-symbols-rounded">star</i>
                    <i className="star material-symbols-rounded">star</i>
                    <i className="star material-symbols-rounded">star</i>
                    <i className="star material-symbols-rounded">star</i>
                </div>
                <p className="review-text">
                    Thank you so much for working around the clock for us and making this event so so memorable for the two of us.
                    The decor was exactly how I imagined and I couldn't have asked for more perfection than this.
                    You guys are a great team and I really love your transparency and coordination.
                    Once again, thank you all for doing this for us.
                    Much love
                </p>
                <div className="rev-textbody">
                    <h5 className="rev-cardtitle">Sachit & Monisha</h5>
                    <p className="rev-cardtext opacity-75">The Tamarind Tree, Bangalore</p>
                </div>
            </div>
        </div>
    )
}
export default ReviewCard;