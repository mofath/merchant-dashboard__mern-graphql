import React from 'react';
import PropTypes from 'prop-types';
import AuthForm from '../../components/AuthForm';
import Headline from '../../patterns/Headline';
import { heroImage } from '../../fixtures';
import './index.scss';

const LandingHeroSection = ({ signup }) => (
  <section className='landing-hero-section'>
    <div className='landing-hero-section__auth'>
      <Headline
        headline='Hello Merchant!'
        semanticElement='h1'
        alignmentDesktop='left'
        className='landing-hero-section__auth__headline'
      />
      <AuthForm signup={signup} />
    </div>
    <div>
      <img
        src={heroImage.src}
        alt={heroImage.title}
        className='landing-hero-section__img'
      />
    </div>
  </section>
);


LandingHeroSection.propTypes = {
  signup: PropTypes.func,
}

export default LandingHeroSection;
