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
height: 600px;
border-radius: 14px;
cursor: pointer;

box-shadow: 0px 2px 5px  0px white, 0px 2px 10px #FF8C00 ;


  @media (max-width: 1191px)  {
    width: 35%;
    padding: 20px;
     height: auto;
       box-shadow: 0px 1px 3px 0px white, 0px 1px 5px #ff8c00;
}
  @media (max-width: 770px)  {
    width: 45%;
    padding: 20px;
     height: auto;
       box-shadow: 0px 1px 3px 0px white, 0px 1px 5px #ff8c00;
}
  @media (max-width: 570px)  {
    width: 70%;
    padding: 20px;
     height: auto;
       box-shadow: 0px 1px 3px 0px white, 0px 1px 5px #ff8c00;
}





`

export const  H1 = styled.h1`
margin: 23px 0;
font-size: 25px;
color: white;
margin-bottom: 50px;

`


export const  Input = styled.input`
width: 260px;
height: 50px;
border-radius: 14px;
border: none;
outline: none;
padding-left: 25px;
margin-bottom: 30px;
font-size: 15px;
font-weight: 400;
line-height: 28.13px;
font-style: normal;
color:black;

@media (max-width: 400px)  {
    width: 230px;
height: 50px;
}
`

export const  Button = styled.button`

width: 250px;
height: 45px;
background-color:#FF8C00 ;
border: none;
font-size: 18px;
font-weight: 800;
cursor: pointer;
border-radius: 15px;


&:hover{
    opacity: 0.8;
    }
    
    &:hover{
    opacity: 0.5;}
    @media (max-width: 400px)  {
    width: 220px;
}

`
export const  Image = styled.img`
width: 160px;
margin: 30px;



`
export const InputLabel =styled.p`
color: white;
padding-right: 180px;
font-size: 14px;

    @media (max-width: 400px)  {
        padding-right: 160px;

}



`
