import styled from "styled-components";

interface Props {
    setmenu: boolean;
}

export const Container = styled.header`
    height: 180px;
    width: 100%;
    background-color: #001427;
`;
export const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`;
export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
    height: fit-content;
    align-items: center;
    & span:first-child {
        color: white;
        font-size: 30px;
        font-weight: bold;
        text-transform: uppercase;
    }
    & span:last-child {
        position: relative;
        top: -4px;
        background-color: white;
        padding: 5px 13px;
        color: black;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        border-radius: 4px;
    }
`;
export const Menu = styled.nav`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const MenuDesk = styled.ul`
    display: flex;
    gap: 12px;
    & li a {
        position: relative;
        font-weight: bold;
        font-size: 17px;
        cursor: pointer;
        &::after {
            content: "";
            position: absolute;
            bottom: -1px;
            height: 1px;
            left: 0;
            width: 0%;
            transition: all 0.5s;
            background-color: #61ce70;
        }
        &:hover::after {
            width: 100%;
        }
    }

    @media (max-width: 767px) {
        display: none;
    }
`;
export const MenuMobile = styled.ul`
    @media (min-width: 767px) {
        display: none;
    }
`;
export const MMOBILE = styled.div<Props>`
    display: ${({ setmenu }) => (setmenu ? "flex" : "none")};
    position: fixed;
    background-color: white;
    width: 100%;
    min-height: 100vh;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    overflow: hidden;
    justify-content: start;
    padding-left: 20px;
    padding-top: 80px;

    & h1 {
        color: #363636;
        position: absolute;
        top: 20px;
        left: 20px;
        font-size: 22px;
    }

    & div {
        position: absolute;
        right: 10px;
        top: 10px;
        & svg,
        path {
            color: black;
        }
    }

    & ul {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 90%;
        gap: 8px;

        & li:not(:first-child) {
            & a {
                color: #aaaaaa;
                &:hover {
                    color: #030303;
                }
            }
        }
        & li {
            & a {
                font-size: 16px;
                text-align: start;
                font-family: "Roboto";
                color: #030303;
                z-index: 5;
                border-bottom: 1px solid gray;
                display: block;
            }
        }
    }
`;
export const ContactHeader = styled.div`
    border-left: solid 1px gray;

    & a {
        transition: all 0.5s;
        margin-left: 12px;
        border: none;
        background-color: #61ce70;
        font-weight: bold;
        font-size: 16px;
        padding: 8px 13px;
        border-radius: 20px;
        display: flex;
        align-items: center;
        gap: 10px;
        &:hover {
            background-color: red;
        }
        & svg,
        path {
            min-height: 20px;
        }
    }
`;
