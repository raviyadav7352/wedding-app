import './Page3Card2.css'
const Page3Card2 = (props) => {
    return(
        <div className='poster-body'>
            <div className='poster-one poster'>
                <p className='poster-head p-head-1'>Decor</p>
                <img className=' poster-image' src='images/wedding4.jpg' alt='wedding1'/>
            </div>
            <div className='poster-two poster'>
                <p className='poster-head p-head-2'>Venue</p>
                <img className='poster-image' src='images/wedding3.jpg' alt='wedding2'/>
            </div>
            <div className='poster-three poster'>
                <p className='poster-head p-head-3'>Makup</p>
                <img className='poster-image' src='images/wedding2.jpg' alt='wedding3'/>
            </div>
        </div>
        
    )
}
export default Page3Card2;