import styled,{ css } from "styled-components";
import { longArrowLeft } from "../../assets/icons";

const fullFlex = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

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

export const FormDescription = styled.p`
	font-weight: 400;
	color: ${ ({ theme }) => theme.colors.complementText };
	font-size: 1rem;
	margin-bottom: 1.8rem;
`;
 
export const PageHeader = styled.header`
	width: 50%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin: 1rem 0;
	min-width: 400px;
`;

export const GoBackButton = styled.button`
	${fullFlex};
`;

export const GoBackIcon = styled.img.attrs({ alt: "voltar", src: longArrowLeft })`
	height: 2rem;
	width: auto;
`;