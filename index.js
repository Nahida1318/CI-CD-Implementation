const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Export both `app` and `server` for testing
module.exports = app;
