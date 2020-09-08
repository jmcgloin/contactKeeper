// const express = require('express');
import express from 'express';

import users from './routes/users.js';
import contacts from './routes/contacts.js';
import auth from './routes/auth.js';
import info from './routes/info.js';

const app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => res.json({msg: 'Welcome to the API'}))

app.use('/api/users', users);
app.use('/api/contacts', contacts);
app.use('/api/auth', auth);
app.use('/api/info', info);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));