require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const controllers = require('./app/controllers/index');
const RetroBot = require('./app/services/retroBot');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', controllers.index);

app.post('/test', function(req, res) {
  console.log(req.body)
  // RetroBot.postToChannel('random', 'hello, world! :wave:')
});

app.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});
