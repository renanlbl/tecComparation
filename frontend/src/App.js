import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Header from './app/components/Header';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../src/store/rootReducer'

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </Provider>
    );
  }
}



export default App;
