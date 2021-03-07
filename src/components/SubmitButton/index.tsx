import React,{ ButtonHTMLAttributes } from "react";

import { Button } from "./styles";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>{
	label: string;
	isValidForm: boolean;
}

const SubmitButton: React.FC<Props> = ({ label, isValidForm, ...rest }) => {
	return (
		<Button isValidForm={isValidForm} {...rest}>
			{label}
		</Button>
	);
}

export default SubmitButton;