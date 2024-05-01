import styled from "styled-components";

export const  Container = styled.div `
background-color: black;
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: center;
justify-content: center;


`

export const  ContainerItens = styled.div `
display: flex;
flex-direction: column;
align-items: center;
border:1px solid #DCDCDC; 
width: 24%;
height: 800px;
border-radius: 14px;
cursor: pointer;

box-shadow: 0px 2px 5px  0px white, 0px 2px 10px #FF8C00 ; 



`

export const  H1 = styled.h1`
margin: 60px 0;
font-size: 30px;
color: white;

`


export const  Input = styled.input`
width: 342px;
height: 58px;
border-radius: 14px;
border: none;
outline: none;
padding-left: 25px;
margin-bottom: 45px;
font-size: 20px;
font-weight: 400;
line-height: 28.13px;
font-style: normal;
color:black;
`

export const  Button = styled.button`

width: 342px;
height: 58px;
background-color:#FF8C00 ;
border: none;
font-size: 20px;
font-weight: 1000;
cursor: pointer;


&:hover{
    opacity: 0.8;
    }
    
    &:hover{
    opacity: 0.5;}

`
export const  Image = styled.img`
width: 220px;
margin: 40px;



`
