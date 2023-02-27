import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

import { Stack } from "@/components/Stack";
import { Contacts } from "@/components/Contacts";

import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

import {
  Header,
  HeaderContent,
  StackCards,
  ProjectsArea,
} from "./style";

import Cards2 from "@/components/Cards";

import { StyleHome, StyleCard } from "./style2";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}/my-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <StyleHome>
              <div className="conteinerHome">
                <div className="ajustar1">
                  <img
                    className="imgUser"
                    src="https://avatars.githubusercontent.com/u/91001161?v=4"
                    alt="foto de perfil"
                  />
                </div>
                <span className="ajustar1">
                  Olá, meu nome é Bruno Prado Gomes
                </span>
                <span className="ajustar1">Sou um desenvolvedor</span>
                <span className="ajustar1">
                  Veja aqui minhas principais tecnologias e projetos
                </span>
              </div>
            </StyleHome>

            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>

            <Cards2></Cards2>

        </Container>
      </ProjectsArea>
      {/* <Contacts /> */}
    </main>
  );
};
