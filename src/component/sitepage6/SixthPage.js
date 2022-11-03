import './SixthPage.css'
import React, { useState, useRef } from 'react';
import Body from '../bodycomponent/Body';
import ModalPage from '../bodycomponent/ModalPage';
const SixthPage = (props) => {
    let [shift, setShift] = useState(25)
    let [modalIs, setModalIs] = useState(true)
    let boxref = useRef()
    function modalHide() {
        setModalIs(true)
    }
    function showImage(status ,event) {
        setModalIs(status)
        let imghtml = event.target.getAttribute("src")
        boxref.current.innerHTML = `<img src=${imghtml} class="corosol-click-image"/>`

    }

    let imagedata = [
        { imgname: "wedding1" }, { imgname: "wedding2" }, { imgname: "wedding3" }, { imgname: "wedding4" },
        { imgname: "wedding2" }, { imgname: "wedding3" }, { imgname: "wedding1" }, { imgname: "wedding1" },
        { imgname: "wedding2" }, { imgname: "wedding3" }, { imgname: "wedding2" }, { imgname: "wedding2" },
        { imgname: "wedding4" }, { imgname: "wedding1" }, { imgname: "wedding2" }, { imgname: "wedding4" },
    ]
    let backward = function () {
        if (shift != 25) {
            setShift(pre => pre - 50)
        }
    }
    function imageSet() {
       

    }

    let forward = function () {
        if (shift <= imagedata.length * 30 + 50) {
            setShift(Number => Number + 50)
        }
    }

    return (
        <Body className="page6">
            <p className='page6-text'>200+ Events, 10+ years</p>
            <h2 className='page6-heading'>Meragi Designs</h2>
            <div className='corosol-box'>
                <span className="material-symbols-rounded backarrow" onClick={backward}>
                    arrow_back_ios
                </span>
                <span className="material-symbols-rounded forwardarrow" onClick={forward}>
                    arrow_forward_ios
                </span>
                <div className='image-box' style={{ transform: `translateX(${-shift}%)` }}>
                    {imagedata.map((data, index) =>
                
                        <div key={index} className='corosol-image-box'>
                        <img  className='corosol-image' onClick={(e) => showImage(false, e)} src={`images/${data.imgname}.jpg`} />
                        
                        <span className="material-symbols-rounded likebox" >favorite
                            <span className="material-symbols-outlined likefill" onClick={(e)=>e.target.classList.toggle("like")}>favorite</span>
                        </span>   
                        </div>
                        )}
                </div>
                <div className={`modal__body ${modalIs ? "close" : "open"}`}>
                    <img src='icons/close.png' className='closemodal' onClick={modalHide} />
                    <section className='modal__section'>
                        <div className='modal-image-box' ref={boxref}></div>
                    </section>
                    <footer className='modal__footer'>
                        <button type='button'>Save</button>
                    </footer>
                </div>

            </div>
        </Body>
    )
}
export default SixthPage;