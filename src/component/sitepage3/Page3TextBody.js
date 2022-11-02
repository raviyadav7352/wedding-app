
import './Page3TextBody.css';

const Page3TextBody = (props) => {
    return (

        <div className='page3-text-box'>
            <div className='page3-bold-text'>
                <b className='bold1'>{props.colorhead}</b>
                <b className='bold2'>{props.blackhead}</b>
            </div>
            <div className='page3-content'>
                <span className='logo-text-page3'>
                    <span className="material-symbols-rounded">qr_code</span>
                </span>
                <span className='page3-content-text'>{props.text}</span>
            </div>
        </div>

    )
}
export default Page3TextBody;