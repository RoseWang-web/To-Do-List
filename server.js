const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// Register tasks router
const danielCamargoTasksRouter = require('./api/danielcamargo/tasks');
app.use('/api/danielcamargo/tasks', danielCamargoTasksRouter);

const moroniTasksRouter = require('./api/moroniIbarra/tasks');
app.use('/api/moroniIbarra/tasks', moroniTasksRouter);

const stefanyTasksRouter = require('./api/stefany_peixoto/tasks');
app.use('/api/stefany_peixoto/tasks', stefanyTasksRouter);

// Start server
app.listen(3000, () => {
    console.log('Server Started');
});
