import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from './app/pages/Home'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  )
}



