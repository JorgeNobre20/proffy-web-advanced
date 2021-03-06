import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	*{
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		font-family: Poppins,sans-serif;
	}

	body{
		width: 100%;
		min-height: 100vh;
	}

	input, button {
		background: none;
		border: none;
		outline: 0;
	}

	a{
		text-decoration: none;
	}

	button{
		cursor: pointer;
	}

	input:required {
    box-shadow:none;
	}
	input:invalid {
	    box-shadow:none;
	}
`;

export default GlobalStyles;