import { useState, useEffect } from "react";
import * as S from "./style"

const messages = [
    "Hey, welcome to my website",
    "this is my personal portfolio",
    "here you will find a bit about me",
    "enjoy your experiece and take a break when you finish"
]

interface Props{
    display: boolean
}

function Presentation({display}:Props) {
    const [messageIndex, setMessageIndex] = useState<number>(0);
    const [showAnimation, setShowAnimation] = useState<boolean>(false);
    const [showComponent, setShowComponent] = useState(false)



    useEffect(() => {
        setShowAnimation(true)
    }, [])

    useEffect(() => {
        if (messageIndex < messages.length - 1) {
        setTimeout(() => {
            setMessageIndex(messageIndex + 1)
            setShowAnimation(false)
        }, 6200);
        }
    }, [messageIndex]);

    return (
        <S.Presentation display={display}>
        {messages.map((message, index) => (
            <S.Message key={index} showAnimation={messageIndex === index}>
            {message}
            </S.Message>
        ))}
        </S.Presentation>
    )
}

export default Presentation
