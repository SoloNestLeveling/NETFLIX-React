import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Wrapper = styled.div`
height: auto;
background-color: black;

`

//-----------------Banner--------------------------


export const BannerBox = styled.div<{ bgImage: string }>`
    display: flex;
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    background-image: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.2)),url(${(props) => props.bgImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;


  
`

export const Info = styled.div`
    display: flex;
    position: absolute;
    top: 250px;
    justify-content: center;
    flex-direction: column;
    width: auto;
    height: auto;


    
    @media (max-width:1100px){
        top: 180px;
    }

    @media (max-width:950px){
        top: 120px;
    }

    @media (max-width:790px){
        top: 100px;
    }


    @media (max-width: 650px) {
    
        top: 90px;
    
}

@media (max-width: 560px) {
    
    top: 70px;

}


`

export const Title = styled.span`
font-size: clamp(20px, calc(30px + 2vw), 70px);
color: rgba(255,255,255,1);
margin-left: 20px;


@media (max-width: 950px) {
    
    font-size: 40px;

}
@media (max-width:790px){
        font-size: 36px;
    }

@media (max-width: 700px) {
    
    font-size: 30px;

}

@media (max-width: 560px) {
    
    font-size: 22px;

}


`

export const Overview = styled.p`
font-size: clamp(12px, calc(12px + 1vw), 26px);
margin-left: 20px;
margin-top: 30px;
color: rgba(255,255,255,1);
width: 46%;

@media (max-width:1300px){
        margin-top: 20px;
        font-size:20px;
        width: 60%;
    }

@media (max-width:1100px){
        margin-top: 20px;
        font-size:16px;
        width: 60%;
    }



@media (max-width:950px){
        margin-top: 20px;
        font-size:16px;
        width: 60%;
    }

    @media (max-width:790px){
        font-size:14px;
        width: 60%;
    }

@media (max-width: 700px) {
    
    font-size: 10px;
    width: 50%;
    
}

@media (max-width: 560px) {
    
    font-size: 10px;
    width: 60%;
    
}
`

export const DetailBox = styled.div`
    display: flex;
    align-items: center;
    margin-left:20px;
    margin-top: 30px;
     

`

export const Details = styled.p`
    font-size: clamp(5px, calc(5px + 1vw), 20px);
    color: rgba(255,255,255,0.9);
    
`


//----------------------QuickContents------------------

export const Overlay = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background-color: rgba(0,0,0,0.4);

    
`

export const QuickInfoBox = styled(motion.div)`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
z-index: 100;
top: 0;
left: 0;
right: 0;
margin: 0 auto;
border-radius: 10px;
width: 360px;
height: 340px;
background-color: rgb(23, 23, 23);
`

export const QuickContentBg = styled.div<{ bgImage: string }>`
background-image: url(${(props) => props.bgImage}) ;
background-position: top center;
background-repeat: no-repeat;
background-size: cover;
border-top-right-radius: 10px;
border-top-left-radius: 10px;
width: 100%;
height: 160px;

`

export const QuickIconBox = styled.div`
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 50px;
    margin-top: 10px;

`
export const QuickIcon = styled(FontAwesomeIcon)`
    font-size: 36px;
    color: transparent;
    stroke: white;
    stroke-width: 16px;
`

export const LeftIconBox = styled.div`
    display: flex;
    align-items: center;
    width: 160px;


    & > *:first-of-type{

        &:hover{
            color: rgba(255,255,255,0.5);
            stroke: none;
        }
    }


    & > *:nth-of-type(2){
        margin-left: 20px;

        &:hover{
            color: rgba(255,255,255,0.5);
            stroke: none;
        }
    }

    & > *:nth-child(3){
        margin-left: 20px;

        &:hover{
            color: red;
            stroke: none;
        }
    }
`

export const RightIconBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & >*:first-of-type{
        font-size: 28px;
        margin-bottom: 10px;

        &:hover{
            color: rgba(255,255,255,1);
            stroke: none;
        }
    }
    
`

export const QuickInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    width: 300px;
    height: auto;
`

export const QuickInfoTitle = styled.span`
    font-size: 24px;
    color: white;
`

export const Genres = styled(motion.p)`
     margin-top: 16px;
     font-size: 14px;
     color: rgba(255,255,255,0.6);
`
//-------------------------Detail Info --------------------------

export const DetailQuickBox = styled.div<{ bgImage: string }>`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: space-evenly;
    width: 840px;
    height: 660px;
    z-index: 101;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
border-radius: 26px;
background-image: linear-gradient(rgba(0,0,0,0.9),rgba(0,0,0,0.7)) , url(${(props) => props.bgImage}) ;
background-position: top center;
background-size: cover;
background-repeat: no-repeat;
    
`


export const DetailQuickPoster = styled.div<{ poster: string }>`
   
    width: 300px;
    height: 440px;
    border-radius: 10px;
    background-image: url(${(props) => props.poster});
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
`

export const DetailQuickInfoBox = styled.div`
display: flex;
flex-direction: column;
width: 400px ;
height: 540px;

`


export const DetailQuickTitle = styled.span`
    font-size: 30px;
    color: white;
    

    & > *:last-child{
        font-weight: 200;
        color: rgba(255,255,255,0.8);
    }


   
`

export const DetailQuickDirector = styled.span`
margin-top: 20px;
    font-size: 14px;
    color: rgba(255,255,255,0.7);

    & >*:last-child{
        margin-left: 22px;
        font-weight: 300;
        color: rgba(255,255,255,0.9);
    }
`

export const DetailQuickOverView = styled.span`
margin-top: 30px;
    font-size: 14px;
    color: rgba(255,255,255,0.7);
    width: 90%;
    
`

export const DetailQuickRuntime = styled.span`
  margin-top: 20px;
    font-size: 14px;
    color:rgba(255,255,255,0.7);

    & > *:last-child{
        margin-left: 22px;
        font-weight: 300;
        color: rgba(255,255,255,0.9);
    }

`


export const DetailQuickGenre = styled.span`
  margin-top: 20px;
    font-size: 14px;
    color:rgba(255,255,255,0.7);

    & > *:last-child{
        margin-left: 22px;
        font-weight: 300;
        color: rgba(255,255,255,0.9);
    }

`

export const DetailQuickVoteCountBox = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    width: 400px;
    height: auto;
  

    & > *:first-child{
        font-size: 14px;
        color:rgba(255,255,255,0.7)
    }

    & > *:nth-child(2){
        margin-left: 20px;
        font-weight: 300;
        color: rgba(255,255,255,0.9);
    }
`

export const VoteBarBox = styled.div`
    margin-left: 20px;
    width: 150px;
    height: 10px;
    border-radius: 10px;
    background-color: rgba(96, 96, 96, 0.7);
`

export const VoteBarInner = styled.div<{ innerWidth: string }>`
    width: ${(props) => props.innerWidth};
    height: 10px;
    border-radius: 10px;
`


export const ActorsContainer = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    border-radius: 10px;
    width: 400px;
    height: 140px;
    overflow-x: auto;

&::-webkit-scrollbar{
    height: 6px;
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background-color: #565656;
}

&::-webkit-scrollbar-track{
    border-radius: 10px;
background-color: rgba(57, 57, 57, 0.7);
}

`
export const ActorsProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 140px;
`

export const ActorsProfile = styled.div<{ profileImage: string }>`

    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-image: url(${(props) => props.profileImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover;

`

export const ActorsName = styled.span`
margin-top: 5px;
    font-size: 14px;
    color: rgba(255,255,255,0.8);
`


// ---------------------banner Play buttton ----------

export const BtnBox = styled.div`
    display: flex;
    margin-top: 60px;
    align-items: center;
    width: 400px;
    height: auto;

    @media (max-width:1244px){
        & >*:first-child{
            width: 120px;
            height: 46px;
        }

        & >*:last-child{
            width: 180px;
            height: 46px;
        }
    }

    @media (max-width:700px){
        margin-top: 30px;
        & >*:first-child{
            margin-top: 0;
            width: 100px;
            height: 40px;
        }

        & >*:last-child{
            margin-top: 0;
            width: 160px;
            height: 40px;
        }
    }

`

export const PlayBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(0, 0, 0,0.4);
    backdrop-filter: blur(5px);
    border-radius: 6px;
    border: 1px solid rgba(255,255,255,0.8);
    width: 150px;
    height: 60px;
    margin-left: 20px;
 margin-left: 20px;

 &>*:last-child{
    color: white;
    margin-left: 10px;
    font-weight: 200;
    font-size: 20px;
}


@media (max-width:700px) {

    &>*:first-child{
    font-size: 20px;
}

    &>*:last-child{
    font-size: 16px;
}
}

`

export const AddListBtn = styled(PlayBtn)`
background-color: rgba(0,0,0,0.4);
width: 200px;
`