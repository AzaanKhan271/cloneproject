import "./whatIDo.css";
import WhatIDoCards from './WhatIDoCards'
import CreateIcon from '@material-ui/icons/Create';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import Grid from '@material-ui/core/Grid';
import CarouselComp from '../Carousel/Carousel'
import Avatar from '@material-ui/core/Avatar';
import ManPic from '../../assets/cesar-rincon-1024x1024.jpg'
import Button from '@material-ui/core/Button';

const WhatIDo = () => {
  return (
    <>
      {/* <div className='whatIDoMainDiv'>
    <Grid container  xs={12} >
    <Grid container item xs={12} >
    <div className='heading'>
      <h2>What I Do</h2>
      <div id="left_line"></div>
      <div id="right_line"></div>
    </div>
    </Grid>
    
    
    <Grid container item xs ={12} direction='row'  >
    <Grid container direction='column'  xs={12} md={6}>
    <div >
<WhatIDoCards 
icon={<CreateIcon fontSize='large' style={{color:'#007ced'}} />}
heading={'Copywrite'}
text={'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'}
/>
<WhatIDoCards 
icon={<StorefrontIcon fontSize='large' style={{color:'#007ced'}}  />}
heading={'Ecommerce'}
text={'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'}
/>
</div>

    
    </Grid>
    </Grid>
    <Grid item xs ={12}>
    <div>
<WhatIDoCards 
icon={<DesktopMacIcon fontSize='large' style={{color:'#007ced'}}   />}
heading={'Web Design'}
text={'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'}
/>
<WhatIDoCards 
icon={<RecordVoiceOverIcon fontSize='large' style={{color:'#007ced'}}  />}
heading={'Marketing'}
text={'Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex.'}
/>
</div>

    
    </Grid>
    </Grid>
    </div>
    <CarouselComp/> */}
      <div style={{marginLeft:'5%',marginRight:'5%',marginTop:'8%' }}>
        <div className='heading'>
          <h2 >What I Do</h2>
        <div> <div id="left_line"></div>
          <div id="right_line"></div></div> 
        </div>
<div style={{marginTop:'5%'}}>
        <Grid
          container



        >
          <Grid item xs={12} md={6}  >
            <Grid
              container


            >
              <Grid item md={1} xs={2}  >
                <CreateIcon fontSize='large' style={{ color: '#007ced' }} />

              </Grid>
              <Grid container xs={10} md={10} >

                <div >
                  <div >
                    <h4 style={{fontSize:'16px'}}>Web Design</h4>
                  </div>

                  <div>
                    <p style={{fontSize:'14px'}} >
                      {/* Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu. */}
                      Highly skilled  UX Designer to help enhance user interactivity, user traffic, and general outlook of the platform.
                        </p>
                  </div>

                </div>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={12} md={6} >
            <Grid
              container


            >
              <Grid item md={1} xs={2}  >
              <StorefrontIcon fontSize='large' style={{color:'#007ced'}}  />

              </Grid>
              <Grid container xs={10} md={10} >

                <div >
                  <div >
                    <h4 style={{fontSize:'16px'}}>Redux Toolkit</h4>
                  </div>

                  <div>
                    <p style={{fontSize:'14px'}}>
                      {/* Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu. */}
                      Can work on Redux Toolkit to manage states and data using reducers,useSelector , useDispatch, action, payload and etc.
                        </p>
                  </div>

                </div>
              </Grid>
            </Grid>

          </Grid>
        </Grid>


        <Grid
          container



        >
          <Grid item xs={12} md={6}  >
            <Grid
              container


            >
              <Grid item md={1} xs={2}  >
              <DesktopMacIcon fontSize='large' style={{color:'#007ced'}}   />

              </Grid>
              <Grid container xs={10} md={10} >

                <div >
                  <div >
                    <h4 style={{fontSize:'16px'}}>API Integration</h4>
                  </div>

                  <div>
                    <p style={{fontSize:'14px'}} >
                      {/* Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu. */}
                     Can Integrate APIs using Axios and fetch and other methods, to get or post data to the database. 
                        </p>
                  </div>

                </div>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={12} md={6} >
            <Grid
              container


            >
              <Grid item md={1} xs={2}  >
              <RecordVoiceOverIcon fontSize='large' style={{color:'#007ced'}}  />

              </Grid>
              <Grid container xs={10} md={10} >

                <div >
                  <div >
                    <h4 style={{fontSize:'16px'}}>WebSockets</h4>
                  </div>

                  <div>
                    <p style={{fontSize:'14px'}}>
                     can create and work on websockets which are very useful in chatbots  and others things
                        </p>
                  </div>

                </div>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
        </div>

      </div>


    </>

  );
};

export default WhatIDo;
