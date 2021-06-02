import './certificates.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WatchIcon from '@material-ui/icons/Watch';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
// import CoffeeIcon from '@material-ui/icons/Coffee';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import Certificate1 from '../../../assets/javascript-39421.png';
import Certificate2 from '../../../assets/pngfind.com-bootstrap-logo-png-2172134.png';






const Certificates = () => {
    return (
        <>
            <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
                <div className='heading'>
                    <h2 >Certificates</h2>
                    <div id="left_line"></div>
                    <div id="right_line"></div>
                </div>
                <div className='row' style={{ marginLeft: '0%' }}>



                    <div className='columnCert' style={{ justifyContent: 'center', backgroundColor: 'transparent', }}

                    >
                        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '5%', marginTop: '5%' }}>

                            <FavoriteBorderIcon fontSize='large' style={{ color: '#007ced', marginBottom: '7%' }} /><br></br>
                            <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}>Happy Clients</h4>
                            <span className='spanNum'>578</span>

                        </div> */}
                        <div style={{ display: 'flex' }}>
                            <div style={{ width: '20%' , backgroundColor: '#333',
                                padding: '6% 5% 5% 6%',}}>
                                <img width="100%" src={Certificate1} />
                            </div>
                            <div style={{ width: '80%', paddingLeft: '5%',paddingTop:'5%',paddingBottom:'5%' }}>
                                <h4 style={{fontSize:'16px'}}>Psychology Of Internation Design</h4>
                              <br/>  <span>Membership ID: XXXX</span> <br />
                                <span style={{ fontSize: '12px' }}>19th April 2018</span>
                            </div>

                        </div>



                    </div>




                    <div className='columnCert' style={{ justifyContent: 'center', backgroundColor: 'transparent', }}

                    >
                        {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '5%', marginTop: '5%' }}>

                            <FavoriteBorderIcon fontSize='large' style={{ color: '#007ced', marginBottom: '7%' }} /><br></br>
                            <h4 style={{ fontSize: '16px', color: '#f5f5f5' }}>Happy Clients</h4>
                            <span className='spanNum'>578</span>

                        </div> */}
                        <div style={{ display: 'flex' }}>
                            <div 
                            style={{
                                width: '20%',
                                 backgroundColor: '#333',
                                padding: '5% 5% 5% 5%',
                                // paddingBottom: '5%',
                            }}>
                                <img width="100%" src={Certificate2} />
                            </div>
                            <div style={{ width: '80%', paddingLeft: '5%',paddingTop:'5%',paddingBottom:'5%'  }}>
                                <h4 style={{fontSize:'16px'}}>Psychology Of Internation Design</h4>
                               <br/> <span>Membership ID: XXXX</span> <br />
                                <span style={{ fontSize: '12px' }}>19th April 2018</span>
                            </div>

                        </div>



                    </div>


                </div>
            </div>

        </>
    )
}


export default Certificates