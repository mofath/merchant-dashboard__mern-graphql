import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch } from 'react-router-dom';
import './index.scss';

const Layout = ({ children }) => {
  return (
    <BrowserRouter>
      <Header />
      <main className='screen-wrapper'>
        <div className='screen'>
          <Switch>{children}</Switch>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

Layout.propTypes = {
  children: PropTypes.string,
};

export default Layout;
