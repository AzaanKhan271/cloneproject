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
            <footer className='footer'>
            <div className='rowFoot'>



                <div className='columnFoot'
style={{display:'flex',justifyContent:'flex-start'}}
                >
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



                <div className='columnFoot'
style={{display:'flex',justifyContent:'flex-end',marginRight:'5%'}}
                >
                    <p className='footerPSec'>© 2021 All rights reserved. LMPixels.</p>


                </div>

            </div>
            </footer>
        </>
    )
}


export default Footer