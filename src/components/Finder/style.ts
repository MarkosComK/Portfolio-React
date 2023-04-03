import styled from "styled-components";
import typerSpace from './images/typerspace.jpg'
import jsCalculator from './images/javascript-calculator.jpg'
import pomodoro from './images/pomodoro.jpg'
import spaceTourismWebsite from './images/space-tourism-website.jpg'
import dictionaryWebApp from "./images/dictionary-web-app.jpg"
import github from './images/github.jpg'

import * as A from "../styles/animations"

interface Props {
    display: boolean,
    zIndex: number,
    isMobile: boolean
}

export const Finder = styled.div<Props>`
    animation: ${A.Screen} 0.5s ease;
    display: ${props => props.display ? "flex" : "none"};
    position: absolute;
    border: 1px solid rgb(54, 54, 54);
    width: 900px;
    width: ${props => props.isMobile ? `${100}vw`: `${900}px`};
    height: ${props => props.isMobile ? `${70}vh`: `${500}px`};
    background: #1E1E1E;
    border-radius: 10px;
    z-index: ${props => props.zIndex};
    margin-top: ${props => props.isMobile ? `${40}px`: `${0}`};
    section{
        div:nth-child(2){ /**select the div below <S.FinderButtons> */
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
`
interface HProps{
    isMobile: boolean
}

export const Header = styled.header<HProps>`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: ${props => props.isMobile ? `space-around`: `space-between`};
    width: ${props => props.isMobile ? `${100}%`: `${750}px`};
    left: ${props => props.isMobile ? `${0}`: `${150}px`};
    height: 49px;
    z-index: 1;
    p{
        display: ${props => props.isMobile ? "none" : "inline"};
    }
    div{
        display: ${props => props.isMobile ? "none" : "block"};
        &:nth-child(1){ /* select arrows */
            img{
                margin: 0 15px;
            }
        }
        &:nth-child(3){ /* select search */
        img{
                margin: 0 30px;
            }
        }
    }
    button{
        display: ${props => props.isMobile ? "block" : "none"};
        img{
            margin-right: 2px;
        }
    }
`

interface SideBarProps{
    isMobile: boolean
}

export const FinderSidebar = styled.div<SideBarProps>`
    width: 150px;
    height: 498px;
    height: ${props => props.isMobile ? `${100}%`: `${498}px`};
    background: rgba(50, 50, 50, 0.95);
    -webkit-backdrop-filter: blur(48px);
    backdrop-filter: blur(48px);
    border-radius: 10px 0px 0px 10px;
    display: ${props => props.isMobile ? "none" : "flex"};
    flex-direction: column;
    align-items: center;
    ul{
        button{
            width: 100%;
        }
    }
`

export const FinderButtons = styled.div`
    height: 46px;
    display: flex;
    align-items: center;
    width: 80%;
    position: relative;
    left: 1px;
`

export const Favorites = styled.div`
    width: 118px;
    height: 183px;
    header{
            height: 13px;
            font-size: 11px;
            color: #888888;
    }
    li{
        display: flex;
        align-items: center;
        height: 28px;
        border-radius: 7px;
        background-color: rgba(50, 50, 50, 0.95);
        font-size: 13px;
        letter-spacing: 1px;
        img{
            margin: 8px 6px 6px 6px;
        }
        &:hover{
            cursor: pointer;
            filter: brightness(150%);
        }
    }
`
export const Drive = styled.div`
    height: 45px;
    width: 118px;
    ul{
        list-style-type: none;
        header{
            height: 13px;
            font-size: 11px;
            color: #888888;
        }
        li{
            display: flex;
            align-items: center;
            height: 28px;
            border-radius: 7px;
            background-color: rgba(50, 50, 50, 0.95);
            font-size: 13px;
            letter-spacing: 1px;
            width: 110px;
            img{
                margin: 8px 6px 6px 6px;
            }
            &:hover{
                cursor: pointer;
                filter: brightness(150%);
            }
        }
    }
`

export const FolderSize = styled.div`
    height: 157px;
    header{
        height: 13px;
        font-size: 11px;
        color: #888888;
    }
    ul{
        list-style-type: none;
        button{
            display: flex;
            align-items: center;
            width: 100%;
            position: relative;
            left: 1px;
        }
        li{
            display: flex;
            align-items: center;
            height: 28px;
            border-radius: 7px;
            background-color: rgba(50, 50, 50, 0.95);
            font-size: 13px;
            letter-spacing: 1px;
            padding-left: 10px;
            width: 110px;
            img{
                margin: 8px 6px 6px 6px;
            }
            &:hover{
                cursor: pointer;
                filter: brightness(150%);
            }
        }
    }
`

export const FinderMain = styled.main`
    width: 100%;
    overflow: auto;
    padding: 20px;
    text-align: center;
    margin-top: 50px;
    &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        background-color: rgba(30, 30, 30, 0);
    }

    &::-webkit-scrollbar {
        width: 12px;
        background-color: rgba(30, 30, 30, 0);
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #313131;
    }
`
export const ProfileWrap = styled.div`
    animation: ${A.ShowContent} 1s ease;
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
    }
`

export const TextWrap = styled.div`
    animation: ${A.ShowContent} 3s ease;
    text-align: center;
    p:nth-child(1){
        margin-top: 40px;
    }
    p{
        margin: 10px 0;
        color: var(--font-color);
        font-size: 16px;
        line-height: 1.25em;
        padding: 0 0 1em 0;
        text-align: left;
        letter-spacing: 1px;
        font-weight: 300;
    }
    div{
        p{
            margin: 0;
            text-align: center;
        }
    }
 
    a{
        svg{
            fill: white;
            &:hover{
                fill: var(--button-inactive);
            }
        }
    }
`
export const Icons = styled.div`
    width: 100%;
    a:nth-child(1){
        margin-right: 3px;
    }
    a:nth-child(2){
        margin-left: 3px;
    }
`

export const Work = styled.div`
    animation: ${A.ShowContent} 1s ease;
    width: min(700px, 100%);
    margin: 0 auto;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 21vh);
    grid-gap: 10px;
    overflow: hidden;
    a{
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.03);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        transition: transform 0.2s ease-in;
        &:hover{
            transform: scale(0.95);
        }
    }
    & a:nth-child(1){
        animation: ${A.ShowContent} 1s ease;
        background-image: url(${typerSpace});
        grid-row: 1 / span 2;
    }
    & a:nth-child(2){
        animation: ${A.ShowContent} 1.5s ease;
        background-image: url(${jsCalculator});
        grid-column: span 2;
    }
    & a:nth-child(3){
        animation: ${A.ShowContent} 1.7s ease;
        background-image: url(${pomodoro});
        grid-column: span 2;
        grid-row: span 2;
    }
    & a:nth-child(4){
        animation: ${A.ShowContent} 2s ease;
        background-image: url(${dictionaryWebApp});
        grid-column: span 2;
        grid-row: span 2;
    }
    & a:nth-child(5){
        animation: ${A.ShowContent} 2.2s ease;
        background-image: url(${github});
        grid-column: span 2;
        grid-row: span 2;
    }
    & a:nth-child(7), 
      a:nth-child(8),
      a:nth-child(9){
        grid-row: span 2;
    }
`

export const Folder = styled.div`
    background-image: url("https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg");
`