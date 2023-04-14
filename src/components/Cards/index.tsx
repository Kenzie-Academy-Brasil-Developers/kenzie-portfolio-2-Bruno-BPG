import { StyleCard } from "./style";

import imagen0 from "../../images/imagen0.png";
import imagen1 from "../../images/imagen1.png";
import imagen2 from "../../images/imagen2.png";
import imagen3 from "../../images/imagen3.png";
import imagen4 from "../../images/imagen4.png";
import imagen5 from "../../images/imagen5.png";
import imagen6 from "../../images/imagen6.png";
import imagen7 from "../../images/imagen7.png";

import { FaGithub } from "react-icons/fa";

import { BsFillArrowDownCircleFill } from "react-icons/bs";

import { arrProjetos } from "@/utils/userData";

function Cards2() {
  const arrImagens = [imagen0, imagen1, imagen2, imagen3,imagen4,imagen5,imagen6,imagen7];

  return (
    <StyleCard>
      <h1 className="ajustingTextCenter">Meus projetos</h1>
      <br />

    <div className="conteiner3">
      <div className="conteinerCards">
          {arrProjetos.map((stack, index) => (
            <div key={index} className="card">
              <b className="ajustingTextCenter">{stack.nome}</b>
              <img
                className="imgDeProjeto"
                src={arrImagens[index]}
                alt={stack.nome}
              />
              <div className="CardDescrisao">
                <span >{stack.descrisao}</span>
              </div>
              <br />
              <div>
                <div className="conteiner2">
                  <span>
                    <FaGithub></FaGithub>{" "}
                    <a target="_blank" href={stack.linkGitHub}>Repositorio</a>
                  </span>
                  <span>
                    <BsFillArrowDownCircleFill></BsFillArrowDownCircleFill>{" "}
                    <a target="_blank" href={stack.linkDeploy}>Aplicação</a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>

    </StyleCard>
  );
}

export default Cards2;
