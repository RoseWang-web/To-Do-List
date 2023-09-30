const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Register tasks router

const roseTasksRouter = require('./api/Rose/tasks');
app.use('/api/rose/tasks', roseTasksRouter);


// Start server
app.listen(3000, () => {
    console.log('Server Started');
});
