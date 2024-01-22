import "./Product.css";
// eslint-disable-next-line react/prop-types
const Product = ({product}) => {
  // eslint-disable-next-line react/prop-types
  const {img, name, seller, ratings, price} = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturar:{seller}</p>
        <p>Rating {ratings} stars</p>
      </div>
      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
