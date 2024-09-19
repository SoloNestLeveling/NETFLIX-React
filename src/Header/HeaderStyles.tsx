import { motion } from "framer-motion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons"


export const NavContainer = styled.div`
display: flex;
position: fixed;
align-items: center;
z-index: 90;
width: 100%;
height: 70px;
background-color: rgba(0,0,0,0.2);
backdrop-filter: blur(10px);
@media (max-width:970px){
       height: 50px;
    }

`
//-------------------Logo-----------------------

export const LogoBox = styled.div`
display: flex;
align-content: center;
margin-left: 20px;
`

export const Svg = styled(motion.svg)`

@media (max-width:970px){
       width: 100px;
    }

`
export const ImgPath = styled(motion.path)``


//-------------------Menu-----------------------


export const MenuBox = styled.div`
display: flex;
align-content: center;
`

export const Menu = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: auto;
padding: 10px;
@media (max-width:970px){
       width: 80px;
    }


h4{
color: rgba(255,255,255,1);
font-size:20px;
font-weight: 400;
@media (max-width:970px){
       font-size: 16px;
    }

&:hover{
    color: rgba(255, 34, 0, 0.7);
}
}
`

export const StatusLine = styled(motion.span)`
position: absolute;
width: 50px;
height: 6%;
top: 16px;
background-color: #ff0000;
border-radius: 10px;

@media (max-width:970px){
       width: 30px;
       top: 10px;
    }
`

//-------------------Search-----------------------

export const UtilityBox = styled.div`
display: flex;
position: relative;
flex-grow: 1;
align-items: center;
justify-content: end;


`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SearchIcon = styled(motion(FontAwesomeIcon))`
position: absolute;
right: 0px;
top: 10px;
font-size: 20px;
margin-right: 20px;
color: rgba(255,255,255,0.8);

@media (max-width:650px){
     top:4px ;
     font-size: 16px;
    }
`

export const SearchInput = styled(motion.input)`
width: 220px;
height: 40px;
border: 1px solid rgba(255,255,255,0.7);
border-radius: 10px;
padding: 0 40px;
color: white;
background-color:rgba(0,0,0,0.3);
margin-right: 20px;
transform-origin: center right;

@media (max-width:650px){
       
    width: 180px;
    height: 24px;
    border-radius: 5px;
    padding: 0 30px;
    }

&:focus{
    outline: none;
    background-color: rgba(0,0,0,0.5);
}
`

export const LogoImage = styled.img`
    width: 120px;
    height: auto;

    @media (max-width:970px){
       width: 80px;
    }


`