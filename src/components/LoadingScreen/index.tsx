import * as S from './style'
import logo from './favicon.png'

interface Props {
    zIndex: boolean
}

function LoadingScreen({zIndex}: Props) {
    return (
        <S.LoadingScreen display={zIndex}>
            <i><img src={logo} alt="" /></i>
            <div></div>
        </S.LoadingScreen>
    )
}

export default LoadingScreen