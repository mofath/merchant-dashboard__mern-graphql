import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logo, headerNavItems } from '../../fixtures';
import './index.scss';

export default function Header() {
  const [activeNavItem, setActiveNavItem] = useState(0);

  return (
    <header className='header'>
      <div className='header__container'>
        <Link path='/' className='header__logo-link'>
          <img src={logo?.src} alt={logo?.title} className='header__logo' />
        </Link>
        <ul className='header__navigation-list'>
          {headerNavItems.map((item, i) => {
            const activeClass =
              i === activeNavItem ? 'header__navigation-list__item--active' : '';
            return (
              <li key={i} className={`header__navigation-list__item ${activeClass}`}>
                <Link
                  className={'header__navigation-list__item__link'}
                  onClick={() => setActiveNavItem(i)}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
