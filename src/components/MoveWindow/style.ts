import styled from "styled-components"

interface Props {
    top: number,
    left: number,
}
interface Area {
    width: number,
    height: number,
    zIndex: number
}
export const MovableWindow = styled.div<Props>`
    position: absolute;
    top: ${props => `${props.top}px`};
    left: ${props => `${props.left}px`};


    `

export const Header = styled.header<Area>`
    width: ${props => `${props.width}px`};
    height: ${props => `${props.height}px`};

    position: absolute;
    cursor: pointer;

    left: 64px;
    transform: ${props => props.height>1000 ? `translate(${-50}%, ${-50}%)` : 'none'};
    z-index: ${props => props.zIndex+1};
`