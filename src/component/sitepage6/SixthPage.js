import './SixthPage.css'
import React, { useState, useRef } from 'react';
import Body from '../bodycomponent/Body';
import ModalPage from '../bodycomponent/ModalPage';
const SixthPage = (props) => {
    let [shift, setShift] = useState(10)
    let [modalIs, setModalIs] = useState(true)
    let imageTap = useRef()
    let boxref = useRef()
    function modalHide() {
        setModalIs(true)
    }

    let imagedata = [
        { imgname: "wedding1" }, { imgname: "wedding2" }, { imgname: "wedding3" }, { imgname: "wedding4" },
        { imgname: "wedding2" }, { imgname: "wedding3" }, { imgname: "wedding1" }, { imgname: "wedding1" },
        { imgname: "wedding2" }, { imgname: "wedding3" }, { imgname: "wedding2" }, { imgname: "wedding2" },
        { imgname: "wedding4" }, { imgname: "wedding1" }, { imgname: "wedding2" }, { imgname: "wedding4" },
    ]
    let backward = function () {
        if (shift != 10) {
            setShift(pre => pre - 40)
        }
    }
    function imageSet() {
        let imghtml;
        imghtml = imageTap.current

        boxref.current.innerHTML = `<img src="images/flower3.jpg" class="corosol-click-image"/>`

    }

    let forward = function () {
        if (shift <= imagedata.length * 30 + 40) {
            setShift(Number => Number + 40)
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
                        <img key={index} className='corosol-image' onDoubleClick={() => setModalIs(false)} src={`images/${data.imgname}.jpg`} />
                    )}
                </div>
                <div className={`modal__body ${modalIs ? "close" : "open"}`}>
                    <header className="modal__header" >
                        <img src='icons/close.png' className='closemodal' onClick={modalHide} />
                    </header>
                    <section className='modal__section'>
                        <div className='modal-image-box' ref={boxref}>
                            <img src='images/wedding2.jpg' alt='wedding deco' ref={imageTap} onClick={() => imageSet()} className='corosol-click-image' />
                        </div>
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