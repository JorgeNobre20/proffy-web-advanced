import styled,{ css } from "styled-components";
import { introductionLogo } from "../../assets/images";

const fullFlex = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;


export const Container = styled.section<{ isLogoContainer?: boolean; }>`
	width: 50%;
	min-width: ${ props => props.isLogoContainer ? "auto" : "450px" };
	position: relative;
	min-height: 100vh;
	${fullFlex};
	flex-direction: column;
	background: ${ props => props.isLogoContainer ? props.theme.colors.purple : props.theme.colors.background };
	padding: ${ props => props.isLogoContainer ? "0px" : "1.5rem" };
	justify-content: ${ props => props.isLogoContainer ? "center" : "space-evenly" };


	@media(max-width: 768px){
		flex-direction: column;
		order: ${props => props.isLogoContainer ? "1" : "2"};
		height: ${ props => props.isLogoContainer ? "15rem" : "auto" };
		width: 100%;
		min-height: 0px;
	}

	@media(max-width: 450px){
		width: 100%;
		min-width: 0px;
		${fullFlex};
		display: ${ props => props.isLogoContainer ? "none" : "flex" };
	}
`;

export const LogoImg = styled.img.attrs({ alt: "Proffy", src: introductionLogo })`
	position: relative;
	width: 75%;
	height: auto;

	@media(max-width: 768px){
		height: 100%;
		width: auto;
	}
`;
