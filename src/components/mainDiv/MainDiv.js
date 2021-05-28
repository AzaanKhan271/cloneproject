import './mainDiv.css'
import NavBar from '../navBar/NavBar'
import Header from '../header/Header'
import WhatIDo from '../whatIDo/WhatIDo'
import Testiomonials from '../Testimonial/Testimonils'
import Clients from '../clients/Clients'
import FunFacts from '../funFacts/FunFacts'
import Footer from '../footer/Footer'
import PersistentDrawerRight from '../SideBar'


const MainDiv = () => {
    return (<>
           {/* <div> <PersistentDrawerRight/></div> */}
        <div className='mainDiv'>
            <div><NavBar /></div>
            <div><Header/></div>
            <div><WhatIDo/></div>
            <div><Testiomonials/></div>
            <div><Clients/></div>
            <div><FunFacts/></div>
            <Footer/>
        </div>
        </>
    )
}
export default MainDiv