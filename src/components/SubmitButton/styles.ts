import styled,{ css } from "styled-components";

const fullFlex = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

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
`;
