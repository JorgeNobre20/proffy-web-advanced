import styled from "styled-components";

import { fullFlex } from "../../styles/GlobalStyles";

export const MainContainer = styled.main`
	width: 100%;
	min-height: 100vh;
	background: ${props => props.theme.colors.background};
	${fullFlex};

	@media(max-width: 768px) and (min-width: 450px){
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
	}
`;

export const Form = styled.form`
	min-width: 400px;
	width: 50%;
	position: relative;
	display: flex;
	flex-direction: column;

	@media(max-width: 450px){
		min-width: 0px;
		width: 100%;
	}
`;
