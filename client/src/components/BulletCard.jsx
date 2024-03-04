const BulletCard = ({ leftHeader, centerHeader, rightHeader, fontSize, color, marginLeft, marginRight, marginTop, lineColor }) => {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    position: 'relative',
    listStyleType: 'none', // Remove default list styles
    paddingLeft: '0', // Remove default left padding for list items
  };

  const headerStyle = {
    fontSize: fontSize,
    color: color,
  };

  const lineStyleTop = {
    position: 'absolute',
    top: '-50px', // Adjust position of line above
    left: '0',
    width: '100%',
    borderTop: '15px solid ' + lineColor, // Style of line above thickness
  };

  const lineStyleBottom = {
    position: 'absolute',
    bottom: '-50px', // Adjust position of line below
    left: '0',
    width: '100%',
    borderTop: '15px solid ' + lineColor, // Style of line below thickness
  };

  const bulletStyle = {
    paddingRight: '10px', // Adjust spacing between bullet and text
  };

  return (
    <div style={{ position: 'relative' }}>
      <div style={lineStyleTop}></div>
      <ul style={cardStyle}>
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
    </div>
  );
};

export default BulletCard;
