const BulletCard = ({ leftHeader, centerHeader, rightHeader, fontSize, color, lineColor }) => {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem',
    listStyleType: 'none', // Remove default list styles
    paddingLeft: '0', // Remove default left padding for list items
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const headerStyle = {
    fontSize: fontSize,
    color: color,
  };

  const lineStyleTop = {
    width: '100%',
    borderTop: '15px solid ' + lineColor, // Style of line above thickness
  };

  const lineStyleBottom = {
    width: '100%',
    borderTop: '15px solid ' + lineColor, // Style of line below thickness
  };

  const bulletStyle = {
    paddingRight: '10px', // Adjust spacing between bullet and text
  };

  return (
    <>
      <div style={lineStyleTop}></div>
      <ul className="gallery-card">
        <li style={headerStyle}>
          <span style={bulletStyle}>•</span>
          {leftHeader}
        </li>
        <li style={headerStyle}>
          <span style={bulletStyle}>•</span>
          {centerHeader}
        </li>
        <li style={headerStyle}>
          <span style={bulletStyle}>•</span>
          {rightHeader}
        </li>
      </ul>
      <div style={lineStyleBottom}></div>
    </>
  );
};

export default BulletCard;
