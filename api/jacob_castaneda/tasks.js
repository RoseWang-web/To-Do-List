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

router.get('/', function (req, res) {
    console.log("Handling request to search tasks");
    res.send(tasks);
});

// Search
router.get('/:id', function (req, res) {
    console.log("Handling request to search tasks");
    const id = parseInt(req.params.id);
    const filteredTasks = tasks.find((task) => task.id === id);
    if (filteredTasks.length === 0) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    // Return all tasks

    res.send(filteredTasks);
});

router.delete('/:id', function (req, res) {
    console.log("Handling request to search tasks");
    const id = parseInt(req.params.id);
    const filteredTasks = tasks.findIndex((task) => task.id === id);
    if (filteredTasks.length === -1) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    // Remove task
    tasks.splice(filteredTasks, 1)
    res.status(204).send();
});

router.post('/', function (req, res) {
    console.log("Handling request to create a task");

    const { name, done } = req.body;

    // Input validation
    if (!name || typeof done !== "boolean") {
        res.status(400).send({ message: "Invalid task data" });
        return;
    }

    // Create a new task object
    const newTask = {
        id: tasks.length + 1, // Generate a unique ID based on the length of the tasks array
        name: name,
        done: done
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    res.status(201).send(newTask);
});

router.put('/:id', function (req, res) {
    console.log("Handling request to update a task");
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((task) => task.id === id);
    if (index === -1) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    const { done } = req.body;
    if (typeof done !== "boolean") {
        res.status(400).send({ message: "Invalid task data" });
        return;
    }
    tasks[index].done = done;
    res.send(tasks[index]);
});

module.exports = router;