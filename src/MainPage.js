import './App.css'
import MainDiv from './components/mainDiv/MainDiv'
import PersistentDrawerRight from './components/SideBar'



const MainPage = () => {
 

  return (
    <>
      <div className='sideMarDiv'

      >
        <div className='sideWidthDiv'

        >
          <PersistentDrawerRight />
        </div>
      </div>

      <MainDiv />


    </>
  )
}
export default MainPage