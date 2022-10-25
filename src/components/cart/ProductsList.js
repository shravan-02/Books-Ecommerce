import Product from "./Product";

const ProductsList = ({products, addToCart}) => {
  console.log(products)
  return (
    <>
      <h1 className="title">All Books - Add to cart here </h1>
      <div className="product-list">
        {products.map(product =>
          <div key={product.data.id}>
            <Product key={product.data.id} product={product.data} addToCart={() => addToCart(product.data)}></Product>
          </div>
          )}
      </div>
    </>
  )
}
export default ProductsList;
