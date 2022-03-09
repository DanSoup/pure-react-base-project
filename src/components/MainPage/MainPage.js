import React from 'react';
import {Switch, Route, Link, useLocation} from 'react-router-dom';

const MainPage = (props) => {

  let location = useLocation();

  return <>
    <Switch location={location}>
      <Route exact path="/">
        Base React Project - 1
        <Link to="/path">PATH</Link>
      </Route>
      <Route path="/path">
        Path
      </Route>
      <Route path="*">
        404
      </Route>
    </Switch>
  </>

}

export default MainPage;