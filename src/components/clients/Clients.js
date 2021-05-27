import './clients.css'
import Carousel from 'react-bootstrap/Carousel'
import ManPic from '../../assets/cesar-rincon-1024x1024.jpg'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Client1 from '../../assets/goldengrid.png'
import Client2 from '../../assets/designlovers.png'
import Client3 from '../../assets/lifeguard.png'
import Client4 from '../../assets/Magic-Furnitures-1.png'
import Client5 from '../../assets/sweety.png'
import Client6 from '../../assets/client-2.png'
import Client7 from '../../assets/client-7.png'









const Clients = () => {
    return (
        <>
            <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
                <div className='heading'>
                    <h2 >Clients</h2>
                    <div id="left_line"></div>
                    <div id="right_line"></div>
                </div>
                <Carousel controls={false}  slide={false} fade interval={null} >


                    <Carousel.Item>

                        <div className='rowClient'>



                            <div className='columnClient'

                            >
                                <img className='clientImg' src={Client1}  />


                            </div>



                            <div className='columnClient'

                            >
                                <img className='clientImg' src={Client2}  />


                            </div>
                            <div className='columnClient'

                            >

                                <img className='clientImg' src={Client3}  />

                            </div>
                            <div className='columnClient'

                            >

                                <img className='clientImg' src={Client4}  />

                            </div>
                            <div className='columnClient'

                            >

                                <img className='clientImg' src={Client5}  />

                            </div>
                            <div className='columnClient'

                            >

                                <img className='clientImg' src={Client6}  />

                            </div>

                        </div>




                    </Carousel.Item>

                    <Carousel.Item>

                        <div className='rowClient'>



                            <div className='columnClient'

                            >
                                <img className='clientImg' src={Client2}  />


                            </div>



                            <div className='columnClient'

                            >
                                <img className='clientImg' src={Client3}  />


                            </div>
                            <div className='columnClient'

                            >

                                <img className='clientImg' src={Client4} className='clientImg'  />

                            </div>
                            <div className='columnClient'

                            >

                                <img className='clientImg' src={Client5}  />

                            </div>
                            <div className='columnClient'

                            >

                                <img className='clientImg' src={Client6}  />

                            </div>
                            <div className='columnClient'

                            >

                                <img className='clientImg' src={Client7}  />

                            </div>

                        </div>



                    </Carousel.Item>

                </Carousel>
            </div>
        </>
    )
}

export default Clients