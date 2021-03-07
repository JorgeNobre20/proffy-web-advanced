import styled from "styled-components";

export const FormTitleWrapper = styled.h1<{ hasDescription: boolean; }>`
	font-size: 2rem;
	font-weight: 600;
	font-family: Poppins,sans-serif;
	color: ${({ theme }) => theme.colors.titleText};
	margin-bottom: ${ props => props.hasDescription ? "0.8rem" : "1.6rem" };

	@media(max-width: 780px){
		text-align: center;
	}

`;