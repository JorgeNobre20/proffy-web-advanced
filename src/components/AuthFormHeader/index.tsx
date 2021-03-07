import React from "react";
import { useHistory } from "react-router-dom";

import { PageHeader, GoBackButton, GoBackIcon } from "./styles";

const AuthFormHeader: React.FC = () => {

	const history = useHistory();

	function handleGoBack(){
		history.goBack();
	}

	return (		
		<PageHeader>
			<GoBackButton onClick={handleGoBack}>
				<GoBackIcon />
			</GoBackButton>
		</PageHeader>
	);
}

export default AuthFormHeader;