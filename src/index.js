import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './normalize.css';
import './index.css';

import MainPage from './MainPage'

class App extends Component {
  render () {
    return <BrowserRouter>
      <MainPage/>
    </BrowserRouter>
  };
}

ReactDOM.render(<App/>, document.getElementById('app'));