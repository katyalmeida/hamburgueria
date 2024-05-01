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
margin-top: 25px;
height: 1000px;


box-shadow: 0px 2px 5px  0px white, 0px 2px 10px #FF8C00 ; 


`

export const  H1 = styled.h1 `
margin: 13px 0;
font-size: 32px;
color: white;

`

export const Button = styled.button `
width: 342px;
height: 58px;
background-color:#FF8C00 ;
border: none;
font-size: 22px;
font-weight: 1000;
margin-top: 140px;
margin-bottom: 60px;
cursor: pointer;

&:hover{
    opacity: 0.8;
    }
    
    &:hover{
    opacity: 0.5;}
    


`

export const  Image = styled.img `
width: 180px;
margin: 30px;


`
export const Order = styled.li`
margin-top: 25px;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
box-shadow: 0px 4px 4px 0px #00000040;
background: #FFFFFF;
border-radius: 14px;
width: 352px;
height: 130px;
border: none;
outline: none;


.buttons{
    display: flex;
    flex-direction: column;
    gap: 20px;

}
.paragrafos{
    display:flex;
    flex-direction: column;


}
.trash{
    width: 25px;
}
.status{
    width: 30px;
}
p{
    font-size: 20px;
font-weight: 600;
line-height: 28.13px;
font-style: normal;
color: black;

}

button{
    background: none;
    border: none;
    cursor: pointer;
}


 `




