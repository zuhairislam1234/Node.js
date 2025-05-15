const express = require('express');
const path = require('path');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, 'index.html'));
});
app.post('/submit', (req, res) => {
const input = req.body.userInput;
res.send(`You entered: ${input}`);
});
app.listen(3000);
