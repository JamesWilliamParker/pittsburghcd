const express = require("express");
const path = require("path");

const server = express();

// Serve the static files from the dist folder
server.use(express.static(path.join(__dirname, "client/dist")));

// Server code starts here:

// TODO: login route here
// TODO: blog route here




// Do not add Server code below this line
// Handle all other routes by serving the index.html file
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
});

// Start the server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
