import React from "react";
import { CardWork } from "./components/CardWork";
import { Container, Content, Demonstration } from "./styles";

import one from "../../img/SantosContrucao/01.jpg";
import two from "../../img/SantosContrucao/02.jpg";
import tree from "../../img/SantosContrucao/03.jpg";
import four from "../../img/SantosContrucao/04.jpg";
import five from "../../img/SantosContrucao/05.jpg";
import six from "../../img/SantosContrucao/06.jpg";

export function MyWorks() {
    return (
        <Container id="work">
            <Content>
                <div>
                    <h1>Trabalhos realizados</h1>
                    <p>Confira os últimos trabalhos executados.</p>
                </div>
                <Demonstration>
                    <CardWork imageUrl={one} />
                    <CardWork imageUrl={two} />
                    <CardWork imageUrl={tree} />
                    <CardWork imageUrl={four} />
                    <CardWork imageUrl={five} />
                    <CardWork imageUrl={six} />
                </Demonstration>
            </Content>
        </Container>
    );
}
