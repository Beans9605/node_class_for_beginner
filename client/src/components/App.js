import React, { Suspense } from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingPage from './views/LandingPage/LandingPage';
import LoginPage from './views/LoginPage/LoginPage';



import Navbar from './views/Navbar/Navbar';
import RegisterPage from './views/RegisterPage/RegisterPage';


function App() {
  return (
    <Suspense fallback ={(<div>Loding...</div>)}>
      <Navbar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage}/>
      </Switch>
      </div>
    </Suspense>
  );
}

export default App;
