import React from "react";
import { Color, Container, Content, Copyright, InfoFooter } from "./styles";
import { MdWhatsapp } from "react-icons/md";
export function Footer() {
    return (
        <Container>
            <Content>
                <Color />
                <InfoFooter>
                    <h1>Fale comigo agora pelo WhatsApp</h1>
                    <span>
                        Clique no botão abaixo para falar comigo pelo WhatsApp.
                        Faço orçamento de forma rápida e sem compromisso. Somos
                        referência na cidade do Rio de Janeiro, há mais de 10
                        anos.
                    </span>
                    <button>
                        <a href="https://wa.me/5521991801884?text=Ol%C3%A1%2C+gostaria+de+tirar+d%C3%BAvidas.">
                            <MdWhatsapp size={20} /> Fale comigo agora
                        </a>
                    </button>
                    <Copyright>
                        <div>
                            <span>Copyright Santos Construção © 2023</span>
                            <span>
                                Desenvolvedor:
                                <a
                                    href="https://www.linkedin.com/in/guidev-onn/"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <span>GuiDev</span>
                                </a>
                            </span>
                        </div>
                    </Copyright>
                </InfoFooter>
            </Content>
        </Container>
    );
}
