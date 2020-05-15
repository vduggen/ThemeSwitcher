import React, { useEffect } from 'react';

import * as themes from '../themes';

export const ThemeContext = React.createContext();

export const ThemeProvider1 = (props) => {
  const [theme, setTheme] = React.useState(themes.light);
  const [typeTheme, setTypeTheme] = React.useState('Dark');

  const ToggleTheme = () => {    
    if (theme === themes.light) {      
      setTheme(themes.dark);
      setTypeTheme('Light');
    }else {
      setTheme(themes.light);
      setTypeTheme('Dark');
    }
    localStorage.setItem('theme',typeTheme);
  }

  useEffect(() => {
    setTheme(localStorage.getItem('theme'));
    
    if (localStorage.getItem('theme') === 'Dark') {
      setTheme(themes.dark);
      setTypeTheme('Light');
    }else {
      setTheme(themes.light);
      setTypeTheme('Dark');
    }
  },[]);

  return (
    <ThemeContext.Provider value={{ToggleTheme,theme,typeTheme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}