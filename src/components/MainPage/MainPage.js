import React from 'react';
import {Switch, Route, Link, useLocation} from 'react-router-dom';

const MainPage = (props) => {

  let location = useLocation();

  return <>
    <header>
      <h1>Pure React Base Project</h1>
    </header>
    <nav>
      <Link to="/path">PATH</Link>
    </nav>
    <Switch location={location}>
      <Route exact path="/">
        
      </Route>
      <Route path="/path">
        Path
        <Route path="/path/blah">
          Blah
        </Route>
      </Route>
      <Route path="*">
        404
      </Route>
    </Switch>
  </>

}

export default MainPage;