const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors())

// Serve static files from the "static" directory
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'about.html'));
});
app.post('/name', (req, res) => {
    const name = req.body.name;
    return res.send(`Hello, ${name}`);


});

app.listen(3001, () => {
    console.log('Server is running on port 30001');
});

module.exports = app;