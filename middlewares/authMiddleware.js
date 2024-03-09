const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  const secret = process.env.JWT_SECRET || 'your_secret_key';

  if (!token) {
    return res.status(401).json({ message: 'Access token is missing, please navigate to the login page.' });
  }

  jwt.verify(token, secret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: 'Your session has expired, save your work elsewhere and please navigate to the login page.' });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
