import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {  Login, Join, Main } from './pages';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={Login}/>
      <Route exact path="/Join" component={Join}/>
      <Route exact path="/Main" component={Main}/>
    </div>
  )
}

export default App;