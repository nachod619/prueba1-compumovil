import React, { useEffect, useState } from 'react';
import { Loading } from './Loading';
import { getProducts } from "../services/fakestore.service";
import { Error } from './Error';

interface Product {
    id: number
    title: string
    price: number
  }

const ProductList = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [productsData, setProductsData] = useState<Product[]>([])
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")


  useEffect(() => {
    setLoading(true)
    getProducts()
      .then((data) => {
        setProductsData(data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        setError(true)
      })
  }, [])

  if (loading) {
    return <Loading />
}

if (loading == false && error == true) {
    return <Error />
}else{

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
}

  var sortedProducts: any[] = []

  sortedProducts = [...productsData].sort((x, y) => {
    return sortOrder === 'asc' ? x.price - y.price : y.price - x.price;
  })
    
  return (
      <div>
          <button onClick={toggleSortOrder}>
              {sortOrder === "asc" ? "Orden Descendente" : "Orden Ascendente"}
          </button>
           <div>
              {sortedProducts.map((productsData) => (
                <div>
                  <h2>Title: {productsData.title}</h2>
                  <img
                      src={productsData.image}
                      style={{width: '20%', height: '20%', objectFit: 'cover'}}
                  />
                  <h2>Price: {productsData.price}</h2> 
                </div>
              ))}
          </div>
      </div>
  )
}
}

export default ProductList;


