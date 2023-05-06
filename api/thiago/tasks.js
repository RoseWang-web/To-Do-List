// https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const tasks = [
    { id: 1, name: "Week 1", done: false },
    { id: 2, name: "Week 2", done: false },
    { id: 3, name: "Week 3", done: false },
    { id: 4, name: "Week 4", done: false },
];

// GET /api/thiago/tasks/
router.get('/', function (req, res) {
    console.log("Handling request to search tasks");
    // Return all tasks
    res.send(tasks);
});

// GET /api/thiago/tasks/id={id}
router.get('/:id', function (req, res) {
    console.log("Handling request to search tasks");
    const id = parseInt(req.params.id);
    const result = tasks.filter((task) => task.id === id);
    if (result.length === 0){
        res.status(404).send({ message: "Not found"});
        return;
    }
    // Return all tasks
    res.send(result[0]);
});

module.exports = router;
