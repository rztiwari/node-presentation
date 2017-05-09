// Bring in our dependencies
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//  Connect all our routes to our application
// app.use('/public', express.static('public'))
app.use('/public', express.static(path.join(__dirname, 'public')))

// Turn on that server!
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
