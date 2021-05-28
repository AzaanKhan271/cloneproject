import './App.css'
// import background from './assets/main_bg_14.png'
import MainDiv from './components/mainDiv/MainDiv'
import PersistentDrawerRight from './components/SideBar'



const App = () => {
  return (
    <>
      <div className='sideMarDiv'
        // style={{
        //   display: 'flex',
        //   justifyContent: 'flex-end',
        //   // marginTop: '28%',
        //   position: 'fixed',
        //   width: '100%',
        //   marginTop:'15%'
        // }}
        >
        <div className='sideWidthDiv'
        // style={{
        //   width:'5%',
        //   backgroundColor:'#222',
        //   border:'2px solid #444',
        //   borderRadius:'10px 0px 0px 10px',
        // }}
        >
          <PersistentDrawerRight />
        </div>
      </div>
      <MainDiv />

    </>
  )
}
export default App