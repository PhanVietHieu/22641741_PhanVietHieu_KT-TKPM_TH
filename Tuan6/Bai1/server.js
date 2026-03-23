const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Docker Multi-stage Success!</h1>');
});

app.listen(3000, () => {
    console.log('App is running on http://localhost:3000');
});