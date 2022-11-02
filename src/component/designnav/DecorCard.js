import './DecorCard.css'
const DecorCard=(props)=>{
    return(
        <div className='decor-image-box'>
            <img className='decor-img' src={`images/${props.imgdata}.jpg`}/>
            <h3 className='decor-title'>{props.title}</h3>
            <p className='decor-text'>{props.text}</p>
        </div>
    )
}
export default DecorCard;