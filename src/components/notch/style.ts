import styled from "styled-components";

interface Props {
    isMobile: boolean
}

export const TopBar = styled.nav<Props>`
    display: ${props => props.isMobile ? "flex" : "none"};
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 60px;

    position: absolute;
    top: 0;
`

export const Notch = styled.div`
    width: 122px;
    height: 36px;
    background-color: #000;

    border-radius: 32px;
    z-index: 100;
`

export const Hours = styled.div`
    font-size: 14px;
    position: absolute;
    left: 27px;
    z-index: 100;
`

export const Icon = styled.img`
    position: absolute;
    right: 27px;
    z-index: 100;
`