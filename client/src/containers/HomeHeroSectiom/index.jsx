import React from 'react';
import Button from '../../patterns/Button';
import Headline from '../../patterns/Headline';
import { heroImage } from '../../fixtures';
import './index.scss';

const HomeHeroSection = () => (
  <section className="home-hero-section">
    <div className="home-hero-section__actions">
      <Headline
        headline="Manage all your offers and items from one place."
        semanticElement="h1"
        alignmentDesktop="left"
        className="home-hero-section__auth__headline"
      />
      <Button type="submit" className="home-hero-section__actions__add-cta-btn">
        Manage your Offers
      </Button>
      <Button type="submit" className="home-hero-section__actions__manage-cta-btn">
        Add new item
      </Button>
    </div>
    <div>
      <img
        src={heroImage.src}
        alt={heroImage.title}
        className="home-hero-section__img"
      />
    </div>
  </section>
);

export default HomeHeroSection;
