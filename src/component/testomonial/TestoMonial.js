import Body from '../bodycomponent/Body'
import DecorCard from '../designnav/DecorCard'
import './TestoMonial.css'
const TestoMonial =(props)=>{
    let cardData = [
        { imgname: "wedding1", title: "Decoration", text: "Professionally desigprices" },
        { imgname: "wedding2", title: "Photography", text: "Expert candid a starting at 22k" },
        { imgname: "wedding3", title: "Videography", text: "High qualit starting at just 20k" },
        { imgname: "wedding4", title: "Makeup & hairstyling", text: "who ensure you look best" },
        { imgname: "wedding1", title: "Mehndi", text: "Experience range of designs  " },
        { imgname: "wedding2", title: "Catering", text: "Delicious menus cove ranges" },
    ]
    return(
        <Body className="decorpage">        
            <div className='decor-body'>
            <h1 className='decor-heading testo'>Krishan and vidhusi</h1>
            <div className='decor-images'>
            <section className='page8-section'>
                {cardData.map(data =>
                    <DecorCard
                        key={Math.random(12)}
                        imgdata={data.imgname}
                    />
                )}
                <div className='testo-venue'>
                    <p className='venue detail'>Venue<span>Taj Westened, Bangalore</span></p>
                    <p className='date detail'>Date:<span>8-sept-2021</span></p>
                    <p className='styles detail'>Style:<span>Contemporary Pastel Theme</span></p>
                    <p className='events detail'>Events:<span>Wedding</span></p>
                </div>
                <p className='log-text'>The outdoor space at Taj West End became the perfect spot amidst the greenery for a pastel themed Mandap. White,Peach and Pink roses with Chiffon white fabric evoked light into the space. A matching entrance arch with wooden beams and foliage along with subtle Harry potter references in the decor embraced the couple’s dream into reality.</p>
            </section>
            <div className='start-testo'>
            <i class="material-symbols-rounded">star_rate</i>
            <i class="material-symbols-rounded">star_rate</i>
            <i class="material-symbols-rounded">star_rate</i>
            <i class="material-symbols-rounded">star_rate</i>
            <i class="material-symbols-rounded">star_rate</i>
            </div>
            </div>
        </div>
        </Body>

    )
}
export default TestoMonial;