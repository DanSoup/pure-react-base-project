import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import './normalize.css';
import './index.scss';

import MainPage from './components/MainPage/MainPage.js'

class App extends Component {
  render () {
    return <BrowserRouter basename={process.env.PUBLIC_PATH}>
      <MainPage/>
    </BrowserRouter>
  };
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);
