const express = require("express");
var path = require('path');
const helpers = require('./utils/helpers');
const app = express();
const port = 3000;
const data = require('./data.json');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", async (req, res) => {
  const results = await helpers.runTests(data);

  res.write('<head> <meta charset="UTF-8"> <link href="css/style.css" type="text/css"  rel="stylesheet"></head>');
  res.write('<div><h1>Pa11y runned Successfully!</h1> </br> <p>Results:</p></div>')
  if (results && results.length > 0) {
    results.forEach(r => {
      res.write(helpers.generateTableMarkup(r));
    })
  }
  res.end();
});

app.listen(port, () => {
  console.log(`Pa11y Test Server app listening on port ${port}!`);
});