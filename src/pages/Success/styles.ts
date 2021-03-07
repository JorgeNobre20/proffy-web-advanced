import styled from "styled-components";
import { Link } from "react-router-dom";

import { fullFlex } from "../../styles/GlobalStyles";
import { successPattern } from "../../assets/images";
import { success } from "../../assets/icons";

export const MainContainer = styled.main`
	height: 100vh;
	width: 100%;
	position: relative;
	background: ${props => props.theme.colors.purple};
	${fullFlex};
	flex-direction: column;
`;

export const PatternImg = styled.img.attrs({ src: successPattern })`
	width: 90%;
	height: 90%;
	position: absolute;
	${fullFlex};
	top: 50%;
	left: 50%;
	transform: translate(-50%,-50%);
	z-index: 1;
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	align-items: center;
	z-index: 2;
	padding: 0 1rem;
`;

export const SuccessIcon = styled.img.attrs({ src: success })`
	height: 6rem;
	width: 6rem;
	position: relative;
	margin: 1rem;

	@media(max-width: 768px){
		height: 5rem;
		width: 5rem;
	}

`;

export const Title = styled.h1`
	font-size: 3rem;
	font-family: Poppins;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.white};
	text-align: center;
	margin: 1rem 0;

	@media(max-width: 768px){
		font-size: 2.8rem;
	}

	@media(max-width: 450px){
		font-size: 2.4rem;
	}
`;

export const Subtitle = styled.h2`
	font-size: 1rem;
	font-family: Poppins;
	font-weight: 300;
	color: ${({ theme }) => theme.colors.basePurple};
	text-align: center;
	margin-bottom: 3rem;
`;

export const NextPageButton = styled(Link)`
	${fullFlex};
	background: ${({ theme }) => theme.colors.green};
	height: 3.2rem;
	min-width: 10rem;
	font-family: Archivo;
	color: ${({ theme }) => theme.colors.white };
	font-size: 1rem;
	padding: 0 1.5rem;
	font-weight: 500;
	border-radius: 8px;
	cursor: pointer;
	margin-top: 1rem;
`;