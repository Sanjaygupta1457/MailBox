import React, {Fragment} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import MainNavigation from './components/layout/MainNavigation';
import Home from './components/pages/Home';
import Inbox from './components/pages/Inbox';
import MailRead from './components/pages/MailRead';
import Sent from './components/pages/Sent';
import Banner from './components/pages/Banner';

function App() {
  const isToken = localStorage.getItem("token");
  return (
   <Fragment>
    <MainNavigation/>
    <Banner/>
    <Routes>
    <Route 
          exact path="/"
          element={<Navigate to="/Home"  />}
          />
        {isToken && <Route exact path='/Home' element={<Home/>}/> }
        {isToken &&  <Route  path='/inbox' element={<Inbox/>}/>}
        {isToken &&   <Route  path='/inbox/:id' element={ <MailRead  isSent={false}/> }/>}
        {isToken &&  <Route  path='/sent' element={<Sent/>} /> }
        {isToken && <Route  path='/sent/:id' element={<MailRead  isSent={true}/>}/>}
        {!isToken && <Route path='/Signup' element={<SignUp/>}/>}
        {!isToken &&<Route path='/Login'  element={<Login />}/>}
       <Route 
          path="*"
          element={<Navigate to="/Login"  />}
          />
    </Routes>
   </Fragment>
  );
}

export default App;
