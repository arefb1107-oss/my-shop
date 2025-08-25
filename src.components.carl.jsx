import React, { useState } from 'react'

export default function Cart({ cart, coupon, applyCoupon }) {
  const [code, setCode] = useState("")
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0)
  const discount = coupon ? coupon(subtotal) : 0
  const total = subtotal - discount

  return (
    <div style={{ flex: 1 }}>
      <h2>Cart</h2>
      {cart.length === 0 && <p>No items yet</p>}
      <ul>
        {cart.map((item, i) => (
          <li key={i}>{item.name} - {item.price} DZD</li>
        ))}
      </ul>
      <hr />
      <p>Subtotal: {subtotal} DZD</p>
      <p>Discount: {discount} DZD</p>
      <p><b>Total: {total} DZD</b></p>
      <div>
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Coupon code" />
        <button onClick={() => applyCoupon(code)}>Apply</button>
      </div>
    </div>
  )
}