
// Based one:
// https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const tasks = [
    { id: 1, name: "Rose Wang", done: true },
    { id: 2, name: "Samel Hung", done: true },
    { id: 3, name: "Daniel Chen", done: false },
    { id: 4, name: "South Zhun", done: false },
];

// Search
router.get('/', function (req, res) {
    console.log("Handling request to search tasks");
    // Return all tasks
    res.send(tasks);
});

router.get('/:id', function (req, res) {
    console.log("find task by ID", req.params.id);
    const result = tasks.find(function (task) {
        return task.id == req.params.id;
    })
    if (!result) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    // Return all tasks
    res.send(result);
});

router.delete('/:id', function (req, res) {
    console.log("delete task by ID", req.params.id);
    const result = tasks.findIndex(function (task) {
        return task.id == req.params.id;
    })
    if (result=== -1) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    // remove the tasks
    tasks.splice(result,1);
    res.status(204).send();
});

router.post('/', function(req, res) {
  const { name, done } = req.body;

  if (!name) {
    res.status(400).send({ message: 'Task name is required.' });
    return;
  }

  const newTask = {
    id: tasks.length + 1,
    name: name,
    done: done || false
  };

  tasks.push(newTask);

  res.status(201).send(newTask);
});


module.exports = router;
