import "./styles.css";
const cardBestSelling = ({ imageURL, title, price }) => {
  return (
    <div className="container-ProductCardDetails">
      <div className="showitem">
        <img src={imageURL}></img>
      </div>
      <div className="itemname">
        <p>{title}</p>  </div>
        <div className="itemprice">
        <p>R$: {price}</p>
      </div>
    </div>
  );
};

export default cardBestSelling;
