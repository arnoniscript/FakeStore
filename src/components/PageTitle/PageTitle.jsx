import "./styles.css";

const PageTitle = ({ title, subtitle }) => {
  return (
    <div className="title-container">
      <div className="pagetitle">{title}</div>
      <div className="pagesubtitle">{subtitle}</div>
    </div>
  );
};

export default PageTitle;
