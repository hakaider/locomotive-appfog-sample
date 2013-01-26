var locomotive = require('locomotive'),
  Controller = locomotive.Controller;

var PhotosController = new Controller();

PhotosController.main = function() {
  this.title = 'Locomotive'
  this.render();
}

PhotosController.xyz = function() {
  console.log('xyz is called.');
  this.title = 'Test'
  this.render();
}

PhotosController.index = function() {
  console.log('index is called.');

  this.title = 'JSON Test'

  var list = {};
  var resStatus = {
    code: '200',
    message: 'OK',
    version: "1.0"
  };

  var payload = {
    status: resStatus,
    data: list
  };

  this.res.json(payload);
}

module.exports = PhotosController;