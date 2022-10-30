import './Body.css'
const Body= (props) => {
    let classes ="page " + props.className
    return (
        <div className={classes}>
             {props.children}
        </div>
    )
}
export default Body;