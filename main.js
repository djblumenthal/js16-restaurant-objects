var FoodItem = function (name, calories, vegan, glutenFree, citrusFree){
	this.name = name,
	this.calories = calories,
	this.vegan = vegan,
	this.glutenFree = glutenFree,
	this.citrusFree = citrusFree,
	this.toString = function(){
		return console.log(this.name +' '+  this.calories +' '+ this.vegan +' '+ this.glutenFree +' '+ this.citrusFree);
	}
};

var egg = new FoodItem('egg', 180, false, true, true);
var apple = new FoodItem('apple', 80, true, true, true);
var hamburger = new FoodItem('hamburger', 600, false, false, true);

egg.toString();
apple.toString();
hamburger.toString();

var Drink = function (name, description, price, ingredients){
	this.name = name,
	this.description = description,
	this.price = price,
	this.ingredients = ingredients
}

var Plate = function (name, description, price, ingredients){
	this.name = name,
	this.description = description,
	this.price = price,
	this.ingredients = ingredients
}

var Order = function (plates){
	this.plates = plates
}

var Menu = function (plates){
	this.plates = plates
}

var Restaurant = function (name, description, menu){
	this.name = name,
	this.description = description,
	this.menu = menu
}

var Customer = function (dietaryPreference) {
	this.dietaryPreference = dietaryPreference
}

// Drink instances
var appleJuice = new Drink ('apple juice', 'juiced apples', 2.00, [apple]);
var proteinShake = new Drink ('protein shake', 'hamburger and egg shake', 7.00, [hamburger, egg]);

// plate instances

var appleBurger = new Plate ('apple burger', 'apple with a burger in it!', 10.00, [apple, hamburger]);
var eggBurger = new Plate ('egg burger', 'hamburger with an egg in it (burger came first)', 8.00, [hamburger, egg]);

var order1 = new Order ([appleBurger, eggBurger, appleJuice]);
var menu1 = new Menu ([appleJuice, proteinShake, appleBurger, eggBurger]);

var restaurant1 = new Restaurant ('Apple Burgers and More', 'We sell the ORIGINAL apple burger, eggs, and notorious shakes!', menu1);

var customer1 = new Customer ('glutenFree, citrusFree');
var customer2 = new Customer ('vegan');

