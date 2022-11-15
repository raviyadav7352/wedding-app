import React from 'react';
import Body from '../bodycomponent/Body';
import ReviewCard from '../sitepage2/ReviewCard';
import './NinthPage.css';
const NinthPage = (props) => {
    let cardData = [
        { imgname: "wedding1", user: "Sachit & Monisha", 
        text:` Thank you so much for working around the clock for us and making this event so so memorable for the two of us.
        The decor was exactly how I imagined and I couldn't have asked for more perfection than this.
        You guys are a great team and I really love your transparency and coordination.
        Once again, thank you all for doing this for us`,location:"The Tamarind Tree, Bangalore" 
        },
        { imgname: "wedding2", user: "Mahipal sesodiya", 
        text:` Thank you so much for working around the clock for us and making this event so so memorable for the two of us.
        The decor was exactly how I imagined and I couldn't have asked for more perfection than this.
        You guys are a great team and I really love your transparency and coordination.
        Once again, thank you all for doing this for us`,location:"The Tamarind Tree, Bangalore"
        },
        { imgname: "wedding3", user: "rajesh trivedi", 
        text:` Thank you so much for working around the clock for us and making this event so so memorable for the two of us.
        The decor was exactly how I imagined and I couldn't have asked for more perfection than this.
        You guys are a great team and I really love your transparency and coordination.
        Once again, thank you all for doing this for us`,location:"The Tamarind Tree, Bangalore"
        },
    ]
    return (
            <Body className='page9'>
                <h3 className='page9-heading'>Loved by customers</h3>
                <section className='page9-section'>
                    {cardData.map(data =>
                        <ReviewCard
                            key={Math.random(12)}
                            imgname={data.imgname}
                            location ={data.location}
                            user={data.user}
                            text={data.text}
                        />
                    )}
                </section>
            </Body>
    )
}
export default NinthPage;