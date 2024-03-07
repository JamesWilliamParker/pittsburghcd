function isValidFileNameMiddleware(req, res, next) {
  const { name } = req.params;

  if (/^[a-zA-Z0-9_]+$/.test(name)) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(400).json({ message: 'Invalid file name.' });
  }
}

function isValidPostFileNameMiddleware(req, res, next) {
  const { name } = req.body;

  if (/^[a-zA-Z0-9_]+$/.test(name)) {
    next(); // Proceed to the next middleware or route handler
  } else {
    res.status(400).json({ message: 'Invalid file name.' });
  }
}

module.exports = { isValidFileNameMiddleware, isValidPostFileNameMiddleware };
