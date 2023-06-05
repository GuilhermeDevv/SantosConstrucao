import styled from "styled-components";

export const Container = styled.aside`
    cursor: pointer;
    box-shadow: 0px 3px 5px 0px rgb(0 0 0 / 50%);
    border-radius: 20px;
    border: 16px;
    padding: 12px 16px 12px 16px;
    background-color: #23a455;
    position: fixed;
    bottom: 40px;
    right: 10px;
    z-index: 4;
    animation: pulse infinite ease-in-out 1s;
    @keyframes pulse {
        0% {
            scale: 1;
        }
        50% {
            scale: 1.05;
        }
        100% {
            scale: 1;
        }
    }
    @media (max-width: 678px) {
        padding: 10px;
    }
`;

export const Content = styled.div`
    position: relative;
    & span:first-child {
        position: absolute;
        background-color: red;
        padding: 3px 10px;
        border-radius: 20px;
        right: 0;
        font-size: 12px;
        top: -28px;
        @media (max-width: 678px) {
            display: none;
        }
    }
    & div:last-child {
        & a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 20px;
            font-size: 16px;
        }
        @media (max-width: 678px) {
            & span {
                display: none;
            }
        }
    }
`;
