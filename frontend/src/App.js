import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Retail from './pages/Retail'
import Media from './pages/Media'
import Travel from './pages/Travel'
import ContactUs from './pages/ContactUs'
import AboutUs from './pages/AboutUs'
import Error from './pages/Error'

import './css/home.css';
import NavbarComponent from './components/homepage/Navbar'

function App() {
	return (
		<Router>
			<NavbarComponent />
			<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/retail">
				<Retail />
			</Route>
			<Route exact path="/media">
				<Media />
			</Route>
			<Route exact path="/travel">
				<Travel />
			</Route>
			<Route exact path="/contact-us">
				<ContactUs />
			</Route>
			<Route exact path="/about-us">
				<AboutUs />
			</Route>
			<Route path="*">
				<Error />
			</Route>
			</Switch>
		</Router>
  )
}

export default App
