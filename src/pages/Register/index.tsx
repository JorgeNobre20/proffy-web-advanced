import React, { useCallback, FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import {
	MainContainer,
	Form,
	FormDescription,
	PageHeader,
	GoBackButton,
	GoBackIcon
} from "./styles";

import {
	AuthSection,
	AuthFormTitle,
	SubmitButton,
	CustomInput
} from "../../components";


const Register: React.FC = () => {

	const history = useHistory();

	const [name, setName] = useState<string | null>("");
	const [lastname, setLastname] = useState<string | null>("");
	const [email, setEmail] = useState<string | null>("");
	const [password, setPassword] = useState<string | null>("");

	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	function handleRegister(event: FormEvent<HTMLFormElement>){
		event.preventDefault();
		console.log("Register data -->", { name, lastname, email, password });
	}

	const handleUpdateStateProperties = useCallback((statePropertyName: string, newValue: string) => {
			switch (statePropertyName) {
				case "name":
					setName(newValue);
					break;

				case "lastname":
					setLastname(newValue);
					break;
				
				case "email":
					setEmail(newValue);
					break;

				case "password":
					setPassword(newValue);
					break;
			}
		},[]
	);

	const handlePasswordVisibility = useCallback(() => {
		setIsPasswordVisible((prevState) => !prevState);
	}, []);

	function handleGoBack(){
		history.goBack();
	}

	return (
		<MainContainer>
			<AuthSection>
				<PageHeader>
					<GoBackButton onClick={handleGoBack}>
						<GoBackIcon />
					</GoBackButton>
				</PageHeader>

				<Form onSubmit={handleRegister}>
					<AuthFormTitle hasDescription title="Cadastro" />
					<FormDescription>
						Preencha os dados abaixo <br />
						para começar.
					</FormDescription>

					<CustomInput
						statePropertyName={"name"}
						handleUpdateState={handleUpdateStateProperties}
						statePropertyValue={name ?? ""}
						borderRadius={{ topLeft: "8px", topRight: "8px" }}
						fieldRef={"name"}
						fieldType={"text"}
						fieldLabel={"Nome"}
					/>

					<CustomInput
						statePropertyName={"lastname"}
						handleUpdateState={handleUpdateStateProperties}
						statePropertyValue={lastname ?? ""}
						fieldRef={"lastname"}
						fieldType={"text"}
						fieldLabel={"Sobrenome"}
					/>

					<CustomInput
						statePropertyName={"email"}
						handleUpdateState={handleUpdateStateProperties}
						statePropertyValue={email ?? ""}
						fieldRef={"email"}
						fieldType={"email"}
						fieldLabel={"E-mail"}
					/>

					<CustomInput
						statePropertyName={"password"}
						handleUpdateState={handleUpdateStateProperties}
						statePropertyValue={password ?? ""}
						borderRadius={{ bottomLeft: "8px", bottomRight: "8px" }}
						fieldRef={"password"}
						fieldType={"password"}
						fieldLabel={"Senha"}
						isPasswordVisible={isPasswordVisible}
						handlePasswordVisibility={handlePasswordVisibility}
					/>

					<SubmitButton
						isValidForm={email && password && lastname && name ? true : false}
						label={"Cadastar"}
						type={email && password && lastname && name ? "submit" : "button"}
					/>
				</Form>
			</AuthSection>

			<AuthSection isLogoContainer />
		</MainContainer>
	);
};

export default Register;
