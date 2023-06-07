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
    { id: 5, name: "some name 5", done: true },
];

// Search
router.get('/', function (req, res) {
    console.log("Handling request to search tasks");
    // Return all tasks
    res.send(tasks);
});
// /tasks/1
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
/////////////////////////////////////////
// Create a new task
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
        id: (new Date()).getTime(),
        name: name,
        done: done
    };
  
    // Add the new task to the tasks array
    tasks.push(newTask);
  
    // Respond with the new task
    res.status(201).send(newTask);
});

router.delete('/:id', function (req, res) {
    console.log("Handling request to delete a task");
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex === -1) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    // Remove task
    tasks.splice(taskIndex, 1)
    res.status(204).send();
});

// Update an existing task
router.put('/:id', function (req, res) {
    console.log("Handling request to update a task");

    const id = parseInt(req.params.id);
    const { done } = req.body;

    // Input validation
    if (typeof done !== "boolean") {
        res.status(400).send({ message: "Invalid task data" });
        return;
    }

    // Find the task
    const task = tasks.find(task => task.id === id);

    // Update the task
    if (task) {
        task.done = done;
        res.send(task);
    } else {
        res.status(404).send({ message: "Task not found" });
    }
});
