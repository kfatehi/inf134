#!/usr/bin/env node
const express = require('express');
const http = require('http');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

http.createServer(app).listen(PORT, (err) => {
  if ( err ) throw err;
  console.log('listening on port', PORT);
});
