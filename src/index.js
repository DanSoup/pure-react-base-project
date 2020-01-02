import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './normalize.css';
import './index.css';

import MainPage from './MainPage'

class App extends Component {
  render () {
    return <MainPage/>
  };
}

ReactDOM.render(<App/>, document.getElementById('app'));