import "./InfoCards.css";

const InfoCards = ({ title, children }) => {
  return (
    <section className="features" id="servicios">
      <div className="featuresTitle">
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  )
};

export default InfoCards;