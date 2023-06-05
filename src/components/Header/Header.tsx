import React, { useState } from "react";
import {
    ContactHeader,
    Container,
    Content,
    Logo,
    Menu,
    MenuDesk,
    MenuMobile,
    MMOBILE,
} from "./styles";
import { MdWhatsapp } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
export function Header() {
    const [menu, SetMenu] = useState<boolean>(false);

    return (
        <Container id="home">
            <Content>
                <Logo>
                    <span>Santos</span>
                    <span>Construção</span>
                </Logo>
                <Menu>
                    <MenuDesk>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#work">Trabalhos</a>
                        </li>
                        <li>
                            <a href="#company">Sobre a empresa</a>
                        </li>
                    </MenuDesk>
                    <MenuMobile>
                        <MMOBILE setmenu={menu}>
                            <div>
                                <IoMdClose
                                    size={30}
                                    onClick={() => {
                                        SetMenu(!menu);
                                    }}
                                />
                            </div>
                            <h1>Santos Construção</h1>
                            <ul>
                                <li>
                                    <a
                                        href="#home"
                                        onClick={() => {
                                            SetMenu(false);
                                        }}
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#work"
                                        onClick={() => {
                                            SetMenu(false);
                                        }}
                                    >
                                        Trabalhos
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#company"
                                        onClick={() => {
                                            SetMenu(false);
                                        }}
                                    >
                                        Sobre a empresa
                                    </a>
                                </li>
                            </ul>
                        </MMOBILE>

                        <FiMenu
                            size={30}
                            onClick={() => {
                                SetMenu(true);
                            }}
                        />
                    </MenuMobile>
                    <ContactHeader>
                        <a href="#">
                            Entrar em contato <MdWhatsapp size={20} />
                        </a>
                    </ContactHeader>
                </Menu>
            </Content>
        </Container>
    );
}
