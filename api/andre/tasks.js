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
    { id: 5, name: "some name 5", done: false },
];

// GET /tasks
router.get('/', function (req, res) {
    console.log("Handling request to list all tasks");
    // Return all tasks
    res.send(tasks);
});

// GET /tasks/5
router.get('/:id', function (req, res) {
    console.log("find task by ID", req.params.id);
        const result = tasks.find((task) => task.id == req.params.id)


    if (!result) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    // Return all tasks
    res.send(result);
});

// DELETE /tasks/:id
router.delete('/:id', function (req, res) {
    console.log("Handling request to delete a task by id: ", req.params.id);
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
        res.status(404).send({ message: "Not found" });
        return;
    }

    // Remove the task from the array
    tasks.splice(taskIndex, 1);

    // Return success status
    res.status(204).send();
});

module.exports = router;
