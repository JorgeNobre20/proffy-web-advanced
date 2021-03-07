import React,{ ReactNode } from "react";

import { FormTitleWrapper } from "./styles";

interface Props{
	content: ReactNode;
	hasDescription?: boolean;
}

const FormTitle: React.FC<Props> = ({ content, hasDescription }) => {
	return (
		<FormTitleWrapper 
			hasDescription={hasDescription ?? false} >
			{content}
		</FormTitleWrapper>
	)
}

export default FormTitle;