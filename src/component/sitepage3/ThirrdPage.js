import React from 'react';
import Page3Card2 from './Page3Card2';
import Body from '../bodycomponent/Body';
import NoExtraCostCard from './NoExtraCostCard';
import Page3TextBody from './Page3TextBody';
import './ThirdPage.css';
import Page3Item4 from './Page3Item4';

const ThirdPage = (props) => {
    let bodyText = [
        { colorhead: "Planner ", blackhead: "at no extra cost", text: "We provide a free planner convenience for any service you choose" },
        { colorhead: "Place ", blackhead: "all service in one", text: "We save you the hassle of needing to speak to 20+ vendors" },
        { colorhead: "3D ", blackhead: "visualisation", text: "See your final design in realistic 3D before placing order" },
        { colorhead: "Online ", blackhead: "packages", text: "Receieve personalised packages online, based on your requirement & budget" },
    ]
    const page3TextBody = (index)=>{
        const textData = bodyText[index]
        return(
            <Page3TextBody
            colorhead={textData.colorhead}
            blackhead={textData.blackhead}
            text={textData.text}
           />)
    }

    return (
        <Body className="page3">
            <h2 className='page3-heading'>The Meragi Difference</h2>
            <p className='page3-text'>Reasons why we are the best in the business</p>
            <section className='page3-section'>
                <div className='page3-section-item'>
                    <NoExtraCostCard
                        title="Wedding and Mehndi"
                        price="70000"
                    />
                    {page3TextBody(0)}
                </div>
                <div className='page3-section-item'>
                    <Page3Card2 />
                    {page3TextBody(1)}
                </div>
                <div className='page3-section-item'>
                    <div className='item3-image-box'>
                        <img src='images/wedding3.jpg' className='item3-image' alt='wedding' />
                    </div>
                    {page3TextBody(2)}
                </div>
                <div className='page3-section-item'>
                    <Page3Item4/>
                    {page3TextBody(3)}
                </div>
            </section>


        </Body>
    )
}
export default ThirdPage;