import React from 'react';
import MediaHeader from '../components/media/MediaHeader';
import MediaInsights from '../components/media/MediaInsights';
import MediaBenefits from '../components/media/MediaBenefits';
import CaseStudyMedia from '../components/media/CaseStudyMedia';
import MediaTestimonials from '../components/media/MediaTestimonials';
import About from '../components/homepage/About';

const Media = () => {
  return (
    <>
    <MediaHeader />
    <MediaInsights />
    <MediaBenefits />
    <CaseStudyMedia />
    <MediaTestimonials />
    <About/>
    </>
  )
}

export default Media;
