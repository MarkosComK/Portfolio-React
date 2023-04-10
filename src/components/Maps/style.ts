import styled from "styled-components";

interface Props {
    display: boolean
    zIndex: number
}

export const Maps = styled.section<Props>`
    position: relative;
    display: ${props => props.display ? `grid` : `none`};
    z-index: ${props => props.zIndex};
    border-radius: 14px;
    width: 900px;
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
    width: ${props => props.isMobile ? `${100}%`: `${800}px`};
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