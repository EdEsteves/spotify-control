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

module.exports = api;