const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

// create routes for public folder
app.use(express.static(path.join(__dirname, 'public')));

// middleware for post/put requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// route paths
const noteRoutes = require('./routes/noteRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

app.use(noteRoutes);
app.use(htmlRoutes);


app.listen(PORT, () =>
    console.log(`server listening at http://localhost:${PORT}`)
);