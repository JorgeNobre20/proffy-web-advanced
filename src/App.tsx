import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

import Login from "./pages/Login";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Login />
		</ThemeProvider>
	);
};

export default App;
