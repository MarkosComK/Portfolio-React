import styled from "styled-components"
import * as A from "../styles/animations"

interface Props {
    display: boolean,
    zIndex: number,
    isMobile: boolean
}

export const Calculator = styled.div<Props>`
    animation: ${A.Screen} 0.5s ease;
    display: ${props => props.display ? "inline" :  "none"};
    position: absolute;

    background-color: var(--theme-bg-color);


    height: ${props => props.isMobile ? `${100}%`: `${400}px`};
    width: ${props => props.isMobile ? `${100}vw`: `${270}px`};
    border-radius: ${props => props.isMobile ? `${0}px` : `${14}px`};
    z-index: ${props => props.zIndex};
    padding-top: ${props => props.isMobile ? `${60}px`: `${0}`};

    /* Glass effect */
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    header{
        display: ${props => props.isMobile ? `none`: "flex"};
    }
    section:nth-child(2){ /* select the screen (S.Calculus) */
        height: ${props => props.isMobile ? `${90}px`: `${79}px`};
    }
    @media (max-width: 1023px) {
        padding-bottom: 60px;
    }
`
export const Header = styled.header`
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 38px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    padding: 0 10px;
    white-space: nowrap;
`

interface CalcProps {
    isMobile: boolean
}

export const Calculus = styled.section<CalcProps>`
    margin-top: ${props => props.isMobile ? `${0}` : `${2}rem`};
	width: 100%;
	height: 5rem;
    div{
        margin-top: 10px;
        padding-right: 1.5rem;
        color: white;
        font-size: 5rem;
        font-weight: 300;
        text-align: right;
        line-height: 0.5;
    }
    p{
        padding-right: 0.5rem;
        padding-top: 16px;
        text-align: right;
        font-size: 1.2rem;
        color: var(--font-color);
    }
`
interface BProps {
    isMobile: boolean
}
export const Buttons = styled.section<BProps>`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2px;
    height: ${props => props.isMobile ? `${80}%`: `${250}px`};
    border-radius: ${props => props.isMobile ? `${0} ${0} ${0} ${0}`: `${0} ${0} ${14}pxx ${14}px`};
    color: var(--font-color);
    button{
        background-color: #626065;
        /* spand the AC and the 0 */
        &:nth-child(1),
        &:nth-child(16){
            grid-column-start: 1;
            grid-column-end: 3;
        }
        /* change color of the [÷, x, -, +, =] buttons */
        &:nth-child(3),
        &:nth-child(7),
        &:nth-child(11),
        &:nth-child(15),
        &:nth-child(18){
            background-color: var(--yellow-btn);
        }
        /* add radius to the [0] */
        &:nth-child(16){
            border-radius: 0 0 0 14px;
        }
        /* add radius to the [=] */
        &:nth-child(18){
            border-radius: 0 0 14px 0;
        }
        &:hover{
            filter: brightness(110%);
        }
    }
`
