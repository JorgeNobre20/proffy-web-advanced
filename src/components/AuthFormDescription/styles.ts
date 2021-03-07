import styled from "styled-components";

export const FormDescription = styled.p`
	font-weight: 400;
	color: ${ ({ theme }) => theme.colors.complementText };
	font-size: 1rem;
	margin-bottom: 1.8rem;

	@media(max-width: 780px){
		text-align: center;
	}

`;