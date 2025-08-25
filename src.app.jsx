import React, { useState } from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import { products, coupons } from './data'

export default function App() {
  const [cart, setCart] = useState([])
  const [coupon, setCoupon] = useState(null)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const applyCoupon = (code) => {
    if (coupons[code]) {
      setCoupon(coupons[code])
      alert(`Coupon applied: ${code}`)
    } else {
      alert("Invalid coupon")
    }
  }

  return (
    <div style={{ display: "flex", gap: "2rem", padding: "2rem" }}>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cart={cart} coupon={coupon} applyCoupon={applyCoupon} />
    </div>
  )
}