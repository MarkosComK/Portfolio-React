import styled from "styled-components";

interface Props {
    display: boolean
    zIndex: number
}

export const Safari = styled.section<Props>`
    position: relative;
    display: ${props => props.display ? `flex` : `none`};
    z-index: ${props => props.zIndex};
    border-radius: 14px;
    width: 800px;
    height: 500px;
    background-color: black;
`

interface HProps {
    isMobile: boolean
}

export const Header = styled.header<HProps>`
    border: 1px solid red;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: ${props => props.isMobile ? `${100}%`: `${800}px`};
    left: ${props => props.isMobile ? `${0}`: `${0}px`};
    height: 49px;
    z-index: 100000000+1 !important;
    input{
        position: relative;
        z-index: 1000;
    }
`