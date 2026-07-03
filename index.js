const express = require('express');
const app = express();

app.get('/api/weather-history', (req, res) => {
    res.json([
        { city: 'Delhi', temp: 38 },
        { city: 'London', temp: 15 },
    ]);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});