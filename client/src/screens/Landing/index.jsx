import React from 'react';
import FeaturesContainer from '../../containers/Features';
import PartnersContainer from '../../containers/Partners';
import LandingHeroSection from '../../containers/LandingHeroSectiom';
import { features, partners } from '../../fixtures';

const LandingScreen = () => {
  return (
    <div className='landing-screen'>
      <LandingHeroSection />
      <FeaturesContainer features={features} />
      <PartnersContainer partners={partners} />
    </div>
  );
};

export default LandingScreen;
