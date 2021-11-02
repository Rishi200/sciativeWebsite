import React from 'react';
import TravelHeader from '../components/travel/TravelHeader';
import TravelInsights from '../components/travel/TravelInsights';
import TravelBenefits from '../components/travel/TravelBenefits';
import CaseStudyTravel from '../components/travel/CaseStudyTravel';
import TravelTestimonials from '../components/travel/TravelTestimonials';
import About from '../components/homepage/About';

const Travel = () => {
  return (
        <>
            <TravelHeader />
            <TravelInsights />
            <TravelBenefits />
            <CaseStudyTravel />
            <TravelTestimonials />
            <About/>
        </>
    )
}

export default Travel;
