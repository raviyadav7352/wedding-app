import './FifthPage.css'
import React from 'react';
import Body from '../bodycomponent/Body';
import WorkStepCard from './WorkStepCard';
import DesignCard from '../sitepage2/DesignCard';
const FifthPage = (props) => {
    let stepCard = [
        { steplogo: "flower", title: "Speak to us", text: "Give your requirement & perferences to your planner" },
        { steplogo: "flower2", title: "See the options", text: "Get awalkthrough of our design, price & services" },
        { steplogo: "flower3", title: "Get custom package", text: "Receive a customised package based on your requirement" },
        { steplogo: "flower4", title: "Book us", text: "Pay small booking fee to confirm once you are happy" },
        { steplogo: "flower6", title: "Relax", text: "Sit back & relax while we do all the planning & coordination" },
    ]
    let datas = stepCard[0]
    return (
        <Body className="page5">
            <h2 className='page5-heading'>How It Works</h2>
            <p className='page5-text'>5 easy steps to a hassle-free wedding</p>
                <section className='page5-section'>
                    {stepCard.map((data,index) =>
                        <WorkStepCard
                            key={Math.random(12)}
                            logo={data.steplogo}
                            title={data.title}
                            text={data.text}
                        ></WorkStepCard>
                    )}
                </section>
        </Body>
    )
}
export default FifthPage;