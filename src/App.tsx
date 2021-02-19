import React from 'react';
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";

const App: React.FC = () => {
  return (
  	<ThemeProvider theme={theme}>
  		<h1>Hello World</h1>
  	</ThemeProvider>
  );
}

export default App;
