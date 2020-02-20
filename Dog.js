var chalk = require('chalk');

function Dog(name) {
	this.name = name;
	this.stomach = [];
}

Dog.prototype.sayHi = function() {
	console.log('Hi my name is',chalk.blue(this.name));
};
Dog.prototype.eat = function(item) {
	this.stomach.push(item);
};
module.exports = Dog;