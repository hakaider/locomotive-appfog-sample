var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var PagesController = new Controller();

PagesController.main = function() {
  this.title = 'Locomotive'
  this.render();
}

PagesController.xyz = function() {
  	console.log('xyz is called.');
  	this.title = 'Test'
  	this.render();
}


module.exports = PagesController;
