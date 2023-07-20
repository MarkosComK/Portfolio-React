import * as S from "./style"
import { useState, useEffect } from "react"
import batteryIcon from '../TopBar/icons/battery-icon.png'


interface Props {
    isMobile: boolean
}

function Notch({isMobile}: Props) {
    const date = new Date
    const [ hours, setHours ] = useState(date.getHours())
    const [ minutes, setMinutes ] = useState(date.getMinutes())

    // display real time user Clock on the screen
    useEffect(() => {
        if (hours == 24){
            setHours(0)
        }
        const intervalId = setInterval(tick, 60000)
        return () => clearInterval(intervalId)

        function tick(){
            if(minutes < 59){
                setMinutes(minutes+1)
            } else {
                setMinutes(0)
                setHours(hours+1)
            }
        }
    }, [minutes])
  return (
    <S.TopBar isMobile={isMobile}>
        <S.Hours>{hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes}</S.Hours>
        <S.Notch>
        </S.Notch>
        <img src={batteryIcon} title="100%" />
    </S.TopBar>
  )
}

export default Notch
