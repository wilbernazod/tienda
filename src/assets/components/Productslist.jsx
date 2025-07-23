import usefetchProducts from "../../hooks/usefetchProducts";
import React from 'react'

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
    <div>
        {products.map((product)=>{
           return (
            <div key={product.id}>
                <p>{product.title}</p>
                <img src={product.image} alt="" />
                <p>{product.category}</p>
            </div>
           )
        })}
    </div>
  )
}

export default Productslist