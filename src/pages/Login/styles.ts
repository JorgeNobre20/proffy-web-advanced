import styled,{ css } from "styled-components";
import { Link } from "react-router-dom";

import { checked, heart } from "../../assets/icons";

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


export const CheckBoxContainer = styled.div`
	${fullFlex};
	margin: 1rem 0;
`;

export const CheckBox = styled.div<{ isChecked: boolean; }>`
	height: 1.4rem;
	width: 1.4rem;
	${fullFlex};
	border-radius: 0.5rem;
	cursor: pointer;
	background: ${({ theme, isChecked }) => isChecked ? theme.colors.green : theme.colors.disabled};
`;

export const CheckedIcon = styled.img.attrs({ alt: "V", src: checked })`
	position: relative;
	width: auto;
	height: 35%;
`;

export const ChekboxLabel = styled.span`
	font-size: 0.9rem;
	margin-left: 0.5rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.complementText};
`;

export const FormFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: Poppins;
	margin-top: 1.5rem;
`;

export const ForgotPassword = styled(Link).attrs({ to: "/forgot-password" })`
	font-size: 0.9rem;
	margin-right: 0.5rem;
	font-weight: 400;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.complementText};

	&:hover{
		color: ${({ theme }) => theme.colors.purple};
	}
`;

export const LoginSectionFooter = styled.footer`
	display: flex;
	justify-content: space-between;
	position: relative;
	width: 50%;
	align-items: flex-start;
	min-width: 400px;
	margin: 1rem 0;

	@media(max-width: 758px){
		margin-top: 3rem;
	}

	@media(max-width: 450px){
		min-width: 0px;
		width: 100%;
		margin-top: 3rem;
	}
`;

export const CreateAccountContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CreateAccountText = styled.span`
	font-size: 1rem;
	font-family: "Poppins";
	font-weight: 500;
	color: ${({ theme }) => theme.colors.complementText};

	a{
		color: ${({ theme }) => theme.colors.purple};
		font-weight: bold;
		text-decoration: underline;
	}
`;

export const Acknowledgment = styled.span`
	font-weight: 500;
	font-size: 0.9rem;
	${fullFlex};
	font-family: "Poppins";
	color: ${({ theme }) => theme.colors.complementText};
`;

export const HeartIcon = styled.img.attrs({ alt: "<3", src: heart })`
	height: 0.9rem;
	width: auto;
	margin: 0rem 1rem 0rem 0.5rem;
`;