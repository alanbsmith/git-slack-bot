require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const controllers = require('./app/controllers/index');
const GitBot = require('./app/services/gitBot');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', controllers.index);

app.get('/test', function(req, res) {
  GitBot.postToChannel('random', 'hello, world!')
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
