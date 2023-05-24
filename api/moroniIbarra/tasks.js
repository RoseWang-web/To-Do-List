// tasks.js

const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const tasks = [
  { id: 1, name: "some name 1", done: false },
  { id: 2, name: "some name 2", done: false },
];

// GET /tasks
router.get('/', function (req, res) {
  console.log("Handling request to search tasks");
  res.send(tasks);
});

// GET /tasks/:id
router.get('/:id', function (req, res) {
  console.log("Handling request to search tasks");
  const id = parseInt(req.params.id);
  const result = tasks.filter((task) => task.id === id);
  if (result.length === 0) {
    res.status(404).send({ message: "Not found" });
    return;
  }
  res.send(result[0]);
});

// POST /tasks (Create a task)
router.post('/', function (req, res) {
  console.log("Handling request to create a task");
  const { name, done } = req.body;

  // Validate input
  if (!name || typeof done !== 'boolean') {
    res.status(400).send({ message: "Invalid task data" });
    return;
  }

  // Generate a new ID for the task
  const id = tasks.length + 1;

  // Create the new task object
  const newTask = { id, name, done };

  // Add the task to the tasks array
  tasks.push(newTask);

  // Send the newly created task as the response
  res.status(201).send(newTask);
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
  tasks.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
