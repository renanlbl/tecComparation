import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';

import Header from './app/components/Header';




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    );
  }
}



export default App;
