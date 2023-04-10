import React, {Component} from 'react';
import {createRoot} from 'react-dom/client';
import './normalize.css';
import './index.scss';

import MainPage from './components/MainPage'

class App extends Component {
  render () {
    return <MainPage/>
  };
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);
