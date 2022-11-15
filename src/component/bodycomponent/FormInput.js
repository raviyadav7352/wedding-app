
import './FormInput.css'
const FormInput = (props) => {
    return (
        <div className={props.className}>
            <form className='row border-0 forminput'>
                <div className='col-sm-6 mb-2'>
                    <input className='form-control p-2 ps-3 rounded-5  border-0 entry' type='text' placeholder='FullName' />
                </div>
                <div className='col-sm-6 mb-2'>
                    <input className='form-control p-2 rounded-5 border-0  ps-3 entry' type='text' placeholder='Phone Number' />
                </div>
                <div className='col-sm-12 mt-2 mb-2 inputselect'>
                    <select className="form-select border-0 ps-3 p-2 rounded-5 mt-2 entry" aria-label="Default select example">
                        <option >Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </form>
            <div className='stline'></div>
            <input className=' btn btn-danger  entrybtn' value='Get Instant Quote' type='submit' placeholder='First Name' />
        </div>
    )
}
export default FormInput;