const Banner = ({ text, width, height, backgroundColor }) => {
  return (
    <div
      className="banner"
      style={{ width: width, height: height, backgroundColor: backgroundColor }}
    >
      <div className="banner-text">{text}</div>
    </div>
  );
};

export default Banner;
