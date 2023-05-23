// Based one:
// https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const tasks = [
    { id: 1, name: "some name 1", done: false },
    { id: 2, name: "some name 2", done: false },
    { id: 3, name: "some name 3", done: false },
    { id: 4, name: "some name 4", done: false }
];


//
// Search
router.get('/', function (req, res) {
    console.log("Handling request to search tasks"); //---
    // Return all tasks
    res.send(tasks);
});

// tasks/1
router.get('/:id', function (req, res) {
    console.log("Handling request to search tasks");
    const id = parseInt(req.params.id);
    const result = tasks.find((task) => task.id === id);
    if (result) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    res.send(result);
});


router.delete('/', function (req, res) {
    console.log("delete task by ID", req.params.id);
    const result = task.id == req.params.id
});

console.log("Hello World");
async function fetchAllTasks() {
    const response = await fetch("/api/jacob_castaneda/tasks");
    const tasks = await response.json();
    console.log("Number of tasks found: ", tasks.length);
    return tasks;
}


module.exports = router;
