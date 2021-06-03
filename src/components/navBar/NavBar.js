// import Navbar from 'react-bootstrap/Navbar'
// import Nav from 'react-bootstrap/Navbar/Nav'
// import NavDropdown from 'react-bootstrap/Navbar/NavDropdown'
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './navBar.css'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { useState } from 'react'


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
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  }
  const hideDropdown = e => {
    setShow(false);
  }
  const [showOne, setShowOne] = useState(false);
  const showDropdownOne = (e) => {
    setShowOne(!show);
  }
  const hideDropdownOne = e => {
    setShowOne(false);
  }
  const [showTwo, setShowTwo] = useState(false);
  const showDropdownTwo = (e) => {
    setShowTwo(!show);
  }
  const hideDropdownTwo = e => {
    setShowTwo(false);
  }
  return (
    <div className='navBar'>
      <Navbar style={{ paddingLeft: "2.5px", backgroundColor: '#222', background: 'transparent' }} collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand className='navBarBrand' href="/"><Avatar className={classes.large} style={{ backgroundColor: '#007ced' }}><b style={{ fontSize: 'xx-large', fontWeight: '900' }}>A</b></Avatar><b className='bold'>Alex </b>Smith</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav style={{ paddingLeft: '2.5rem' }} className="navbar-nav ml-auto">
            {/* <Nav.Link className='navLink' href="#about">About Me</Nav.Link> */}
             <NavDropdown title="About"
             className='navLink'
              id="basic-nav-dropdown"
              show={show}
              onMouseEnter={showDropdown}
              onMouseLeave={hideDropdown}
              
              >
             
                <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              
            </NavDropdown>

            <Nav.Link className='navLink' href="/resume">Resume</Nav.Link>
            {/* <Nav.Link className='navLink' href="#portfolio">Portfolio</Nav.Link> */}
            <NavDropdown title="Portfolio" id="basic-nav-dropdown" className='navLink'
              show={showOne}
              onMouseEnter={showDropdownOne}
              onMouseLeave={hideDropdownOne}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className='navLink' href="#memes">Blog</Nav.Link> */}
            <NavDropdown title="Blog" id="basic-nav-dropdown" className='navLink'
              show={showTwo}
              onMouseEnter={showDropdownTwo}
              onMouseLeave={hideDropdownTwo}>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navLink' href="/contact">Contact</Nav.Link>
            <Nav.Link className='navLink' href="#extra">Extra</Nav.Link>
            <Nav.Link className='navLink'  href="https://themeforest.net/item/leven-vcard-wordpress-theme/25289671" target='_blank'>Get It Now</Nav.Link>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
export default NavBar