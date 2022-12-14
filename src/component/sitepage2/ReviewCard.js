import React,{ useRef } from "react";
import './ReviewCard.css'
const ReviewCard = (props) => {
    let rattingRef =useRef()
    let html='' ;
    let rattingStar = ()=>{
       
       for(let i = 0; i<=5; i++){
        html +=`vjjjb`
       }
       console.log(html)
    }
    return (
        <div className="rev-cardBody">
            <img src={`images/${props.imgname}.jpg`} className="rev-cardimage" alt="image card" />
            <div className="review-body">
                <div className="rating-star" ref={rattingRef}>
                    {/* <i className="star material-symbols-rounded">star
                        <span className="material-symbols-outlined like starfill" onClick={(e)=>e.target.classList.toggle("like")}>star</span>
                    </i>
                    <i className="star material-symbols-rounded">star
                        <span className="material-symbols-outlined like starfill" onClick={(e)=>e.target.classList.toggle("like")}>star</span>
                    </i>
                    <i className="star material-symbols-rounded">star
                        <span className="material-symbols-outlined like starfill" onClick={(e)=>e.target.classList.toggle("like")}>star</span>
                    </i>
                    <i className="star material-symbols-rounded">star
                        <span className="material-symbols-outlined like starfill" onClick={(e)=>e.target.classList.toggle("like")}>star</span>
                    </i>
                    <i className="star material-symbols-rounded">star
                        <span className="material-symbols-outlined like starfill" onClick={(e)=>e.target.classList.toggle("like")}>star</span>
                    </i> */}
                    {html}
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