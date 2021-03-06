import './header.css'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ManPic from '../../assets/azaan1.jpeg'
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <>
            
            <Grid
                container
                // direction="row"
                justify="center"
                alignItems="center"
className='headerParent'
            >
                <Grid className='header1' item xs={12} md={6}  >
                   <Avatar className='bigAvatar' 
                   src={ManPic} 
                //    style={{backgroundPosition: 'calc(50% + 3.13223px) calc(50% + 6.98355px)'}}
                   >
                    </Avatar>
                </Grid>
                <Grid container xs={6} >
                    {/* <Grid style={{display:'flex',flexDirection:'coloumn'}} item xs={2}>
<p
style={{color:'white'}}>Frontend-Developer</p>
                    </Grid> */}
                    <div className='headerMain'>
                    <div className='headerP'>
                        <p>Frontend-Developer</p>
                    </div>
                    <div className='headerHead'>
                        <h1><b>Azan Rasheed  Khan</b></h1>
                    </div>
                    <div >
                        <p className='headerText'  style={{maxWidth:'400px'}}>
                        To obtain the position of Interactive JavaScript Developer with Tilism Technologies where extensive experience and passion for building interactive experiences and proactive problem solving, adept knowledge of Object-Oriented JavaScript, React, modern JS libraries, Backbone CSS, and semantic HTML will be put to maximum use.
                        </p>
                    </div>
                    <div>
                        
                     <a  href='https://themeforest.net/item/leven-vcard-wordpress-theme/25289671' target='_blank'> <button className='headerButton1' >Download CV </button> </a>  
                        <button className='headerButton'>Contact</button>
                    </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Header