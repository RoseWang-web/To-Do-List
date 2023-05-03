const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Register tasks router
const brunaDumerTasksRouter = require('./api/bruna_dumer/tasks');
app.use('/api/bruna_dumer/tasks', brunaDumerTasksRouter);

const danielCamargoTasksRouter = require('./api/danielcamargo/tasks');
app.use('/api/danielcamargo/tasks', danielCamargoTasksRouter);

const moroniTasksRouter = require('./api/moroniIbarra/tasks');
app.use('/api/moroniIbarra/tasks', moroniTasksRouter);

const roseTasksRouter = require('./api/Rose/tasks');
app.use('/api/rose/tasks', roseTasksRouter);

const stefanyTasksRouter = require('./api/stefany_peixoto/tasks');
app.use('/api/stefany_peixoto/tasks', stefanyTasksRouter);

const fernandoTasksRouter = require('./api/fernandomesser/tasks');
app.use('/api/fernandomesser/tasks', fernandoTasksRouter);

const danielTasksRouter = require('./api/daniel/tasks');
app.use('/api/daniel/tasks', danielTasksRouter);

const pedroTasksRouter = require('./api/pedroPerillo/tasks');
app.use('/api/pedroPerillo/tasks', pedroTasksRouter);

const pieroTasksRouter = require('./api/pieroTinoco/tasks');
app.use('/api/pieroTinoco/tasks', pieroTinocoTasksRouter);

// Start server
app.listen(3000, () => {
    console.log('Server Started');
});
