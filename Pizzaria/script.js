var crustType = ['deep dish', 'thin', 'hand tossed']
var suaceType = ['marinara', 'traditional', 'alfrado']
var cheeses = ['mozzarella' , 'feta', 'mixed']
var toppings = ['pepperoni', 'sausage' ,'mushrooms', 'olives', 'onions', 'pinapple', 'ham', 'peppers' ]



function pizzaOven(crustType, suaceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.suaceType = suaceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}  
var p1 = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);
console.log(p1);

var p2 = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);
console.log(p2);

var p3 = pizzaOven('deep dish', 'marinara', ['mozzarella'], ['pepperoni', 'olives']);
console.log(p3);

var p4 = pizzaOven('thin', 'alfrado', ['mozzarella', 'feta'], ['pinapple', 'olives', 'onions']);
console.log(p4);

// needed to follow the video to understand the random part. still need more practice

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustType);
    pizza.suaceType = randomPick(suaceType);
    pizza.cheeses = [];
    pizza.toppings = [];

    for(var i = 0; i<randomRange(5,1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i = 0; i<randomRange(5,1); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());