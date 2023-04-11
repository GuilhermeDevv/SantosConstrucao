import styled from "styled-components";
import works from "../../img/works.jpg";

export const Container = styled.section`
    height: calc(100vh - 180px);
    max-width: 100vw;
`;

export const Content = styled.div`
    position: relative;
    overflow: hidden;
    height: 100%;
    max-width: 100%;
    background-image: url(${works});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    &::after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: transparent;
        background-image: linear-gradient(
            -20deg,
            #000000 39%,
            rgba(242, 41, 91, 0) 100%
        );
        opacity: 0.79;
        transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
    }
`;
export const Waves = styled.div`
    position: absolute;
    z-index: 3;
    max-width: 100vw;
    bottom: -1px;
    background-color: transparent;
    transform: rotate(180deg);
    & svg {
        width: calc(100vw + 90px);
        fill: white;
    }
`;

export const Info = styled.div`
    z-index: 1;
    position: absolute;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 50vh;
    gap: 44px;

    & div {
        gap: 8px;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        & span {
            font-weight: bold;
            font-size: 18px;
        }
        & h2 {
            font-size: 39px;
            font-weight: bold;
        }
        & span {
            font-size: 18px;
            font-family: "Roboto", sans-serif;
            width: 100%;
            @media (min-width: 1024px) {
                width: 70%;
            }
        }
    }

    & button {
        display: flex;
        align-items: center;
        font-weight: bold;
        text-align: center;
        font-size: 16px;
        text-transform: uppercase;
        border: none;
        background-color: red;
        border-radius: 30px;
        padding: 15px 70px;
        transition: all 0.5s;
        @media (max-width: 767px) {
            padding: 15px 50px;
        }
        @media (max-width: 320px) {
            padding: 15px 30px;
        }
        & svg,
        path {
            position: relative;
            right: -50px;
            min-height: 2px;
            @media (max-width: 767px) {
                right: -30px;
            }
            @media (max-width: 320px) {
                right: -15px;
            }
        }
        &:hover {
            scale: 1.05;
        }
    }
`;
