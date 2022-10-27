import React from "react";
import './SiteHeader.css';
const SiteHeader = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-fixed-top navbar-expand-sm navbar-light bg-light">
                <div className="container-fluid ms-sm-4 gap-sm-4 ps-4 pe-4">
                    
                    <a className="navbar-brand fw-semibold fs-2" href="#"><img src="images/mariage-logo.png"  height="40px" alt=""/>Meragi</a>
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav nav-items gap-sm-4 text-center">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link " href="#">Testimonials</a>
                            <a className="nav-link" href="#">Designs</a>
                            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Shops</a>
                        </div>
                    </div>
                </div>
            </nav>

        </React.Fragment>
    )
}
export default SiteHeader;