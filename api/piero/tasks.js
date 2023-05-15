// Based one:
// https://expressjs.com/en/guide/routing.html
const express = require('express');
const router = express.Router();

/** @type{{id: number, name: string, done: boolean}[]} */
const tasks = [{ id: 1, name: "some name", done: false }];

// Search
router.get('/', function (req, res) {
    console.log("Handling request to search tasks");
    // Return all tasks
    res.send(tasks);
});

module.exports = router;
