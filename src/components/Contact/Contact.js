import PersistentDrawerRight from '../SideBar'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'
import ResHead from '../Resume/ResHead/ResHead'
import ContactDetails from './ContactDetails'
import './contact.css'




const Contact = () => {
    return(
        <>

<div className='sideMarDiv'>
                <div className='sideWidthDiv'>
                    <PersistentDrawerRight />
                </div>
            </div>
            <div className='mainDiv'>
            <div><NavBar /></div>
            <div><ResHead experience='Get In Touch' heading='Contact'/></div>
            <div><ContactDetails/></div>
            <Footer/>
        </div>

        </>
    )
}


export default Contact