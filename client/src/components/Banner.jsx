const Banner = ({ text, width, backgroundColor }) => {
  return (
    <div className="banner" style={{ width: width, backgroundColor: backgroundColor }}>
      <div className="banner-text">{text}</div>
    </div>
  );
};

export default Banner;
