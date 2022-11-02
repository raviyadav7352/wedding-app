import React from "react"
const ImageCorousel = () => {
    return (
        <React.Fragment>
            <div id="inteval" className=" h-100 carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner  h-100  image-box">
                    <div className="carousel-item active  h-100 ">
                        <img src="images/wedding1.jpg" className="d-block w-100  h-100  " alt="weddingimg" />
                    </div>
                    <div className="carousel-item  h-100 ">
                        <img src="images/wedding2.jpg" className="d-block w-100 h-100 " alt="weddingimg" />
                    </div>
                    <div className="carousel-item  h-100 ">
                        <img src="images/wedding3.jpg" className="d-block w-100 h-100 " alt="wedddingimg" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#inteval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#inteval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </React.Fragment>
    )
}
export default ImageCorousel