import { useRef, useState } from 'react';
import * as S from './style'

interface Props {
  initialX: number,
  initialY: number,
  width: number,
  height: number,
  handleFocus: () => void,
  zIndex: number,
  children: JSX.Element,
  isMobile: boolean,
  setWidth: (value: number) => void,
  setHeight: (value: number) => void
}

interface Position {
    x: number,
    y: number
}

function MoveWindow({ initialX, initialY, width, height, setWidth, setHeight, handleFocus, zIndex, children, isMobile}: Props) {
    const [isDragging, setIsDragging] = useState(false)
    const [position, setPosition] = useState<Position>({ x: initialX, y: initialY })
    const mouseStart = useRef<Position>({ x: 0, y: 0 });
    const mousePrev = useRef<Position>({ x: 0, y: 0 });

    // activate the dragging
    const handleDragOn = (e: React.MouseEvent) => {
        setIsDragging(true)
        mouseStart.current = { x: e.clientX, y: e.clientY }
        mousePrev.current = mouseStart.current
        setWidth(width+1000)
        setHeight(height+1000)
    }
    // desactivate the dragging
    const handleDragOff = (e: React.MouseEvent) => {
        setIsDragging(false)
        setWidth(width-1000)
        setHeight(height-1000)
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        if(isDragging){
            const divx = e.clientX - mousePrev.current.x
            const divy = e.clientY - mousePrev.current.y
            setPosition((prevPosition) => ({
                x: prevPosition.x + divx,
                y: prevPosition.y + divy
            }))
            mousePrev.current = { x: e.clientX, y: e.clientY }
        } 
    }
    if(isMobile){
        return(
            <div>
                {children}
            </div>
        )
    } else{
        return (
            <S.MovableWindow
                top={position.y}
                left={position.x}
                onMouseDown={handleFocus}
                >
                <S.Header 
                    onMouseDown={handleDragOn}
                    onMouseUp={handleDragOff}
                    onMouseMove={handleMouseMove}
                    width={width}
                    height={height}
                    zIndex={zIndex}
                >
                </S.Header>
                {children}
            </S.MovableWindow>
        )
    }
}

export default MoveWindow