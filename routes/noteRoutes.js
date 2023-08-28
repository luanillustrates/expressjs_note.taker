const fs = require('fs');
const router = require('express').Router();
const path = require('path');
const uuid = require('uuid');

router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'));
});

router.get('/', (req, res) => {
    readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('./notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    
    let newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid(),
    };
    // push note to db.json
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);

  });

module.exports = router;