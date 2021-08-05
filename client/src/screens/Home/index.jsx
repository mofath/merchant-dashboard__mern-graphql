import React from 'react';
import FeaturesContainer from '../../containers/Features';
import PartnersContainer from '../../containers/Partners';
import HomeHeroSectiom from '../../containers/HomeHeroSectiom';
import { features, partners } from '../../fixtures';

const LandingScreen = () => {
  return (
    <div className='landing-screen'>
      <HomeHeroSectiom />
      <FeaturesContainer features={features} />
      <PartnersContainer partners={partners} />
    </div>
  );
};

export default LandingScreen;
