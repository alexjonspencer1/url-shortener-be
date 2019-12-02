const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: true,
  credentials: true
}));

app.use(require('cookie-parser')());
app.use(express.json());

app.use(express.static('public'));

app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/urls', require('./routes/urls'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
