const HaberCard = ({ haber }) => {
  return (
    <div
      className="haber-card"
      style={{
        border: "1px solid red",
        background: "white",
        color: "black",
        borderRadius: "16px",
        padding: "16px",
      }}
    >
      <img src={haber.image} alt={haber.title} style={{
        borderRadius: "16px",
      }} />
      <h3>{haber.title}</h3>
      <p>{haber.description}</p>
    </div>
  );
};

export default HaberCard;
