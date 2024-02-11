const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// A simple route for the root path to check if the server is running
app.get('/', (req, res) => {
  res.send('Server is running. Access static files in the /public directory.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});