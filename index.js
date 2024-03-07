// Importing Core Libraries
require('dotenv').config();
const express = require('express');

// Importing Extra Libraries
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');

// Importing server files after this line
const configRoutes = require('./routes/configRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

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

app.use('/api/configurations', configRoutes);

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
