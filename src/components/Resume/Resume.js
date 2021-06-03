import PersistentDrawerRight from '../SideBar'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'
import ResHead from './ResHead/ResHead'
import ExperEdc from './ExperEdc/ExperEdc'
import Certificates from './Certificates/Certificates'
import Skills from './Skills/Skills'




const Resume = () => {
    return (
        <>
            <div className='sideMarDiv'>
                <div className='sideWidthDiv'>
                    <PersistentDrawerRight />
                </div>
            </div>
            <div className='mainDiv'>
            <div><NavBar /></div>
            <div><ResHead experience='8 Years Of Experience' heading='Resume'/></div>
            <div><ExperEdc/></div>
            <div><Certificates/></div>
            <div><Skills/></div>
            {/* <div><FunFacts/></div> */}
            <Footer/>
        </div>
        </>
    )
}


export default Resume