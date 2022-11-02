import './WorkStepCard.css'
const WorkStepCard =(props)=>{
    return(
        <div className={`step-card ${props.class}`}>
            <img src={`images/${props.logo}.jpg`} alt='step logo'/>
            <p className='step-card-head'>{props.title}</p>
            <p className='step-card-text'>{props.text}</p>
        </div>
    )
}
export default WorkStepCard;