import * as S from "./style"
import * as B from "../styles/styledButtons"
interface Props {
    display: boolean,
    zIndex: number,
    handleChangeDisplay: (value: number) => void,
    isMobile: boolean
}

function Safari({display, zIndex, handleChangeDisplay, isMobile}: Props) {
  return (
    <S.Safari display={display} zIndex={zIndex}>
        <S.Header isMobile={isMobile}>
            <B.RButton onClick={() => handleChangeDisplay(5)}></B.RButton>
            <form action="">
                <button type="submit">click</button>
                <input type="text" />
            </form>
            <div></div>
        </S.Header>
        {/* <iframe src="www." width={800} height={400}></iframe> */}
    </S.Safari>
  )
}

export default Safari
