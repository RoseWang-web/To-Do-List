const express = require('express');
const path = require('path');
const tasksRouter = require('./api/danielcamargo/tasks');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
// Register tasks router
app.use('/api/danielcamargo/tasks', tasksRouter);
// Start server
app.listen(3000, () => {
    console.log('Server Started');
});
