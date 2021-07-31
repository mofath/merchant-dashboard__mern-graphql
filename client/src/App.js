import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingScreen from './screens/Landing';

const App = () => {
  return (
    <Layout >
      {/* place routes here */}
      <Route path='/' exact ><LandingScreen /></Route>
    </Layout>
  );
}

export default App;