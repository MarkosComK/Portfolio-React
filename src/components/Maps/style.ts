import styled from "styled-components";
import * as A from "../styles/animations"

interface Props {
    display: boolean,
    zIndex: number,
    isMobile: boolean
}

export const Maps = styled.section<Props>`
    animation: ${A.Screen} 0.5s ease;

    position: relative;
    display: ${props => props.display ? `grid` : `none`};
    z-index: ${props => props.zIndex};
    border-radius: 14px;
    width: ${props => props.isMobile ? `${100}vw`: `${900}px`};
    margin-top: ${props => props.isMobile ? `${40}px`: `${0}`};
    height: 500px;
    background-color: var(--bg);

    grid-template-rows: 1fr calc(100% - 50px) 1fr;
`

interface HProps {
    isMobile: boolean
}

export const Header = styled.header<HProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    width: ${props => props.isMobile ? `${100}%`: `${900}px`};
    left: ${props => props.isMobile ? `${0}`: `${0}px`};
    height: 49px;

    input{
        position: relative;
        z-index: 1000;
    }
    div{
        display: flex;
        align-items: center;
        img{
            padding: 4px;
        }
    }
`

export const Main = styled.main`
    iframe{
        width: calc(100% - 1px);
        height: 100%;
        border: none;
        border-radius: 0 0 14px 14px;
    }
`

export const Form = styled.form`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    z-index: 1;

    padding: 4px;

    width: 100%;
    height: 30px;
`