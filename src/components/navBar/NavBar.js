// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Navbar/Nav'
// import NavDropdown from 'react-bootstrap/Navbar/NavDropdown'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './navBar.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));


const NavBar = () => {
    const classes = useStyles();
    return (
        <div className='navBar'>
            <Navbar style={{paddingLeft: "2.5px", backgroundColor:'#222',background:'transparent'}} collapseOnSelect expand="lg"  variant="dark">
                <Navbar.Brand className='navBarBrand' href="#home"><Avatar className={classes.large}  style={{backgroundColor:'#007ced'}}><b style={{fontSize:'xx-large',fontWeight:'900'}}>A</b></Avatar><b className='bold'>Alex </b>Smith</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{paddingLeft: '2.5rem'}} className="navbar-nav ml-auto">
                        <Nav.Link className='navLink' href="#features">About Me</Nav.Link>
                        <Nav.Link className='navLink' href="#pricing">Resume</Nav.Link>
                        <Nav.Link className='navLink' href="#deets">Portfolio</Nav.Link>
                        <Nav.Link className='navLink' href="#memes">Blog</Nav.Link>
                        <Nav.Link className='navLink' href="#deets">Contact</Nav.Link>
                        <Nav.Link className='navLink' href="#deets">Extra</Nav.Link>
                        <Nav.Link className='navLink' href="#deets">Get It Now</Nav.Link>
                        
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
export default NavBar