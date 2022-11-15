import React from 'react';
import PageCard from './PageCard';
import './ForthPage.css';
import Body from '../bodycomponent/Body';
const ForthPage = (props) => {
    let cardData = [
        { imgname: "wedding1", title: "Decoration", text: "Professionally designed decor at attractive prices" },
        { imgname: "wedding2", title: "Photography", text: "Expert candid and traditional photography teams starting at 22k" },
        { imgname: "wedding3", title: "Videography", text: "High quality traditional and candid videography starting at just 20k" },
        { imgname: "wedding4", title: "Makeup & hairstyling", text: "Talented make up artists starting at 12k who ensure you look your best" },
        { imgname: "wedding1", title: "Mehndi", text: "Experienced mehendi artists who provide a wide range of designs  " },
        { imgname: "wedding2", title: "Catering", text: "Delicious menus covering all cuisines and price ranges" },
        { imgname: "wedding3", title: "Entertainment", text: "From DJs to traditional performances, we have high quality artists" },
        { imgname: "wedding1", title: "Venue", text: "We help you find the right space that matches your budget " },
        { imgname: "wedding1", title: "Invites", text: "Invite designs that perfectly match your decor theme" },
    ]
    return (
            <Body className='page4'>
                <h2>Services</h2>
                <p>High quality & reliable services, all in one place</p>
                <section className='page4-section'>
                    {cardData.map(data =>
                        <PageCard
                            key={data.title}
                            imgname={data.imgname}
                            title={data.title}
                            text={data.text}
                        />
                    )}
                </section>
            </Body>
    )
}
export default ForthPage;