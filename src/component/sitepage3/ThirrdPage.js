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
                    <Page3TextBody
                        colorhead={bodyText[0].colorhead}
                        blackhead={bodyText[0].blackhead}
                        text={bodyText[0].text}
                    />
                </div>
                <div className='page3-section-item'>
                    <Page3TextBody
                        colorhead={bodyText[1].colorhead}
                        blackhead={bodyText[1].blackhead}
                        text={bodyText[1].text}
                    />
                    <Page3Card2 />
                </div>
                <div className='page3-section-item'>
                    <div className='item3-image-box'>
                        <img src='images/wedding3.jpg' className='item3-image' alt='wedding' />
                    </div>
                    <Page3TextBody
                        colorhead={bodyText[2].colorhead}
                        blackhead={bodyText[2].blackhead}
                        text={bodyText[2].text}
                    />
                </div>
                <div className='page3-section-item'>
                    <Page3TextBody
                        colorhead={bodyText[3].colorhead}
                        blackhead={bodyText[3].blackhead}
                        text={bodyText[3].text}
                    />
                    <Page3Item4></Page3Item4>
                </div>
            </section>


        </Body>
    )
}
export default ThirdPage;