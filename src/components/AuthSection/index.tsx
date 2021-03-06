import React from "react";

import { Container, LogoImg } from "./styles";

interface Props{
	isLogoContainer?: boolean;
}

const AuthSection: React.FC<Props> = ({ isLogoContainer, children }) => {
	return (
		<Container isLogoContainer={isLogoContainer ?? false}>
			{ isLogoContainer ? <LogoImg /> : children }
		</Container>
	);
}

export default AuthSection;