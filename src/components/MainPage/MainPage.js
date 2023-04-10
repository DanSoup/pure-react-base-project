import React, { createContext, useContext, useState } from 'react';
import {Route, Link} from 'wouter';
import ThemeTester from '../ThemeTester';
import { ThemeProvider, withTheme } from '@emotion/react';
import lightTheme from '../../themes/light.theme';
import darkTheme from '../../themes/dark.theme';
import otherTheme from '../../themes/other.theme';

const MainPage = (props) => {
  const [sTheme, uTheme] = useState({
    color: {main: '#123456'}
  });

  return <ThemeProvider theme={{ ...sTheme, uTheme }}>
    <div id="main-page" css={{
      backgroundColor: sTheme.color.background,
    }}>
      <header css={{
        h1: {
          color: sTheme.color.primary,
        },
        backgroundColor: sTheme.color.background
      }}>
        <h1>Pure React Base Project</h1>
        <button onClick={() => {uTheme({...sTheme, ...lightTheme})}}>LIGHT</button>
        <button onClick={() => {uTheme({...sTheme, ...darkTheme})}}>DARK</button>
        <button onClick={() => {uTheme({...sTheme, ...otherTheme})}}>OTHER</button>
      </header>
      <nav
        css={{
          backgroundColor: sTheme.color.background
        }}
      >
        <Link to="/">HOME</Link>
        <Link to="/todo">TODO</Link>
      </nav>
      <div id="content" css={{
        color: sTheme.color.primary,
        backgroundColor: sTheme.color.background
      }}>
        <Route path="/">
          <>
            <p>This is my "pure react base project".</p>
            <p>The idea behind this project was to create a React app without using create-react-app. As handy as create-react-app is I felt it was bloated with a lot of packages I was never going to useand so I created this.</p>
            <p>From the ground up I wanted it to be lightweight but with things I'd be 99% likely to use in any project, such as Sass.</p>
            <p>I clone this repository and update its details to create new projects, essentially it becomes a personal create-react-app.</p>
          </>
        </Route>
        <Route path="/todo">
          <>
            <ul>
              <li>Better.</li>
            </ul>
          </>
        </Route>
        <Route path="/theme">
          <ThemeTester/>
        </Route>
        <Route path="*">404</Route>
      </div>
    </div>
  </ThemeProvider>

}

export default MainPage;