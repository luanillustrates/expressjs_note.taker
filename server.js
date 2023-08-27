const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, () =>
    console.log(`server listening at http://localhost:${PORT}`)
);