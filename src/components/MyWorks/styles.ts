import styled from "styled-components";

export const Container = styled.section`
    min-height: 100vh;
    max-width: 100vw;
    padding-top: 100px;
    border: transparent;
    z-index: 2;
    background-color: white;
`;
export const Content = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 20px;
    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        & h1 {
            font-weight: bold;
            font-size: 38px;
            color: #001427;
            @media (max-width: 678px) {
                font-size: 35px;
            }
        }
        & p {
            font-size: 18px;
            font-family: "Roboto", sans-serif;
            font-weight: 300;
            color: #001427;
            width: 70%;
            @media (min-width: 1024px) {
                width: 100%;
            }
        }
    }
`;

export const Demonstration = styled.aside`
    padding: 0px 10px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    max-width: 100%;
    padding-bottom: 16px;
    @media screen and (min-width: 884px) {
        grid-template-columns: repeat(4, 1fr);
    }
    @media screen and (max-width: 884px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 599px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
