import React from 'react';
import {useNavigate} from 'react-router-dom'

export const OrderSummary = () => {
    const Navigate = useNavigate();
  return (
    <>
     <h1> Order is placed successfully</h1>
     <button onClick={()=>{Navigate(-1)}}>Goback</button>
    </>
  )
}
