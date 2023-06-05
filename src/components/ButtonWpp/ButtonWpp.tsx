import React from "react";
import { Container, Content } from "./styles";
import { MdWhatsapp } from "react-icons/md";

export function ButtonWpp() {
    return (
        <Container>
            <Content>
                <span>Estou online</span>
                <div>
                    <a
                        href="https://wa.me/5521991801884?text=Ol%C3%A1%2C+gostaria+de+fazer+um+or%C3%A7amento."
                        target="_blank"
                        rel="noreferrer"
                    >
                        <MdWhatsapp size={20} />
                        <span>Orçamento por WhatsApp</span>
                    </a>
                </div>
            </Content>
        </Container>
    );
}
