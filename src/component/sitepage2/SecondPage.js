import Body from '../bodycomponent/Body';
import FormInput from '../bodycomponent/FormInput';
import DesignCard from './DesignCard';
import './SecondPage.css'
const SecondPage = (props) => {
    return (
        <Body className='page2nd'>
            <section className='page2-content'>
                <img src='images/flower6.jpg' />
                <div className='page2-texts'>
                    <h2 className='page2-heading'>speak to your certified wedding planner today</h2>
                    <p className='page2-text'>Online package starting at just 35k & certified planner
                        <br />at <b>no extra cost</b>
                    </p>
                </div>
                <FormInput className='form-input'></FormInput>
                <DesignCard 
                className='design__card'
                imgname="wedding3"
                imagelogo="wedding2"
                titlename="wedding package traditional"
                textsale ="for sale"
                price="78,000.00"></DesignCard>
            </section>
        </Body>
    )
}
export default SecondPage;