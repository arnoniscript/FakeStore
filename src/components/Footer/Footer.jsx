import "./styles.css";
import StoreDetailsFooter from "./storedetailsfooter";
import FooterSection from "./footersection";

const Footer = () => {
  return (
    <div className="footer">
      <StoreDetailsFooter
        storeName="GREENMIND"
        description="We help you find your dream plant"
        facebookLink="https://facebook.com"
        instagramLink="https://instagram.com"
        twitterLink="https://twitter.com"
      ></StoreDetailsFooter>
      <FooterSection
        section="Information"
        firstlink="About"
        secondlink="Product"
        thirdlink="Blog"
      ></FooterSection>
      <FooterSection
        section="Company"
        firstlink="About"
        secondlink="Product"
        thirdlink="Blog"
      ></FooterSection>
      <FooterSection
        section="Contact"
        firstlink="About"
        secondlink="Product"
        thirdlink="Blog"
      ></FooterSection>
    </div>
  );
};

export default Footer;
