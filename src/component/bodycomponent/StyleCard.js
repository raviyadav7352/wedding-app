import Body from './Body';
import './StyleCart.css';
const StyleCard = () => {
    return (
        <Body className="page10 ">
            <div className="card-Body ">
                <div className="imagebox"><img src="images/music2.jpg" alt='flower' /></div>
                <div className="contentBody">
                    <h2>Order Summary</h2>
                    <p>You can now listen to millions of songs,
                        audiobooks, and podcasts on any device anywhere you like!
                    </p>
                    <div className="subscription">
                        <span className="material-symbols-outlined music">
                            album
                        </span>
                        <div className='annual'>
                            <p>Annual Plan</p>
                            <p>$59.99/year</p>
                        </div>
                        <a className='linkmusic' href='#'>Change</a>
                    </div>
                    <div className="buttonBox">
                        <button className='btn1' type='button'>Proceed to Payment</button>
                        <button className='btn2' type='button'>Cancel Order</button>
                    </div>
                </div>
            </div>
        </Body>
    )
}
export default StyleCard;