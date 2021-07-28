import React from 'react';
// import { Route } from 'react-router-dom';
import AuthForm from '../components/AuthForm'
import Layout from './Layout';

const App = () => {
  return (
    <Layout >
      {/* place routes here */}
      {/* <Route path='/' exact><Screen /></Route> */}
      <AuthForm />

    </Layout>
  );
}

export default App;