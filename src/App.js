import './App.css'
// import background from './assets/main_bg_14.png'
import MainDiv from './components/mainDiv/MainDiv'
import PersistentDrawerRight from './components/SideBar'



const App = () => {
  // $('#trans').mousemove(function(e){
  //   var moveX = (e.pageX * -1 / 15);
  //   var moveY = (e.pageY * -1 / 15);
  //   $(this).css('background-position', moveX + 'px ' + moveY + 'px')
  // })
  
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
      
<section></section>
    </>
  )
}
export default App