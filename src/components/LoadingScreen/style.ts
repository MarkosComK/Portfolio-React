import styled from "styled-components";

interface Props{
    display: boolean
}

export const LoadingScreen = styled.div<Props>`
    display: ${props => props.display ? "block" : "none"};
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    z-index: 10000;
    i{
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate(-50%, -50%);
        img{
            width: 180px;
            height: 200px;
        }
    }
    div{
        width: 400px;
        height: 4px;
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, -70%);
        background-color: #ffffff4d;
        border-radius: 4px;
        &::after{
            content: "  ";
            display: block;
            width: 100%;
            height: 4px;
            background-color: #fff;
            border-radius: 4px;
            animation: load 5s linear;
        }
    }
    @keyframes load {
        0% {
            width: 0;
        }
        10% {
            width: 5%;
        }
        20% {
            width: 12%;
        }
        30% {
            width: 20%;
        }
        40% {
            width: 29%;
        }
        50% {
            width: 39%;
        }
        60% {
            width: 50%;
        }
        70% {
            width: 62%;
        }
        80% {
            width: 75%;
        }
        90% {
            width: 89%;
        }
        100% {
            width: 100%;
        }
    }
`