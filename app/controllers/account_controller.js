var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var AccountController = new Controller();

AccountController.main = function() {
  this.title = 'Locomotive'
  this.render();
}

AccountController.xyz = function() {
  	console.log('xyz is called.');
  	this.title = 'Test'
  	this.render();
}


module.exports = AccountController;
