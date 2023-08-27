const fs = require('fs');
const router = require('express').Router();
const uuid = require('uuid');
const db = require('../db/db.json');

router.get('/', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));
        res.send(data);
    })
})

router.post('/', (req, res) => {
    let newNote = {
        id: uuid(),
        title: req.body.title,
        text: req.body.title
    }
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;
        let newData = JSON.parse(data);

        newData.push(newNote);
        console.log(newData)
        fs.writeFile('../db/db.json', JSON.stringify(newData), (err) => {
            if (err) throw err;
            res.send('note successfully added');
        })
    })
});

module.exports = router;