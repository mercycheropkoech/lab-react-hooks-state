import React from 'react'

export const sampleProducts = [
  { id: 1, name: 'Milk', category: 'Dairy' },
  { id: 2, name: 'Cheese', category: 'Dairy' },
  { id: 3, name: 'Apple', category: 'Fruits' },
  { id: 4, name: 'Banana', category: 'Fruits' }
]

const ProductList = ({ category, addToCart }) => {
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter(
          (product) => product.category === category
        )

  return (
    <div>
      <h2>Products</h2>

      {filteredProducts.length === 0 ? (
        <p>No products available</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>

            <button
              data-testid={`product-${product.id}`}
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))
      )}
    </div>
  )
}

export default ProductList
