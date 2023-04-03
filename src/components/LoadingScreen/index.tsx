import * as S from './style'
import logo from './favicon.png'

interface Props {
    display: boolean
}

function LoadingScreen({display}: Props) {
    return (
        <S.LoadingScreen display={display}>
            <i><img src={logo} alt="" /></i>
            <div></div>
        </S.LoadingScreen>
    )
}

export default LoadingScreen