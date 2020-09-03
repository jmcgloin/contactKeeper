const express = require('express');

const app = express();

const PORT = process.env.PORT || 3030;

app.get('/', (req, res) => res.json({msg: 'Welcome to the API'}))

app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));