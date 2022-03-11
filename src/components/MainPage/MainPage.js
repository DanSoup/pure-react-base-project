import React from 'react';
import {Switch, Route, Link, useLocation} from 'react-router-dom';

const MainPage = (props) => {

  let location = useLocation();

  return <>
    <header>
      <h1>Pure React Base Project</h1>
    </header>
    <nav>
      <Link to="/">HOME</Link>
      <Link to="/todo">TODO</Link>
    </nav>
    <div id="content">
      <Switch location={location}>
        <Route exact path="/">
          <p>This is my "pure react base project".</p>
          <p>The idea behind this project was to create a React app without using create-react-app. As handy as create-react-app is I felt it was bloated with a lot of packages I was never going to useand so I created this.</p>
          <p>From the ground up I wanted it to be lightweight but with things I'd be 99% likely to use in any project, such as Sass.</p>
          <p>I clone this repository and update its details to create new projects, essentially it becomes a personal create-react-app.</p>
        </Route>
        <Route path="/todo">
          <ul>
            <li>Configure Jest and add some default tests.</li>
            <li>Come up with a better way to "clone" the project to create a new project.</li>
          </ul>
        </Route>
        <Route path="*">
          404
        </Route>
      </Switch>
    </div>
  </>

}

export default MainPage;