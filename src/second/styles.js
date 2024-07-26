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
border-radius: 14px;
cursor: pointer;
height: 600px;


box-shadow: 0px 2px 5px  0px white, 0px 2px 10px #FF8C00 ; 
  @media (max-width: 1191px)  {
    width: 32%;
    padding: 20px;
}
  @media (max-width: 800px)  {
    width: 40%;
        padding: 20px;

}
 /* @media (max-width: 800px)  {
    width: 200px;
     height: 140px;
} */
  @media (max-width: 570px)  {
    width: 70%;
        padding: 20px;

}

`

export const  H1 = styled.h1 `
margin: 10px 0;
font-size: 25px;
color: white;

`

export const Button = styled.button `
width: 250px;
height: 48px;
background-color:#FF8C00 ;
border: none;
font-size: 22px;
font-weight: 700;
margin-top: 50px;
margin-bottom: 30px;
cursor: pointer;
border-radius: 10px;

&:hover{
    opacity: 0.8;
    }
    
    &:hover{
    opacity: 0.5;}
    


`

export const  Image = styled.img `
width: 100px;
margin: 20px;


`
export const Order = styled.li`
margin-top: 10px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF;
border-radius: 10px;
width: 300px;
height: 100px;
border: none;
outline: none;


.buttons{
    display: flex;
    flex-direction: column;
    gap: 15px;

}
.paragrafos{
    display:flex;
    flex-direction: column;


}
.trash{
    width: 20px;
}
.status{
    width: 25px;
}
p{
    font-size: 14px;
font-weight: 600;
line-height: 22.13px;
font-style: normal;
color: black;

}

button{
    background: none;
    border: none;
    cursor: pointer;
}

  @media (max-width: 1286px)  {
    width: 250px;
     height: 130px;
}
  @media (max-width: 1191px)  {
    width: 300px;
     height: 140px;
}
  @media (max-width: 800px)  {
    width: 240px;
     height: 140px;
}
  @media (max-width: 570px)  {
    width:230px ;
     height: 150px;
}
 `




