import React from "react";
import { Container, Content, Info, Information, Owner, Photo } from "./styles";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { InfoServices } from "./styles";
import Pedreiro from "../../img/Pedreiro.jpg";
import Pedreiro2 from "../../img/Servico-geral-de-pedreiro.jpg";
import Pedreiro3 from "../../img/Servico-de-Acabamento.jpg";
import Pedreiro4 from "../../img/Servico-de-alvenaria.jpg";
export function MoreAbout() {
    return (
        <Container id="company">
            <Content>
                <Owner>
                    <Photo>t</Photo>
                    <Information>
                        <span>Construções e Reformas</span>
                        <h2>Santos Construção</h2>
                        <p>
                            Santos Construção é uma empresa líder na construção
                            civil, oferecendo serviços de alta qualidade e
                            soluções personalizadas. Com equipe experiente e
                            dedicada, buscamos superar expectativas, valorizando
                            excelência em cada etapa do processo. Transformamos
                            ideias em realidade, construindo espaços funcionais
                            e belos. Entre em contato para discutir seus
                            projetos e contar com nossos serviços de qualidade.
                        </p>
                        <div>
                            <button>
                                <a
                                    href="https://wa.me/5521991801884?text=Ol%C3%A1%2C+gostaria+de+tirar+d%C3%BAvidas."
                                    target="_parent"
                                >
                                    Fale conosco
                                </a>
                                <BsFillArrowRightCircleFill size={20} />
                            </button>
                            <button>
                                <a href="#work">Meus trabalhos</a>
                                <BsFillArrowRightCircleFill size={20} />
                            </button>
                        </div>
                    </Information>
                </Owner>
                <Info>
                    <InfoServices>
                        <img src={Pedreiro} alt="" />
                        <p>
                            Serviço de Azulejista: especializado em assentamento
                            de cerâmicas, azulejos e porcelanatos.
                        </p>
                    </InfoServices>
                    <InfoServices>
                        <img src={Pedreiro2} alt="" />
                        <p>
                            Serviços gerais: faço coluna, viga, parede, reboco,
                            rede hidráulica, instalo portas, janelas e reforma
                            de telhados.
                        </p>
                    </InfoServices>
                    <InfoServices>
                        <img src={Pedreiro3} alt="" />
                        <p>
                            Acabamento: assentamento de bancadas (granitos e
                            mármores), instalação de louças e metais.
                        </p>
                    </InfoServices>
                    <InfoServices>
                        <img src={Pedreiro4} alt="" />
                        <p>
                            Alvenaria: tijolos cerâmicos ou de bloco de
                            concreto. Faço alvenarias de vedação ou estrutural.
                        </p>
                    </InfoServices>
                </Info>
            </Content>
        </Container>
    );
}
