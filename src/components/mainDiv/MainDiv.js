import './mainDiv.css'
import NavBar from '../navBar/NavBar'
import Header from '../header/Header'
import WhatIDo from '../whatIDo/WhatIDo'
import Testiomonials from '../Testimonial/Testimonils'
import Clients from '../clients/Clients'
import FunFacts from '../funFacts/FunFacts'
import Footer from '../footer/Footer'


const MainDiv = () => {
    return (
        <div className='mainDiv'>
            <div><NavBar /></div>
            <div><Header/></div>
            <div><WhatIDo/></div>
            <div><Testiomonials/></div>
            <div><Clients/></div>
            <div><FunFacts/></div>
            <div><Footer/></div>
        </div>
    )
}
export default MainDiv