import React,{ ChangeEvent, InputHTMLAttributes } from "react";

import {
	InputContainer,
	InputFocusMarker,
	Label,
	Input,
	BorderRadius,
	PasswordVisibility,
	OutlinedEyeIcon,
	EyeIcon
} from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement>{
	statePropertyName: string;
	statePropertyValue: string;
	borderRadius: BorderRadius;
	fieldRef: string;
	fieldType: string;
	fieldLabel: string;
	isPasswordVisible?: boolean;
	handlePasswordVisibility?: () => void;
	handleUpdateState: (statePropertyName: string, newValue: string) => void;
}

const CustomInput: React.FC<Props> = ({ 
	statePropertyName,
	handleUpdateState,
	statePropertyValue,
	borderRadius,
	fieldRef,
	fieldType,
	fieldLabel,
	isPasswordVisible,
	handlePasswordVisibility,
	...rest
}) => {

	function handleChange(event: ChangeEvent<HTMLInputElement>){
		const { target } = event;

		if(target){
			const { name, value } = target;
			handleUpdateState(name, value);
		}

	}

	function handleFieldType(type: string){
		if(type === "password" && isPasswordVisible){
			return "text";
		}

		return type;
	}

	return (
		<InputContainer
			refValue={statePropertyValue}
			radius={borderRadius}
		>
			<InputFocusMarker />
			<Label htmlFor={fieldRef}>{fieldLabel}</Label>
			<Input
				name={fieldRef}
				value={statePropertyValue ? statePropertyValue : ""}
				id={fieldRef}
				type={handleFieldType(fieldType)}
				onChange={handleChange}
				{...rest}
			/>
			{
				fieldRef === "password" && (
					<PasswordVisibility
						onClick={handlePasswordVisibility}
						type="button"
					>
						{isPasswordVisible ? <OutlinedEyeIcon /> : <EyeIcon />}
					</PasswordVisibility>
				)
			}
		</InputContainer>
	)
}

export default CustomInput;


// <PasswordVisibility
// 	onClick={handlePasswordVisibility}
// 	type="button"
// >
// 	{isPasswordVisible ? <OutlinedEyeIcon /> : <EyeIcon />}
// </PasswordVisibility>