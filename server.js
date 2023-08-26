const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));

// express.js route for default endpoints
app.get('/', (req, res) => res.send('navigate to home page'));

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`server listening at http://localhost:${PORT}`)
);