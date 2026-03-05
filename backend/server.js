// Server Configuration
const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});