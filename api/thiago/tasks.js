// https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const tasks = [
    { id: 1, name: "Week 1", done: true },
    { id: 2, name: "Week 2", done: false },
    { id: 3, name: "Week 3", done: false },
    { id: 4, name: "Week 4", done: false },
    { id: 5, name: "Week 5", done: false },
];

// GET /api/thiago/tasks/
router.get('/', function (req, res) {
    console.log("Handling request to search tasks");
    // Return all tasks
    res.send(tasks);
});

// GET /api/thiago/tasks/id={id}
router.get('/:id', function (req, res) {
    console.log("Handling request to find a task by id: ", req.params.id);
    const id = parseInt(req.params.id);
    const filteredTasks = tasks.filter((task) => task.id === id);
    if (filteredTasks.length === 0) {
        res.status(404).send({ message: "Not found" });
        return;
    }

    // Return task
    res.send(filteredTasks[0]);
});

module.exports = router;
