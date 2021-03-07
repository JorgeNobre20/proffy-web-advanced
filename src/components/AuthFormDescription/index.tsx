import React,{ ReactNode } from "react";

import { FormDescription } from "./styles";

interface Props{
	content: ReactNode;
}

const AuthFormDescription: React.FC<Props> = ({ content }) => {
	return (
		<FormDescription>
			{content}
		</FormDescription>
	);
}

export default AuthFormDescription;