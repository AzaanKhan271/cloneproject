import Carousel from 'react-bootstrap/Carousel'
import ManPic from '../../assets/cesar-rincon-1024x1024.jpg'
import './testimonial.css'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Man1 from '../../assets/testimonial-1.jpg'
import Man2 from '../../assets/testimonial-2.jpg'
import Man3 from '../../assets/testimonial-3.jpg'






const Testiomonials = () => {
    return (
        <>
            <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
                <div className='heading'>
                    <h2 >Testiomonials</h2>
                    <div id="left_line"></div>
                    <div id="right_line"></div>
                </div>




                <Carousel slide={false} controls={false} fade interval={null} >


                    <Carousel.Item>

                        <div className='row'>



                            <div className='column'

                            >

                                <Avatar fontSize='large' style={{ transform: 'translate(-50%,-35%)', width: '80px', height: '80px' }} src={Man1}>
                                </Avatar>

                                <div style={{ marginLeft: '-5%', marginTop: '5%', marginRight: '6%' }}> <p><i>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</i></p>
                                    <h5 style={{fontSize:'0.9em',fontWeight:'700'}}>Daniel Pringle</h5>
                                    <p style={{fontSize:'0.8em',marginTop:'-5px',color:'#bbb'}}>Sagebrush</p>
                                </div>

                            </div>



                            <div className='column'

                            >

                                <Avatar fontSize='large' style={{ transform: 'translate(-50%,-35%)', width: '80px', height: '80px' }} src={Man2}>
                                </Avatar>

                                <div style={{ marginLeft: '-5%', marginTop: '5%', marginRight: '6%' }}> <p><i>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</i></p>
                                    <h5 style={{fontSize:'0.9em',fontWeight:'700'}}>Daniel Pringle</h5>
                                    <p style={{fontSize:'0.8em',marginTop:'-5px',color:'#bbb'}}>Sagebrush</p>
                                </div>

                            </div>

                        </div>




                    </Carousel.Item>

                    <Carousel.Item>

                        <div className='row'>



                            <div className='column'

                            >

                                <Avatar fontSize='large' style={{ transform: 'translate(-50%,-35%)', width: '80px', height: '80px' }} src={Man3}>
                                </Avatar>

                                <div style={{ marginLeft: '-5%', marginTop: '5%', marginRight: '6%' }}> <p><i>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</i></p>
                                    <h5 style={{fontSize:'0.9em',fontWeight:'700'}}>Daniel Pringle</h5>
                                    <p style={{fontSize:'0.8em',marginTop:'-5px',color:'#bbb'}}>Sagebrush</p>
                                </div>

                            </div>



                            <div className='column'

                            >

                                <Avatar fontSize='large' style={{ transform: 'translate(-50%,-35%)', width: '80px', height: '80px' }} src={Man1}>
                                </Avatar>

                                <div style={{ marginLeft: '-5%', marginTop: '5%', marginRight: '6%' }}> <p><i>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</i></p>
                                    <h5 style={{fontSize:'0.9em',fontWeight:'700'}}>Daniel Pringle</h5>
                                    <p style={{fontSize:'0.8em',marginTop:'-5px',color:'#bbb'}}>Sagebrush</p>
                                </div>

                            </div>

                        </div>




                    </Carousel.Item>

                </Carousel>
            </div>
        </>
    )
}
export default Testiomonials