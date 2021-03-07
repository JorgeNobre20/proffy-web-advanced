import styled,{ css } from "styled-components";
import { normalEye, outlinedEye } from "../../assets/icons";

const fullFlex = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export interface BorderRadius{
	topLeft?: string;
	topRight?: string;
	bottomLeft?: string;
	bottomRight?: string;
}

const passwordFieldIcon = css`
	width: 1.4rem;
	height: 1.4rem;
`;


export const InputContainer = styled.div<{ radius: BorderRadius; refValue: string | null; }>`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: ${({ theme }) => theme.colors.inputBg};
	height: 4rem;
	width: 100%;
	border: 0.5px solid ${({ theme }) => theme.colors.inputBorderColor};
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
