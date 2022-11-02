import Body from '../bodycomponent/Body'
import DecorCard from './DecorCard'
import './DecorDesign.css'
const DecorDesign =(props)=>{
    let cardData = [
        { imgname: "wedding1", title: "Decoration", text: "Professionally desigprices" },
        { imgname: "wedding2", title: "Photography", text: "Expert candid a starting at 22k" },
        { imgname: "wedding3", title: "Videography", text: "High qualit starting at just 20k" },
        { imgname: "wedding4", title: "Makeup & hairstyling", text: "who ensure you look best" },
        { imgname: "wedding1", title: "Mehndi", text: "Experience range of designs  " },
        { imgname: "wedding2", title: "Catering", text: "Delicious menus cove ranges" },
        { imgname: "wedding3", title: "Entertainment", text: "From have high quality artists" },
        { imgname: "wedding1", title: "Venue", text: "We help you find  your budget " },
        { imgname: "wedding1", title: "Invites", text: "Invite designs that " },
    ]
    return(
        <Body className="decorpage">        
            <div className='decor-body'>
            <h1 className='decor-heading'>SmartDecor Designs</h1>
            <div className='decor-images'>
            <section className='page8-section'>
                {cardData.map(data =>
                    <DecorCard
                        key={Math.random(12)}
                        imgdata={data.imgname}
                        title={data.title}
                        text={data.text}
                    />
                )}
            </section>
            <footer className='decor-footer'>ONTACT@MERAGI.COM | +91 7204663348 #39, NGEF Lane, 2nd Floor, Suite No.1146 Indiranagar, Bangalore, Karnataka, India 560 038</footer>
            </div>
        </div>
        </Body>

    )
}
export default DecorDesign;