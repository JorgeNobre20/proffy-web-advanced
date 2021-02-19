import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: Arial,sans-serif;
	}

	body{
		width: 100%;
		min-height: 100vh;
	}

	input, button {
		background: none;
		border: none;
		outline: none;
	}

	a{
		text-decoration: none;
	}
`;

export default GlobalStyles;