import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../patterns/Icon';
import Button from '../../patterns/Button';
import InputField from '../../patterns/InputField';
import './index.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contact-us">Contact Us</div>
        <div className="footer__contacts">
          <ul className="footer__contacts__info">
            <li className="footer__contacts__info__item">+(x)-xxxx-xxxx</li>
            <li className="footer__contacts__info__item">
              23, street, state, country
            </li>
            <li className="footer__contacts__info__item"> email@company.domain</li>
          </ul>
          <ul className="footer__contacts__social-media">
            <li className='footer__contacts__social-media__icon'><Icon name='facebook' /></li>
            <li className='footer__contacts__social-media__icon'><Icon name='instagram' /></li>
            <li className='footer__contacts__social-media__icon'><Icon name='pinterest' /></li>
          </ul>
        </div>
        <div className="footer__about">
          <ul className="footer__about__links-list">
            <li className="footer__about__link">
              <Link to="/">About Us</Link>
            </li>
            <li className="footer__about__link">
              <Link to="/">Terms and Conditions</Link>
            </li>
            <li className="footer__about__link">
              <Link to="/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div className="footer__subscribe">
          <div className='footer__subscribe__text'>
            <p>Lorem, ipsum sit consectetu . </p>
            <p>Lorem, ipsum dolor sit consectetu . </p>
            <p>Lorem, ipsum dolor sit  . </p>
          </div>
          <form className='footer__subscribe__form'>
            <InputField className='footer__subscribe__form__input' />
            <Button onClick={(e) => e.prevenDefault} className='footer__subscribe__form__submit-btn'>
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </footer>
  );
}
