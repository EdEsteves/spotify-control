module.exports = function(app){
  var api = app.api.controle;
  app.get('/v1/controle', api.controle);
};