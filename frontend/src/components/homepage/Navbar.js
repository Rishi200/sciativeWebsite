import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from '@mui/material/Link';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Stack from '@mui/material/Stack';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@material-ui/core/styles";

import logo from '../../images/logo.png'
import '../../css/home.css';

const useStyles = makeStyles({
    navbarroot: {
		backgroundColor: 'black',
		color: 'white'
    },
});

const NavbarComponent = () => {
	const classes = useStyles();
	return (
			<AppBar position="fixed" sx={{background:'black'}}>
				<Container>
					<Toolbar sx={{height:'4.5em'}}>
						<img className="image-logo" src={logo} alt="Sciative" />
						<Box sx={{ flexGrow: 1 }} />
						<Stack direction="row" spacing={8} className="mont-font font-300" style={{fontSize:'15px',color:'white'}} alignItems="center" justifyContent="flex-end">
							<Link href="/" color="inherit" underline="none">Home</Link>
							<NavDropdown title={<span className="color-white">Solutions </span>}>
								<NavDropdown.Item className="dropdown-style" href="retail">Retail</NavDropdown.Item>
								<NavDropdown.Item className="dropdown-style" href="media">Media</NavDropdown.Item>
								<NavDropdown.Item className="dropdown-style" href="travel">Travel</NavDropdown.Item>
							</NavDropdown>
							<Link href="about-us" color="inherit" underline="none">About Us</Link>
							<Link href="careers" color="inherit" underline="none">Careers</Link>
							<Link href="contact-us" color="inherit" underline="none">Contact Us</Link>
						</Stack>
					</Toolbar>
				</Container>
			</AppBar>
	)
}

export default NavbarComponent
