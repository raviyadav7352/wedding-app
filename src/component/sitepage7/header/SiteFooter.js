import './SiteFooter.css';
const SiteFooter =(props)=>{
    return(
        <div className='footer-body'>
            <div className='footer-head'>
                <div className='site-logo'>
                    <img src="images/mariage-logo.png"  height="40px" alt=""/>
                    <span>Mangalam</span>
                </div>
                <ul className='footer-list'>
                    <li><a href='@'>Home</a></li>
                    <li><a href='@' >Privacy Policy</a></li>
                    <li><a href='@'>Terms & Conditions</a></li>
                </ul>
            </div>
            <div className='copyright'>
                <p>Copyright © 2021 Mangalam . All Rights Reseved.</p>
                <p>Contact us: +91 7329492343 | contact@Mangalam.com</p>
            </div>
            <div className='footer-foot'>
                <ul className='footer-foot-link'>
                    <li><a href='@'>CONTACT@MANGALAM.COM | +91 7345835354</a></li>
                    <li>NGEF Lane, 2nd Floor, Suite No.1146 Indiranagar, tambaram, Chennai, India 603-210</li>
                </ul>
            </div>
        </div>
    )
}
export default SiteFooter;