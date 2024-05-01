import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2';
import Pedidos from '../assets/pedidos.png';
import Trash from '../assets/Trash.png';
import Check from '../assets/check.png';


import { Container, ContainerItens, Image, H1, Button, Order } from './styles';





    function Orders() {
const [orders, setOrders] = useState([]);
const history = useHistory()

useEffect(() =>{
async function fetchOrders (){
    const {data:newOrders} = await axios.get("https://hamburgueria-backend.vercel.app/order");

    setOrders (newOrders)
}
fetchOrders()
    }, [])

    async function updateOrder(orderId) {
        await axios.patch(`https://hamburgueria-backend.vercel.app/order/${orderId}`)

        const { data: newStatus } = await axios.get("https://hamburgueria-backend.vercel.app/order")
        setOrders(newStatus);
    }
    function update(orderId){
        Swal.fire({
            title: 'Deseja finalizar o pedido?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'red',
            confirmButtonText: 'SIM',
            cancelButtonText: 'NÃO'
        }).then((result) => {
            if(result.isConfirmed){
            
                Swal.fire(
                    'Pronto!',
                    'Pedido Finalizado!',
                    'success'
                )
                updateOrder(orderId);
            }}
    )};

    async function deleteOrder(orderId) {
        await axios.delete(`https://hamburgueria-backend.vercel.app/order/${orderId}`)
        const newOrders = orders.filter(order => order.id !== orderId);
        
        setOrders(newOrders);
        Swal.fire({
            icon: 'success',
            title: 'Pedido Deletado com Sucesso',
            color: 'black',
            showConfirmButton: false,
            timer: 2500
          })
      }
      
  function goBackPage(){
      history.push("/");
  }
     


    return (
<Container>

    <ContainerItens>
    <Image src={Pedidos} alt="logo"/>
    <H1>Pedidos</H1>
    <ul>
                    {orders.map(order => (

                        <Order key={order.id}>
                            <div className="paragrafos"> <p>{order.lista}</p>
                             <p>{order.price}</p>
                             <p> {order.clienteName}</p>
                             <p>{order.status}</p>
                             </div>
                           
                            <div className="buttons">
                            <button onClick={() => deleteOrder(order.id)}>
                                <img src={Trash} alt="lata-de-lixo" title="Apagar Pedido" className="thash"/>
                            </button>
                            <button onClick={() => update(order.id)}> 
                            <img alt='status' title="Finalizar Pedido" src={Check} className="status"/>
                            </button>
                            </div>
                        
                             </Order>


                    ))
                    }
                </ul>

    <Button onClick={goBackPage}>Voltar</Button>

    </ContainerItens>

</Container>
    );
}

export default Orders;