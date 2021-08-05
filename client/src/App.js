import React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingScreen from './screens/Landing';
import HomeScreen from './screens/Home';


const App = () => {
  return (
    <Layout >
      {/* place routes here */}
      <Route path='/home' exact ><HomeScreen /></Route>
      <Route path='/' exact ><LandingScreen /></Route>
    </Layout>
  );
}

export default App;