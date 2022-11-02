import React from 'react';
import Body from '../bodycomponent/Body';
import DesignCard from '../sitepage2/DesignCard';
import './EightPage.css';
const EightPage = (props) => {
    let cardData = [
        { imgname: "wedding1", title: "Modern Reception Design", text: "fantastic" },
        { imgname: "wedding2", title: "Modern Reception Design", text: "super duper" },
        { imgname: "wedding3", title: "Wedding & Mehendi", text: "this is awesome" },
    ]
    return (
        <Body className="page8">
            <div className='page8-header'>
                <div className='page8-heading-text'>
                    <h2 className='page8-heading'>Design Instantly</h2>
                    <p className='page8-text'>Mix and match to make your perfect design</p>
                </div>
                <button type='button'  className='btn btn-danger page8-btn pageHeaderBtn'>View All Designs</button>
            </div>
            <section className='page8-section'>
                {cardData.map(data =>
                    <DesignCard
                        key={Math.random(12)}
                        imgname={data.imgname}
                        title={data.title}
                        text={data.text}
                    />
                )}
            </section>
            <div className='page8-bottom-card'>
                <div className='page8-bottom-card-image'>
                    <img src='images/flower3.jpg' className='big-image' />
                    <img src='images/mehndi2.jpg' className='small-image' />
                </div>
                <div className=' text-white page8-bottom-card-text'>
                    <h2 className='bottom-card-bold-text'>Get what you want,<br />At the price you want</h2>
                    <p className='bottom-card-plain-text'>
                        Planning a wedding need not be expensive or hard. We provide
                        packaged solutions for all types or requirement.<br /><br />
                        We use technology to bring you the best services at unbeatable price and convenience
                    </p>
                    <button type='button' className='btn btn-danger page8-btn'>YES! SHOW ME OPTIONS</button>
                </div>
            </div>
        </Body>
    )
}
export default EightPage;