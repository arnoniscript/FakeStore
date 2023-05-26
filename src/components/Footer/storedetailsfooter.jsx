import "./styles.css";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiTwitterLine,
} from "react-icons/ri";

//função que retorna o copyright com o ano atualizado
const year = new Date().getFullYear();

const StoreDetailsFooter = ({
  storeName,
  description,
  facebookLink,
  instagramLink,
  twitterLink,
}) => {
  return (
    <div className="footer-storedatails">
      <div className="logofooter">{storeName}</div>

      <div className="storedescription">{description}</div>
      <div className="socialNetworksLogo">
        <a href={facebookLink}>
          <RiFacebookCircleLine />
        </a>
        <a href={instagramLink}>
          <RiInstagramLine />
        </a>
        <a href={twitterLink}>
          <RiTwitterLine />
        </a>
      </div>
      <div className="copyright">
        {year} All right reserved term of use {storeName}
      </div>
    </div>
  );
};

export default StoreDetailsFooter;
