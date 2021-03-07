import styled from "styled-components";

import { fullFlex } from "../../styles/GlobalStyles";

export const Button = styled.button<{ isValidForm: boolean; }>`
	${fullFlex};
	background: ${({ theme, isValidForm }) => isValidForm ? theme.colors.green : theme.colors.disabled };
	height: 3.8rem;
	width: 100%;
	font-family: "Archivo";
	color: ${({ theme, isValidForm }) => isValidForm ? theme.colors.white : theme.colors.complementText };
	font-size: 1rem;
	font-weight: 500;
	border-radius: 8px;
	margin-bottom: 2rem;
	cursor: ${({ isValidForm }) => isValidForm ? "pointer" : "no-drop" };
	transition: background 0.4s;

	&:hover{
		background: ${({ theme, isValidForm }) => isValidForm ? theme.colors.hoverGreen : theme.colors.disabled };		
	}
`;
