import './mainDiv.css'
import NavBar from '../navBar/NavBar'
import Header from '../header/Header'
import WhatIDo from '../whatIDo/WhatIDo'


const MainDiv = () => {
    return (
        <div className='mainDiv'>
            <div><NavBar /></div>
            <div><Header/></div>
            <div><WhatIDo/></div>
        </div>
    )
}
export default MainDiv