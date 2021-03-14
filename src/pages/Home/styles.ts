import styled,{ css } from "styled-components";

import { fullFlex } from "../../styles/GlobalStyles";
import { logout, heart, study, giveClasses } from "../../assets/icons";
import { homeLogo, homeHero } from "../../assets/images";


export const MainContainer = styled.main`
	min-height: 100vh;
	width: 100%;
	background: ${props => props.theme.colors.background};
`;

export const HeroSection = styled.section`
	height: 70vh;
	min-height: 25rem;
	width: 100%;
	padding: 0 4.5rem;
	background: ${props => props.theme.colors.purple};
	display: flex;
	flex-direction: column;
	justify-content: flex-start;

	@media(max-width: 980px){
		padding: 0 2.3rem;
	}

	@media(max-width: 932px){
		padding: 0 2.3rem;
	}

	@media(max-width: 450px){
			height: 60vh;
			min-height: 20rem;
	}
`;

export const Header = styled.header`
	display: flex;
	width: 100%;
	position: relative;
	align-items: center;
	justify-content: space-between;
	height: 4rem;
	padding: 1rem 0;
`;

export const Profile = styled.div`
	${fullFlex};
	margin: 1rem 0;
`;

export const UserImage = styled.img.attrs({ 
	src: "https://github.com/JorgeNobre.png", alt: "Logo" 
})`
	height: 2rem;
	width: 2em;
	border-radius: 1rem;
	margin-right: 1.2rem;
`;

export const Username = styled.p`
	font-size: 0.9rem;
	color: ${props => props.theme.colors.white};
	opacity: 0.8;
	font-weight: 400;
	font-family: Poppins;
`;


export const LogoutButton = styled.button`
	${fullFlex};
	width: 2.4rem;
	height: 2.4rem;
	border-radius: 10px;
	cursor: pointer;
	padding: 0.25rem;
	background: ${props => props.theme.colors.lightPurple};
`;

export const LogoutIcon = styled.img.attrs({ src: logout, alt: "Sair" })`
	height: 1.2rem;
	width: 1.2rem;
`;

export const HeroContainer = styled.div`
	display: flex;
	height: 100%;
	position: relative;
	width: 100%;

	@media(max-width: 932px){

		> div{
			width: 100%;
			height: 100%;
		}

		div: nth-child(2){
			display: none;
		}
	}
`;

export const ImageContainer = styled.div<{ isHeroContainer?: boolean }>`
	${fullFlex};
	position: relative;
	width: 50%;
	height: 100%;

	justify-content: ${props => props.isHeroContainer ? "flex-end" : "flex-start"};


	@media(max-width: 932px){
		width: 100%;
		height: 100%;

		justify-content: center;
	}
`;

const mainImages = css`
	position: relative;
	height: auto;
	display: flex;

	@media(max-width: 932px){
		height: auto;
		width: 70%;
	}
`;

export const HomeLogo = styled.img.attrs({
	src: homeLogo,
	alt: "Proffy"
})`
	${mainImages};
	width: 70%;
`;

export const Hero = styled.img.attrs({
	src: homeHero,
	alt: "Ilustração"
})`
	${mainImages};
	width: 100%;
`;


export const PageFooter = styled.footer`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-height: 30vh;
	padding: 0 4.5rem;
	
	@media(max-width: 980px){
		padding: 0 2.3rem;
	}

	@media(max-width: 932px){
		padding: 1rem 2.3rem;
		flex-direction: column;
	}

	@media(max-width: 450px){
		padding: 0 0.8rem;
		padding-top: 1rem;
	}

`;

export const FooterTitle = styled.h1`
	font-family: Poppins;
	color: ${props => props.theme.colors.textBase};
	line-height: 1.8rem;

		h2{
			font-weight: 400;
			font-size: 1.1rem;
			margin: 0;
		}

		strong{
			font-size: 1.4rem;
			margin: 0;
		}

	@media(max-width: 1150px){
		h2{
			font-size: 1rem;
		}

		strong{
			font-size: 1.2rem;
		}
	}

	@media(max-width: 932px){
		text-align: center;
		margin: 1rem 0;
	}



`;

export const UserActions = styled.div`
	${fullFlex};
	position: relative;
	height: 100%;
	margin-left: 2rem;

	@media(max-width: 932px){
		width: 100%;
		flex-direction: column;
		margin: 0;

		div{
			order: 1;
		}

		div:first-child{
			order: 2;
		}
	}
`;

export const ConnectionsTotal = styled.div`
	font-size: 0.9rem;
	flex-direction: column;
	font-weight: 400;
	color: ${props => props.theme.colors.complementText};
	display: flex;
	align-items: center;
	align-items: flex-end;
	margin-right: 2.5rem;

	span{
		${fullFlex};
	}

	@media(max-width: 932px){
		justify-content: center;
		${fullFlex};
		margin: 1.3rem 0;
		margin-right: 0;
	}	

`;

export const HeartIcon = styled.img.attrs({
	src: heart,
	alt: "S2"
})`
	height: 0.7rem;
	width: auto;
	margin-left: 0.5rem;
`;

export const ButtonsContainer = styled.div`
	${fullFlex};
	position: relative;
	height: 100%;

	@media(max-width: 932px){
		width: 100%;
		margin-top: 1rem;
	}
`;

const buttonStyle = css`
	${fullFlex};
	position: relative;
	padding: 1.3rem;
	height: 50%;
	width: 20vw;
	cursor: pointer;
	border-radius: 10px;
	font-weight: bold;
	font-size: 1.3rem;
	transition: 0.5s background;
	font-family: Archivo;
	color: ${props => props.theme.colors.white}
`;

const buttonIconStyle = css`
	height: 2rem;
	width: auto;
	margin-right: 1rem;
`;

export const StudyButton = styled.button`
	background: ${props => props.theme.colors.purple};
	${buttonStyle};
	margin-right: 1rem;

	&:hover{
		background: ${props => props.theme.colors.hoverPurple}
	}

	@media(max-width: 932px){
		width: 48%;
	}

	@media(max-width: 450px){
		font-size: 1.1rem;
	}
`;

export const StudyIcon = styled.img.attrs({ src: study, alt: "Livro" })`
	${buttonIconStyle};

	@media(max-width: 932px){
		margin-right: 0.5rem;
	}

	@media(max-width: 450px){
		height: 1.2rem;
	}
`;

export const GiveClassesButton = styled.button`
	background: ${props => props.theme.colors.green};
	${buttonStyle};


	&:hover{
		background: ${props => props.theme.colors.hoverGreen}
	}

	@media(max-width: 932px){
		width: 48%;
		font-size: 1.1rem;
	}

	@media(max-width: 450px){
		font-size: 1.1rem;
	}
`;

export const GiveClassesIcon = styled.img.attrs({ src: giveClasses, alt: "TV" })`
	${buttonIconStyle};


	@media(max-width: 932px){
		margin-right: 0.5rem;
	}

	@media(max-width: 450px){
		height: 1.2rem;
	}
`;
