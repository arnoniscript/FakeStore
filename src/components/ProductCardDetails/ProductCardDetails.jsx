import "./styles.css";
const ProductCardDetails = ({ imageURL, title, price }) => {
  return (
    <div className="container-ProductCardDetails">
      <div className="Showitem">
        <img src={imageURL}></img>
      </div>
      <div className="detailsProductDetails">
        <p>{title}</p>
        <p>R$: {price}</p>
      </div>
    </div>
  );
};

export default ProductCardDetails;
