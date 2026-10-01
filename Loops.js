
//Print even numbers from 0 to 10

for (let i=0 ;i<=10; i=i+2 ) {
    console.log(i);
}

//When a variable is declared with let or const inside a loop, it will only be visible within the loop.
//==============================================

//Print even number from 0 to 10
let j =0;

while (j<=10) {
    console.log(j);
    j=j+2;
}

//assume you are running a pizza shop
//you are planning to sell 100 pizza today
//each customer can order one or many pizza which reduced from the available count
//how many orders we will get?

let noOfAvaialblePizza=100;
let isPizzaAvaialble=true; //boolean flag

while(isPizzaAvaialble){

  console.log("pls enter order");
  var order = input("no of pizza")
  noOfAvaialblePizza = noOfAvaialblePizza-order;

  if(noOfAvaialblePizza<=0){
    isPizzaAvaialble = false;
  }

}

// //==============================================

let k=200;
do {
    console.log(k);
    k=k+2;
}
while (k<=10);

//The do while runs at least once, even if the condition is false from the start.
//==============================================

switch (15) {
  case 1:
    day = "Sunday";
    break;
  case 2:
    day = "Monday";
    break;
  case 3:
     day = "Tuesday";
    break;
  case 4:
    day = "Wednesday";
    break;
  case 5:
    day = "Thursday";
    break;
  case 6:
    day = "Friday";
    break;
  case 7:
    day = "Saturday";
  default : 
    console.log("invalid input")
}

console.log(day)

//==============================================

