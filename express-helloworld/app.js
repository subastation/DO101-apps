var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Ready for version 5\n');
});

app.listen(8080, function () {
  console.log('Bound 8080/tcp');
});

