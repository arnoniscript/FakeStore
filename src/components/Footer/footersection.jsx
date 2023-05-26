import "./styles.css";
const FooterSection = ({ section, firstlink, secondlink, thirdlink }) => {
  return (
    <div className="footer-section">
      <a href="https://rethink.dev">{section}</a>
      <a href="https://rethink.dev">{firstlink}</a>
      <a href="https://rethink.dev">{secondlink}</a>
      <a href="https://rethink.dev">{thirdlink}</a>
    </div>
  );
};

export default FooterSection;
