import React, { useState, useCallback, FormEvent } from "react";
import { Link } from "react-router-dom";

import {
	MainContainer,
	Form,
	FormFooter,
	LoginSectionFooter,
	CreateAccountContainer,
	CreateAccountText,
	Acknowledgment,
	HeartIcon,
	ForgotPassword,
	CheckBoxContainer,
	CheckBox,
	CheckedIcon,
	ChekboxLabel
} from "./styles";

import {
	AuthSection,
	CustomInput,
	AuthFormTitle,
	SubmitButton
} from "../../components";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState<string | null>(null);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isUserRemembered, setIsUserRemembered] = useState(true);

	const handlePasswordVisibility = useCallback(() => {
		setIsPasswordVisible((prevState) => !prevState);
	}, []);

	function handleLogin(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const data = { email, password };
		console.log("Login Data -->", data);
	}

	function handleCheckBox() {
		setIsUserRemembered((prevState) => !prevState);
	}

	const handleUpdateStateProperties = useCallback(
		(statePropertyName: string, newValue: string) => {
			switch (statePropertyName) {
				case "email":
					setEmail(newValue);
					break;

				case "password":
					setPassword(newValue);
					break;
			}
		},
		[]
	);

	return (
		<MainContainer>
			<AuthSection isLogoContainer />

			<AuthSection>
				<Form onSubmit={handleLogin}>
					<AuthFormTitle
						content={<span>Fazer Login</span>}
						hasDescription={false}
					/>

					<CustomInput
						statePropertyName={"email"}
						handleUpdateState={handleUpdateStateProperties}
						statePropertyValue={email ?? ""}
						borderRadius={{ topLeft: "8px", topRight: "8px" }}
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

					<FormFooter>
						<CheckBoxContainer>
							<CheckBox onClick={handleCheckBox} isChecked={isUserRemembered}>
								{isUserRemembered && <CheckedIcon />}
							</CheckBox>
							<ChekboxLabel>Lembrar-me</ChekboxLabel>
						</CheckBoxContainer>

						<ForgotPassword>Esqueci minha senha</ForgotPassword>
					</FormFooter>

					<SubmitButton
						style={{ marginTop: "0.4rem" }}
						type={email && password ? "submit" : "button"}
						isValidForm={email && password ? true : false}
						label="Entrar"
					/>
				</Form>

				<LoginSectionFooter>
					<CreateAccountContainer>
						<CreateAccountText>
							Não tem conta? <br />
							<Link to="/register">Cadastra-se</Link>
						</CreateAccountText>
					</CreateAccountContainer>

					<Acknowledgment>
						É de graça
						<HeartIcon />
					</Acknowledgment>
				</LoginSectionFooter>
			</AuthSection>
		</MainContainer>
	);
};

export { Login };
