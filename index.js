// Importing Core Libraries
require('dotenv').config();
const express = require('express');

// Importing Extra Libraries
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

// Importing server files after this line
const configRoutes = require('./routes/configRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// CSP Middleware
const setCSPHeaders = (req, res, next) => {
  res.setHeader('Content-Security-Policy', "default-src 'self' https://docs.google.com https://www.youtube.com 'unsafe-inline' 'unsafe-eval'; script-src 'self' https://www.youtube.com; img-src 'self' * data:;");
  next();
};

// Configure CORS to allow same-origin requests only (To protect things a bit only requests from the same application host are allowed)
const corsOptions = {
  origin: process.env.CORS_URL ? new RegExp(`/^${process.env.CORS_URL}:\d+$/`) : /^http:\/\/localhost:\d+$/, // Change this to match your own host
};

// Serve static React build files
app.use(express.static(path.join(__dirname, 'client/dist')));

// Some basic security measures using helmet library and applying cors configurations.
app.use(helmet());
app.use(cors(corsOptions));

// Middleware to parse JSON request bodies
app.use(express.json());

app.use('/api', authRoutes);

app.use('/api/configurations', configRoutes);

// Use CSP middleware
app.use(setCSPHeaders);

// Handle non-API routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist', 'index.html'));
});

// CATCH ALL MIDDLEWARE FOR ERRORS
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
