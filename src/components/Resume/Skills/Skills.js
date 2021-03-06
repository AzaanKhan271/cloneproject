import './skills.css'






const Skills = () => {
    return (
        <>
            <div className='row'>



                <div className='column'
                    style={{ flexDirection: 'column', border: 'none', backgroundColor: 'transparent' }}
                >

                    <div className='heading'>
                        <h2 >Design Skills</h2>
                        <div id="left_line"></div>
                        <div
                         
                         id="right_line"></div>
                    </div>
                    <br />
                    <div className='skillsSubHead'>
                        <h4>UI/UX Design</h4> <div className="skillValue">80%</div>

                    </div>
                    <div style={{ border: '2px solid #444', borderRadius: '10px', padding: '1px' }}>
                        <div style={{ backgroundColor: '#007ced', width: "80%", height: '4px', padding: '1px' }}><p style={{ display: 'none' }}>-----------------------------------------</p></div>
                    </div>
                    <br/>
                    <div className='skillsSubHead'>
                        <h4>CSS3 Design</h4> <div className="skillValue">90%</div>

                    </div>
                    <div style={{ border: '2px solid #444', borderRadius: '10px', padding: '1px' }}>
                        <div style={{ backgroundColor: '#007ced', width: "90%", height: '4px', padding: '1px' }}><p style={{ display: 'none' }}>-----------------------------------------</p></div>
                    </div>
                    <br/>
                    <div className='skillsSubHead'>
                        <h4>Graphic Design</h4> <div className="skillValue">60%</div>

                    </div>
                    <div style={{ border: '2px solid #444', borderRadius: '10px', padding: '1px' }}>
                        <div style={{ backgroundColor: '#007ced', width: "60%", height: '4px', padding: '1px' }}><p style={{ display: 'none' }}>-----------------------------------------</p></div>
                    </div>
                    <br/>
                    <div className='skillsSubHead'>
                        <h4>Logo Design</h4> <div className="skillValue">70%</div>

                    </div>
                    <div style={{ border: '2px solid #444', borderRadius: '10px', padding: '1px' }}>
                        <div style={{ backgroundColor: '#007ced', width: "70%", height: '4px', padding: '1px' }}><p style={{ display: 'none' }}>-----------------------------------------</p></div>
                    </div>


                </div>



                <div className='column'
                    style={{ flexDirection: 'column', border: 'none', backgroundColor: 'transparent' }}
                >

                    <div className='heading'>
                        <h2 >Coding Skills</h2>
                        <div id="left_line"></div>
                        <div 
                        // style={{left:"57%"}} 
                        id="right_line"></div>
                    </div>
                    <br />
                    <div className='skillsSubHead'>
                        <h4>HTML/CSS</h4> <div className="skillValue">100%</div>

                    </div>
                    <div style={{ border: '2px solid #444', borderRadius: '10px', padding: '1px' }}>
                        <div style={{ backgroundColor: '#007ced', width: "100%", height: '4px', padding: '1px' }}><p style={{ display: 'none' }}>-----------------------------------------</p></div>
                    </div>
                    <br/>
                    <div className='skillsSubHead'>
                        <h4>ReactJS/React Native</h4> <div className="skillValue">90%</div>

                    </div>
                    <div style={{ border: '2px solid #444', borderRadius: '10px', padding: '1px' }}>
                        <div style={{ backgroundColor: '#007ced', width: "90%", height: '4px', padding: '1px' }}><p style={{ display: 'none' }}>-----------------------------------------</p></div>
                    </div>
                    <br/>
                    <div className='skillsSubHead'>
                        <h4>JavaScript</h4> <div className="skillValue">90%</div>

                    </div>
                    <div style={{ border: '2px solid #444', borderRadius: '10px', padding: '1px' }}>
                        <div style={{ backgroundColor: '#007ced', width: "90%", height: '4px', padding: '1px' }}><p style={{ display: 'none' }}>-----------------------------------------</p></div>
                    </div>
                    <br/>
                    <div className='skillsSubHead'>
                        <h4>Redux</h4> <div className="skillValue">80%</div>

                    </div>
                    <div style={{ border: '2px solid #444', borderRadius: '10px', padding: '1px' }}>
                        <div style={{ backgroundColor: '#007ced', width: "80%", height: '4px', padding: '1px' }}><p style={{ display: 'none' }}>-----------------------------------------</p></div>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Skills