// Based one:
// https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const task = [
    { id: 1, name: "week1", done: false },
    { id: 2, name: "week2", done: false },
    { id: 3, name: "week3", done: false },
    { id: 4, name: "week4", done: false },
];

// Search
router.get('/', function (req, res) {
    console.log("Handling request to search tasks");
    // Return all tasks
    res.send(tasks);
});

router.get('/:id', function (req, res) {
    console.log("Handling request to find a task by id: ", req.params.id);
    const id = parseInt(req.params.id);
    const filteredTasks = tasks.filter((task) => task.id === id);
    if (filteredTasks.length === 0) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    // Return the task
    res.send(filteredTasks[0]);
});

module.exports = router;