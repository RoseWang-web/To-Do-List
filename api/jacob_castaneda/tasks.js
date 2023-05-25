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
//task
router.get('/', function (req,res) {
    console.log ('Handling request to list all task');
    return res.send(tasks);
});

router.get('/:id', function (req,res) {
    console.log ('Handling request to find task: ', req.params.id);
    const id = parseInt(req.params.id);
    const result = tasks.filter ( ( tasks)=> task.id ===id);
    if(!result.length){
        res.status(404).send({message:"not found"});
        return;
    }//end of if statement

    // Return the task
    res.send(result[0]);

});

module.exports= router;

 




