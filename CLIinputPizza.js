//to run this, first run: npm install readline-sync
const readline = require('readline-sync');

let noOfAvailablePizza = 100;
let isPizzaAvailable = true;
let orderCount = 0; // Track the number of orders

while (isPizzaAvailable) {

console.log(`\n --* ${noOfAvailablePizza} pizzas are remaining *--`);

//Read input from command line and convert it to a number
let order = parseInt(readline.question("How many pizzas would you like to order?    "));

//Validation:Check if input is a valid number and greater than 0
if (isNaN(order) || order <=0) {
    console.log("Please enter a valid number of pizzas.");
    continue;
}

//Check if we have enough pizza to fulfill the order
if (order>noOfAvailablePizza) {
    console.log(`Sorry , we only have ${noOfAvailablePizza} left. So, we will give you ${noOfAvailablePizza} pizza only`);
    order = noOfAvailablePizza; //cap the order to remaining stock
}

//Reduce stock and increment order counter
noOfAvailablePizza = noOfAvailablePizza - order;
orderCount++;

//Stop the loop if sold out
if (noOfAvailablePizza <= 0) {
    isPizzaAvailable = false;
    console.log(`\nAll pizzas are sold out. Thank you for your order!`);
}
}


console.log(`Total orders fulfilled today: ${orderCount}`);