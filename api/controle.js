var api = {}

api.controle = function(req, res){
  var controle = [
    {
      "nome": "camile",
      "meses": [
        {
          "janeiro": "pago"
        },
        {
          "fevereiro": "pago"
        },
        {
          "março": "pago"
        },
        {
          "abril": "pago"
        },
        {
          "maio": "pago"
        },
        {
          "junho": ""
        },
        {
          "julho": ""
        },
        {
          "agosto": ""
        },
        {
          "setembro": ""
        },
        {
          "outubro": ""
        },
        {
          "novembro": ""
        },
        {
          "dezembro": ""
        }
      ],
      "status": true
    },
    {
      "nome": "eduardo",
      "meses": [
        {
          "janeiro": "pago"
        },
        {
          "fevereiro": "pago"
        },
        {
          "março": "pago"
        },
        {
          "abril": "pago"
        },
        {
          "maio": "pago"
        },
        {
          "junho": "pago"
        },
        {
          "julho": "pago"
        },
        {
          "agosto": "pago"
        },
        {
          "setembro": "pago"
        },
        {
          "outubro": "pago"
        },
        {
          "novembro": "pago"
        },
        {
          "dezembro": "pago"
        }
      ],
      "status": true
    },
    {
      "nome": "gessica",
      "meses": [
        {
          "janeiro": ""
        },
        {
          "fevereiro": ""
        },
        {
          "março": ""
        },
        {
          "abril": ""
        },
        {
          "maio": ""
        },
        {
          "junho": ""
        },
        {
          "julho": ""
        },
        {
          "agosto": ""
        },
        {
          "setembro": ""
        },
        {
          "outubro": ""
        },
        {
          "novembro": ""
        },
        {
          "dezembro": ""
        }
      ],
      "status": true
    },
    {
      "nome": "gisele",
      "meses": [
        {
          "janeiro": "pago"
        },
        {
          "fevereiro": "pago"
        },
        {
          "março": "pago"
        },
        {
          "abril": "pago"
        },
        {
          "maio": "pago"
        },
        {
          "junho": "pago"
        },
        {
          "julho": "pago"
        },
        {
          "agosto": "pago"
        },
        {
          "setembro": "pago"
        },
        {
          "outubro": "pago"
        },
        {
          "novembro": "pago"
        },
        {
          "dezembro": "pago"
        }
      ],
      "status": true,
      "avatar": "avatar-gisele.jpg"
    },
    {
      "nome": "iago",
      "meses": [
        {
          "janeiro": ""
        },
        {
          "fevereiro": ""
        },
        {
          "março": ""
        },
        {
          "abril": ""
        },
        {
          "maio": ""
        },
        {
          "junho": ""
        },
        {
          "julho": ""
        },
        {
          "agosto": ""
        },
        {
          "setembro": ""
        },
        {
          "outubro": ""
        },
        {
          "novembro": ""
        },
        {
          "dezembro": ""
        }
      ],
      "status": true
    },
    {
      "nome": "victor",
      "meses": [
        {
          "janeiro": ""
        },
        {
          "fevereiro": ""
        },
        {
          "março": ""
        },
        {
          "abril": ""
        },
        {
          "maio": ""
        },
        {
          "junho": ""
        },
        {
          "julho": ""
        },
        {
          "agosto": ""
        },
        {
          "setembro": ""
        },
        {
          "outubro": ""
        },
        {
          "novembro": ""
        },
        {
          "dezembro": ""
        }
      ],
      "status": true
    }
  ]

  res.json(controle);

};

module.exports = api;