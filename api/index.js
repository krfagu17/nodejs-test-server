const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'));
});

app.listen(3001, () => {
    console.log('Server is running on port 30001');
});

module.exports = app;