import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    background-color: #f2f2f2;
    padding-top: 70px;
`;
export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 64px;
    padding-bottom: 10px;
`;
export const Owner = styled.div`
    max-width: 1100px;
    height: 500px;
    display: flex;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    border: solid 1px gray;
    @media (max-width: 1023px) {
        max-width: 600px;
        width: 90%;
        min-height: 800px;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 30px;
    }
`;
export const Photo = styled.div`
    width: 50%;
    height: 100%;
    background-color: gray;
    @media (max-width: 1023px) {
        width: 100%;
        height: 100%;
    }
`;
export const Information = styled.div`
    width: 50%;
    height: 100%;
    padding: 30px 40px;
    display: flex;
    flex-direction: column;

    gap: 20px;
    align-items: center;
    justify-content: center;
    text-align: start;
    @media (max-width: 1023px) {
        width: 100%;
        height: 100%;
        align-items: center;
        text-align: center;
        padding: 0px;
    }
    & span {
        color: #282828;
        font-weight: bold;
        font-size: 18px;
    }
    & h2 {
        color: #282828;
        font-size: 38px;
        font-weight: bold;
    }
    & p {
        font-family: "Roboto";
        padding: 8px;
        font-size: 18px;
        color: #282828;
        text-align: start;
    }
    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin-top: 30px;
        & button {
            transition: all 0.5s ease 0s;
            margin-left: 12px;
            border: none;
            font-weight: bold;
            font-size: 16px;
            padding: 10px 15px;
            border-radius: 20px;
            display: flex;
            align-items: center;
            gap: 5px;
            & a {
                color: white;
            }
        }

        & button:first-child {
            background-color: red;
            &:hover {
                background-color: gray;
            }
        }
        & button:last-child {
            background-color: transparent;
            border: dashed 0.5px gray;
            &:hover {
                border: solid 0.5px gray;
            }
            & a {
                color: #363636;
            }
            & svg,
            path {
                min-height: 20px;
                color: #363636;
            }
        }
    }
    @media (max-width: 1023px) {
        padding: 0;
    }
`;
export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
`;
export const InfoServices = styled.div`
    border-radius: 20px;
    width: 260px;
    height: 270px;
    background-color: white;
    overflow: hidden;
    & img {
        margin-bottom: 23px;
    }
    & p {
        padding: 0 16px;
        color: #282828;
        font-size: 16px;
        font-family: "Roboto";
        text-align: center;
    }
`;
