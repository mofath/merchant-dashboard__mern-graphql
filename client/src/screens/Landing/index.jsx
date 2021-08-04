import React from 'react';
import FeaturesContainer from '../../containers/Features';
import PartnersContainer from '../../containers/Partners';
import LandingHeroSection from '../../containers/LandingHeroSectiom';
import { features, partners } from '../../fixtures';
import { signup } from '../../graphql/requests';

const LandingScreen = () => {
  return (
    <div className='landing-screen'>
      <LandingHeroSection signup={signup} />
      <FeaturesContainer features={features} />
      <PartnersContainer partners={partners} />
    </div>
  );
};

export default LandingScreen;
