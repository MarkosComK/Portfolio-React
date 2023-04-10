import styled, { keyframes } from "styled-components";

const lineUp = keyframes`
    0% {
        opacity: 0;
        transform: translateY(80%);
    }
    20% {
        
    }
    50% {
        opacity: 1;
        transform: translateY(0%);
    }
    100% {
        opacity: 1;
        transform: translateY(0%);
    }
`
const fadeAnimation = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

interface Props {
    display: boolean
}

export const Presentation = styled.div<Props>`
    width: 100%;
    height: 100vh;

    display: ${props => props.display ? `flex` : `none`};
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
interface MessageProps {
    showAnimation: boolean;
}
  
export const Message = styled.h1<MessageProps>`
opacity: 0;
animation: ${({ showAnimation }) => (showAnimation ? lineUp : "none")} ease-in 1.5s forwards;
`;