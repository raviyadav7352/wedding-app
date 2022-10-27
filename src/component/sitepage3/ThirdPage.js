import React from 'react';
import PakageCard from '../sitepage2/PakageCard';
import './ThirdPage.css';
const ThirdPage = (props) => {
    let cardData = [
        { imgname: "wedding1", title: "Modern Reception Design", cost:"3,50,000" },
        { imgname: "wedding2", title: "Modern Reception Design", cost:"2,50,600" },
        { imgname: "wedding3", title: "Wedding & Mehendi", cost: "3,30,679" },
        { imgname: "wedding4", title: "Makeup & hairstyling", cost:"2,20,399"},
        { imgname: "wedding2", title: "Wedding & Mehendi", cost: "4,30,679" },
        { imgname: "wedding3", title: "Wedding & Reception", cost: "4,30,679" },
        { imgname: "wedding1", title: "Wedding Only", cost: "2,30,199"},
        { imgname: "wedding1", title: "Wedding & Reception", cost: "1,40,699" },
    ]
    return (
        <React.Fragment>
            <div className='page3'>
                <h2 className='page3-heading'>Packages</h2>
                <p className='page3-text'>Convenient packages & reliable pricing</p>
                <section className='page3-section'>
                    {cardData.map(data =>
                        <PakageCard
                            key={data.title}
                            // imgname={data.imgname}
                            title={data.title}
                            price={data.cost}
                        />
                    )}
                </section>
            </div>
        </React.Fragment>
    )
}
export default ThirdPage;