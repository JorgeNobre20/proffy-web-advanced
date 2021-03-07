import React from "react";

import { FormTitleWrapper } from "./styles";

interface Props{
	title: string;
	hasDescription?: boolean;
}

const FormTitle: React.FC<Props> = ({ title, hasDescription }) => {
	return <FormTitleWrapper hasDescription={hasDescription ?? false} >{title}</FormTitleWrapper>
}

export default FormTitle;