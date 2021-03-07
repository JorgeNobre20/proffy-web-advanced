import React,{ useCallback, useState, FormEvent } from "react";

import {
	AuthSection,
	AuthFormHeader,
	AuthFormTitle,
	AuthFormDescription,
	CustomInput,
	SubmitButton
} from "../../components";

import { MainContainer, Form } from "./styles";

const ForgotPassword: React.FC = () => {

	const [email, setEmail] = useState<string | null>("");

	function handleRecoveryPassword(event: FormEvent<HTMLFormElement>){
		event.preventDefault();
		const data = { email };
		console.log("Forgot Password Data -->", data);
	}

	const handleUpdateStateProperties = useCallback(
		(statePropertyName: string, newValue: string) => {
			if(statePropertyName === "email"){
				setEmail(newValue);
			}
		},
		[]
	);

	return (
		<MainContainer>
			<AuthSection>
				<AuthFormHeader />
				<Form onSubmit={handleRecoveryPassword}>
					<AuthFormTitle
						hasDescription
						content={
							<span>
								Eita, esqueceu
								<br /> sua senha?
							</span>
						}
					/>

					<AuthFormDescription
						content={<span>Não esquenta, vamos dar um jeito nisso</span>}
					/>
					

					<CustomInput 
						statePropertyName={"email"}
						handleUpdateState={handleUpdateStateProperties}
						statePropertyValue={email ?? ""}
						borderRadius={{ topLeft: "8px", topRight: "8px", bottomLeft: "8px", bottomRight: "8px" }}
						fieldRef={"email"}
						fieldType={"email"}
						fieldLabel={"E-mail"}
					/>

					<SubmitButton 
						style={{ marginTop: "2rem" }}
						isValidForm={email ? true : false}
						label="Enviar"
					/>

				</Form>
			</AuthSection>
			<AuthSection isLogoContainer />
		</MainContainer>
	);
};

export default ForgotPassword;
