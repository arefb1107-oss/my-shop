export const products = [
  { id: 1, name: "T-shirt", price: 2500 },
  { id: 2, name: "Sneakers", price: 12000 },
  { id: 3, name: "Cap", price: 1500 },
]

export const coupons = {
  SAVE10: (subtotal) => subtotal * 0.1,
  WELCOME500: () => 500,
}