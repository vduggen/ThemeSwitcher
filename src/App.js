import React from 'react';

import { ThemeProvider } from 'styled-components';

import Routes from './routes';

import { ThemeProvider1, ThemeContext } from './styles/themes/context';

function App() { 
  return (
    <div className="App">
      <ThemeProvider1>
          <ThemeContext.Consumer>
              {theme => (
                <ThemeProvider theme={theme}>
                    <Routes />
                </ThemeProvider>
              )}
            </ThemeContext.Consumer>
      </ThemeProvider1>
    </div>
  );
}

export default App;
