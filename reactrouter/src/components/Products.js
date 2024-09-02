import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export const Products = () => {
  return (
    <>
     <input text="products" placeholder='Search products'/>
     <nav>
        <Link to='featured'>Feature</Link>
        <div>
        <Link to='new'>New</Link>
        </div>
     </nav>
     <Outlet/>
    </>
  )
}
