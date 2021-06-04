import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import TextField from '@material-ui/core/TextField'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import MailIcon from '@material-ui/icons/Mail';






const ContactDetails = () => {

    return (
        <>
            <div className='iframeDiv'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28961.222397608126!2d67.04080597646708!3d24.858630358107515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33dc83cca1cc5%3A0xad23a497652edcae!2sTilism%20Technologies%20(Pvt.)%20Ltd!5e0!3m2!1sen!2s!4v1622783566898!5m2!1sen!2s" width="1200" height="150" style={{ border: '0' }} allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className='row' style={{alignItems:'flex-start'}}>



                <div className='columnCont'
                // style={{ width: '25%' }}
                >
                    <div>
                        <div
                            style={{ display: 'flex' }}
                        >
                            <div
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <PhoneIphoneIcon fontSize='large' style={{ color: '#007ced' }} />

                            </div>
                            <div
                                style={{ paddingLeft: '5%' }}
                            >
                                <div >
                                    <h4 style={{ fontSize: '16px' }}>0315-2612485</h4><br/><br/><br/>
                                </div>

                                <div>
                                    {/* <p style={{ fontSize: '14px' }} >
                                        Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
                        </p> */}
                                </div>
                            </div>

                        </div>

                        <div
                            style={{ display: 'flex' }}
                        >
                            <div
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <LocationOnIcon fontSize='large' style={{ color: '#007ced' }} />

                            </div>
                            <div
                                style={{ paddingLeft: '5%' }}
                            >
                                <div >
                                    <h4 style={{ fontSize: '16px' }}>Karachi</h4>
                                </div>

                                <div>
                                    <p style={{ fontSize: '14px' }} >
                                        5/483 Zafar Complex Model Colony Malir Karachi 
                        </p>
                                </div>
                            </div>

                        </div>

                        <div
                            style={{ display: 'flex' }}
                        >
                            <div
                                style={{ display: 'flex', justifyContent: 'center' }}
                            >
                                <MailIcon fontSize='large' style={{ color: '#007ced' }} />

                            </div>
                            <div
                                style={{ paddingLeft: '5%' }}
                            >
                                <div >
                                    <h4 style={{ fontSize: '16px' }}>azaankhan271@gmail.com</h4>
                                </div>

                                <div>
                                    <p style={{ fontSize: '14px' }} >
                                        Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
                        </p>
                                </div>
                            </div>

                        </div>


                    </div>
                </div>



                <div className='columnCont'
                // style={{ width: '25%' }}

                >
                    <div  style={{marginBottom:'10%'}} className='heading'>
                    <h2 >How Can I Help You</h2>
                    <div id="left_line"></div>
                    <div style={{left:"40%",marginBottom:'5%'}} id="right_line"></div>
                </div>
                    <div
                        style={{ width: '100%' }}
                    >
                        <input required type='text' className='inputCont' placeholder='Full Name' /> <br /><br />
                        <input type='text' className='inputCont' placeholder='Full Name' /> <br /><br />
                        <input type='text' className='inputCont' placeholder='Full Name' />

                    </div>

                </div>

                <div className='columnCont'
                // style={{ width: '25%' }}

                >
<textarea style={{height:"100%"}} name="message" className="inputCont" placeholder="Message" rows="7" required="required" dataError="Please, leave me a message."></textarea>

                </div>
                

            </div>
            <div
            style={{display:'flex',justifyContent:'center',alignItems:'center'}}
            ><button className='contactButton'>Send Message</button></div>

        </>
    )
}
export default ContactDetails