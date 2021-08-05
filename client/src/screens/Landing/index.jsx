import React from 'react';
import { useHistory } from 'react-router';
import FeaturesContainer from '../../containers/Features';
import PartnersContainer from '../../containers/Partners';
import LandingHeroSection from '../../containers/LandingHeroSectiom';
import { features, partners } from '../../fixtures';
import { signup, login } from '../../graphql/requests';

const LandingScreen = () => {
  const history = useHistory();

  const handleLogin = async (username, password) => {
    const response = await login(username, password);
    if (response?.isAuthenticated) {
      alert(`Welcome, ${username}`);
      history.replace('/home');
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className='landing-screen'>
      <LandingHeroSection signup={signup} login={handleLogin} />
      <FeaturesContainer features={features} />
      <PartnersContainer partners={partners} />
    </div>
  );
};

export default LandingScreen;
