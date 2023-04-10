import React, { useContext } from "react";
import { withTheme } from "@emotion/react";

const ThemeTester = ({ theme }) => {
  return <div>
    <button css={{backgroundColor: theme.color.main}}>theme 1</button>
    <button onClick={() => theme.uTheme({color: {main: '#ff0000'}})}>theme 2</button>
  </div>
};

export default withTheme(ThemeTester);