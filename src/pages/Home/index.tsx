import React from "react";

import {
	MainContainer,
	HeroSection,
	Header,
	Profile,
	UserImage,
	Username,
	LogoutButton,
	LogoutIcon,
	HeroContainer,
	ImageContainer,
	HomeLogo,
	Hero,
	PageFooter,
	FooterTitle,
	UserActions,
	ConnectionsTotal,
	HeartIcon,
	ButtonsContainer,
	StudyButton,
	StudyIcon,
	GiveClassesButton,
	GiveClassesIcon
} from "./styles";

const Home: React.FC = () => {
	return (
		<MainContainer>
			<HeroSection>
				<Header>
					<Profile>
						<UserImage />
						<Username>Jorge Nobre</Username>
					</Profile>

					<LogoutButton>
						<LogoutIcon />
					</LogoutButton>
				</Header>

				<HeroContainer>
					<ImageContainer>
						<HomeLogo />
					</ImageContainer>

					<ImageContainer isHeroContainer>
						<Hero />
					</ImageContainer>
				</HeroContainer>
			</HeroSection>

			<PageFooter>
				<FooterTitle>
					<h2>Olá, seja bem-vindo.</h2>
					<strong>O que deseja fazer?</strong>
				</FooterTitle>

				<UserActions>
					<ConnectionsTotal>
						<span>Total de conexões 285</span> 
						<span>já realizadas <HeartIcon /></span>
					</ConnectionsTotal>

					<ButtonsContainer>
						<StudyButton>
							<StudyIcon />
							Estudar
						</StudyButton>

						<GiveClassesButton>
							<GiveClassesIcon />
							Dar Aulas
						</GiveClassesButton>
					</ButtonsContainer>
				</UserActions>
			</PageFooter>
		</MainContainer>
	);
};

export { Home };
