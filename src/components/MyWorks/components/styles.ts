import styled, { keyframes } from "styled-components";

interface ContentProps {
    imageUrl: string;
}

const upAnimation = keyframes`
  0% {
    scale: 0;
  }
  100% {
    scale: 1;
  }
`;
export const Container = styled.div`
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    height: 200px;
`;
export const Content = styled.div<ContentProps>`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
`;
