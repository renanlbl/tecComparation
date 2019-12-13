import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Pages
import Home from './app/pages/Home'
import Compare from './app/pages/Compare'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/compare" component={Compare} />
    </Switch>
  )
}



