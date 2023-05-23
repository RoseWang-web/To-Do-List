// Based one:
// https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const tasks = [
    { id: 1, name: "some name 1", done: false },
    { id: 2, name: "some name 2", done: false },
    { id: 3, name: "some name 3", done: false },
    { id: 4, name: "some name 4", done: false },
];

// GET /tasks
router.get('/', function (req, res) {
    console.log("Handling request to search tasks");
    // Return all tasks
    res.send(tasks);
});

// GET /tasks/:id
router.get('/:id', function (req, res) {
    console.log("Handling request to search tasks");
    const id = parseInt(req.params.id);
    const result = tasks.filter((tasks) => tasks.id === id);
    if (result.length === 0) {
        res.status(404).send({ message: "Task not found" });
        return;
    }
    // Return the task
    res.send(filteredTasks[0]);
});

// DELETE /tasks/:id
router.delete('/:id', function (req, res) {

    console.log("Handling request to delete a task");
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) {
        res.status(404).send({ message: "Task not found" });
        return;
    }
    // Remove the task from the tasks array
    tasks.splice(index, 1);
    res.status(204).send();
});

module.exports = router;
