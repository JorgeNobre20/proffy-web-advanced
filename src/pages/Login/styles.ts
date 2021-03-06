import styled,{ css } from "styled-components";
import { normalEye, outlinedEye, checked, heart } from "../../assets/icons";

interface BorderRadius{
	topLeft?: string;
	topRight?: string;
	bottomLeft?: string;
	bottomRight?: string;
}

const fullFlex = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const passwordFieldIcon = css`
	width: 1.4rem;
	height: 1.4rem;
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

export const FormTitle = styled.h1`
	font-size: 2rem;
	font-weight: 600;
	font-family: Poppins,sans-serif;
	color: ${({ theme }) => theme.colors.titleText};
	margin-bottom: 1.6rem;

	@media(max-width: 450px){
		text-align: center;
	}
`;

export const InputContainer = styled.div<{ radius: BorderRadius; refValue: string | null; }>`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.colors.inputBg};
	height: 3.8rem;
	width: 100%;
	border: 1px solid ${({ theme }) => theme.colors.inputBorderColor};
	border-top-left-radius: ${ ({ radius }) => radius.topLeft ? radius.topLeft : "0px"  };
	border-top-right-radius: ${ ({ radius }) => radius.topRight ? radius.topRight : "0px" };
	border-bottom-left-radius: ${ ({ radius }) => radius.bottomLeft ? radius.bottomLeft : "0px" };
	border-bottom-right-radius: ${ ({ radius }) => radius.bottomRight ? radius.bottomRight : "0px" };

	label{
		font-size: ${({ refValue }) => refValue ? "0.8rem" : "1rem" };;
		transform: ${({ refValue }) => refValue ? "translateY(-0.8rem)" : "translateY(0)" };
	}

	input{
		transform: ${({ refValue }) => refValue ? "translateY(0.4rem)" : "translateY(0)" };
	}

	div{
		background: ${({ refValue, theme }) => refValue ? theme.colors.purple : theme.colors.inputBg };
	}

	&:focus-within{

		label{
			font-size: 0.8rem;
			transform: translateY(-0.8rem);
		}

		input{
			transform: translateY(0.4rem);
		}

		div{
			background: ${({ theme }) => theme.colors.purple};
		}

	}
`;	

export const Input = styled.input`
	position: relative;
	width: 80%;
	height: 100%;
	font-size: 1rem;
	transition: transform 0.4s;
	margin-left: 1rem;
	color: ${({ theme }) => theme.colors.textBase};
`;

export const InputFocusMarker = styled.div`
	position: absolute;
	height: 2.1rem;
	width: 0.15rem;
	border-radius: 3px;
	transition: background 0.4s;
	background: ${({ theme }) => theme.colors.inputBg};
`;

export const Label = styled.label`
	position: absolute;
	font-size: 1rem;
	font-family: Poppins,sans-serif;
	transition: transform 0.4s;
	left: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.complementText};
`;

export const PasswordVisibility = styled.button`
	width: 2rem;
	height: 2rem;
	margin-right: 0.5rem;
	${fullFlex};
`;

export const EyeIcon = styled.img.attrs({ src: normalEye, alt: "V" })`${passwordFieldIcon}`;
export const OutlinedEyeIcon = styled.img.attrs({ src: outlinedEye, alt: "X" })`${passwordFieldIcon}`;

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
	margin: 1.5rem 0;
`;

export const ForgotPassword = styled.span`
	font-size: 0.9rem;
	margin-right: 0.5rem;
	font-weight: 400;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.complementText};

	&:hover{
		color: ${({ theme }) => theme.colors.purple};
	}
`;

export const LoginButton = styled.button<{ isValidForm: boolean; }>`
	${fullFlex};
	background: ${({ theme, isValidForm }) => isValidForm ? theme.colors.green : theme.colors.disabled };
	height: 3.8rem;
	width: 100%;
	font-family: "Archivo";
	color: ${({ theme, isValidForm }) => isValidForm ? theme.colors.white : theme.colors.complementText };
	font-size: 1rem;
	font-weight: 500;
	border-radius: 8px;
	cursor: ${({ isValidForm }) => isValidForm ? "pointer" : "no-drop" };
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