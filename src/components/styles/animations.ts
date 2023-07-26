import { keyframes } from "styled-components";


export const ShowContent = keyframes`
    0%{
        transform: translateY(100%);
        opacity: 0;
    }
    100%{
        transform: translateY(0);
        opacity: 1;
    }
`
export const Screen = keyframes`
    0%{
        transform: scale(0);
    }
    100%{
        transform: scale(1);
    }
`

export const ScreenOut = keyframes`
    0%{
        transform: scale(1);
    }
    100%{
        transform: scale(0);
    }
`

export const TaskBar = keyframes`
    0%{
        transform: translateY(0%);
    }
    100%{
        transform: translateY(-100%);
    }
`
