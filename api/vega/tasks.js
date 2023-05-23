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
// Search

router.get('/', function (req, res) {
    res.send(tasks);
});

//tasks/1
router.get('/:id', function (req, res) {
    console.log("Handling request to search tasks");
    const id = parseInt(req.params.id)
    const result = tasks.filter((task) => task.id === id);
    if (!result.length){
        res.status(404).send({message: "Not found"});
        return;
    }
    // Return all tasks
    res.send(result[0]);
    
});

router.delete('/:id', function (req, res) {
    console.log("delete task by ID", req.params.id);
    const id = parseInt(req.params.id)
    const result = tasks.findIndex(function (task) {
        return task.id === id;
    })
    
    if (result === -1) {
        res.status(404).send({message: "Not found"});
        return;
    }
    //Remove the tasks
    tasks.splice(result,1)
    res.status(204).send();
});

module.exports = router; 
