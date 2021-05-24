import './header.css'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ManPic from '../../assets/cesar-rincon-1024x1024.jpg'
import Button from '@material-ui/core/Button';

const Header = () => {
    return (
        <>
            {/* <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                xs={6}
            >
<Avatar className='bigAvatar' src={ManPic}></Avatar>
            </Grid> */}
            <Grid
                container
                // direction="row"
                justify="center"
                alignItems="center"
className='headerParent'
            >
                <Grid className='header1' item xs={6}  >
                    <Avatar className='bigAvatar' src={ManPic}>
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
                    <div>
                        <h1><b>Alex Smith</b></h1>
                    </div>
                    <div>
                        <p style={{maxWidth:'400px'}}>
                        Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis, risus non condimentum gravida, odio mauris ullamcorper felis, ut venenatis purus ex eu mi. Quisque imperdiet lacinia urna, a placerat sapien pretium eu.
                        </p>
                    </div>
                    <div>
                        
                        <button className='headerButton1'>Download CV </button> 
                        <button className='headerButton'>Contact</button>
                    </div>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}

export default Header