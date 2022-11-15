import React from "react";
import './FirstPage.css'
import SiteHeader from "./SiteHeader";
import ImageCorousel from "./ImageCorousel";
const FirstPage = () => {
    return (
        <React.Fragment>
            <div className=" page1-body position-relative">
                <div className="page1-texts">
                    <h4 className="text-warning fw-bold page1-heading1">Modern. Convenient. Affordable.</h4>
                    <h3 className="fw-bold page1-heading2" >Meragi Wedding Services</h3>
                    <p className="page1-text-content">We are a one-stop solution for all wedding related services.<br /><br />
                        We provide high quality services at attractive prices. Browse our designs
                        and services online and our team will help you customise them as per your
                        requirement and budget.<br /><br />
                        Go ahead, give us a try!
                    </p>
                    <div className="page1-venue-text mt-sm-5">
                        <p className="venue-text">Venues we work at :-</p>
                        <ul className="d-flex gap-4 fw-bolder list-style">
                            <li>delhi</li>
                            <li>mumbai</li>
                            <li>gujrat</li>
                            <li>jaipur</li>
                        </ul>
                    </div>
                    <div className="position-absolute phone-input-box">
                        <input type='text' className=" phone-input" placeholder="Phone" />
                        <button type="button" className="btn btn-danger phone-input-btn">Get Started</button>
                    </div>
                </div>
                <div className=" page1-img-back">
                    <span className=" page1-img "> <ImageCorousel></ImageCorousel></span>
                   
                    <div className="bottom-color"></div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default FirstPage;