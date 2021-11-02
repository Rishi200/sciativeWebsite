import React from 'react'
import Animation from '../components/homepage/Animation'
import Jumbotron from '../components/homepage/Jumbotron'
import Sectors from '../components/homepage/Sectors'
import Statistics from '../components/homepage/Statistics'
import Projects from '../components/homepage/Projects'
import Highlights from '../components/homepage/Highlights'
import Leaders from '../components/homepage/Leaders'
import CaseStudy from '../components/homepage/CaseStudies'
import Dropdown from '../components/homepage/Dropdown'
import Career from '../components/homepage/Career'

const Home = () => {

	return (
		<>
		<Animation />
		<Jumbotron />
		<Sectors />
		<Statistics />
		<Projects />
		<Highlights />
		<Leaders />
		<CaseStudy />
		<Dropdown />
		<Career />
		</>
	)
}

export default Home
