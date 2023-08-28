const express = require('express');
const app = express();
const path = require('path');
const noteAPI = require('./routes/htmlRoutes')
const PORT = process.env.PORT || 3001;

// create routes for public folder
app.use(express.static('public'));

// middleware for post/put requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', noteAPI);

// route paths
const noteRoutes = require('./routes/noteRoutes.js');
const htmlRoutes = require('./routes/htmlRoutes.js');

app.use(noteRoutes);
app.use(htmlRoutes);


app.listen(PORT, () =>
    console.log(`server listening at http://localhost:${PORT}`)
);