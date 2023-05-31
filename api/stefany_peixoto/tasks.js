// Based one:
// https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const tasks = [
    { id: 1, name: "Rosee", done: true },
    { id: 2, name: "some name 2", done: true },
    { id: 3, name: "some name 3", done: true },
    { id: 4, name: "some name 4", done: true },
];

// Search
router.get('/', function (req, res) {
    console.log("Handling request to search tasks");
    // Return all tasks
    res.send(tasks);
});

router.get('/:id', function (req, res) {
    console.log("find task by ID", req.params.id);
    const result = tasks.find(function(task) {
        return task.id == req.params.id;
    })
    if (!result) {
        res.status(404).send({message: "Not Found"});
        return;
    }
    res.send(result);
})

router.delete('/:id', function (req, res) {
    console.log("delete task by ID", req.params.id);
    const result = tasks.findIndex(function (task) {
        return task.id == req.params.id;
    })

    if (result === -1) {
        res.status(404).send({ message: "Not found" });
        return;
    }
    tasks.splice(result,1)
    res.status(204).send();
});

module.exports = router;
