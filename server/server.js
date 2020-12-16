const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const app = express();

app.use(morgan('dev'));

app.get('/homes/:id', (req, res) => {
  res.sendFile(path.resolve('public', 'index.html'))
})

app.get('/loaderio-da7946e2a69313aab2d42525b10122a0', (req, res) => {
  res.status(200).send('loaderio-da7946e2a69313aab2d42525b10122a0');
});

app.use(express.static(PUBLIC_DIR));

// Handling asset requests for webpack bundles by passing off requests to the bundles router
app.use('/bundles', router.bundles);
// Handling AJAX requests to the API by passing off requests to the api router
app.use('/api', router.api);

module.exports = app;
