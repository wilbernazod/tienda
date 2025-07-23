import usefetchProducts from "../../hooks/usefetchProducts";
import React from 'react'
import ProductCard from "./ProductCard";

const Productslist = () => {
    const {data: products,loading,error} = usefetchProducts("https://fakestoreapi.com/products");

    if (loading){
        return (
            <div>Cargando Productos</div>
        )
    }
    if(error){
        return(
            <div>Error: {error.message}</div>
        )
    }
  return (
    <ProductCard/>
  )
}

export default Productslist

//Crear un componente que se llame ProductCard.jsx
//Este componente recibe cada producto y lo muestra en una tarjeta