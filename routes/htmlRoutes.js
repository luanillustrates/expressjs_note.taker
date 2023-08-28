const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// route to return notes.html
router.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// route to return index.html
router.get('*', (req, res) => 
    res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router;