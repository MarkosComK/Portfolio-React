import * as S from "./style"
import * as B from "../styles/styledButtons"

import mapIcon from "./assets/map-icon.png"

interface Props {
    display: boolean,
    zIndex: number,
    handleChangeDisplay: (value: number) => void,
    isMobile: boolean
}

function Maps({display, zIndex, handleChangeDisplay, isMobile}: Props) {
  return (
    <S.Maps display={display} zIndex={zIndex}>
        <S.Header isMobile={isMobile}>
            <B.RButton onClick={() => handleChangeDisplay(5)}></B.RButton>
            <div>
              <img src={mapIcon} alt="" />
              Praça da alegria - Porto, PT
            </div>
            <div>icon</div>
        </S.Header>
        <S.Main>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3004.5604637506854!2d-8.60150274852157!3d41.14412017918568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2464ebe15c4d45%3A0x1029bb7ef71c485e!2sPra%C3%A7a%20da%20Alegria%2062%2C%20Porto!5e0!3m2!1sen!2spt!4v1681121353902!5m2!1sen!2spt" loading="lazy" ></iframe>
        </S.Main>
        {/* <S.Form action="">
            <button type="submit">click</button>
            <input type="text" />
        </S.Form> */}
    </S.Maps>
  )
}

export default Maps
