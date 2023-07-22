import styled from 'styled-components'
import * as A from '../styles/animations'

interface Props {
    isMobile: boolean,
    hideBar: boolean
}

export const Nav = styled.nav<Props>`
    position: absolute;
    bottom: 10px;
    z-index: 1000;

    margin: 0 50%;
    transform: ${props => props.hideBar ? `translate(-${50}%, ${100}%)` : `translate(-${50}%)`};
    background: var(--theme-bg-color);
    border-radius: 16px;
    box-shadow: 0 4px 30px var(--border-color);
    backdrop-filter: blur(12.4px);
    -webkit-backdrop-filter: blur(12.4px);
    border: 1px solid var(--border-color);
    animation: ${A.TaskBar} 0.5s ease;

    ul{
        display: flex;
        align-items: center;
        // gap: 12px;

        list-style-type: none;
        height: 75px;

        li{
            display: flex;
            justify-content: center;
            align-items: center;

            width: 60px;
            height: 60px;
            transition: 0.2s;
            img{
                width: 60px;
                transition: 0.2s;
            }
            a{
                height: 60px;
            }
            &:hover{
                margin-left: ${props => props.isMobile ? `${0}px` : `${10}px`};
                margin-right: ${props => props.isMobile ? `${0}px` : `${10}px`};
                cursor: pointer;
            }
        }
        li:first-child{
            margin-left: 13px;
        }
        
        li:last-child{
            margin-right: 13px;
        }

}

`

export const MobileButton = styled.button<Props>`
    display: none;
    display: ${props => props.hideBar ? "block" : "none"};
    position: absolute;
    left: 50%;
    transform: translate(-50%, -120%);
    width: 50px;
    height: 50px;

    background-color: #000;
    border-radius: 50%;
`