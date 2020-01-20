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

  var api = {}

  api.controle = function(req, res){
    var controle = [
      {
        "nome": "Camile",
        "meses": [
          {"janeiro": "pago"},
          {"fevereiro": "pago"},
          {"março": "pago"},
          {"abril": "pago"},
          {"maio": "pago"},
          {"junho": ""},
          {"julho": ""},
          {"agosto": ""},
          {"setembro": ""},
          {"outubro": ""},
          {"novembro": ""},
          {"dezembro": ""}
        ],
        "status": true,
        "avatar": 'avatar-camile.jpg'
      },
      {
        "nome": "Eduardo",
        "meses": [
          {"janeiro": "pago"},
          {"fevereiro": "pago"},
          {"março": "pago"},
          {"abril": "pago"},
          {"maio": "pago"},
          {"junho": "pago"},
          {"julho": "pago"},
          {"agosto": "pago"},
          {"setembro": "pago"},
          {"outubro": "pago"},
          {"novembro": "pago"},
          {"dezembro": "pago"}
        ],
        "status": true,
        "avatar": 'avatar-eduardo.jpg'
      },
      {
        "nome": "Géssica",
        "meses": [
          {"janeiro": ""},
          {"fevereiro": ""},
          {"março": ""},
          {"abril": ""},
          {"maio": ""},
          {"junho": ""},
          {"julho": ""},
          {"agosto": ""},
          {"setembro": ""},
          {"outubro": ""},
          {"novembro": ""},
          {"dezembro": ""}
        ],
        "status": true,
        "avatar": 'avatar-gessica.jpg'
      },
      {
        "nome": "Gisele",
        "meses": [
          {"janeiro": "pago"},
          {"fevereiro": "pago"},
          {"março": "pago"},
          {"abril": "pago"},
          {"maio": "pago"},
          {"junho": "pago"},
          {"julho": "pago"},
          {"agosto": "pago"},
          {"setembro": "pago"},
          {"outubro": "pago"},
          {"novembro": "pago"},
          {"dezembro": "pago"}
        ],
        "status": "Em dia",
        "avatar": 'avatar-gisele.jpg'
      },
      {
        "nome": "Iago",
        "meses": [
          {"janeiro": ""},
          {"fevereiro": ""},
          {"março": ""},
          {"abril": ""},
          {"maio": ""},
          {"junho": ""},
          {"julho": ""},
          {"agosto": ""},
          {"setembro": ""},
          {"outubro": ""},
          {"novembro": ""},
          {"dezembro": ""}
        ],
        "status": true,
        "avatar": 'avatar-iago.jpg'
      },
      {
        "nome": "Victor",
        "meses": [
          {"janeiro": ""},
          {"fevereiro": ""},
          {"março": ""},
          {"abril": ""},
          {"maio": ""},
          {"junho": ""},
          {"julho": ""},
          {"agosto": ""},
          {"setembro": ""},
          {"outubro": ""},
          {"novembro": ""},
          {"dezembro": ""}
        ],
        "status": true,
        "avatar": 'avatar-victor.jpg'
      },
    ]

    res.json(controle);

  };

  app.get('/v1/controle', api.controle);

  // consign()
  //   .include('api')
  //   .then('routes')
  //   .into(app);

  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  });

  return app
}