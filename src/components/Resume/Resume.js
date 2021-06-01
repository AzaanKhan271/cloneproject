import PersistentDrawerRight from '../SideBar'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'
import ResHead from './ResHead/ResHead'
import ExperEdc from './ExperEdc/ExperEdc'




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
            <div><ResHead/></div>
            <div><ExperEdc/></div>
            {/* <div><Testiomonials/></div> */}
            {/* <div><Clients/></div> */}
            {/* <div><FunFacts/></div> */}
            <Footer/>
        </div>
        </>
    )
}


export default Resume