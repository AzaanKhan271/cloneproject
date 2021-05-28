import './funFacts.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WatchIcon from '@material-ui/icons/Watch';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
// import CoffeeIcon from '@material-ui/icons/Coffee';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';






const FunFacts = () => {
    return (
        <>
            <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
                <div className='heading'>
                    <h2 >Fun Facts</h2>
                    <div id="left_line"></div>
                    <div id="right_line"></div>
                </div>
                <div className='row' style={{marginLeft:'0%'}}>



                    <div className='columnFacts' style={{ justifyContent: 'center' }}

                    >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom:'5%' ,marginTop:'5%' }}>

                            <FavoriteBorderIcon fontSize='large' style={{ color: '#007ced', marginBottom: '7%' }} /><br></br>
                            <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}>Happy Clients</h4>
                            <span className='spanNum'>578</span>

                        </div>



                    </div>



                    <div className='columnFacts' style={{ justifyContent: 'center' }}

                        >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom:'5%' ,marginTop:'5%' }}>
                            <WatchIcon fontSize='large' style={{ color: '#007ced', marginBottom: '7%' }} /><br></br>
                            <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}>Working Hours</h4>
                            <span className='spanNum'>4708</span>


                        </div>

                           </div>
<div className='columnFacts' style={{ justifyContent: 'center' }}

                        >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom:'5%' ,marginTop:'5%'}}>
                            <StarOutlineIcon fontSize='large' style={{ color: '#007ced', marginBottom: '7%' }} /><br></br>
                            <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}>Awards Won</h4>
                            <span className='spanNum'>15</span>
                        </div>


</div>



<div className='columnFacts' style={{ justifyContent: 'center' }}

                        >
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',marginBottom:'5%' ,marginTop:'5%' }}>


                            <LocalCafeIcon fontSize='large' style={{ color: '#007ced', marginBottom: '7%' }} /><br></br>
                            <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}>Coffee Consumed</h4>
                            <span className='spanNum'>1286</span>

                        </div>


</div>

</div>
</div>
        
        </>
    )
}


export default FunFacts