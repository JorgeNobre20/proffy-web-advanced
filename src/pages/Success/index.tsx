import React, { ReactNode, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
	MainContainer,
	Content,
	PatternImg,
	SuccessIcon,
	Title,
	Subtitle,
	NextPageButton
} from "./styles";

interface RouteProps {
	action: string;
}

interface PageContent {
	title: string;
	subtitle: ReactNode;
	nextPagePath: string;
	actionButtonText: string;
}

const content: PageContent[] = [
	{
		title: "Cadastro concluído",
		subtitle: (
			<span>
				Agora você faz parte da plataforma Proffy.
				<br />
				Tenha uma ótima experiência.
			</span>
		),
		nextPagePath: "/login",
		actionButtonText: "Fazer Login"
	},
	{
		title: "Redefinição enviada!",
		subtitle: (
			<span>
				Boa, agora é só checar o e-mail que foi enviado para você
				<br />
				redefinir sua senha e aproveitar os estudos
			</span>
		),
		nextPagePath: "/login",
		actionButtonText: "Voltar ao Login"
	},
	{
		title: "Cadastro salvo!",
		subtitle: (
			<span>
				Tudo certo, seu cadastro está na nossa lista de professores.
				<br />
				Agora é só ficar de olho no seu WhatsApp.
			</span>
		),
		nextPagePath: "/teachers",
		actionButtonText: "Acessar à lista"
	}
];

const Success: React.FC = () => {
	const history = useHistory();
	const { action } = history.location.state as RouteProps;

	const [pageContent, setPageContent] = useState<PageContent>(
		{} as PageContent
	);

	useEffect(() => {
		switch (action) {
			case "@CreateUser":
				setPageContent(content[0]);
				break;
			case "@PasswordRecovery":
				setPageContent(content[1]);
				break;
			case "@TeacherRegistration":
				setPageContent(content[2]);
				break;
		}
	}, [action]);

	return (
		<MainContainer>
			<PatternImg />

			<Content>
				<SuccessIcon />
				<Title>{pageContent.title}</Title>
				<Subtitle>{pageContent.subtitle}</Subtitle>

				<NextPageButton
					to={{
						pathname: pageContent.nextPagePath
					}}
				>
					{pageContent.actionButtonText}
				</NextPageButton>
			</Content>
		</MainContainer>
	);
};

export { Success };
