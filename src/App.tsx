import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";

import Routes from "./routes";

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Routes />
		</ThemeProvider>
	);
};

export default App;
