import React from 'react'

export default function ProductList({ products, addToCart }) {
  return (
    <div style={{ flex: 1 }}>
      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ccc", padding: "1rem", marginBottom: "1rem" }}>
          <h3>{p.name}</h3>
          <p>💵 {p.price} DZD</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  )
}