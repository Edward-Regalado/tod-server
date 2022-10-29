const express = require('express');
const port = process.env.PORT || 3001;
require('dotenv').config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello world');
    console.log('hello world');
});

function start(port) {
    app.listen(port, () => console.log(`Server listening on port ${port}`));
}

module.exports = {
    app,
    start,
}