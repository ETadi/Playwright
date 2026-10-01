
const number = 1234;

// check if number is greater than 0
if (number > 0) {
    // the body of the if statement
    console.log("it's a positive number");
}

console.log("nice number");

if (condition) {
    
} else {
    
}

//==============================================

let score = 45;

// check if score is fifty or greater
if (score >= 50) {
    console.log("You passed the examination.");
}
else {
    console.log("You are not qualified the examination.");
}
    
//==============================================

let rating = 5;

// rating of 2 or below is bad
// rating of 4 or above is good
// else, the rating is average

if (rating <= 2) {
    console.log("Bad rating");
}
else if (rating >= 4) {
    console.log("Good rating!");
}
else {
    console.log("Average rating");
}

//==============================================

let avg = 82
let maths = 79;
let science = 90;

//condition01- Avg mark should be greater than 80
//condition02 - maths & science marks should be greater than 80

if(avg>80){

    if(maths>80 && science>80){
        console.log("student is allocated to group-1");
    }
    else{
        console.log("student is allocated to group-2");
    } 
}
else{
    console.log("student is not eligible for group-1 or group-2");
}


//===============

let grade = 'C';

switch (grade) {
  case 'A':{
    console.log('fantastic')
    break;
  }
  case 'B':{
  console.log('great work, keep it up')
        break;
  }
   case 'C':{
  console.log('Good work, keep it up')
        break;
  }
   case 'D':{
  console.log('Need focus')
        break;
  }
   case 'E':{
  console.log('need to improve')
        break;
  }
  default:{
    console.log('invalid grade value')
    break;
  }

}
