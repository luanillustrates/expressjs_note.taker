const fs = require('fs');
const router = require('express').Router();
const uniqid = require('uniqid');

// fetch post route
router.get('/api/notes', (req, res) => {
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;
        console.log(JSON.parse(data));

        res.send(data)
    })
})

// write post route
router.post('/api/notes', (req, res) => {
    let newNote = {
        id: uniqid(),
        title: req.body.title,
        text: req.body.text
    };
    
    
    fs.readFile('../db/db.json', (err, data) => {
        if (err) throw err;

        let newData = JSON.parse(data);

        newData.push(newNote);
        console.log(newData)

        fs.writeFile('../db/db.json', JSON.stringify(newData), (err) => {
            if (err) throw err;

            res.send('successfully added');
        })
    });
});

// delete post route
router.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    fs.readFile('../db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {

            const result = json.filter((notes) => notes.id !== noteId);

            fs.writeFile('../db/db.json', result);

            res.json(`Item ${noteId} deleted`);
        });
});

module.exports = router;