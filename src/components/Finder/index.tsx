import { useState } from 'react'
import * as S from './style'
import * as B from '../styles/styledButtons'
import leftArrow from './finder-icons/left-arrow.png'
import rightArrow from './finder-icons/right-arrow.png'
import search from './finder-icons/search.png'
import applicationIcon from './finder-icons/application.png'
import imagesIcon from './finder-icons/images.png'
import airdropIcon from './finder-icons/airdrop.png' 
import desktopIcon from './finder-icons/desktop.png' 
import documentsIcon from './finder-icons/documents.png'
import downloadsIcon from './finder-icons/downloads.png'
import driveIcon from './finder-icons/drive.png'


// about images
import profileImg from './images/me-art.png'

// work images

interface Props {
    display: boolean,
    zIndex: number,
    handleChangeDisplay: (value: number) => void,
    isMobile: boolean
}

function Finder({display, zIndex, handleChangeDisplay, isMobile}: Props) {
    const [content, setContent] = useState<string>('about')

  return (
    <S.Finder isMobile={isMobile} display={display} zIndex={zIndex}>
      <S.Header isMobile={isMobile}>
        <div>
            <img src={leftArrow} alt="" />
            <img src={rightArrow} alt="" />
        </div>
        <p>About</p>
        <div>
            <img src={search} alt="" />
        </div>
        <button onClick={() => setContent('about')}><img src={applicationIcon} alt="" />About</button>
        <button onClick={() => setContent('work')}><img src={imagesIcon} alt="" />Work</button>
      </S.Header>
      <section>
        <S.FinderSidebar isMobile={isMobile}>
            <S.FinderButtons>
                    <B.RButton onClick={() => handleChangeDisplay(3)}></B.RButton>
            </S.FinderButtons>
            <div>
                <S.Favorites>
                    <header>
                        <p >Favorites</p>
                    </header>
                    <ul >
                        <li onClick={() => setContent('about')}><img src={applicationIcon} alt="" />About</li>
                        <li onClick={() => setContent('work')}><img src={imagesIcon} alt="" />Work</li>
                        <li><img src={documentsIcon} alt="" />Documents</li>
                        <li><img src={airdropIcon} alt="" />AirDrop</li>
                        <li><img src={desktopIcon} alt="" />Desktop</li>
                        <li><img src={downloadsIcon} alt="" />Downloads</li>
                    </ul>
                </S.Favorites>
                <S.Drive>
                    <ul>
                        <header>
                            <p >Drive</p>
                        </header>
                        <li><img src={driveIcon} alt="" />icloud</li>
                    </ul>
                </S.Drive>
                <S.FolderSize>
                    <header>
                        <p >Folder size</p>
                    </header>
                    <ul >
                        <button id="smallBtn" ><li>Small</li></button>
                        <button id="mediumBtn" ><li >Medium</li></button>
                        <button id="bigBtn" ><li >Big</li></button>
                    </ul>
                </S.FolderSize>
            </div>
        </S.FinderSidebar>
      </section>
      <S.FinderMain>
        <section>
            {/* this section should receive the content dynamically it`s in progress*/}
            {showContent(content)}
        </section>
      </S.FinderMain>
    </S.Finder>
  )
}


function showContent(value: string){
    if(value === "about"){
        return (
            <div>
                <h1>Hey, are you looking for a front end Web-Developer?</h1>
                <S.ProfileWrap>
                    <img src={profileImg} alt="" />
                    <div>
                        <p><strong>Markos Vinicius</strong></p>
                        <p>Web-developer from Brazil, based in Portugal</p>
                    </div>
                </S.ProfileWrap>
                <S.TextWrap>
                    <p>
                        I am a creative front-end developer who is passionate about art, technology, 
                        and music. My studies in programming began a few years ago, and since then, 
                        I have ventured into all aspects related to it - from computer assembly and 
                        maintenance to programming. Along the way, I discovered that programming allows 
                        me to use my creativity and intuition to create impressive projects.
                    </p>
                    <p>
                        Currently, I am focused on developing my skills in front-end, where I can align 
                        my best skills, including creativity, digital art, UX/UI, Photoshop, Adobe 
                        Illustrator, and Figma. I believe that developing front-end applications is 
                        the best way to discover my full potential and become a complete developer. 
                        If you are looking for a passionate front-end developer, I am 
                        here to help!
                    </p>
                    <div>
                        <p>
                            Remember:
                        </p>
                        <p>
                            Everything happens for a reason. 
                        </p>
                        <p>
                            What is yours for being here?
                        </p>
                    </div>
                    <S.Icons>
                        <a target="_blank" href="https://github.com/MarkosComK ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"/>
                            </svg>
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/markos-soares/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                    </S.Icons>
                </S.TextWrap>
            </div>
        )
    } else if (value === "work"){
        return (
            <S.Work>
                <a href="https://markoscomk.github.io/TyperSpace/" target="_blank">
                    <div></div>
                    <S.Folder>
                        {/* image inserted in styled component */}
                        <S.Svgs>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Type=Default, showSymbol=True, showText=False">   <g id="symbol">    <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M71.0852 460.819L30 0H481.456L440.327 460.746L255.451 512L71.0852 460.819Z" fill="#E44D26"/>    <path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M255.728 472.824L405.116 431.408L440.263 37.6788H255.728V472.824Z" fill="#F16529"/>   <g id="Union"> <path d="M180.94 208.59H255.728V265.107H129.253L114.009 94.1969H255.728V150.715H175.775L180.94 208.59Z" fill="#EBEBEB"/> <path d="M255.48 355.438L255.728 355.372V414.174L255.468 414.246L139.696 382.107L131.778 293.366H188.513L192.536 338.442L255.48 355.438Z" fill="#EBEBEB"/>   </g>   <g id="Union_2">   <path d="M255.532 94.1969H397.11L392.049 150.715H255.532V94.1969Z" fill="white"/>  <path d="M255.532 265.107V208.59H386.907L385.528 223.766L371.396 382.107L255.532 414.219V355.419L318.567 338.406L325.128 265.107H255.532Z" fill="white"/> </g> </g> </g> </svg>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.0864 460.816L30 0H481.474L440.344 460.741L255.464 512L71.0864 460.816Z" fill="#0071BC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 472.795L405.323 431.748L440.282 38.3764H256.116V472.795Z" fill="#29ABE2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M124.047 207.678L128.996 264.112L256.116 207.678V151.152L124.047 207.678Z" fill="#B3B3B3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M396.906 90.8141L256.116 151.152V207.678L392.052 147.248L396.906 90.8141Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 355.337L255.679 355.403L192.637 338.472L188.518 293.458H131.78L139.698 382.139L255.667 414.249L256.116 414.143V355.337Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 207.678V264.112H325.138L318.864 337.896L256.116 355.386V414.187L371.701 382.077L386.921 207.678H256.116Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 207.678H124.047L128.996 264.112H256.116V207.678Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 147.248V90.8141H255.543H114.013L119.021 147.248H256.116Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 90.8141V146.541V147.248H392.052L396.906 90.8141H256.116Z" fill="white"/></svg>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Type=Default"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6 6H506V506H6V6Z" fill="#F7DF1E"/><path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M137.469 423.837L175.732 400.68C183.114 413.768 189.829 424.842 205.936 424.842C221.376 424.842 231.11 418.802 231.11 395.31V235.548H278.097V395.975C278.097 444.641 249.57 466.793 207.95 466.793C170.362 466.793 148.543 447.325 137.468 423.833" fill="black"/><path id="Shape_3" fill-rule="evenodd" clip-rule="evenodd" d="M303.619 418.802L341.878 396.65C351.949 413.098 365.039 425.179 388.196 425.179C407.665 425.179 420.08 415.445 420.08 402.02C420.08 385.91 407.327 380.203 385.846 370.809L374.102 365.771C340.202 351.341 317.714 333.217 317.714 294.955C317.714 259.714 344.564 232.862 386.519 232.862C416.391 232.862 437.871 243.267 453.308 270.454L416.724 293.947C408.668 279.516 399.945 273.811 386.52 273.811C372.759 273.811 364.032 282.537 364.032 293.947C364.032 308.044 372.759 313.751 392.895 322.478L404.641 327.512C444.581 344.63 467.069 362.081 467.069 401.348C467.069 443.641 433.842 466.797 389.204 466.797C345.572 466.797 317.379 445.989 303.62 418.802" fill="black"/></g></svg>
                        </S.Svgs>
                    </S.Folder>
                </a>
                <a href="https://markoscomk.github.io/front-end-mentor-solutions/calculator-app-main/" target="_blank">
                    <S.Folder>
                        {/* image inserted in styled component */}
                        <S.Svgs>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Type=Default, showSymbol=True, showText=False"><g id="symbol"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M71.0852 460.819L30 0H481.456L440.327 460.746L255.451 512L71.0852 460.819Z" fill="#E44D26"/><path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M255.728 472.824L405.116 431.408L440.263 37.6788H255.728V472.824Z" fill="#F16529"/><g id="Union"><path d="M180.94 208.59H255.728V265.107H129.253L114.009 94.1969H255.728V150.715H175.775L180.94 208.59Z" fill="#EBEBEB"/><path d="M255.48 355.438L255.728 355.372V414.174L255.468 414.246L139.696 382.107L131.778 293.366H188.513L192.536 338.442L255.48 355.438Z" fill="#EBEBEB"/></g><g id="Union_2"><path d="M255.532 94.1969H397.11L392.049 150.715H255.532V94.1969Z" fill="white"/><path d="M255.532 265.107V208.59H386.907L385.528 223.766L371.396 382.107L255.532 414.219V355.419L318.567 338.406L325.128 265.107H255.532Z" fill="white"/></g></g></g></svg>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.0864 460.816L30 0H481.474L440.344 460.741L255.464 512L71.0864 460.816Z" fill="#0071BC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 472.795L405.323 431.748L440.282 38.3764H256.116V472.795Z" fill="#29ABE2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M124.047 207.678L128.996 264.112L256.116 207.678V151.152L124.047 207.678Z" fill="#B3B3B3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M396.906 90.8141L256.116 151.152V207.678L392.052 147.248L396.906 90.8141Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 355.337L255.679 355.403L192.637 338.472L188.518 293.458H131.78L139.698 382.139L255.667 414.249L256.116 414.143V355.337Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 207.678V264.112H325.138L318.864 337.896L256.116 355.386V414.187L371.701 382.077L386.921 207.678H256.116Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 207.678H124.047L128.996 264.112H256.116V207.678Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 147.248V90.8141H255.543H114.013L119.021 147.248H256.116Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 90.8141V146.541V147.248H392.052L396.906 90.8141H256.116Z" fill="white"/></svg>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Type=Default"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6 6H506V506H6V6Z" fill="#F7DF1E"/><path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M137.469 423.837L175.732 400.68C183.114 413.768 189.829 424.842 205.936 424.842C221.376 424.842 231.11 418.802 231.11 395.31V235.548H278.097V395.975C278.097 444.641 249.57 466.793 207.95 466.793C170.362 466.793 148.543 447.325 137.468 423.833" fill="black"/><path id="Shape_3" fill-rule="evenodd" clip-rule="evenodd" d="M303.619 418.802L341.878 396.65C351.949 413.098 365.039 425.179 388.196 425.179C407.665 425.179 420.08 415.445 420.08 402.02C420.08 385.91 407.327 380.203 385.846 370.809L374.102 365.771C340.202 351.341 317.714 333.217 317.714 294.955C317.714 259.714 344.564 232.862 386.519 232.862C416.391 232.862 437.871 243.267 453.308 270.454L416.724 293.947C408.668 279.516 399.945 273.811 386.52 273.811C372.759 273.811 364.032 282.537 364.032 293.947C364.032 308.044 372.759 313.751 392.895 322.478L404.641 327.512C444.581 344.63 467.069 362.081 467.069 401.348C467.069 443.641 433.842 466.797 389.204 466.797C345.572 466.797 317.379 445.989 303.62 418.802" fill="black"/></g></svg>
                        </S.Svgs>
                    </S.Folder>
                </a>
                <a href="https://markoscomk.github.io/pomodoro-clock/" target="_blank">
                    <S.Folder>
                        {/* image inserted in styled component */}
                        <S.Svgs>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Type=Default, showSymbol=True, showText=False"><g id="symbol"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M71.0852 460.819L30 0H481.456L440.327 460.746L255.451 512L71.0852 460.819Z" fill="#E44D26"/><path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M255.728 472.824L405.116 431.408L440.263 37.6788H255.728V472.824Z" fill="#F16529"/><g id="Union"><path d="M180.94 208.59H255.728V265.107H129.253L114.009 94.1969H255.728V150.715H175.775L180.94 208.59Z" fill="#EBEBEB"/><path d="M255.48 355.438L255.728 355.372V414.174L255.468 414.246L139.696 382.107L131.778 293.366H188.513L192.536 338.442L255.48 355.438Z" fill="#EBEBEB"/></g><g id="Union_2"><path d="M255.532 94.1969H397.11L392.049 150.715H255.532V94.1969Z" fill="white"/><path d="M255.532 265.107V208.59H386.907L385.528 223.766L371.396 382.107L255.532 414.219V355.419L318.567 338.406L325.128 265.107H255.532Z" fill="white"/></g></g></g></svg>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.0864 460.816L30 0H481.474L440.344 460.741L255.464 512L71.0864 460.816Z" fill="#0071BC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 472.795L405.323 431.748L440.282 38.3764H256.116V472.795Z" fill="#29ABE2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M124.047 207.678L128.996 264.112L256.116 207.678V151.152L124.047 207.678Z" fill="#B3B3B3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M396.906 90.8141L256.116 151.152V207.678L392.052 147.248L396.906 90.8141Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 355.337L255.679 355.403L192.637 338.472L188.518 293.458H131.78L139.698 382.139L255.667 414.249L256.116 414.143V355.337Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 207.678V264.112H325.138L318.864 337.896L256.116 355.386V414.187L371.701 382.077L386.921 207.678H256.116Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 207.678H124.047L128.996 264.112H256.116V207.678Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 147.248V90.8141H255.543H114.013L119.021 147.248H256.116Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 90.8141V146.541V147.248H392.052L396.906 90.8141H256.116Z" fill="white"/></svg>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Type=Default"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6 6H506V506H6V6Z" fill="#F7DF1E"/><path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M137.469 423.837L175.732 400.68C183.114 413.768 189.829 424.842 205.936 424.842C221.376 424.842 231.11 418.802 231.11 395.31V235.548H278.097V395.975C278.097 444.641 249.57 466.793 207.95 466.793C170.362 466.793 148.543 447.325 137.468 423.833" fill="black"/><path id="Shape_3" fill-rule="evenodd" clip-rule="evenodd" d="M303.619 418.802L341.878 396.65C351.949 413.098 365.039 425.179 388.196 425.179C407.665 425.179 420.08 415.445 420.08 402.02C420.08 385.91 407.327 380.203 385.846 370.809L374.102 365.771C340.202 351.341 317.714 333.217 317.714 294.955C317.714 259.714 344.564 232.862 386.519 232.862C416.391 232.862 437.871 243.267 453.308 270.454L416.724 293.947C408.668 279.516 399.945 273.811 386.52 273.811C372.759 273.811 364.032 282.537 364.032 293.947C364.032 308.044 372.759 313.751 392.895 322.478L404.641 327.512C444.581 344.63 467.069 362.081 467.069 401.348C467.069 443.641 433.842 466.797 389.204 466.797C345.572 466.797 317.379 445.989 303.62 418.802" fill="black"/></g></svg>
                        </S.Svgs>
                    </S.Folder>
                </a>
                <a href="https://markoscomk.github.io/dictionary-web-app/" target="_blank">
                    <S.Folder>
                        {/* image inserted in styled component */}
                        <S.Svgs>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Type=Default, showSymbol=True, showText=False"><g id="symbol"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M71.0852 460.819L30 0H481.456L440.327 460.746L255.451 512L71.0852 460.819Z" fill="#E44D26"/><path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M255.728 472.824L405.116 431.408L440.263 37.6788H255.728V472.824Z" fill="#F16529"/><g id="Union"><path d="M180.94 208.59H255.728V265.107H129.253L114.009 94.1969H255.728V150.715H175.775L180.94 208.59Z" fill="#EBEBEB"/><path d="M255.48 355.438L255.728 355.372V414.174L255.468 414.246L139.696 382.107L131.778 293.366H188.513L192.536 338.442L255.48 355.438Z" fill="#EBEBEB"/></g><g id="Union_2"><path d="M255.532 94.1969H397.11L392.049 150.715H255.532V94.1969Z" fill="white"/><path d="M255.532 265.107V208.59H386.907L385.528 223.766L371.396 382.107L255.532 414.219V355.419L318.567 338.406L325.128 265.107H255.532Z" fill="white"/></g></g></g></svg>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M71.0864 460.816L30 0H481.474L440.344 460.741L255.464 512L71.0864 460.816Z" fill="#0071BC"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 472.795L405.323 431.748L440.282 38.3764H256.116V472.795Z" fill="#29ABE2"/><path fill-rule="evenodd" clip-rule="evenodd" d="M124.047 207.678L128.996 264.112L256.116 207.678V151.152L124.047 207.678Z" fill="#B3B3B3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M396.906 90.8141L256.116 151.152V207.678L392.052 147.248L396.906 90.8141Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 355.337L255.679 355.403L192.637 338.472L188.518 293.458H131.78L139.698 382.139L255.667 414.249L256.116 414.143V355.337Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 207.678V264.112H325.138L318.864 337.896L256.116 355.386V414.187L371.701 382.077L386.921 207.678H256.116Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 207.678H124.047L128.996 264.112H256.116V207.678Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 147.248V90.8141H255.543H114.013L119.021 147.248H256.116Z" fill="#E6E6E6"/><path fill-rule="evenodd" clip-rule="evenodd" d="M256.116 90.8141V146.541V147.248H392.052L396.906 90.8141H256.116Z" fill="white"/></svg>
                            <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Type=Default"><path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M6 6H506V506H6V6Z" fill="#F7DF1E"/><path id="Shape_2" fill-rule="evenodd" clip-rule="evenodd" d="M137.469 423.837L175.732 400.68C183.114 413.768 189.829 424.842 205.936 424.842C221.376 424.842 231.11 418.802 231.11 395.31V235.548H278.097V395.975C278.097 444.641 249.57 466.793 207.95 466.793C170.362 466.793 148.543 447.325 137.468 423.833" fill="black"/><path id="Shape_3" fill-rule="evenodd" clip-rule="evenodd" d="M303.619 418.802L341.878 396.65C351.949 413.098 365.039 425.179 388.196 425.179C407.665 425.179 420.08 415.445 420.08 402.02C420.08 385.91 407.327 380.203 385.846 370.809L374.102 365.771C340.202 351.341 317.714 333.217 317.714 294.955C317.714 259.714 344.564 232.862 386.519 232.862C416.391 232.862 437.871 243.267 453.308 270.454L416.724 293.947C408.668 279.516 399.945 273.811 386.52 273.811C372.759 273.811 364.032 282.537 364.032 293.947C364.032 308.044 372.759 313.751 392.895 322.478L404.641 327.512C444.581 344.63 467.069 362.081 467.069 401.348C467.069 443.641 433.842 466.797 389.204 466.797C345.572 466.797 317.379 445.989 303.62 418.802" fill="black"/></g></svg>
                        </S.Svgs>
                    </S.Folder>
                </a>
                <a href="https://github.com/MarkosComK" target="_blank">
                    <S.Folder>
                        {/* image inserted in styled component */}
                        <S.Svgs>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="githuub"><path fill="#b2b1ff" d="M8.854 21.57a9.91 9.91 0 0 0 6.29.001.493.493 0 0 1-.644-.475c0-.338.013-1.413.013-2.75a2.368 2.368 0 0 0-.675-1.85c2.225-.25 4.562-1.1 4.562-4.938a3.87 3.87 0 0 0-1.025-2.687 3.594 3.594 0 0 0-.1-2.65s-.838-.275-2.75 1.025a9.427 9.427 0 0 0-5 0C7.612 5.958 6.775 6.22 6.775 6.22a3.593 3.593 0 0 0-.1 2.65 3.892 3.892 0 0 0-1.025 2.687c0 3.825 2.325 4.688 4.55 4.938-.368.354-.594.829-.638 1.337a2.137 2.137 0 0 1-2.91-.82l-.002-.005a2.001 2.001 0 0 0-1.538-1.025c-.837.013-.337.475.013.663.451.38.803.865 1.025 1.412.2.563.85 1.638 3.362 1.175 0 .838.013 1.625.013 1.863 0 .259-.185.551-.67.475z"></path><path fill="#6563ff" d="M12 2.083c-5.523 0-10 4.477-10 10 0 4.423 2.875 8.169 6.855 9.488.485.075.67-.216.67-.475 0-.238-.012-1.025-.012-1.863-2.513.463-3.163-.612-3.363-1.175a3.637 3.637 0 0 0-1.025-1.412c-.35-.188-.85-.65-.013-.663.65.07 1.223.453 1.538 1.025l.003.006a2.137 2.137 0 0 0 2.91.82c.043-.51.27-.984.637-1.338-2.225-.25-4.55-1.113-4.55-4.938a3.892 3.892 0 0 1 1.025-2.687 3.594 3.594 0 0 1 .1-2.65s.837-.263 2.75 1.025a9.427 9.427 0 0 1 5 0c1.912-1.3 2.75-1.025 2.75-1.025.37.838.406 1.786.1 2.65a3.87 3.87 0 0 1 1.025 2.687c0 3.838-2.338 4.688-4.562 4.938.482.49.729 1.164.675 1.85 0 1.337-.013 2.412-.013 2.75a.493.493 0 0 0 .643.476C19.124 20.253 22 16.507 22 12.083c0-5.523-4.477-10-10-10z"></path></svg>
                        </S.Svgs>
                    </S.Folder>
                </a>
            </S.Work>
        )
    }
}
export default Finder
