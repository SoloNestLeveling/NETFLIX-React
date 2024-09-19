
//-----------------Slider--------------------------

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { motion } from "framer-motion"
import { styled } from "styled-components"

export const TvLeftSliderBtnBox = styled(motion.div)`
    display: flex;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    z-index: 10;
    left: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0,0,0.3);
    backdrop-filter: blur(5px);
    width: 60px;
    height: 100%;

    @media (max-width:970px){
       width: 54px;

    }

    @media (max-width:800px){
       width: 48px;

    }

    @media (max-width:630px){
       width: 40px;

    }

    @media (max-width:500px){
       width: 30px;

    }
`

export const TvRightSliderBtnBox = styled(motion.div)`
 display: flex;
    position: absolute;
    height: 100%;
    opacity: 0;
    pointer-events: none;
    z-index: 10;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color:rgba(0, 0,0,0.3);
    backdrop-filter: blur(5px);
    width: 60px;

    @media (max-width:970px){
       width: 54px;

    }

    @media (max-width:800px){
       width: 48px;

    }

    @media (max-width:630px){
       width: 40px;

    }

    @media (max-width:500px){
       width: 30px;

    }

`

export const TvSliderCircleBox = styled.div`
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: auto;
`


export const TvCircle = styled.div<{ active: boolean }>`
    background-color: ${(props) => props.active ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.6)"};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 5px;

`

export const TvSliderTitle = styled.span`
    font-size: 16px;
    color: rgba(255,255,255,1);
    margin-left: 20px;
`

export const TvShowContainer = styled.div<{ maxIndex: number }>`
   position: relative;
   margin-top: 50px;
   width: 100%;
   padding: 0 20px;
   transition: all 0.5s linear;

   &::after {
      content: "";
      display: block;
     padding-bottom: 24.9%;
   }

   &:hover{
    ${TvLeftSliderBtnBox}{
        opacity: ${(props) => props.maxIndex === 0 ? 0 : 1};
        pointer-events: ${(props) => props.maxIndex === 0 ? "none" : "auto"};
    }

    ${TvRightSliderBtnBox}{
        opacity: ${(props) => props.maxIndex === 3 ? 0 : 1}  ;
        pointer-events: ${(props) => props.maxIndex === 3 ? "none" : "auto"}  ;
    }

    ${TvSliderCircleBox}{
        opacity: 1;
    }
}
  
`

export const TvRow = styled(motion.div)`
   display: grid;
   position: absolute;
    grid-template-columns: repeat(6,1fr);
    gap: 10px;
    width: 100%;


`


export const TvBox = styled(motion.div) <{ bgImage: string }>`
    width: 100%;
    height: auto;
    background-image:url(${(props) => props.bgImage});
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;

    &::after{
        content: "";
        display: block;
        padding-bottom: 150%;
    }
    &:first-child{
        transform-origin: left center;
    }

    &:last-child{
        transform-origin: right center;
    }

`



export const TvRightBtn = styled(FontAwesomeIcon)`
color: white;
    font-size: 20px;
    @media (max-width:630px){
       font-size: 16px;

    }
`

export const TvLeftBtn = styled(FontAwesomeIcon)`
color: white;
    font-size: 20px;
    @media (max-width:630px){
       font-size: 16px;

    }
`

export const TvTitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: -26px;
    width: 100%;
    height: auto;
    margin-bottom: 10px;
`