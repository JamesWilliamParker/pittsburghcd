const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const authenticateToken = require('../middlewares/authMiddleware');

const secret = process.env.JWT_SECRET || 'your_secret_key';
const router = express.Router();

// Load user data from JSON file
let userData = [];
try {
  userData = JSON.parse(fs.readFileSync(path.join(__dirname, '../storage/auth.json'), 'utf8'));
} catch (err) {
  console.error('Error reading auth.json:', err);
}

// Route for user registration
router.post('/register', authenticateToken, async (req, res) => {
  const { username, password } = req.body;

  // Check if username or password is missing
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Check if username is already registered
  if (userData.find(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  try {
    // Encrypt password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user object
    const newUser = {
      username,
      password: hashedPassword,
    };

    // Add user to userData array
    userData.push(newUser);

    // Write updated userData to auth.json file
    fs.writeFileSync(path.join(__dirname, '../storage/auth.json'), JSON.stringify(userData));

    // Generate JWT
    const token = jwt.sign({ username }, secret, { expiresIn: '1h' });

    // Return JWT
    res.json({ token });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Check if username or password is missing
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  // Find user by username
  const user = userData.find(user => user.username === username);
  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  try {
    // Check if password matches
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // Generate JWT
    const token = jwt.sign({ username }, secret, { expiresIn: '1h' });

    // Return JWT
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
