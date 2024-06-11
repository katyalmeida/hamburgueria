import React, {useState, useRef} from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import Burguer from '../assets/burguer.png';

import { Container, ContainerItens, H1, Input, Button, Image, InputLabel} from './styles';







function App() {
  


  const [orders, setOrders] = useState([]);
  const inputOrder = useRef()
  const inputName = useRef()
  const history = useHistory()

  async function addNewOrder(){

const {data:newOrder} = await axios.post("https://hamburgueria-backend.vercel.app/order",{
lista: inputOrder.current.value,
clienteName: inputName.current.value,
price: "R$10,00",
status:"Em preparação",

  });
  
  setOrders([...orders, newOrder])

  history.push("/order")




  }
  return (
  <Container>
  <ContainerItens>

    <Image src={Burguer} alt="logo"/>
    <H1>Faça seu Pedido!</H1>
   
    <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Escreva aqui"/>

        <InputLabel>Nome</InputLabel>

        <Input ref={inputName} placeholder="Escreva aqui"/>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

  </ContainerItens>
  
  </Container>
  );
}

export default App;
