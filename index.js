var Dog = require('./Dog');

var myDog = new Dog('Bon');

var tom = {
	name: 'Tom'
};

myDog.eat(tom);
console.log(myDog.stomach);