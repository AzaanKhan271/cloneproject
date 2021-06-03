import './reshead.css'






const ResHead = (props) => {
    return(
        <>

<div className='resHeadMain'>
    <div className='resExp'><h4>{props.experience}</h4></div>
    <h1>{props.heading}</h1>
</div>
        </>
    )
}
export default ResHead