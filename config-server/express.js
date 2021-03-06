const express = require('express');
const favicon = require('express-favicon');
const consign = require('consign');
const path = require('path');
const app = express();

module.exports = function(){
  app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')));
  // the __dirname is the current directory from where the script is running
  app.use(express.static(__dirname));
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('/ping', function (req, res) {
    return res.send('pong');
  });

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

  // consign()
  //   .include('api')
  //   .then('routes')
  //   .into(app);

  return app
}