import styled from "styled-components";


export const Main = styled.main`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100vh;
background-image: url(https://wallpapercave.com/wp/wp2561072.jpg);
background-repeat: no-repeat;
background-size: cover;

@media (max-width: 720px){
   
    height:100vh;

}
`

export const H1 = styled.h1`
width: 20vw;
height: 4vw;
text-align:end;
background-color: black;
color: white;
border-top-right-radius:8px;
border-top-left-radius:8px;
padding-right:20px;
font-size: 60px;

@media (max-width: 720px){
    width:90vw;
    height:10vh;

}
`


export const Div = styled.div`
width:20vw;
height:45vh;
background-color: #353537;
display:flex;
justify-content:space-around;
flex-direction:column;
align-items:center;
border-bottom-left-radius:8px;
border-bottom-right-radius:8px;
padding-top:5px;

@media (max-width: 720px){
    width:90vw;
    height:60vh;

}
`

export const DivContainer1 = styled.div`

@media (max-width:720px){
    width: 80vw;
    display: flex;
    
}
`

export const Button = styled.button`
width:70px;
height:70px;
margin:5px;
margin-bottom: 10px;
border:none;
font-size:20px;
border-radius:12%;
background-color: #adc8cbf8;
color: #81400e;
font-weight:bold;
transition:0.8s;
@media (max-width:720px){
    width: 40vw;
    height: 10vh;
    transition: none;
    

    &:hover{
        transform: none;
         background-color: #adc8cbf8;
         color: #81400e;;
    }
}

@media (min-width: 721px) {
    &:hover {
      cursor: pointer;
      transform: scale(1.1);
      color: white;
      background-color: #000000;
    }
  }
`