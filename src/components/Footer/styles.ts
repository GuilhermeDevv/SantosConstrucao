import styled from "styled-components";
import footer from "../../img/footer.jpg";

export const Container = styled.footer`
    width: 100%;
    height: 355px;
`;
export const Content = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${footer});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 355px;
    width: 100%;
`;
export const InfoFooter = styled.div`
    position: relative;
    min-width: 100%;
    height: 355px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 30px;
    z-index: 2;
    & h1 {
        font-size: 38px;
    }
    & span {
        text-align: center;
        font-family: "Roboto";
        font-size: 18px;
    }
    & button {
        border: none;

        transition: all 0.3s;
        gap: 10px;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        background-color: #61ce70;
        padding: 15px 30px;
        border-radius: 20px;
        & a {
            display: flex;
            gap: 16px;
        }
        &:hover {
            background-color: #393d40;
        }
        & svg,
        path {
            min-height: 20px;
        }
    }
`;
export const Color = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
    background-color: #001427;
    opacity: 0.51;
`;
export const Copyright = styled.div`
    height: 100%;
    min-width: 100%;
    text-align: center;
    display: flex;
    align-items: end;
    justify-content: end;
    & div {
        background-color: #61ce70;
        width: 100%;
        height: 58px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & span {
            color: #001427;
            font-size: 16px;
            font-family: "Roboto";
            & span {
                margin-left: 2px;
                color: white;
            }
        }
    }
`;
