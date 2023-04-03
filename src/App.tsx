import { useState, useRef, useEffect } from "react";
import GlobalStyle from "./styles/global"
import VideoBackground from "./components/VideoBackground"
import TaskBar from "./components/TaskBar"
import Calculator from "./components/Calculator";
import Todo from "./components/Todo";
import Finder from './components/Finder'
import MoveWindow from "./components/MoveWindow";
import { SmallDevices } from "./style";
import Weather from "./components/Weather";
import TopBar from "./components/TopBar";
import StaticBG from './components/TopBar/backgrounds/background-main.jpg'
import LoadingScreen from "./components/LoadingScreen";

function verifyIsMobile() {
  return navigator.maxTouchPoints > 0 && /Android | iPhone/i.test(navigator.userAgent)
}

function getRandomArbitrary(min: number, max: number) {
  if(!verifyIsMobile()){
    return Math.floor(Math.random() * (max - min) + min) 
  } else {
    return 0
  }
}

function App() {
  // state for loading screen
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 6000)
  }, [])

  // set the Apps display for true or false
  const [calculatorDisplay, setCalculatorDisplay] = useState<boolean>(false)
  const [todoDisplay, setTodoDisplay] = useState<boolean>(false)
  const [finderDisplay, setFinderDisplay] = useState<boolean>(false)
  const [weatherDisplay, setWeatherDisplay] = useState<boolean>(false)
  const windowSize = useRef([window.innerWidth, window.innerHeight])

  // change Background
  const [background, setBackground] = useState(StaticBG)
  const [videoDisplay, setVideoDisplay] = useState(true)

  const handleBgChange = (value: string) => {
    setVideoDisplay(false)
    setBackground(value)
  }

  // set and change draggable area width
  const [width, setWidth] = useState(200)
  const [height, setHeight] = useState(35)
  const [finderWidth, setFinderWidth] = useState(830)

  // set the zIndex of the app 
  const [calculatorIndex, setCalculatorIndex] = useState<number>(0)
  const [todoIndex, setTodoIndex] = useState<number>(0)
  const [finderIndex, setFinderIndex] = useState<number>(0)
  const [weatherIndex, setWeatherIndex] = useState<number>(0)
  const [zIndex, setZindex] = useState<number>(1)

  const handleCalculatorFocus = () => {
    setCalculatorIndex(zIndex+1)
    setZindex(zIndex + 1)
  }
  const handleTodoFocus = () => {
    setTodoIndex(zIndex)
    setZindex(zIndex + 1)
  }
  const handleFinderFocus = () => {
    setFinderIndex(zIndex)
    setZindex(zIndex + 1)
  }
  const handleWeatherFocus = () => {
    setWeatherIndex(zIndex)
    setZindex(zIndex + 1)
  }


  function handleChangeDisplay(value: number) {
    switch(value){
      case 1:
        calculatorDisplay ? setCalculatorDisplay(false) : setCalculatorDisplay(true)
        break
      case 2:
        todoDisplay ? setTodoDisplay(false) : setTodoDisplay(true)
        break
      case 3:
        finderDisplay ? setFinderDisplay(false) : setFinderDisplay(true)
        break
      case 4:
        weatherDisplay ? setWeatherDisplay(false) : setWeatherDisplay(true)
        break
    }
  }
  
  // generate random values to display the apps on the screen
  const percentX: number = windowSize.current[0]/100*20
  const percentY: number = windowSize.current[1]/100*50

  // function to verify mobile devices
  const [isMobile, setIsMobile] = useState<boolean>(false)

  
  return (
    <div onLoad={() => setIsMobile(verifyIsMobile())}>
      <LoadingScreen display={false}/> 
        <VideoBackground isMobile={isMobile} display={videoDisplay} background={background}/>
      <GlobalStyle />
        <header>
          <TopBar handleBgChange={handleBgChange}/>
        </header>
        <main>
          <MoveWindow
          isMobile={isMobile} 
          initialX={getRandomArbitrary(50, windowSize.current[0]- percentX)} //generate a random initialX to the window
          initialY={getRandomArbitrary(50, windowSize.current[1]- percentY)} //generate a random initialY to the window
          width={width} //set the width of the draggable area
          height={height}
          setWidth={setWidth}
          setHeight={setHeight}
          handleFocus={handleCalculatorFocus}
          zIndex={calculatorIndex}
          children={
          <Calculator isMobile={isMobile} display={calculatorDisplay} zIndex={calculatorIndex} handleChangeDisplay={handleChangeDisplay}/>
          }
          />
          <MoveWindow
          isMobile={isMobile} 
          initialX={getRandomArbitrary(50, windowSize.current[0]- percentX)} 
          initialY={getRandomArbitrary(50, windowSize.current[1]- percentY)} 
          width={width}
          height={height}
          setWidth={setWidth}
          setHeight={setHeight}
          handleFocus={handleTodoFocus}
          zIndex={todoIndex}
          children={
          <Todo isMobile={isMobile} display={todoDisplay} zIndex={todoIndex} handleChangeDisplay={handleChangeDisplay} />
          }
          />
          <MoveWindow
          isMobile={isMobile} 
          initialX={getRandomArbitrary(50, windowSize.current[0]- percentX)} 
          initialY={getRandomArbitrary(50, windowSize.current[1]- percentY)} 
          width={finderWidth}
          height={height}
          setWidth={setFinderWidth}
          setHeight={setHeight}
          handleFocus={handleFinderFocus}
          zIndex={finderIndex}
          children={
          <Finder isMobile={isMobile} display={finderDisplay} zIndex={finderIndex} handleChangeDisplay={handleChangeDisplay}/>
          }
          />
          <MoveWindow
          isMobile={isMobile} 
          initialX={getRandomArbitrary(50, windowSize.current[0]- percentX)} //generate a random initialX to the window
          initialY={getRandomArbitrary(50, windowSize.current[1]- percentY)} //generate a random initialY to the window
          width={width} //set the width of the draggable area
          height={height}
          setWidth={setWidth}
          setHeight={setHeight}
          handleFocus={handleWeatherFocus}
          zIndex={weatherIndex}
          children={
          <Weather isMobile={isMobile} display={weatherDisplay} zIndex={weatherIndex} handleChangeDisplay={handleChangeDisplay}/>
          }
          />
        </main>

        <TaskBar 
        handleChangeDisplay={handleChangeDisplay}
        handleCalculatorFocus={handleCalculatorFocus}
        handleTodoFocus={handleTodoFocus}
        handleFinderFocus={handleFinderFocus}
        handleWeatherFocus={handleWeatherFocus}
        isMobile={isMobile}
        />
    </div>
  );
}

export default App;
