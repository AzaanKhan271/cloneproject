import './footer.css'





const Footer = () => {
    return (
        <>
            {/* <footer className='footer'>
                <div className='footMain'>
                    <div className='footPri'>
                        <a className='anch'>
                            <p className='footerP'>
                                Twitter
                            </p>
                        </a>
                        <a className='anch'>
                            <p className='footerP'>
                                Instagram
                            </p>
                        </a>
                        <a className='anch'>
                            <p className='footerP'>
                                Facebook
                            </p>
                        </a>
                    </div>

                    <div className='footerSecDiv'>
<p  className='footerPSec'>© 2021 All rights reserved. LMPixels.</p>
                    </div>
                </div>
            </footer> */}
            {/* <footer className='footer'> */}
            <div
             className='row'
             style={{backgroundColor:'#252525',marginLeft:'0%',marginRight:'0%',marginTop:'5%',borderRadius:'0px 0px 40px 40px'
            ,borderTop:'2px Solid #333 '}}
             >



                <div className='column columnMedia'
style={{marginRight:'0%',marginTop:'2%',marginBottom:'2%',marginLeft:'0%',backgroundColor:'transparent',justifyContent:'flex-start'
,alignItems:'center',border:'none'}}
                >
                    <a
                    //  className='anch'
                    href='https://www.twitter.com' target='_blank'
                     >
                        <p
                        className='footerP'
                        >
                            Twitter
                            </p>
                    </a>
                    <a 
                    className='anch'
                    href='https://www.instagram.com' target='_blank'
                    >
                        <p 
                        className='footerP'
                        >
                            Instagram
                            </p>
                    </a>
                    <a 
                    className='anch'
                    href='https://www.facebook.com' target='_blank'
                    >
                        <p 
                        className='footerP'
                        >
                            Facebook
                            </p>
                    </a>


                </div>



                <div className='column columnMedia'
style={{marginRight:'0%',marginTop:'2%',marginBottom:'2%',marginLeft:'0%',backgroundColor:'transparent',justifyContent:'flex-end'
,alignItems:'center',border:'none'}}

                >
                    <p 
                    className='footerP'
                    >© 2021 All rights reserved. LMPixels.</p>


                </div>

            </div>
            {/* </footer> */}
        </>
    )
}


export default Footer