const express = require('express');
const { add, divide } = require('./math');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('MCP Demo App Running 🚀');
});

app.get('/add', (req, res) => {
    const result = add(5, 3);
    res.json({ result });
});

app.get('/divide', (req, res) => {
    const result = divide(10, 0); // intentional issue (Sonar will catch)
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});