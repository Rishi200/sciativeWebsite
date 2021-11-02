import React from 'react';
import AboutUsHeader from '../components/aboutUs/AboutUsHeader';
import AboutUsMission from '../components/aboutUs/AboutUsMission';
import AboutUsValues from '../components/aboutUs/AboutUsValues';
import Team from '../components/aboutUs/Team';
import About from '../components/homepage/About';

const AboutUs = () => {
  return (
    <>
    <AboutUsHeader />
    <AboutUsMission />
    <AboutUsValues />
    <Team />
    <About />
    </>
  )
}

export default AboutUs;
