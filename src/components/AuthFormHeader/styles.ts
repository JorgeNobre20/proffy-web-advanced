import styled from "styled-components";
import { longArrowLeft } from "../../assets/icons";

import { fullFlex } from "../../styles/GlobalStyles";

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