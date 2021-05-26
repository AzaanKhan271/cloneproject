import Carousel from 'react-bootstrap/Carousel'
import ManPic from '../../assets/cesar-rincon-1024x1024.jpg'
import './testimonial.css'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';





const Testiomonials = () => {
    return (
        <>
            <div style={{ marginLeft: '5%', marginRight: '5%', marginTop: '3%' }}>
                <div className='heading'>
                    <h2 >Testiomonials</h2>
                    <div id="left_line"></div>
                    <div id="right_line"></div>
                </div>
                
                {/* <Carousel defaultActiveIndex='2' nextIcon="" nextLabel="" prevIcon="" prevLabel="" slide='false' interval={null}>
                   
                
                     <Carousel.Item>
                        
                        <div style={{ display: 'flex', }}>

                        

                            <div className='mediaQuery'
                                style={{
                                    backgroundColor: "#282828", border: ' 2px solid', borderColor: '#444', borderRadius: '8px',
                                    maxWidth: '50%', marginLeft: '6%',
                                }}
                            >
                                
                                <Avatar fontSize='large' style={{ transform: 'translate(-50%,-35%)', width: '80px', height: '80px' }} src={ManPic}>
                                </Avatar>

                                <div > <p>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</p>
                                </div>
                                
                            </div>
                            
                            
                            
                            <div className='mediaQuery'
                                style={{
                                    backgroundColor: "#282828", border: ' 2px solid', borderColor: '#444', borderRadius: '8px',
                                    maxWidth: '50%', marginLeft: '6%',
                                }}
                            >
                                <div > <p>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</p>
                                </div>
                            </div>

                        </div>
                        
                        


                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />


                    </Carousel.Item>

                </Carousel> */}



                <Carousel  nextIcon="" nextLabel="" prevIcon="" prevLabel="" slide='false' interval={null} >
                   
                
                   <Carousel.Item>
                      
                      <div className='row'>

                      

                          <div className='column'
                            //   style={{
                            //       backgroundColor: "#282828", border: ' 2px solid', borderColor: '#444', borderRadius: '8px',
                            //       maxWidth: '50%', marginLeft: '6%',
                            //   }}
                          >
                              
                              <Avatar fontSize='large' style={{ transform: 'translate(-50%,-35%)', width: '80px', height: '80px' }} src={ManPic}>
                              </Avatar>

                              <div style={{marginLeft:'12%' ,marginTop:'-15%'}}> <p>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</p>
                             <h5>Daniel Pringle</h5>
                             <p>Sagebrush</p>
                              </div>
                              
                          </div>
                          
                          
                          
                          <div className='column'
                            //   style={{
                            //       backgroundColor: "#282828", border: ' 2px solid', borderColor: '#444', borderRadius: '8px',
                            //       maxWidth: '50%', marginLeft: '6%',
                            //   }}
                          >
                              <Avatar fontSize='large' style={{ transform: 'translate(-50%,-35%)', width: '80px', height: '80px' }} src={ManPic}>
                              </Avatar>
                              <div > <p>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</p>
                              </div>
                          </div>

                      </div>
                      
                      


                  </Carousel.Item>
                  
                  <Carousel.Item>
                      
                      <div className='row'>

                      

                          <div className='column'
                            //   style={{
                            //       backgroundColor: "#282828", border: ' 2px solid', borderColor: '#444', borderRadius: '8px',
                            //       maxWidth: '50%', marginLeft: '6%',
                            //   }}
                          >
                              
                              <Avatar fontSize='large' style={{ transform: 'translate(-50%,-35%)', width: '80px', height: '80px' }} src={ManPic}>
                              </Avatar>

                              <div > <p>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</p>
                              </div>
                              
                          </div>
                          
                          
                          
                          <div className='column'
                            //   style={{
                            //       backgroundColor: "#282828", border: ' 2px solid', borderColor: '#444', borderRadius: '8px',
                            //       maxWidth: '50%', marginLeft: '6%',
                            //   }}
                          >
                              <Avatar fontSize='large' style={{ transform: 'translate(-50%,-35%)', width: '80px', height: '80px' }} src={ManPic}>
                              </Avatar>
                              <div > <p>Etiam pretium ipsum quis justo dictum accumsan. Phasellus egestas odio a velit scelerisque.</p>
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