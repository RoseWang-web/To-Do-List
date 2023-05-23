// Based one:
// https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const tasks = [
    { id: 1, name: "some name 1", done: false },
    { id: 2, name: "some name 2", done: false },
];


//
// Search
router.get('/', function (req, res) {
    console.log("Handling request to search tasks"); //---
    // Return all tasks
    res.send(tasks);
});

// tasks/1
router.get('/:id', function(req, res) {
    console.log("Handling request to search tasks");
    const id = parseInt(req.params.id);
    const result = tasks.filter((task) => task.id === id);
    if(result.length === 0){
        res.status(404).send({ message: "Not found"});
        return;
    }
    res.send(result[0]);
});

module.exports = router;
