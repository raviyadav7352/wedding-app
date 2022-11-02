import { ProgressStep } from 'react-rainbow-components';
import './ModalPage.css'
const ModalPage = (props) => {
    let classes = "modal__body " + ProgressStep.className; 
    return(
        <div className={classes}>
            <header className='modal__header'>
            <img src='icons/close.png' className='closemodal'/>
            </header>
            <section className='modal__section'>
                
            </section>
            <footer className='modal__footer'>
                <button type='button'>Save</button>
            </footer>
        </div>
    )
}
export default ModalPage;